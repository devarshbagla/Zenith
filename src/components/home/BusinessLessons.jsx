import { Link } from 'react-router-dom'
import { m, useReducedMotion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { lessonThemes } from '@/data/lessons'
import { getCompanyBySlug } from '@/data/companies'

export default function BusinessLessons() {
  const featured = lessonThemes.slice(0, 3)
  const reduceMotion = useReducedMotion()

  return (
    <section aria-labelledby="lessons-heading" className="container-editorial py-20 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
            Cross-Cutting Analysis
          </p>
          <h2 id="lessons-heading" className="mt-3 max-w-xl font-display text-3xl font-medium text-content sm:text-4xl">
            The patterns behind every comeback
          </h2>
        </div>
        <Button to="/lessons" variant="outline">
          All Business Lessons
        </Button>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
        {featured.map((lesson, index) => (
          <m.article
            key={lesson.slug}
            initial={reduceMotion ? undefined : { y: 16 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : index * 0.08 }}
            className="border-t border-content/15 pt-6"
          >
            <h3 className="font-display text-xl font-medium text-content">{lesson.title}</h3>
            <p className="mt-3 font-serif text-sm leading-relaxed text-content-secondary">{lesson.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
              {lesson.companySlugs.slice(0, 3).map((slug) => {
                const company = getCompanyBySlug(slug)
                if (!company) return null
                return (
                  <li key={slug}>
                    <Link
                      to={`/stories/${slug}`}
                      className="font-sans text-xs font-medium text-content-tertiary underline decoration-content/30 underline-offset-4 transition-colors hover:text-content hover:decoration-zenith-500"
                    >
                      {company.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </m.article>
        ))}
      </div>
    </section>
  )
}
