const PHASE_Y = {
  crisis: 0.1,
  fall: 0.35,
  turnaround: 0.6,
  rise: 0.7,
  zenith: 0.92,
}

export function buildNarrativeValues(timeline) {
  return timeline.map((event) => PHASE_Y[event.phase] ?? 0.5)
}

export function buildNarrativePath(values, width, height, padding = 6) {
  if (values.length < 2) return { path: '', end: [0, 0] }

  const innerHeight = height - padding * 2
  const stepX = width / (values.length - 1)
  const points = values.map((value, i) => [i * stepX, padding + (1 - value) * innerHeight])

  let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`
  for (let i = 1; i < points.length; i++) {
    const [x0, y0] = points[i - 1]
    const [x1, y1] = points[i]
    const midX = (x0 + x1) / 2
    const midY = (y0 + y1) / 2
    d += ` Q ${x0.toFixed(2)} ${y0.toFixed(2)} ${midX.toFixed(2)} ${midY.toFixed(2)}`
  }
  const last = points[points.length - 1]
  d += ` T ${last[0].toFixed(2)} ${last[1].toFixed(2)}`

  return { path: d, end: last }
}
