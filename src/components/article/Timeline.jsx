import { m, useReducedMotion } from 'framer-motion'
import Tag from '@/components/ui/Tag'

export default function Timeline({ events }) {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-labelledby="timeline-heading" className="container-reading py-16 sm:py-20">
      <h2 id="timeline-heading" className="font-display text-2xl font-medium text-content sm:text-3xl">
        Timeline
      </h2>

      <ol className="relative mt-10 space-y-10 border-l border-content/15 pl-8">
        {events.map((event, index) => (
          <m.li
            key={`${event.year}-${index}`}
            initial={reduceMotion ? undefined : { x: -12 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : index * 0.03 }}
            className="relative"
          >
            <span
              className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-zenith-500 ring-4 ring-surface"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-sans text-sm font-semibold tracking-wide text-content">
                {event.year}
              </span>
              <Tag phase={event.phase}>{event.phase}</Tag>
            </div>
            <h3 className="mt-2 font-display text-lg font-medium text-content">{event.title}</h3>
            <p className="mt-1.5 font-serif text-[0.975rem] leading-relaxed text-content-secondary">
              {event.description}
            </p>
          </m.li>
        ))}
      </ol>
    </section>
  )
}
