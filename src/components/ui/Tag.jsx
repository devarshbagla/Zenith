const PHASE_STYLES = {
  rise: 'bg-recovery-500/10 text-recovery-500 ring-recovery-500/20 dark:bg-recovery-400/15 dark:text-recovery-300 dark:ring-recovery-400/25',
  fall: 'bg-ink-500/10 text-ink-500 ring-ink-500/20 dark:bg-ink-300/10 dark:text-ink-300 dark:ring-ink-300/20',
  crisis: 'bg-crisis-500/10 text-crisis-500 ring-crisis-500/20 dark:bg-crisis-400/15 dark:text-crisis-300 dark:ring-crisis-400/25',
  turnaround: 'bg-zenith-600/10 text-zenith-700 ring-zenith-600/20 dark:bg-zenith-400/15 dark:text-zenith-300 dark:ring-zenith-400/25',
  zenith: 'bg-zenith-500/15 text-zenith-700 ring-zenith-500/30 dark:bg-zenith-400/20 dark:text-zenith-300 dark:ring-zenith-400/30',
}

export default function Tag({ children, phase, className = '' }) {
  const styles = phase ? PHASE_STYLES[phase] : 'bg-content/5 text-content-secondary ring-content/10'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-sans text-xs font-medium uppercase tracking-wider ring-1 ring-inset backdrop-blur-md backdrop-saturate-150 ${styles} ${className}`}
    >
      {children}
    </span>
  )
}
