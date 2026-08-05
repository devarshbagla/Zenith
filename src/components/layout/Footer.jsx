import { Link } from 'react-router-dom'
import { companies } from '@/data/companies'
import { NAV_LINKS, SITE } from '@/lib/constants'
import CompanyWordmark from '@/components/ui/CompanyWordmark'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-900/10 bg-ink-950 text-paper-200">
      <div className="container-editorial grid gap-12 py-16 sm:py-20 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-medium text-paper-50">{SITE.name}</p>
          <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-paper-300">
            {SITE.description}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="mailto:bharatbagree30@gmail.com"
              aria-label="Email Bharat Bagree"
              className="text-paper-300 transition-colors hover:text-zenith-300"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2.2.3 6.8 5.4 6.8-5.4H5.2Zm13.3 1.4-6.8 5.4a1 1 0 0 1-1.2 0L4.5 8.2v9.3c0 .3.2.5.5.5h13a.5.5 0 0 0 .5-.5V8.2Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/bharatbagree"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bharat Bagree's LinkedIn profile"
              className="text-paper-300 transition-colors hover:text-zenith-300"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.9-2.1 3.9-2.1 4.2 0 5 2.8 5 6.3V21h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />
              </svg>
            </a>
            <a
              href="https://bharatbagree.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bharat Bagree's Substack"
              className="text-paper-300 transition-colors hover:text-zenith-300"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M4 4h16v3.2H4V4Zm0 5.2h16V11H4V9.2Zm0 3.8h16v7.6l-8-4.4-8 4.4V13Z" />
              </svg>
            </a>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <p className="font-sans text-xs font-medium uppercase tracking-wider text-paper-300/70">
            Navigate
          </p>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="font-sans text-sm text-paper-200 hover:text-zenith-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="All stories">
          <p className="font-sans text-xs font-medium uppercase tracking-wider text-paper-300/70">
            All Stories
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
            {companies.map((company) => (
              <li key={company.slug}>
                <CompanyWordmark
                  company={company}
                  className="font-sans text-sm text-paper-200 hover:text-zenith-300"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-paper-50/10">
        <div className="container-editorial flex flex-col gap-3 py-6 font-sans text-xs text-paper-300/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <span suppressHydrationWarning>{year}</span> {SITE.name}. All rights reserved.
          </p>
          <p>Independent editorial analysis. Not affiliated with the companies featured.</p>
        </div>
      </div>
    </footer>
  )
}
