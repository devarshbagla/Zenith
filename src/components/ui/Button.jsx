import { Link } from 'react-router-dom'

const VARIANTS = {
  primary:
    'bg-ink-950 text-paper-50 hover:bg-ink-800 dark:bg-content dark:text-surface dark:hover:bg-content-secondary',
  inverse: 'bg-paper-50 text-ink-950 hover:bg-paper-200',
  outline:
    'border border-content/20 text-content hover:border-content/40 hover:bg-content/5',
  ghost: 'text-content hover:bg-content/5',
}

export default function Button({
  as = 'button',
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-sans text-sm font-medium tracking-wide transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zenith-500 ${VARIANTS[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={props.type || 'button'} className={classes} {...props}>
      {children}
    </button>
  )
}
