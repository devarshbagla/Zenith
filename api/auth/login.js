import { getUserRecord, sessionCookie, signSession, verifyPassword } from '../../src/lib/authServer.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const GENERIC_ERROR = 'Incorrect email or password.'

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const { email, password } = request.body ?? {}

  if (typeof email !== 'string' || !EMAIL_PATTERN.test(email) || typeof password !== 'string') {
    return response.status(400).json({ error: GENERIC_ERROR })
  }

  const normalizedEmail = email.trim().toLowerCase()

  let user
  try {
    user = await getUserRecord(normalizedEmail)
  } catch (error) {
    console.error('Login lookup failed:', error)
    return response.status(502).json({ error: 'Something went wrong. Please try again.' })
  }

  // Same generic error whether the account doesn't exist or the password is
  // wrong -- distinguishing the two lets an attacker enumerate real emails.
  if (!user || !verifyPassword(password, user.passwordHash)) {
    return response.status(401).json({ error: GENERIC_ERROR })
  }

  const token = signSession(normalizedEmail)
  response.setHeader('Set-Cookie', sessionCookie(token))
  return response.status(200).json({ ok: true, email: normalizedEmail })
}
