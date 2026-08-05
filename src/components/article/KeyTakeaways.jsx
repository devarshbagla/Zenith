export default function KeyTakeaways({ takeaways }) {
  return (
    <section aria-labelledby="takeaways-heading" className="bg-ink-950">
      <div className="container-reading py-16 sm:py-20">
        <h2 id="takeaways-heading" className="font-display text-2xl font-medium text-paper-50 sm:text-3xl">
          Key Takeaways
        </h2>
        <ol className="mt-8 space-y-6">
          {takeaways.map((point, index) => (
            <li key={index} className="flex gap-4">
              <span className="font-display text-lg font-medium text-zenith-400" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="font-serif text-base leading-relaxed text-paper-200">{point}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
