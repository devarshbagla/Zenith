import { useEffect, useState } from 'react'

export default function ReadingProgress({ targetId }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const target = document.getElementById(targetId)
    if (!target) return undefined

    const onScroll = () => {
      const { top, height } = target.getBoundingClientRect()
      const viewport = window.innerHeight
      const total = height - viewport
      const scrolled = Math.min(Math.max(-top, 0), total)
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [targetId])

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-zenith-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
