import {
  consumeResetToken,
  getUserRecord,
  hashPassword,
  putUserRecord,
  sessionCookie,
  signSession,
} from '../../src/lib/authServer.js'

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const { token, password } = request.body ?? {}

  if (typeof token !== 'string' || !token) {
    return response.status(400).json({ error: 'Missing or invalid reset token.' })
  }
  if (typeof password !== 'string' || password.length < 8) {
    return response.status(400).json({ error: 'Password must be at least 8 characters.' })
  }

  let email
  try {
    email = await consumeResetToken(token)
  } catch (error) {
    console.error('Reset token lookup failed:', error)
    return response.status(502).json({ error: 'Something went wrong. Please try again.' })
  }

  if (!email) {
    return response.status(400).json({ error: 'This reset link is invalid or has expired.' })
  }

  try {
    const user = await getUserRecord(email)
    if (!user) {
      return response.status(400).json({ error: 'This reset link is invalid or has expired.' })
    }
    await putUserRecord(email, { ...user, passwordHash: hashPassword(password) })
  } catch (error) {
    console.error('Password reset failed:', error)
    return response.status(502).json({ error: 'Could not reset your password. Please try again.' })
  }

  const sessionToken = signSession(email)
  response.setHeader('Set-Cookie', sessionCookie(sessionToken))
  return response.status(200).json({ ok: true, email })
}
