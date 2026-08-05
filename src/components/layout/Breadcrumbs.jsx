import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="container-editorial pt-6">
      <ol className="flex flex-wrap items-center gap-2 font-sans text-xs text-content-tertiary">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span className="text-content-secondary" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link to={item.path} className="link-underline hover:text-content">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
