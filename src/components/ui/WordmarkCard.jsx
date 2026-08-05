import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import { countWords, estimateReadingTime } from '@/lib/format'
import { useTilt } from '@/hooks/useTilt'
import { useSpecular } from '@/hooks/useSpecular'
import { mergeRefs } from '@/lib/mergeRefs'

export default function WordmarkCard({ company, className = '' }) {
  const readingTime = estimateReadingTime(countWords(company.sections))
  const { ref: tiltRef, tiltProps } = useTilt({ max: 5 })
  const { ref: specularRef, onMouseMove: onSpecularMove } = useSpecular()

  return (
    <Link
      ref={mergeRefs(tiltRef, specularRef)}
      onMouseMove={onSpecularMove}
      to={`/stories/${company.slug}`}
      className={`glass glass-specular group relative flex aspect-[4/3] flex-col overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-content/10 ${className}`}
    >
      <m.div {...tiltProps} className="flex h-full flex-col justify-between p-7 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <span
            className="h-2 w-2 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125"
            style={{ backgroundColor: company.accent.to }}
            aria-hidden="true"
          />
          <span className="font-sans text-[11px] uppercase tracking-wider text-content-tertiary">
            {company.industry} · {readingTime} min read
          </span>
        </div>

        <div>
          <p className="font-display text-3xl font-medium leading-[1.05] text-content transition-colors duration-300 sm:text-4xl">
            {company.name}
          </p>
          <p className="mt-3 line-clamp-2 font-serif text-sm leading-relaxed text-content-secondary">
            {company.logline}
          </p>
        </div>

        <span
          className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
          style={{ backgroundColor: company.accent.to }}
          aria-hidden="true"
        />
      </m.div>
    </Link>
  )
}
