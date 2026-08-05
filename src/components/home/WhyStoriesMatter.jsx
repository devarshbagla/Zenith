import { m, useReducedMotion } from 'framer-motion'

const REASONS = [
  {
    title: 'Strategy, not summary',
    body: 'Every case study traces the actual decisions — the financing, the org-chart changes, the product bets — not just the headline outcome. Built for readers who need the mechanism, not the moral.',
  },
  {
    title: 'Sourced and verifiable',
    body: 'Each story draws on annual reports, court filings, contemporary reporting, and the executives’ own accounts, with every source listed so you can go deeper.',
  },
  {
    title: 'Built for how you actually study',
    body: 'Quick facts and timelines for a fast scan before an interview or case competition. Full narrative depth for when you need to actually understand what happened.',
  },
]

export default function WhyStoriesMatter() {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-labelledby="why-heading" className="border-t border-ink-900/10 bg-ink-950">
      <div className="container-editorial py-20 sm:py-24">
        <h2 id="why-heading" className="max-w-xl font-display text-3xl font-medium text-paper-50 sm:text-4xl">
          Why these stories matter
        </h2>
        <div className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {REASONS.map((reason, index) => (
            <m.div
              key={reason.title}
              initial={reduceMotion ? undefined : { y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : index * 0.1 }}
            >
              <span className="font-display text-sm font-medium text-zenith-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-xl font-medium text-paper-50">
                {reason.title}
              </h3>
              <p className="mt-3 font-serif text-[0.975rem] leading-relaxed text-paper-300">
                {reason.body}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
