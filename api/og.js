import { createElement as h } from 'react'
import { ImageResponse } from '@vercel/og'
import { getCompanyBySlug } from '../src/data/companies/index.js'
import { SITE } from '../src/lib/constants.js'

export const config = { runtime: 'edge' }

export default async function handler(request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const company = slug ? getCompanyBySlug(slug) : null

  const title = company ? company.name : SITE.name
  const subtitle = company ? company.logline : SITE.tagline
  const kicker = company ? company.industry : 'Business Turnaround Case Studies'
  const [from, via, to] = company
    ? [company.accent.from, company.accent.via, company.accent.to]
    : ['#0a0a0b', '#26262a', '#c9962a']

  return new ImageResponse(
    h(
      'div',
      {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          backgroundImage: `linear-gradient(155deg, ${from} 0%, ${via} 55%, ${to} 100%)`,
          padding: '72px',
          fontFamily: 'sans-serif',
        },
      },
      h(
        'div',
        {
          style: {
            display: 'flex',
            fontSize: 24,
            color: '#e8c468',
            textTransform: 'uppercase',
            letterSpacing: 4,
          },
        },
        kicker,
      ),
      h(
        'div',
        {
          style: {
            display: 'flex',
            fontSize: 68,
            color: '#fdfcfa',
            fontWeight: 600,
            marginTop: 24,
            lineHeight: 1.05,
            maxWidth: 1000,
          },
        },
        title,
      ),
      h(
        'div',
        {
          style: {
            display: 'flex',
            fontSize: 28,
            color: '#e2e2e4',
            marginTop: 24,
            maxWidth: 920,
            lineHeight: 1.4,
          },
        },
        subtitle,
      ),
      h(
        'div',
        {
          style: {
            display: 'flex',
            fontSize: 22,
            color: '#e8c468',
            marginTop: 48,
            textTransform: 'uppercase',
            letterSpacing: 3,
          },
        },
        'From Dust to Zenith',
      ),
    ),
    { width: 1200, height: 630 },
  )
}
