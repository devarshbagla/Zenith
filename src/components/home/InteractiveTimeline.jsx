import { Link } from 'react-router-dom'
import { m, useReducedMotion } from 'framer-motion'
import { companies } from '@/data/companies'

function firstYear(company) {
  return parseInt(company.timeline[0].year, 10)
}

export default function InteractiveTimeline() {
  const reduceMotion = useReducedMotion()
  const sorted = [...companies].sort((a, b) => firstYear(a) - firstYear(b))

  return (
    <section aria-labelledby="timeline-section-heading" className="container-editorial py-20 sm:py-24">
      <p className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
        A Century of Comebacks
      </p>
      <h2 id="timeline-section-heading" className="mt-3 max-w-2xl font-display text-3xl font-medium text-content sm:text-4xl">
        Every era has its collapse — and its comeback.
      </h2>

      <ol className="relative mt-14 space-y-0 border-l border-content/15 pl-8 sm:pl-10">
        {sorted.map((company, index) => (
          <m.li
            key={company.slug}
            initial={reduceMotion ? undefined : { x: -12 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : (index % 5) * 0.04 }}
            className="relative py-6"
          >
            <span
              className="absolute -left-[calc(2rem+5px)] top-9 h-2.5 w-2.5 rounded-full bg-zenith-500 ring-4 ring-surface sm:-left-[calc(2.5rem+5px)]"
              aria-hidden="true"
            />
            <Link to={`/stories/${company.slug}`} className="group flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-display text-2xl font-medium text-content-tertiary transition-colors group-hover:text-zenith-600 dark:group-hover:text-zenith-400">
                {firstYear(company)}
              </span>
              <span className="font-display text-xl font-medium text-content group-hover:underline group-hover:decoration-zenith-500 group-hover:decoration-2 group-hover:underline-offset-4">
                {company.name}
              </span>
              <span className="font-sans text-sm text-content-secondary">{company.industry}</span>
            </Link>
            <p className="mt-1.5 max-w-2xl font-serif text-sm leading-relaxed text-content-secondary">
              {company.logline}
            </p>
          </m.li>
        ))}
      </ol>
    </section>
  )
}
