import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import Button from '@/components/ui/Button'
import { breadcrumbSchema } from '@/lib/seo'
import { SITE } from '@/lib/constants'

const inputClasses =
  'w-full rounded-sm border border-content/20 bg-transparent px-4 py-3 font-sans text-sm text-content placeholder:text-content-tertiary focus-visible:border-zenith-500'

export default function NewsletterResetPage() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token') ?? ''
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Newsletter', path: '/newsletter' },
    { name: 'Reset Password', path: '/newsletter/reset' },
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!token) {
      setError('This reset link is missing its token. Request a new one from the newsletter page.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setStatus('loading')
    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ token, password }),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <>
      <SEO
        title={`Reset Password | ${SITE.name}`}
        description="Set a new password for your From Dust to Zenith newsletter account."
        path="/newsletter/reset"
        noindex
        schema={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="container-reading py-16 sm:py-20">
        <h1 className="font-display text-4xl font-medium text-content sm:text-5xl">Reset Password</h1>

        <div className="mt-10 max-w-md">
          {status === 'success' ? (
            <div className="rounded-sm border border-content/15 bg-surface-sunken/40 p-6">
              <p className="font-sans text-sm text-content-secondary">
                Your password has been reset. You&rsquo;re signed in.
              </p>
              <Button to="/newsletter" variant="outline" className="mt-6">
                Go to Newsletter
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
              <label className="font-sans text-xs font-medium uppercase tracking-wider text-content-tertiary">
                New password
                <input
                  type="password"
                  required
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="At least 8 characters"
                  className={`mt-2 ${inputClasses}`}
                />
              </label>

              <Button type="submit" variant="primary" className="mt-2" disabled={status === 'loading'}>
                {status === 'loading' ? 'Please wait…' : 'Set new password'}
              </Button>

              {error && (
                <p role="alert" className="font-sans text-sm text-crisis-500 dark:text-crisis-300">
                  {error}
                </p>
              )}

              <Link
                to="/newsletter"
                className="link-underline mt-2 self-start font-sans text-xs text-content-tertiary [background-size:100%_1px] hover:text-content"
              >
                Back to Newsletter
              </Link>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
