import { deepSmartQuotes, countWords } from '../../lib/format.js'
import { SITE } from '../../lib/constants.js'
import { apple } from './apple.js'
import { microsoft } from './microsoft.js'
import { ibm } from './ibm.js'
import { adobe } from './adobe.js'
import { netflix } from './netflix.js'
import { nintendo } from './nintendo.js'
import { marvel } from './marvel.js'
import { lego } from './lego.js'
import { starbucks } from './starbucks.js'
import { xerox } from './xerox.js'
import { dominos } from './dominos.js'
import { ford } from './ford.js'
import { chrysler } from './chrysler.js'
import { generalMotors } from './general-motors.js'
import { bestBuy } from './best-buy.js'
import { samsung } from './samsung.js'
import { burberry } from './burberry.js'
import { chipotle } from './chipotle.js'

export const companies = [
  apple,
  microsoft,
  ibm,
  adobe,
  netflix,
  nintendo,
  marvel,
  lego,
  starbucks,
  xerox,
  dominos,
  ford,
  chrysler,
  generalMotors,
  bestBuy,
  samsung,
  burberry,
  chipotle,
].map(deepSmartQuotes)

export function getCompanyBySlug(slug) {
  return companies.find((company) => company.slug === slug)
}

export function getRelatedCompanies(company, count = 3) {
  if (company.relatedSlugs?.length) {
    const related = company.relatedSlugs
      .map((slug) => getCompanyBySlug(slug))
      .filter(Boolean)
    if (related.length >= count) return related.slice(0, count)
  }
  return companies
    .filter((c) => c.slug !== company.slug && c.industry === company.industry)
    .slice(0, count)
}

export function getCompaniesByIndustry(industry) {
  return companies.filter((company) => company.industry === industry)
}

export function getAdjacentCompanies(slug) {
  const index = companies.findIndex((company) => company.slug === slug)
  if (index === -1) return { previous: null, next: null }
  const previous = companies[(index - 1 + companies.length) % companies.length]
  const next = companies[(index + 1) % companies.length]
  return { previous, next }
}

export function getFeaturedCompany() {
  return companies[0]
}

export function getSiteStats() {
  const industries = new Set(companies.map((company) => company.industry))
  const foundedYears = companies.map((company) => company.founded)
  const totalWords = companies.reduce((total, company) => total + countWords(company.sections), 0)

  return {
    companyCount: companies.length,
    industryCount: industries.size,
    yearsSpanned: SITE.founded - Math.min(...foundedYears),
    totalWords,
  }
}
