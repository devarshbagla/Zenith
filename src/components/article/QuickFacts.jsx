export default function QuickFacts({ facts }) {
  return (
    <div className="container-editorial relative z-10 -mt-16 sm:-mt-24">
      <aside
        aria-labelledby="quick-facts-heading"
        className="glass-on-dark rounded-2xl p-8 sm:p-10"
      >
        <h2
          id="quick-facts-heading"
          className="font-sans text-xs font-medium uppercase tracking-wider text-paper-300/70"
        >
          Quick Facts
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="border-l-2 border-zenith-400/70 pl-4">
              <dt className="font-sans text-xs uppercase tracking-wide text-paper-300/60">
                {fact.label}
              </dt>
              <dd className="mt-1 font-serif text-base text-paper-50">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </div>
  )
}
