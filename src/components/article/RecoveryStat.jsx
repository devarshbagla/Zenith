export default function RecoveryStat({ stat }) {
  if (!stat) return null

  return (
    <section aria-labelledby="recovery-stat-heading" className="container-reading py-4">
      <div className="rounded-2xl border border-content/10 bg-surface-sunken/50 p-8 sm:p-10">
        <p
          id="recovery-stat-heading"
          className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary"
        >
          {stat.metric}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-6 sm:gap-10">
          <div>
            <p className="font-sans text-xs uppercase tracking-wide text-content-tertiary">
              {stat.before.label}
            </p>
            <p className="mt-1 font-display text-2xl font-medium text-content-secondary sm:text-3xl">
              {stat.before.value}
            </p>
          </div>

          <svg
            width="32"
            height="16"
            viewBox="0 0 32 16"
            fill="none"
            aria-hidden="true"
            className="shrink-0 text-zenith-500 dark:text-zenith-400"
          >
            <path
              d="M1 8H30M30 8L23 1M30 8L23 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div>
            <p className="font-sans text-xs uppercase tracking-wide text-zenith-700 dark:text-zenith-400">
              {stat.after.label}
            </p>
            <p className="mt-1 font-display text-2xl font-medium text-content sm:text-3xl">
              {stat.after.value}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
