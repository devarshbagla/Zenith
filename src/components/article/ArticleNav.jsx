import { Link } from 'react-router-dom'
import CompanyCover from '@/components/ui/CompanyCover'

export default function ArticleNav({ previous, next }) {
  return (
    <nav aria-label="Story navigation" className="border-t border-content/10">
      <div className="grid sm:grid-cols-2">
        <Link
          to={`/stories/${previous.slug}`}
          className="group relative flex min-h-[220px] items-end overflow-hidden border-b border-content/10 sm:border-b-0 sm:border-r"
        >
          <CompanyCover company={previous} showName={false} className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-ink-950/50 transition-colors duration-300 group-hover:bg-ink-950/35" />
          <div className="relative z-10 p-8">
            <p className="font-sans text-xs uppercase tracking-wider text-paper-300">Previous Story</p>
            <p className="mt-2 font-display text-2xl font-medium text-paper-50">{previous.name}</p>
          </div>
        </Link>

        <Link
          to={`/stories/${next.slug}`}
          className="group relative flex min-h-[220px] items-end justify-end overflow-hidden text-right"
        >
          <CompanyCover company={next} showName={false} className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-ink-950/50 transition-colors duration-300 group-hover:bg-ink-950/35" />
          <div className="relative z-10 p-8">
            <p className="font-sans text-xs uppercase tracking-wider text-paper-300">Next Story</p>
            <p className="mt-2 font-display text-2xl font-medium text-paper-50">{next.name}</p>
          </div>
        </Link>
      </div>
    </nav>
  )
}
