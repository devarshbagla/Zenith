import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { m, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, SITE } from '@/lib/constants'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-header border-b-0' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-editorial flex h-16 items-center justify-between sm:h-20">
        <Link
          to="/"
          className="font-display text-lg font-medium tracking-tight text-content sm:text-xl"
        >
          {SITE.shortName}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `link-underline relative pb-0.5 font-sans text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'font-medium text-content'
                    : 'text-content-tertiary hover:text-content'
                } ${isActive ? '[background-size:100%_1px]' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          <ThemeToggle className="hidden md:flex" />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-sm text-content md:hidden"
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 block h-px w-full bg-current transition-transform duration-200 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-px w-full bg-current transition-transform duration-200 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <m.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass overflow-hidden border-t-0 md:hidden"
          >
            <div className="container-editorial flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-sm px-3 py-3 font-sans text-base ${isActive ? 'font-medium text-content' : 'text-content-secondary'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-2 flex items-center justify-between border-t border-content/10 px-3 pt-4">
                <span className="font-sans text-sm text-content-tertiary">Appearance</span>
                <ThemeToggle />
              </div>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
