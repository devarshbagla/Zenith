import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion, animate } from 'framer-motion'

// Initial render (SSR + first client paint) always shows the real value, so
// crawlers, no-JS clients, and slow connections see the correct number
// immediately. The count-from-zero effect only kicks in afterward, once the
// element scrolls into view — it's a decoration on top of real content, never
// a replacement for it.
export default function AnimatedNumber({ value, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!inView || reduceMotion) return
    setDisplay(0)
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, reduceMotion])

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString('en-US')}
    </span>
  )
}
