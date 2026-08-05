import { buildNarrativeValues, buildNarrativePath } from '@/lib/narrative'

export default function NarrativeArc({
  timeline,
  width = 160,
  height = 48,
  color = 'currentColor',
  strokeWidth = 2,
  showEndDot = true,
  fluid = false,
  className = '',
}) {
  const values = buildNarrativeValues(timeline)
  const { path, end } = buildNarrativePath(values, width, height)

  if (!path) return null

  return (
    <svg
      {...(fluid ? {} : { width, height })}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.85}
      />
      {showEndDot && <circle cx={end[0]} cy={end[1]} r={4} fill={color} />}
    </svg>
  )
}
