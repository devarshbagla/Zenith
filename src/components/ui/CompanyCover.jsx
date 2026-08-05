import NarrativeArc from './NarrativeArc'
import { getStoryImage } from '@/data/image-credits'

const SIZE_TEXT = {
  sm: 'text-xl sm:text-2xl',
  md: 'text-3xl sm:text-4xl',
  lg: 'text-5xl sm:text-6xl lg:text-7xl',
}

export default function CompanyCover({
  company,
  size = 'md',
  className = '',
  showName = true,
  showArc = true,
  showCredit = true,
  priority = false,
}) {
  const { from, via, to } = company.accent
  const image = getStoryImage(company.slug)

  return (
    <div
      className={`relative isolate flex items-end overflow-hidden ${className}`}
      style={!image ? { backgroundImage: `linear-gradient(155deg, ${from} 0%, ${via} 55%, ${to} 100%)` } : undefined}
      {...(!image ? { role: 'img', 'aria-label': `${company.name}: ${company.logline}` } : {})}
    >
      {image && (
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : undefined}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {image && (
        <div
          className="pointer-events-none absolute inset-0 mix-blend-color"
          style={{ backgroundImage: `linear-gradient(155deg, ${from} 0%, ${via} 55%, ${to} 100%)` }}
          aria-hidden="true"
        />
      )}

      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15] mix-blend-overlay" aria-hidden="true">
        <filter id={`grain-${company.slug}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain-${company.slug})`} />
      </svg>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at 30% 110%, rgba(0,0,0,${image ? 0.75 : 0.55}), transparent 60%)`,
        }}
        aria-hidden="true"
      />
      {image && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.35) 0%, transparent 45%)' }}
          aria-hidden="true"
        />
      )}

      {showArc && (
        <NarrativeArc
          timeline={company.timeline}
          width={400}
          height={130}
          fluid
          showEndDot={false}
          strokeWidth={2.5}
          color="rgba(253, 252, 250, 0.4)"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] w-full"
        />
      )}

      {showName && (
        <p
          className={`relative z-10 w-full px-6 pb-6 font-display font-medium leading-[0.95] text-paper-50/95 sm:px-8 sm:pb-8 ${SIZE_TEXT[size]}`}
        >
          {company.name}
        </p>
      )}

      {showCredit && image && (
        // Plain text, not a link: CompanyCover is often nested inside a <Link> at the
        // call site (card grids), and a nested <a> is invalid HTML that browsers
        // silently restructure, breaking React hydration.
        <span className="absolute bottom-1.5 right-2 z-10 font-sans text-[10px] text-paper-50/50">
          Photo: {image.photographer} / Wikimedia Commons, {image.license}
        </span>
      )}
    </div>
  )
}
