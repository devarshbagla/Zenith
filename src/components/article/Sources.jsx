export default function Sources({ sources }) {
  return (
    <section aria-labelledby="sources-heading" className="container-reading py-16 sm:py-20">
      <h2 id="sources-heading" className="font-display text-2xl font-medium text-content sm:text-3xl">
        Sources
      </h2>
      <ol className="mt-6 space-y-3 font-sans text-sm text-content-secondary">
        {sources.map((source, index) => (
          <li key={index} className="flex gap-3">
            <span className="text-content-tertiary">{index + 1}.</span>
            <span>
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-content underline decoration-content/30 underline-offset-2 transition-colors hover:decoration-zenith-500"
                >
                  {source.label}
                </a>
              ) : (
                source.label
              )}
              {source.publisher && <span className="text-content-tertiary"> — {source.publisher}</span>}
              {source.year && <span className="text-content-tertiary">, {source.year}</span>}
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
