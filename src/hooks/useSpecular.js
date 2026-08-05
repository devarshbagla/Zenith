import { useRef } from 'react'

// Drives the .glass-specular highlight: sets CSS custom properties directly
// via the DOM (no React state/re-render) so the cursor-follow stays cheap.
export function useSpecular() {
  const ref = useRef(null)

  const onMouseMove = (event) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--glow-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--glow-y', `${event.clientY - rect.top}px`)
  }

  return { ref, onMouseMove }
}
