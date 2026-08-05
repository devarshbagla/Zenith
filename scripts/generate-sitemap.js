import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getAllRoutes } from './routes.js'
import { SITE } from '../src/lib/constants.js'
import { getCompanyBySlug } from '../src/data/companies/index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const lastmod = '2026-08-04'

function lastmodFor(route) {
  const match = route.match(/^\/stories\/([^/]+)$/)
  if (!match) return lastmod
  const company = getCompanyBySlug(match[1])
  return company?.publishedAt ?? lastmod
}

function imageEntryFor(route) {
  const match = route.match(/^\/stories\/([^/]+)$/)
  if (!match) return ''
  const company = getCompanyBySlug(match[1])
  if (!company) return ''

  return `
    <image:image>
      <image:loc>${SITE.url}/api/og?slug=${company.slug}</image:loc>
      <image:title>${company.heroTitle}</image:title>
    </image:image>`
}

// /newsletter/reset only makes sense with a one-time emailed token and is
// marked noindex on the page itself -- excluded here too so it never shows
// up as a "please index this" signal in the sitemap.
const sitemapRoutes = getAllRoutes().filter((route) => route !== '/404' && route !== '/newsletter/reset')

const urls = sitemapRoutes
  .map((route) => {
    const priority = route === '/' ? '1.0' : route.split('/').length > 2 ? '0.8' : '0.6'
    return `  <url>
    <loc>${SITE.url}${route}</loc>
    <lastmod>${lastmodFor(route)}</lastmod>
    <priority>${priority}</priority>${imageEntryFor(route)}
  </url>`
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
console.log(`Generated sitemap.xml with ${sitemapRoutes.length} URLs`)
