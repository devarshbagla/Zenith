import { getSiteStats } from '@/data/companies'
import AnimatedNumber from '@/components/ui/AnimatedNumber'

export default function ByTheNumbers() {
  const stats = getSiteStats()

  const items = [
    { value: stats.companyCount, label: 'Companies profiled', numeric: true },
    { value: stats.industryCount, label: 'Industries covered', numeric: true },
    { value: `${stats.yearsSpanned}+`, label: 'Years of corporate history', numeric: false },
    { value: `${Math.round(stats.totalWords / 1000)}K+`, label: 'Words of original reporting', numeric: false },
  ]

  return (
    <section aria-labelledby="numbers-heading" className="border-y border-content/10 bg-surface-raised">
      <div className="container-editorial py-16 sm:py-20">
        <h2 id="numbers-heading" className="sr-only">
          From Dust to Zenith by the numbers
        </h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="border-l-2 border-zenith-500/60 pl-5">
              <dt className="font-sans text-xs uppercase tracking-wider text-content-tertiary">
                {item.label}
              </dt>
              <dd className="mt-2 font-display text-4xl font-medium text-content sm:text-5xl">
                {item.numeric ? <AnimatedNumber value={item.value} /> : item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
