import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './lib/theme.jsx'
import App from './App.jsx'

const BOUNDARY = '<span id="ssr-body-boundary"'

export function render(url) {
  const fullHtml = renderToString(
    <StrictMode>
      <ThemeProvider>
        <HelmetProvider>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </ThemeProvider>
    </StrictMode>,
  )

  const boundaryIndex = fullHtml.indexOf(BOUNDARY)

  if (boundaryIndex === -1) {
    return { html: fullHtml, head: '' }
  }

  return {
    head: fullHtml.slice(0, boundaryIndex),
    html: fullHtml.slice(boundaryIndex),
  }
}
