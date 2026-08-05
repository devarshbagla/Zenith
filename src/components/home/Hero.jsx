import { Link } from 'react-router-dom'
import { m, useReducedMotion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Galaxy from '@/components/home/Galaxy'
import { companies } from '@/data/companies'

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const featured = companies.slice(0, 6)

  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-ink-950 pt-20">
      <div className="absolute inset-0">
        <Galaxy
          density={1}
          glowIntensity={0.35}
          saturation={0.4}
          hueShift={0}
          twinkleIntensity={0.4}
          rotationSpeed={0.05}
          starSpeed={0.4}
          mouseInteraction
          mouseRepulsion
          transparent
          disableAnimation={reduceMotion}
        />
      </div>

      {/* Darkest over the text column (left), lighter toward the right where the
          glow is purely decorative. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(10,10,11,0.85) 0%, rgba(10,10,11,0.55) 45%, rgba(10,10,11,0.25) 75%, rgba(10,10,11,0.5) 100%), linear-gradient(0deg, rgba(10,10,11,0.6) 0%, rgba(10,10,11,0.05) 35%, rgba(10,10,11,0.3) 100%)',
        }}
        aria-hidden="true"
      />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08] mix-blend-overlay" aria-hidden="true">
        <filter id="hero-home-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-home-grain)" />
      </svg>

      <div className="container-editorial relative z-10 py-24">
        {/* Text content renders fully opaque immediately (no opacity animation) so
            crawlers, no-JS clients, and the prerendered HTML always show real content. */}
        <m.p
          initial={reduceMotion ? undefined : { y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xs uppercase tracking-[0.2em] text-zenith-400"
        >
          Eighteen companies. Eighteen collapses. Eighteen comebacks.
        </m.p>

        <m.h1
          initial={reduceMotion ? undefined : { y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl font-display font-medium leading-[1.02] text-paper-50"
          style={{ fontSize: 'clamp(2.75rem, 1.5rem + 5vw, 4.75rem)' }}
        >
          From Dust to Zenith
        </m.h1>

        <m.p
          initial={reduceMotion ? undefined : { y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-paper-200 sm:text-xl"
        >
          Documentary-style case studies on history&rsquo;s greatest business turnarounds: the
          rise, the fall, the crisis, and the strategy that brought each company back from the
          brink.
        </m.p>

        <m.div
          initial={reduceMotion ? undefined : { y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button to="/stories" variant="inverse" className="!rounded-2xl">
            Start Reading
          </Button>
          <Button to="/lessons" variant="ghost" className="!rounded-2xl text-paper-100 hover:bg-paper-50/10">
            Explore the Lessons
          </Button>
        </m.div>

        <nav aria-label="Featured stories" className="mt-16 flex flex-wrap items-center gap-x-5 gap-y-2">
          {featured.map((company) => (
            <Link
              key={company.slug}
              to={`/stories/${company.slug}`}
              className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-paper-300/60 transition-colors hover:text-paper-100"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: company.accent.to }}
                aria-hidden="true"
              />
              {company.name}
            </Link>
          ))}
          <span className="font-sans text-xs uppercase tracking-wider text-paper-300/40">&amp; more</span>
        </nav>
      </div>
    </section>
  )
}
