const ALIASES = {
  apple: ['Apple'],
  microsoft: ['Microsoft'],
  ibm: ['IBM'],
  adobe: ['Adobe'],
  netflix: ['Netflix'],
  nintendo: ['Nintendo'],
  marvel: ['Marvel Entertainment', 'Marvel Studios', 'Marvel'],
  lego: ['LEGO'],
  starbucks: ['Starbucks'],
  dominos: ['Domino’s Pizza', 'Domino’s'],
  ford: ['Ford Motor Company', 'Ford'],
  'general-motors': ['General Motors'],
  'best-buy': ['Best Buy'],
  samsung: ['Samsung Electronics', 'Samsung'],
  burberry: ['Burberry'],
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const ALL_ALIASES = Object.entries(ALIASES)
  .flatMap(([slug, names]) => names.map((name) => ({ slug, name })))
  .sort((a, b) => b.name.length - a.name.length)

const MENTION_PATTERN = new RegExp(
  `\\b(${ALL_ALIASES.map((alias) => escapeRegExp(alias.name)).join('|')})\\b`,
  'g',
)

/**
 * Splits paragraph text into plain-text and linkable-mention tokens, linking
 * only the first mention of each other company across an entire article so
 * cross-references stay useful rather than turning into repeated link spam.
 */
export function tokenizeMentions(text, excludeSlug, linkedSlugs) {
  const tokens = []
  let lastIndex = 0
  let match

  MENTION_PATTERN.lastIndex = 0
  while ((match = MENTION_PATTERN.exec(text)) !== null) {
    const name = match[0]
    const alias = ALL_ALIASES.find((entry) => entry.name === name)
    const slug = alias?.slug

    if (slug && slug !== excludeSlug && !linkedSlugs.has(slug)) {
      if (match.index > lastIndex) {
        tokens.push({ text: text.slice(lastIndex, match.index) })
      }
      tokens.push({ text: name, slug })
      linkedSlugs.add(slug)
      lastIndex = match.index + name.length
    }
  }

  if (lastIndex < text.length) {
    tokens.push({ text: text.slice(lastIndex) })
  }

  return tokens.length ? tokens : [{ text }]
}
