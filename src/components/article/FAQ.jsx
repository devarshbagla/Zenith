import { useState } from 'react'

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section aria-labelledby="faq-heading" className="container-reading py-16 sm:py-20">
      <h2 id="faq-heading" className="font-display text-2xl font-medium text-content sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 divide-y divide-content/10 border-y border-content/10">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          const panelId = `faq-panel-${index}`
          const buttonId = `faq-button-${index}`
          return (
            <div key={item.question}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-sans text-base font-medium text-content transition-colors group-hover:text-zenith-600 dark:group-hover:text-zenith-400">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 font-sans text-xl text-content-tertiary transition-transform duration-200 group-hover:text-zenith-600 dark:group-hover:text-zenith-400 ${isOpen ? 'rotate-45' : ''}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="pb-5"
              >
                <p className="font-serif text-[0.975rem] leading-relaxed text-content-secondary">
                  {item.answer}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
