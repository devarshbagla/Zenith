import SEO from '@/components/seo/SEO'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { breadcrumbSchema } from '@/lib/seo'
import { SITE } from '@/lib/constants'

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]

  return (
    <>
      <SEO
        title={`About | ${SITE.name}`}
        description="Why From Dust to Zenith exists, how it was built with AI-assisted development, and what eighteen business turnarounds have to teach anyone building something of their own."
        path="/about"
        schema={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="container-reading py-16 sm:py-20">
        <h1 className="font-display text-4xl font-medium text-content sm:text-5xl">About</h1>

        <div className="prose-editorial mt-8 space-y-6">
          <p>
            {SITE.name} is an independent editorial project documenting the greatest corporate
            turnarounds in business history — moments when a company&rsquo;s survival was
            genuinely uncertain, and the specific decisions that brought it back.
          </p>
          <p>
            Each case study is built around the same structure: the rise that established the
            company, the fall that put it at risk, the crisis that made the stakes undeniable,
            and the strategy, leadership, and innovation that reversed course. We close every
            story with the financial recovery and the lessons that generalize beyond the specific
            company.
          </p>
          <p>
            We write for students, MBA candidates, founders, operators, and investors who want the
            actual mechanism behind a turnaround, not just the headline outcome. Every article is
            sourced from public filings, court records, contemporary reporting, and executives&rsquo;
            own published accounts, with full source lists included at the end of each piece.
          </p>
        </div>

        <div className="mt-16 border-t border-content/15 pt-12">
          <p className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
            Why This Project Exists
          </p>
          <div className="prose-editorial mt-6 space-y-6">
            <p>
              I wanted to build something that was equal parts research, writing, design, and
              engineering — not another CRUD app, and not another template with placeholder
              copy. Business turnarounds felt like the right subject: every one of them is
              already a complete story with real stakes, and studying how eighteen very
              different companies each found their way back from the brink turns out to be a
              genuinely good way to think about resilience in any kind of work, including this
              one.
            </p>
            <p>
              This site was built with heavy AI-assisted development from the ground up —
              research, writing, component architecture, the visual system, image sourcing and
              licensing verification, and iteration on the design were all done in close
              collaboration with AI tooling. What that changes isn&rsquo;t the standard of the
              output; it&rsquo;s the timeline. Decisions about structure, tone, what to cut, and
              when something still felt wrong were mine throughout. The goal was never to hide
              that AI was part of the process — if anything, this project is meant to be an
              honest demonstration of what that workflow can produce when it&rsquo;s directed
              carefully.
            </p>
            <p>
              The eighteen companies here were chosen for range, not just recognizability:
              bankruptcies, brand collapses, product failures, and leadership crises, spanning
              technology, retail, automotive, food, fashion, and entertainment. That range is
              what makes the cross-cutting patterns on the{' '}
              <a href="/lessons" className="link-underline text-content [background-size:100%_1px]">
                Lessons
              </a>{' '}
              page hold up — the same handful of mechanisms show up again and again, regardless
              of industry.
            </p>
            <p>
              If you take one thing from this site, I&rsquo;d want it to be this: nearly every
              company here looked finished at some point, by people who had every reason to
              know better. What separated the ones that came back wasn&rsquo;t luck — it was a
              specific, nameable decision. That&rsquo;s worth remembering whether you&rsquo;re
              running a company, joining one, or building something of your own on the side.
            </p>
            <p>
              I wrote more about why shipping a real project like this one beats collecting
              another certificate{' '}
              <a
                href="https://bharatbagree.substack.com/p/why-projectscerts-almost-always"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-content [background-size:100%_1px]"
              >
                on my Substack
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-content/15 pt-10">
          <p className="font-sans text-xs uppercase tracking-wider text-content-tertiary">
            A few lines that live in my head while I build things
          </p>
          <blockquote className="mt-4 font-display text-xl italic leading-snug text-content-secondary">
            &ldquo;Only the dead fish go with the flow.&rdquo;
          </blockquote>
          <blockquote className="mt-3 font-display text-xl italic leading-snug text-content-secondary">
            &ldquo;You&rsquo;ll never know if you never try.&rdquo;
          </blockquote>
          <blockquote className="mt-3 font-display text-xl italic leading-snug text-content-secondary">
            &ldquo;If not now, then when?&rdquo;
          </blockquote>
        </div>

        <p className="prose-editorial mt-16 border-t border-content/15 pt-8 text-sm text-content-tertiary">
          {SITE.name} is an independent publication and is not affiliated with, endorsed by, or
          sponsored by any of the companies featured.
        </p>
      </section>
    </>
  )
}
