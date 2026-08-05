import { useEffect, useState } from 'react'
import SEO from '@/components/seo/SEO'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import Button from '@/components/ui/Button'
import { breadcrumbSchema } from '@/lib/seo'
import { SITE } from '@/lib/constants'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const inputClasses =
  'w-full rounded-sm border border-content/20 bg-transparent px-4 py-3 font-sans text-sm text-content placeholder:text-content-tertiary focus-visible:border-zenith-500'

async function postJSON(url, body) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body),
  })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
  return data
}

export default function NewsletterPage() {
  const [authedEmail, setAuthedEmail] = useState(null)
  const [view, setView] = useState('signup')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) setAuthedEmail(data.email)
      })
      .catch(() => {})
  }, [])

  const resetFormState = () => {
    setError('')
    setNotice('')
    setStatus('idle')
  }

  const switchView = (nextView) => {
    setView(nextView)
    resetFormState()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    resetFormState()

    if (!EMAIL_PATTERN.test(email)) {
      setError('Enter a valid email address.')
      return
    }

    if (view !== 'forgot' && password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setStatus('loading')

    try {
      if (view === 'signup') {
        const data = await postJSON('/api/auth/signup', { email, password })
        setAuthedEmail(data.email)
      } else if (view === 'login') {
        const data = await postJSON('/api/auth/login', { email, password })
        setAuthedEmail(data.email)
      } else if (view === 'forgot') {
        await postJSON('/api/auth/forgot-password', { email })
        setNotice('If an account exists for that email, a reset link is on its way.')
      }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' }).catch(() => {})
    setAuthedEmail(null)
    setEmail('')
    setPassword('')
    switchView('login')
  }

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Newsletter', path: '/newsletter' },
  ]

  return (
    <>
      <SEO
        title={`Newsletter | ${SITE.name}`}
        description="Sign in or create an account to manage your From Dust to Zenith newsletter subscription."
        path="/newsletter"
        schema={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="container-reading py-16 sm:py-20">
        <h1 className="font-display text-4xl font-medium text-content sm:text-5xl">Newsletter</h1>
        <p className="mt-4 max-w-xl font-serif text-lg leading-relaxed text-content-secondary">
          One turnaround, every fortnight — the next case study, key lessons, and behind-the-scenes
          sourcing notes, delivered straight to your inbox.
        </p>

        <div className="mt-10 max-w-md">
          {authedEmail ? (
            <div className="rounded-sm border border-content/15 bg-surface-sunken/40 p-6">
              <p className="font-sans text-sm text-content-secondary">Signed in as</p>
              <p className="mt-1 font-display text-xl font-medium text-content">{authedEmail}</p>
              <p className="mt-4 font-sans text-sm text-content-secondary">
                You&rsquo;re subscribed. You&rsquo;ll hear from us when the next case study goes out.
              </p>
              <Button variant="outline" className="mt-6" onClick={handleLogout}>
                Log out
              </Button>
            </div>
          ) : (
            <>
              <div className="flex gap-6 border-b border-content/10">
                <button
                  type="button"
                  onClick={() => switchView('signup')}
                  className={`pb-3 font-sans text-sm font-medium transition-colors ${view === 'signup' ? 'border-b-2 border-zenith-500 text-content' : 'text-content-tertiary hover:text-content'}`}
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  onClick={() => switchView('login')}
                  className={`pb-3 font-sans text-sm font-medium transition-colors ${view === 'login' ? 'border-b-2 border-zenith-500 text-content' : 'text-content-tertiary hover:text-content'}`}
                >
                  Log In
                </button>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3" noValidate>
                <label className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
                  Email address
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className={`mt-2 ${inputClasses}`}
                  />
                </label>

                {view !== 'forgot' && (
                  <label className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
                    Password
                    <input
                      type="password"
                      required
                      autoComplete={view === 'signup' ? 'new-password' : 'current-password'}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="At least 8 characters"
                      className={`mt-2 ${inputClasses}`}
                    />
                  </label>
                )}

                <Button type="submit" variant="primary" className="mt-2" disabled={status === 'loading'}>
                  {status === 'loading'
                    ? 'Please wait…'
                    : view === 'signup'
                      ? 'Create account'
                      : view === 'login'
                        ? 'Log in'
                        : 'Send reset link'}
                </Button>

                {view === 'login' && (
                  <button
                    type="button"
                    onClick={() => switchView('forgot')}
                    className="link-underline self-start font-sans text-xs text-content-tertiary [background-size:100%_1px] hover:text-content"
                  >
                    Forgot your password?
                  </button>
                )}
                {view === 'forgot' && (
                  <button
                    type="button"
                    onClick={() => switchView('login')}
                    className="link-underline self-start font-sans text-xs text-content-tertiary [background-size:100%_1px] hover:text-content"
                  >
                    Back to log in
                  </button>
                )}

                {error && (
                  <p role="alert" className="font-sans text-sm text-crisis-500 dark:text-crisis-300">
                    {error}
                  </p>
                )}
                {notice && (
                  <p role="status" className="font-sans text-sm text-zenith-600 dark:text-zenith-400">
                    {notice}
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </section>
    </>
  )
}
