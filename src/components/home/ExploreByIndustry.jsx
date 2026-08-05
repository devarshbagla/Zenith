import { Link } from 'react-router-dom'
import { m, useReducedMotion } from 'framer-motion'
import { INDUSTRIES } from '@/lib/constants'
import { getCompaniesByIndustry } from '@/data/companies'
import { slugify } from '@/lib/format'

export default function ExploreByIndustry() {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-labelledby="industry-heading" className="border-t border-content/10 bg-surface-sunken/50">
      <div className="container-editorial py-20 sm:py-24">
        <h2 id="industry-heading" className="font-display text-3xl font-medium text-content sm:text-4xl">
          Explore by industry
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, index) => {
            const count = getCompaniesByIndustry(industry).length
            if (count === 0) return null
            return (
              <m.div
                key={industry}
                initial={reduceMotion ? undefined : { y: 12 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : (index % 4) * 0.05 }}
              >
                <Link
                  to={`/industries/${slugify(industry)}`}
                  className="group flex items-center justify-between border border-content/10 bg-surface-raised px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-content/25 hover:shadow-sm"
                >
                  <span className="font-sans text-sm font-medium text-content">{industry}</span>
                  <span className="font-sans text-xs text-content-tertiary">{count}</span>
                </Link>
              </m.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
