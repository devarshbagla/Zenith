import { useTheme } from '@/lib/theme'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      // Server always prerenders assuming "light" (it has no access to the visitor's
      // localStorage/system preference); the real theme is applied by a blocking
      // inline script before paint and read into React state on hydration. That
      // makes this label a legitimate server/client mismatch, not a bug — both icons
      // are always in the DOM and CSS (not JS) decides which one shows, so nothing
      // structural differs, only this one attribute.
      suppressHydrationWarning
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-content/5 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="absolute h-[18px] w-[18px] fill-none stroke-current stroke-[1.6] dark:hidden"
      >
        <circle cx="12" cy="12" r="4.5" />
        <path
          strokeLinecap="round"
          d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        />
      </svg>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="absolute hidden h-[18px] w-[18px] fill-current dark:block"
      >
        <path d="M20.4 14.7A8.6 8.6 0 1 1 9.3 3.6a7 7 0 0 0 11.1 11.1Z" />
      </svg>
    </button>
  )
}
