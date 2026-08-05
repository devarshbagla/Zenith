import { put } from '@vercel/blob'
import { sendWelcomeEmail } from '../src/lib/email.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = request.body ?? {}

  if (typeof email !== 'string' || !EMAIL_PATTERN.test(email)) {
    return response.status(400).json({ error: 'A valid email address is required.' })
  }

  const normalizedEmail = email.trim().toLowerCase()
  // @vercel/blob encodes the pathname itself -- encoding it here too would
  // double-encode (e.g. "@" -> "%2540" instead of "%40"), the same bug
  // already found and fixed in the account-auth blob paths.
  const pathname = `subscribers/${normalizedEmail}.json`

  try {
    await put(
      pathname,
      JSON.stringify({ email: normalizedEmail, subscribedAt: new Date().toISOString() }),
      {
        access: 'private',
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: 'application/json',
      },
    )
  } catch (error) {
    console.error('Newsletter subscription failed:', error)
    return response.status(502).json({ error: 'Could not save your subscription. Please try again.' })
  }

  try {
    await sendWelcomeEmail(normalizedEmail)
  } catch (error) {
    // The subscription itself is already saved -- a welcome-email failure
    // shouldn't fail the signup, just gets logged for follow-up.
    console.error('Welcome email failed to send:', error)
  }

  return response.status(200).json({ ok: true })
}
