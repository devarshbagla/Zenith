import {
  getUserRecord,
  hashPassword,
  putUserRecord,
  sessionCookie,
  signSession,
} from '../../src/lib/authServer.js'
import { sendWelcomeEmail } from '../../src/lib/email.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const { email, password } = request.body ?? {}

  if (typeof email !== 'string' || !EMAIL_PATTERN.test(email)) {
    return response.status(400).json({ error: 'A valid email address is required.' })
  }
  if (typeof password !== 'string' || password.length < 8) {
    return response.status(400).json({ error: 'Password must be at least 8 characters.' })
  }

  const normalizedEmail = email.trim().toLowerCase()

  try {
    const existing = await getUserRecord(normalizedEmail)
    if (existing) {
      return response.status(409).json({ error: 'An account with this email already exists.' })
    }

    await putUserRecord(normalizedEmail, {
      email: normalizedEmail,
      passwordHash: hashPassword(password),
      createdAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Signup failed:', error)
    return response.status(502).json({ error: 'Could not create your account. Please try again.' })
  }

  try {
    await sendWelcomeEmail(normalizedEmail)
  } catch (error) {
    console.error('Welcome email failed to send:', error)
  }

  const token = signSession(normalizedEmail)
  response.setHeader('Set-Cookie', sessionCookie(token))
  return response.status(200).json({ ok: true, email: normalizedEmail })
}
