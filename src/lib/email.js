import { SITE } from './constants.js'

export async function sendEmail({ to, subject, html }) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `${SITE.name} <onboarding@resend.dev>`,
      to: [to],
      subject,
      html,
    }),
  })

  if (!response.ok) {
    const body = await response.text().catch(() => '')
    throw new Error(`Resend responded with ${response.status}: ${body}`)
  }
}

export function sendWelcomeEmail(email) {
  return sendEmail({
    to: email,
    subject: `You're on the list — ${SITE.name}`,
    html: `<p>You're subscribed to ${SITE.name}.</p><p>${SITE.tagline}. You'll hear from us when the next case study goes out — no noise, no spam.</p>`,
  })
}

export function sendPasswordResetEmail(email, resetUrl) {
  return sendEmail({
    to: email,
    subject: `Reset your password — ${SITE.name}`,
    html: `<p>Someone requested a password reset for your ${SITE.name} account.</p><p><a href="${resetUrl}">Click here to set a new password</a>. This link expires in 30 minutes.</p><p>If you didn't request this, you can safely ignore this email.</p>`,
  })
}
