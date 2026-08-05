import { useEffect, useRef, useState } from 'react'

export default function TableOfContents({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id)
  const [mobileOpen, setMobileOpen] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean)

    observerRef.current?.disconnect()
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
    )

    elements.forEach((el) => observerRef.current.observe(el))
    return () => observerRef.current?.disconnect()
  }, [sections])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        aria-label="Table of contents"
        className="sticky top-24 hidden max-h-[calc(100vh-8rem)] w-56 shrink-0 overflow-y-auto xl:block"
      >
        <p className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
          On This Page
        </p>
        <ul className="mt-4 space-y-3 border-l border-content/10">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => scrollTo(section.id)}
                aria-current={activeId === section.id ? 'true' : undefined}
                className={`-ml-px block border-l-2 py-0.5 pl-4 text-left font-sans text-sm transition-colors ${
                  activeId === section.id
                    ? 'border-zenith-500 font-medium text-content'
                    : 'border-transparent text-content-tertiary hover:text-content-secondary'
                }`}
              >
                {section.eyebrow}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="fixed bottom-5 right-5 z-40 xl:hidden">
        {mobileOpen && (
          <ul
            role="menu"
            className="glass-on-dark mb-3 max-h-[60vh] w-56 overflow-y-auto rounded-2xl p-3 text-paper-50"
          >
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => scrollTo(section.id)}
                  className={`block w-full rounded-lg px-3 py-2 text-left font-sans text-sm ${
                    activeId === section.id ? 'bg-white/10 font-medium text-paper-50' : 'text-paper-300'
                  }`}
                >
                  {section.eyebrow}
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          className="glass-on-dark flex items-center gap-2 rounded-full px-5 py-3 font-sans text-sm font-medium text-paper-50"
        >
          {mobileOpen ? 'Close' : 'Contents'}
        </button>
      </div>
    </>
  )
}
