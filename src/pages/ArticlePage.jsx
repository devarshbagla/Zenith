import { Link, Navigate, useParams } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ArticleHero from '@/components/article/ArticleHero'
import ReadingProgress from '@/components/article/ReadingProgress'
import QuickFacts from '@/components/article/QuickFacts'
import ArticleBody from '@/components/article/ArticleBody'
import RecoveryStat from '@/components/article/RecoveryStat'
import TableOfContents from '@/components/article/TableOfContents'
import ShareButtons from '@/components/article/ShareButtons'
import Timeline from '@/components/article/Timeline'
import KeyTakeaways from '@/components/article/KeyTakeaways'
import FAQ from '@/components/article/FAQ'
import Sources from '@/components/article/Sources'
import RelatedArticles from '@/components/article/RelatedArticles'
import ArticleNav from '@/components/article/ArticleNav'
import Newsletter from '@/components/home/Newsletter'
import { getCompanyBySlug, getRelatedCompanies, getAdjacentCompanies } from '@/data/companies'
import { getLessonsForCompany } from '@/data/lessons'
import { articleSchema, faqSchema, breadcrumbSchema, buildCanonical } from '@/lib/seo'
import { countWords, estimateReadingTime, formatDate } from '@/lib/format'
import { SITE } from '@/lib/constants'

export default function ArticlePage() {
  const { slug } = useParams()
  const company = getCompanyBySlug(slug)

  if (!company) {
    return <Navigate to="/404" replace />
  }

  const path = `/stories/${company.slug}`
  const wordCount = countWords(company.sections)
  const readingTime = estimateReadingTime(wordCount)
  const related = getRelatedCompanies(company)
  const { previous, next } = getAdjacentCompanies(company.slug)
  const lessons = getLessonsForCompany(company.slug)
  const tocSections = company.sections.map((s) => ({ id: s.id, eyebrow: s.eyebrow }))

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Stories', path: '/stories' },
    { name: company.name, path },
  ]

  return (
    <>
      <SEO
        title={company.seo.metaTitle}
        description={company.seo.metaDescription}
        path={path}
        image={`${SITE.url}/api/og?slug=${company.slug}`}
        type="article"
        schema={[
          articleSchema(company, buildCanonical(path)),
          faqSchema(company.faq),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />
      <ReadingProgress targetId="article-content" />
      <Breadcrumbs items={breadcrumbItems} />
      <ArticleHero company={company} readingTime={readingTime} />
      <QuickFacts facts={company.quickFacts} />

      <div id="article-content" className="container-editorial py-12 sm:py-16">
        <div className="flex items-center justify-between gap-4 border-b border-content/10 pb-8">
          <p className="font-sans text-sm text-content-secondary">
            By the From Dust to Zenith Editorial Desk
            <span aria-hidden="true"> · </span>
            <span className="sr-only">Published on </span>
            <time dateTime={company.publishedAt}>{formatDate(company.publishedAt)}</time>
          </p>
          <ShareButtons title={company.heroTitle} path={path} />
        </div>

        <div className="flex gap-16 pt-8">
          <ArticleBody sections={company.sections} currentSlug={company.slug} />
          <TableOfContents sections={tocSections} />
        </div>
      </div>

      <RecoveryStat stat={company.recoveryStat} />

      <Timeline events={company.timeline} />
      <KeyTakeaways takeaways={company.keyTakeaways} />

      {lessons.length > 0 && (
        <div className="container-reading flex flex-wrap items-center gap-3 pb-4">
          <span className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
            Filed under
          </span>
          {lessons.map((lesson) => (
            <Link
              key={lesson.slug}
              to={`/lessons/${lesson.slug}`}
              className="rounded-full bg-content/5 px-3 py-1 font-sans text-xs font-medium text-content-secondary ring-1 ring-inset ring-content/10 transition-colors hover:bg-zenith-500/10 hover:text-zenith-700 hover:ring-zenith-500/20 dark:hover:text-zenith-300"
            >
              {lesson.title}
            </Link>
          ))}
        </div>
      )}

      <FAQ items={company.faq} />
      <Sources sources={company.sources} />
      <RelatedArticles companies={related} />
      <ArticleNav previous={previous} next={next} />
      <Newsletter />
    </>
  )
}
