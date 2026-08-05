import { m, useReducedMotion } from 'framer-motion'
import WordmarkCard from '@/components/ui/WordmarkCard'
import Button from '@/components/ui/Button'
import { companies } from '@/data/companies'

export default function FeaturedCompanies() {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-labelledby="all-stories-heading" className="border-t border-content/10 bg-surface-sunken/50">
      <div className="container-editorial py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
              The Full Collection
            </p>
            <h2 id="all-stories-heading" className="mt-3 font-display text-3xl font-medium text-content sm:text-4xl">
              Every Turnaround
            </h2>
          </div>
          <Button to="/stories" variant="outline">
            View All Stories
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, index) => (
            <m.div
              key={company.slug}
              initial={reduceMotion ? undefined : { y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : (index % 3) * 0.08 }}
            >
              <WordmarkCard company={company} />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
