import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { render } from '../dist-ssr/entry-server.js'
import { getAllRoutes } from './routes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

for (const url of getAllRoutes()) {
  const { html, head } = render(url)

  const page = template
    .replace('<!--app-html-->', html)
    .replace('</head>', `${head}\n</head>`)

  const outDir = url === '/' ? distDir : path.join(distDir, url)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), page)
  console.log(`Prerendered ${url === '/' ? '/' : url + '/'}`)

  if (url === '/404') {
    fs.writeFileSync(path.join(distDir, '404.html'), page)
  }
}
