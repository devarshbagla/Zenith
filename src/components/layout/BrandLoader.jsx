import { SITE } from '@/lib/constants'

export default function BrandLoader() {
  return (
    <div className="brand-loader" aria-hidden="true">
      <span className="font-display text-2xl font-medium tracking-tight text-paper-50">
        {SITE.shortName}
      </span>
    </div>
  )
}
