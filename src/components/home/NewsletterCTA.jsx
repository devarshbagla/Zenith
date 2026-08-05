import { m, useReducedMotion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function NewsletterCTA() {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-labelledby="newsletter-cta-heading" className="bg-ink-950">
      <div className="container-editorial py-20 sm:py-24">
        <m.div
          initial={reduceMotion ? undefined : { y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 id="newsletter-cta-heading" className="font-display text-3xl font-medium text-paper-50 sm:text-4xl">
            One turnaround, every fortnight.
          </h2>
          <p className="mt-4 font-serif text-base leading-relaxed text-paper-300">
            Get the next case study, key lessons, and behind-the-scenes sourcing notes delivered
            straight to your inbox. No noise, no spam, just the stories.
          </p>
          <Button to="/newsletter" variant="inverse" className="mt-8">
            Join the Newsletter
          </Button>
        </m.div>
      </div>
    </section>
  )
}
