import { WORDS_PER_MINUTE } from './constants.js'

export function estimateReadingTime(wordCount) {
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))
}

export function countWords(sections) {
  return sections.reduce((total, section) => {
    const body = Array.isArray(section.paragraphs) ? section.paragraphs.join(' ') : ''
    return total + body.trim().split(/\s+/).filter(Boolean).length
  }, 0)
}

export function formatYear(year) {
  return String(year)
}

export function formatDate(dateString) {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(
    new Date(`${dateString}T00:00:00Z`),
  )
}

export function formatCurrency(value) {
  if (value == null) return null
  const abs = Math.abs(value)
  if (abs >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1).replace(/\.0$/, '')}B`
  if (abs >= 1_000_000) return `$${(value / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`
  return `$${value.toLocaleString('en-US')}`
}

export function slugify(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function smartQuotes(text) {
  return text
    .replace(/(^|[\s([{<])"/g, '$1“')
    .replace(/"/g, '”')
    .replace(/(^|[\s([{<])'/g, '$1‘')
    .replace(/'/g, '’')
}

export function deepSmartQuotes(value) {
  if (typeof value === 'string') return smartQuotes(value)
  if (Array.isArray(value)) return value.map(deepSmartQuotes)
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, val]) => [key, deepSmartQuotes(val)]),
    )
  }
  return value
}
