import { m, useReducedMotion } from 'framer-motion'

const LINKS = [
  {
    label: 'bharatbagree30@gmail.com',
    href: 'mailto:bharatbagree30@gmail.com',
    icon: (
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2.2.3 6.8 5.4 6.8-5.4H5.2Zm13.3 1.4-6.8 5.4a1 1 0 0 1-1.2 0L4.5 8.2v9.3c0 .3.2.5.5.5h13a.5.5 0 0 0 .5-.5V8.2Z" />
    ),
  },
  {
    label: 'linkedin.com/in/bharatbagree',
    href: 'https://www.linkedin.com/in/bharatbagree',
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.9-2.1 3.9-2.1 4.2 0 5 2.8 5 6.3V21h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />
    ),
  },
  {
    label: 'bharatbagree.substack.com',
    href: 'https://bharatbagree.substack.com',
    icon: (
      <path d="M4 4h16v3.2H4V4Zm0 5.2h16V11H4V9.2Zm0 3.8h16v7.6l-8-4.4-8 4.4V13Z" />
    ),
  },
]

export default function Connect() {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-labelledby="connect-heading" className="bg-ink-950">
      <div className="container-editorial py-20 sm:py-28">
        <m.div
          initial={reduceMotion ? undefined : { y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="font-sans text-xs font-medium uppercase tracking-wider text-zenith-400">
            Connect
          </p>
          <h2 id="connect-heading" className="mt-4 font-display text-2xl font-medium text-paper-50 sm:text-3xl">
            If this story resonated with you, let&rsquo;s connect.
          </h2>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-on-dark group inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 font-sans text-sm text-paper-200 transition-all duration-200 hover:-translate-y-0.5 hover:text-paper-50 hover:shadow-[0_0_0_1px_rgba(232,196,104,0.2),0_8px_24px_-8px_rgba(232,196,104,0.3)]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current opacity-70 transition-opacity group-hover:opacity-100" aria-hidden="true">
                  {link.icon}
                </svg>
                {link.label}
              </a>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  )
}
