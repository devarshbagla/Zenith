import { Link } from 'react-router-dom'
import { m, useReducedMotion } from 'framer-motion'
import Tag from '@/components/ui/Tag'
import NarrativeArc from '@/components/ui/NarrativeArc'
import { useTilt } from '@/hooks/useTilt'

export default function FeaturedStory({ company }) {
  const reduceMotion = useReducedMotion()
  const { ref, tiltProps } = useTilt({ max: 3 })

  return (
    <section aria-labelledby="featured-heading" className="border-b border-content/10">
      <div className="container-editorial py-20 sm:py-28">
        <p className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
          Featured Story
        </p>

        <m.div
          initial={reduceMotion ? undefined : { y: 18 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link ref={ref} to={`/stories/${company.slug}`} className="group mt-6 block">
            <m.div
              {...tiltProps}
              className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end"
            >
              <div>
                <Tag phase="turnaround">{company.industry}</Tag>
                <h2
                  id="featured-heading"
                  className="mt-5 font-display text-4xl font-medium leading-[1.05] text-content sm:text-5xl lg:text-6xl"
                >
                  {company.heroTitle}
                </h2>
                <p className="mt-5 max-w-xl font-serif text-lg leading-relaxed text-content-secondary">
                  {company.heroDeck}
                </p>
                <span className="link-underline mt-7 inline-flex items-center gap-2 font-sans text-sm font-medium text-content [background-size:100%_1px] group-hover:gap-3">
                  Read the full story
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>

              <div className="hidden lg:block">
                <NarrativeArc
                  timeline={company.timeline}
                  width={420}
                  height={160}
                  showEndDot
                  strokeWidth={2.5}
                  className="w-full text-zenith-500 dark:text-zenith-400"
                />
                <p className="mt-2 font-sans text-xs uppercase tracking-wider text-content-tertiary">
                  {company.turnaroundPeriod}
                </p>
              </div>
            </m.div>
          </Link>
        </m.div>
      </div>
    </section>
  )
}
