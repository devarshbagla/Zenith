import { Link } from 'react-router-dom'
import { m, useReducedMotion } from 'framer-motion'
import CompanyCover from '@/components/ui/CompanyCover'

export default function RelatedArticles({ companies }) {
  const reduceMotion = useReducedMotion()
  if (!companies.length) return null

  return (
    <section aria-labelledby="related-heading" className="border-t border-content/10 bg-surface-sunken/50">
      <div className="container-editorial py-16 sm:py-20">
        <h2 id="related-heading" className="font-display text-2xl font-medium text-content sm:text-3xl">
          Related Turnarounds
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, index) => (
            <m.div
              key={company.slug}
              initial={reduceMotion ? undefined : { y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : index * 0.06 }}
            >
              <Link to={`/stories/${company.slug}`} className="group block">
                <CompanyCover
                  company={company}
                  size="sm"
                  className="aspect-[4/3] rounded-sm shadow-sm transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:shadow-xl"
                />
                <p className="mt-4 font-sans text-xs uppercase tracking-wider text-content-tertiary">
                  {company.industry}
                </p>
                <h3 className="mt-1 font-display text-lg font-medium text-content">
                  {company.name}
                </h3>
                <p className="mt-1 font-serif text-sm text-content-secondary">{company.logline}</p>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
