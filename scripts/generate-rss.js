import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { companies } from '../src/data/companies/index.js'
import { SITE } from '../src/lib/constants.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function toRfc822(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toUTCString()
}

const sortedCompanies = [...companies].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

const items = sortedCompanies
  .map((company) => {
    const url = `${SITE.url}/stories/${company.slug}`
    return `  <item>
    <title>${escapeXml(company.heroTitle)}</title>
    <link>${url}</link>
    <guid>${url}</guid>
    <pubDate>${toRfc822(company.publishedAt)}</pubDate>
    <description>${escapeXml(company.seo.metaDescription)}</description>
    <category>${escapeXml(company.industry)}</category>
  </item>`
  })
  .join('\n')

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${escapeXml(SITE.name)}</title>
  <link>${SITE.url}</link>
  <description>${escapeXml(SITE.description)}</description>
  <language>en-us</language>
  <lastBuildDate>${toRfc822(sortedCompanies[0].publishedAt)}</lastBuildDate>
${items}
</channel>
</rss>
`

fs.writeFileSync(path.join(distDir, 'feed.xml'), rss)
console.log(`Generated feed.xml with ${companies.length} items`)
