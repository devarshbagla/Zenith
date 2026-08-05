import { Fragment, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { m, useReducedMotion } from 'framer-motion'
import PullQuote from './PullQuote'
import StoryFigure from './StoryFigure'
import { tokenizeMentions } from '@/lib/mentions'

function LinkedParagraph({ text, currentSlug, linkedSlugs }) {
  const tokens = tokenizeMentions(text, currentSlug, linkedSlugs)

  return (
    <p>
      {tokens.map((token, index) =>
        token.slug ? (
          <Link
            key={index}
            to={`/stories/${token.slug}`}
            className="text-content underline decoration-zenith-500/60 decoration-1 underline-offset-2 transition-colors hover:decoration-zenith-500"
          >
            {token.text}
          </Link>
        ) : (
          <span key={index}>{token.text}</span>
        ),
      )}
    </p>
  )
}

export default function ArticleBody({ sections, currentSlug }) {
  const linkedSlugs = useMemo(() => new Set([currentSlug]), [currentSlug])
  const reduceMotion = useReducedMotion()

  return (
    <div className="min-w-0 flex-1">
      {sections.map((section) => (
        <Fragment key={section.id}>
          <m.section
            id={section.id}
            className="scroll-mt-24 py-8 first:pt-0"
            initial={reduceMotion ? undefined : { y: 14 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-xs font-medium uppercase tracking-wider text-zenith-700 dark:text-zenith-400">
              {section.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium text-content sm:text-3xl">
              {section.heading}
            </h2>
            <div className="prose-editorial mt-5 space-y-5">
              {section.paragraphs.map((paragraph, index) => (
                <LinkedParagraph
                  key={index}
                  text={paragraph}
                  currentSlug={currentSlug}
                  linkedSlugs={linkedSlugs}
                />
              ))}
            </div>
            {section.pullQuote && (
              <div className="mt-8">
                <PullQuote quote={section.pullQuote.quote} attribution={section.pullQuote.attribution} />
              </div>
            )}
          </m.section>

          {/* The company's licensed photo lives inline in the storytelling, right where
              the Rise section establishes the place, rather than only as the top banner. */}
          {section.id === 'rise' && <StoryFigure slug={currentSlug} />}
        </Fragment>
      ))}
    </div>
  )
}
