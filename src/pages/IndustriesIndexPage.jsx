import { Link } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { INDUSTRIES } from '@/lib/constants'
import { getCompaniesByIndustry } from '@/data/companies'
import { slugify } from '@/lib/format'
import { breadcrumbSchema } from '@/lib/seo'

export default function IndustriesIndexPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
  ]

  return (
    <>
      <SEO
        title="Business Turnarounds by Industry | From Dust to Zenith"
        description="Explore business turnaround case studies grouped by industry — technology, entertainment, automotive, retail, food & beverage, fashion, and more."
        path="/industries"
        schema={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <header className="container-editorial pb-10 pt-8 sm:pt-10">
        <h1 className="font-display text-4xl font-medium text-content sm:text-5xl">
          Explore by Industry
        </h1>
        <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-content-secondary">
          Turnarounds don&rsquo;t follow the same playbook in every sector. Browse case studies
          grouped by the industry they reshaped.
        </p>
      </header>

      <section className="container-editorial grid gap-6 pb-24 sm:grid-cols-2">
        {INDUSTRIES.map((industry) => {
          const list = getCompaniesByIndustry(industry)
          if (list.length === 0) return null
          return (
            <Link
              key={industry}
              to={`/industries/${slugify(industry)}`}
              className="group border border-content/10 bg-surface-sunken/40 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-content/25 hover:shadow-sm"
            >
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-xl font-medium text-content">{industry}</h2>
                <span className="font-sans text-xs text-content-tertiary">{list.length} stories</span>
              </div>
              <p className="mt-3 font-serif text-sm text-content-secondary">
                {list.map((c) => c.name).join(', ')}
              </p>
            </Link>
          )
        })}
      </section>
    </>
  )
}
