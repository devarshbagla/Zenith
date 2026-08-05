import { Link, Navigate, useParams } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WordmarkCard from '@/components/ui/WordmarkCard'
import Button from '@/components/ui/Button'
import { lessonThemes, getLessonBySlug } from '@/data/lessons'
import { getCompanyBySlug } from '@/data/companies'
import { breadcrumbSchema } from '@/lib/seo'

export default function LessonDetailPage() {
  const { slug } = useParams()
  const lesson = getLessonBySlug(slug)

  if (!lesson) {
    return <Navigate to="/404" replace />
  }

  const companies = lesson.companySlugs.map(getCompanyBySlug).filter(Boolean)
  const path = `/lessons/${lesson.slug}`
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Lessons', path: '/lessons' },
    { name: lesson.title, path },
  ]

  const index = lessonThemes.findIndex((item) => item.slug === lesson.slug)
  const other = lessonThemes.filter((item) => item.slug !== lesson.slug)

  return (
    <>
      <SEO
        title={`${lesson.title} | Business Turnaround Lesson | From Dust to Zenith`}
        description={`${lesson.summary} Illustrated with real case studies: ${companies.map((c) => c.name).join(', ')}.`}
        path={path}
        schema={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <header className="container-editorial pb-10 pt-8 sm:pt-10">
        <p className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
          Lesson {String(index + 1).padStart(2, '0')} of {lessonThemes.length}
        </p>
        <h1 className="mt-2 font-display text-4xl font-medium text-content sm:text-5xl">
          {lesson.title}
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-content-secondary">
          {lesson.summary}
        </p>
      </header>

      <section className="container-editorial pb-16">
        <p className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
          See it in action
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <WordmarkCard key={company.slug} company={company} />
          ))}
        </div>
      </section>

      <section className="container-editorial flex flex-wrap items-center justify-between gap-4 border-t border-content/10 py-10">
        <div>
          <p className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
            Explore more patterns
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {other.map((item) => (
              <Link
                key={item.slug}
                to={`/lessons/${item.slug}`}
                className="font-sans text-sm text-content-secondary underline decoration-content/20 underline-offset-4 transition-colors hover:text-content hover:decoration-zenith-500"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <Button to="/lessons" variant="outline">
          All Business Lessons
        </Button>
      </section>
    </>
  )
}
