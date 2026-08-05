import { m, useReducedMotion } from 'framer-motion'

export default function PullQuote({ quote, attribution }) {
  const reduceMotion = useReducedMotion()

  return (
    <m.blockquote
      initial={reduceMotion ? undefined : { y: 12 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="container-reading my-8 rounded-2xl border border-white/60 bg-white/40 p-7 shadow-lg shadow-ink-900/5 backdrop-blur-md backdrop-saturate-150 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20 sm:p-9"
    >
      <p className="font-display text-2xl font-medium italic leading-snug text-content sm:text-3xl">
        “{quote}”
      </p>
      {attribution && (
        <footer className="mt-4 border-t border-content/10 pt-4 font-sans text-sm text-content-tertiary">
          — {attribution}
        </footer>
      )}
    </m.blockquote>
  )
}
