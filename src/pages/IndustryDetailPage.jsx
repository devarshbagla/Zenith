import { Navigate, useParams } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WordmarkCard from '@/components/ui/WordmarkCard'
import { INDUSTRIES } from '@/lib/constants'
import { getCompaniesByIndustry } from '@/data/companies'
import { slugify } from '@/lib/format'
import { breadcrumbSchema } from '@/lib/seo'

export default function IndustryDetailPage() {
  const { slug } = useParams()
  const industry = INDUSTRIES.find((name) => slugify(name) === slug)

  if (!industry) {
    return <Navigate to="/404" replace />
  }

  const list = getCompaniesByIndustry(industry)
  const path = `/industries/${slug}`
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: industry, path },
  ]

  return (
    <>
      <SEO
        title={`${industry} Turnaround Case Studies | From Dust to Zenith`}
        description={`Business turnaround case studies from the ${industry.toLowerCase()} industry: ${list.map((c) => c.name).join(', ')}.`}
        path={path}
        schema={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <header className="container-editorial pb-10 pt-8 sm:pt-10">
        <p className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
          Industry
        </p>
        <h1 className="mt-2 font-display text-4xl font-medium text-content sm:text-5xl">
          {industry}
        </h1>
        <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-content-secondary">
          {list.length} turnaround {list.length === 1 ? 'story' : 'stories'} from the {industry.toLowerCase()} sector.
        </p>
      </header>

      <section className="container-editorial grid gap-5 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((company) => (
          <WordmarkCard key={company.slug} company={company} />
        ))}
      </section>
    </>
  )
}
