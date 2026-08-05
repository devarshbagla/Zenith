export const lessonThemes = [
  {
    slug: 'radical-subtraction',
    title: 'Radical Subtraction',
    summary:
      'Cutting what a company does — products, brands, business units — can create more value than adding something new. The companies that recovered fastest often did so by deciding what to stop, not what to start.',
    companySlugs: ['apple', 'lego', 'ford', 'general-motors'],
  },
  {
    slug: 'stabilize-then-grow',
    title: 'Stabilize First, Then Grow',
    summary:
      'A turnaround has distinct phases. Stopping the immediate bleeding and building durable, compounding growth require different moves — and conflating them is a common reason recoveries stall.',
    companySlugs: ['netflix', 'apple', 'ibm', 'best-buy', 'xerox'],
  },
  {
    slug: 'public-accountability',
    title: 'Turn Public Failure Into Trust',
    summary:
      'Publicly admitting a well-documented failure, then fixing it visibly and quickly, can rebuild trust faster than quiet, incremental improvement — provided the fix is real, not just messaging.',
    companySlugs: ['dominos', 'netflix', 'starbucks', 'chipotle'],
  },
  {
    slug: 'outsider-leadership',
    title: 'The Outsider Advantage',
    summary:
      'Leaders recruited from outside a company, or outside its industry entirely, are repeatedly the ones willing to make the structurally necessary but politically difficult calls insiders avoid.',
    companySlugs: ['ibm', 'ford', 'lego', 'general-motors', 'best-buy', 'chrysler', 'chipotle'],
  },
  {
    slug: 'protect-the-constraint',
    title: 'Protect the Core Constraint',
    summary:
      'A product’s original limitations are often the actual source of its value. Companies that quietly abandoned their defining constraint, chasing short-term novelty, paid for it later.',
    companySlugs: ['lego', 'nintendo', 'burberry'],
  },
  {
    slug: 'own-dont-license',
    title: 'Own the Asset, Don’t Just Rent It',
    summary:
      'Licensing a valuable asset can prove its worth safely — but capturing its full value, and creative control over it, often requires the financial courage to own it outright instead.',
    companySlugs: ['marvel', 'adobe', 'microsoft'],
  },
]

export function getLessonBySlug(slug) {
  return lessonThemes.find((lesson) => lesson.slug === slug)
}

export function getLessonsForCompany(companySlug) {
  return lessonThemes.filter((lesson) => lesson.companySlugs.includes(companySlug))
}
