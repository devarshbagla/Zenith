import { useState } from 'react'
import { SITE } from '@/lib/constants'

const ICONS = {
  x: (
    <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.7L4.5 22H1.4l8.1-9.3L1 2h7.1l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
  ),
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.9-2.1 3.9-2.1 4.2 0 5 2.8 5 6.3V21h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />
  ),
  link: (
    <path d="M10.6 13.4a1 1 0 0 1 0-1.4l3-3a3 3 0 1 1 4.2 4.2l-1.6 1.6a1 1 0 1 1-1.4-1.4l1.6-1.6a1 1 0 1 0-1.4-1.4l-3 3a1 1 0 0 1-1.4 0Zm-4.2 4.2a3 3 0 0 1 0-4.2l1.6-1.6a1 1 0 1 1 1.4 1.4l-1.6 1.6a1 1 0 1 0 1.4 1.4l3-3a1 1 0 1 1 1.4 1.4l-3 3a3 3 0 0 1-4.2 0Z" />
  ),
}

function IconButton({ label, onClick, href, children }) {
  const classes =
    'flex h-10 w-10 items-center justify-center rounded-full border border-content/15 text-content-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-content/40 hover:text-content hover:shadow-sm'

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={classes}>
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          {children}
        </svg>
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} aria-label={label} className={classes}>
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        {children}
      </svg>
    </button>
  )
}

export default function ShareButtons({ title, path }) {
  const [copied, setCopied] = useState(false)
  const url = `${SITE.url}${path}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="font-sans text-xs uppercase tracking-wider text-content-tertiary">Share</span>
      <IconButton
        label="Share on X"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
      >
        {ICONS.x}
      </IconButton>
      <IconButton
        label="Share on LinkedIn"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
      >
        {ICONS.linkedin}
      </IconButton>
      <IconButton label={copied ? 'Link copied' : 'Copy link'} onClick={handleCopy}>
        {ICONS.link}
      </IconButton>
      <span aria-live="polite" className="sr-only">
        {copied ? 'Link copied to clipboard' : ''}
      </span>
    </div>
  )
}
