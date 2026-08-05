import { createResetToken, getUserRecord } from '../../src/lib/authServer.js'
import { sendPasswordResetEmail } from '../../src/lib/email.js'
import { SITE } from '../../src/lib/constants.js'

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

  try {
    const user = await getUserRecord(normalizedEmail)
    // Always respond 200 whether or not the account exists, so this endpoint
    // can't be used to enumerate registered emails. Only send mail if real.
    if (user) {
      const token = await createResetToken(normalizedEmail)
      const resetUrl = `${SITE.url}/newsletter/reset?token=${token}`
      await sendPasswordResetEmail(normalizedEmail, resetUrl)
    }
  } catch (error) {
    console.error('Forgot-password flow failed:', error)
  }

  return response.status(200).json({ ok: true })
}
