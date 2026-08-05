import { useEffect, useRef, useState } from 'react'
import { useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

const SPRING = { stiffness: 300, damping: 30, mass: 0.5 }

export function useTilt({ max = 6 } = {}) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), SPRING)
  const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), SPRING)

  useEffect(() => {
    setEnabled(!reduceMotion && window.matchMedia('(pointer: fine)').matches)
  }, [reduceMotion])

  const handleMouseMove = (event) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width)
    y.set((event.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return {
    ref,
    tiltProps: enabled
      ? {
          style: { rotateX, rotateY, transformPerspective: 800 },
          onMouseMove: handleMouseMove,
          onMouseLeave: handleMouseLeave,
        }
      : {},
  }
}
