import { useId, useState } from 'react'
import { m, useReducedMotion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const inputId = useId()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setError('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) throw new Error('Request failed')
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

  const reduceMotion = useReducedMotion()

  return (
    <section aria-labelledby="newsletter-heading" className="bg-ink-950">
      <div className="container-editorial py-20 sm:py-24">
        <m.div
          initial={reduceMotion ? undefined : { y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 id="newsletter-heading" className="font-display text-3xl font-medium text-paper-50 sm:text-4xl">
            One turnaround, every fortnight.
          </h2>
          <p className="mt-4 font-serif text-base leading-relaxed text-paper-300">
            Get the next case study, key lessons, and behind-the-scenes sourcing notes delivered
            straight to your inbox. No noise, no spam — just the stories.
          </p>

          {status === 'success' ? (
            <p role="status" className="mt-8 font-sans text-sm text-zenith-300">
              You&rsquo;re on the list. Check your inbox for a welcome note.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row" noValidate>
              <label htmlFor={inputId} className="sr-only">
                Email address
              </label>
              <input
                id={inputId}
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                aria-invalid={status === 'error'}
                aria-describedby={status === 'error' ? `${inputId}-error` : undefined}
                className="glass-on-dark w-full rounded-full px-5 py-3 font-sans text-sm text-paper-50 placeholder:text-paper-300/50 focus-visible:border-zenith-400"
              />
              <m.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="shrink-0 rounded-sm bg-zenith-400 px-6 py-3 font-sans text-sm font-medium text-ink-950 transition-colors hover:bg-zenith-300 disabled:opacity-60"
              >
                {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </m.button>
            </form>
          )}
          {status === 'error' && error && (
            <p id={`${inputId}-error`} role="alert" className="mt-3 font-sans text-sm text-crisis-400">
              {error}
            </p>
          )}
        </m.div>
      </div>
    </section>
  )
}
