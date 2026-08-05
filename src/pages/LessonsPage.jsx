import { Link } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import CompanyWordmark from '@/components/ui/CompanyWordmark'
import QuoteBreak from '@/components/ui/QuoteBreak'
import { lessonThemes } from '@/data/lessons'
import { getCompanyBySlug } from '@/data/companies'
import { breadcrumbSchema } from '@/lib/seo'

export default function LessonsPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Lessons', path: '/lessons' },
  ]

  return (
    <>
      <SEO
        title="Business Turnaround Lessons & Frameworks | From Dust to Zenith"
        description="Six cross-cutting strategic patterns behind history's greatest corporate turnarounds, each illustrated with real case studies from Apple, LEGO, IBM, Netflix, and more."
        path="/lessons"
        schema={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <header className="container-editorial pb-10 pt-8 sm:pt-10">
        <h1 className="font-display text-4xl font-medium text-content sm:text-5xl">
          Business Lessons
        </h1>
        <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-content-secondary">
          Eighteen turnarounds, six recurring patterns. These are the strategic mechanisms that
          show up again and again — across industries, decades, and crises.
        </p>
      </header>

      <QuoteBreak quote="What survives is what adapts." />

      <section className="container-editorial space-y-16 py-16 sm:py-20">
        {lessonThemes.map((lesson, index) => (
          <article key={lesson.slug} className="border-t border-content/15 pt-8" id={lesson.slug}>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-16">
              <span className="font-display text-3xl font-medium text-zenith-500 lg:w-16 lg:shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-medium text-content sm:text-3xl">
                  <Link to={`/lessons/${lesson.slug}`} className="link-underline hover:text-zenith-600 dark:hover:text-zenith-400">
                    {lesson.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-2xl font-serif text-base leading-relaxed text-content-secondary">
                  {lesson.summary}
                </p>
                <p className="mt-5 font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
                  See it in action
                </p>
                <ul className="mt-3 flex flex-wrap gap-3">
                  {lesson.companySlugs.map((slug) => {
                    const company = getCompanyBySlug(slug)
                    if (!company) return null
                    return (
                      <li key={slug}>
                        <CompanyWordmark
                          company={company}
                          className="rounded-full border border-content/15 px-4 py-1.5 font-sans text-sm text-content-secondary transition-colors hover:border-content/40 hover:text-content"
                        />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
