import { m, useReducedMotion } from 'framer-motion'
import Tag from '@/components/ui/Tag'
import NarrativeArc from '@/components/ui/NarrativeArc'
import { getStoryImage } from '@/data/image-credits'

export default function ArticleHero({ company, readingTime }) {
  const reduceMotion = useReducedMotion()
  const { from, via, to } = company.accent
  const image = getStoryImage(company.slug)

  return (
    <section
      className="relative isolate flex min-h-[70vh] items-end overflow-hidden pt-24 sm:min-h-[78vh]"
      style={!image ? { backgroundImage: `linear-gradient(155deg, ${from} 0%, ${via} 55%, ${to} 100%)` } : undefined}
    >
      {image && (
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes="100vw"
          alt={image.alt}
          loading="eager"
          fetchPriority="high"
          decoding="async"
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

      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12] mix-blend-overlay" aria-hidden="true">
        <filter id={`hero-grain-${company.slug}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#hero-grain-${company.slug})`} />
      </svg>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 120%, rgba(0,0,0,${image ? 0.75 : 0.6}), transparent 65%)`,
        }}
        aria-hidden="true"
      />
      {image && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.55) 0%, transparent 55%)' }}
          aria-hidden="true"
        />
      )}

      <NarrativeArc
        timeline={company.timeline}
        width={1200}
        height={260}
        fluid
        showEndDot
        strokeWidth={2}
        color="rgba(253, 252, 250, 0.28)"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] w-full"
      />

      <div className="container-editorial relative z-10 pb-14 sm:pb-20">
        <m.div
          initial={reduceMotion ? undefined : { y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Tag className="bg-ink-950/55 text-paper-100 ring-paper-50/25 backdrop-blur-md backdrop-saturate-150">
              {company.industry}
            </Tag>
            <span className="font-sans text-xs uppercase tracking-wider text-paper-200/80">
              {company.heroKicker}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.05] text-paper-50 sm:text-5xl lg:text-6xl">
            {company.heroTitle}
          </h1>

          <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-paper-200 sm:text-xl">
            {company.heroDeck}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 font-sans text-sm text-paper-300">
            <span>{company.turnaroundPeriod}</span>
            <span aria-hidden="true">·</span>
            <span>{readingTime} min read</span>
          </div>
        </m.div>
      </div>

      {image && (
        <a
          href={image.sourceUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="absolute bottom-2 right-3 z-10 font-sans text-[11px] text-paper-50/50 hover:text-paper-50/80"
        >
          Photo: {image.photographer} / Wikimedia Commons, {image.license}
        </a>
      )}
    </section>
  )
}
