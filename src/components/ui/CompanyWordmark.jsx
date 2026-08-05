import { Link } from 'react-router-dom'

export default function CompanyWordmark({ company, className = '', dotSize = 'h-1.5 w-1.5' }) {
  return (
    <Link to={`/stories/${company.slug}`} className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className={`shrink-0 rounded-full ${dotSize}`}
        style={{ backgroundColor: company.accent.to }}
        aria-hidden="true"
      />
      {company.name}
    </Link>
  )
}
