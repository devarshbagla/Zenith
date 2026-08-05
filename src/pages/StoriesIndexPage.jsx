import SEO from '@/components/seo/SEO'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WordmarkCard from '@/components/ui/WordmarkCard'
import { companies } from '@/data/companies'
import { breadcrumbSchema } from '@/lib/seo'

export default function StoriesIndexPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Stories', path: '/stories' },
  ]

  return (
    <>
      <SEO
        title="All Business Turnaround Case Studies | From Dust to Zenith"
        description="Browse all eighteen documentary-style case studies on history's greatest business turnarounds, from Apple's 1997 near-bankruptcy to Chipotle's post-crisis rebuild."
        path="/stories"
        schema={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <header className="container-editorial pb-10 pt-8 sm:pt-10">
        <h1 className="font-display text-4xl font-medium text-content sm:text-5xl">
          Every Story
        </h1>
        <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-content-secondary">
          Eighteen companies that were counted out — and rebuilt themselves into industry leaders.
          Each case study covers the rise, the fall, the crisis, and the strategy behind the
          recovery.
        </p>
      </header>

      <section className="container-editorial pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <WordmarkCard key={company.slug} company={company} />
          ))}
        </div>
      </section>
    </>
  )
}
