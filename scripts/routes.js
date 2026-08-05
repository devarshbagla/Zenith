import { companies } from '../src/data/companies/index.js'
import { INDUSTRIES } from '../src/lib/constants.js'
import { getCompaniesByIndustry } from '../src/data/companies/index.js'
import { slugify } from '../src/lib/format.js'
import { lessonThemes } from '../src/data/lessons.js'

export function getAllRoutes() {
  const routes = ['/', '/stories', '/industries', '/lessons', '/newsletter', '/newsletter/reset', '/about', '/404']

  for (const company of companies) {
    routes.push(`/stories/${company.slug}`)
  }

  for (const industry of INDUSTRIES) {
    if (getCompaniesByIndustry(industry).length > 0) {
      routes.push(`/industries/${slugify(industry)}`)
    }
  }

  for (const lesson of lessonThemes) {
    routes.push(`/lessons/${lesson.slug}`)
  }

  return routes
}
