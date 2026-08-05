import { m, useReducedMotion } from 'framer-motion'

export default function QuoteBreak({ quote, attribution, dark = false }) {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className={`border-y border-content/10 py-20 sm:py-28 ${dark ? 'bg-ink-950' : 'bg-surface'}`}
    >
      <m.div
        initial={reduceMotion ? undefined : { y: 16 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="container-reading text-center"
      >
        <p
          className={`font-display text-3xl font-medium italic leading-[1.15] sm:text-4xl lg:text-5xl ${
            dark ? 'text-paper-50' : 'text-content'
          }`}
        >
          “{quote}”
        </p>
        {attribution && (
          <p
            className={`mt-6 font-sans text-sm uppercase tracking-wider ${
              dark ? 'text-paper-300/70' : 'text-content-tertiary'
            }`}
          >
            — {attribution}
          </p>
        )}
      </m.div>
    </section>
  )
}
