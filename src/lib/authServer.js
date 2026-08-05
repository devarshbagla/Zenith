import crypto from 'node:crypto'
import jwt from 'jsonwebtoken'
import { del, get, put } from '@vercel/blob'

const SCRYPT_KEYLEN = 64
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30

export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex')
  const derivedKey = crypto.scryptSync(password, salt, SCRYPT_KEYLEN)
  return `${salt}:${derivedKey.toString('hex')}`
}

export function verifyPassword(password, storedHash) {
  const [salt, key] = storedHash.split(':')
  if (!salt || !key) return false
  const derivedKey = crypto.scryptSync(password, salt, SCRYPT_KEYLEN)
  const keyBuffer = Buffer.from(key, 'hex')
  if (keyBuffer.length !== derivedKey.length) return false
  return crypto.timingSafeEqual(keyBuffer, derivedKey)
}

export function signSession(email) {
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: `${SESSION_MAX_AGE_SECONDS}s` })
}

export function verifySession(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch {
    return null
  }
}

export function sessionCookie(token) {
  return `session=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${SESSION_MAX_AGE_SECONDS}`
}

export function clearSessionCookie() {
  return `session=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`
}

export function parseCookies(header) {
  const cookies = {}
  if (!header) return cookies
  header.split(';').forEach((pair) => {
    const separatorIndex = pair.indexOf('=')
    if (separatorIndex === -1) return
    const key = pair.slice(0, separatorIndex).trim()
    const value = pair.slice(separatorIndex + 1).trim()
    if (key) cookies[key] = decodeURIComponent(value)
  })
  return cookies
}

function userPathname(email) {
  // No manual encodeURIComponent here -- the SDK encodes the pathname itself
  // when building the blob's URL. Pre-encoding double-encodes the "@" (put()
  // silently "succeeds" at a differently-interpreted path than get() then
  // looks up), which made every read miss a record that really was there.
  return `users/${email}.json`
}

export async function getUserRecord(email) {
  // useCache:false -- an existence check that lags behind a just-completed
  // write (e.g. immediately after signup) would let duplicate accounts
  // through or make a fresh login look like the account doesn't exist.
  const result = await get(userPathname(email), { access: 'private', useCache: false })
  if (!result || result.statusCode !== 200) return null
  const text = await new Response(result.stream).text()
  return JSON.parse(text)
}

export async function putUserRecord(email, record) {
  await put(userPathname(email), JSON.stringify(record), {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
  })
}

function resetTokenPathname(token) {
  return `password-resets/${token}.json`
}

export async function createResetToken(email) {
  const token = crypto.randomBytes(32).toString('hex')
  await put(
    resetTokenPathname(token),
    JSON.stringify({ email, expiresAt: Date.now() + 1000 * 60 * 30 }),
    { access: 'private', addRandomSuffix: false, allowOverwrite: true, contentType: 'application/json' },
  )
  return token
}

export async function consumeResetToken(token) {
  const result = await get(resetTokenPathname(token), { access: 'private', useCache: false })
  if (!result || result.statusCode !== 200) return null
  const text = await new Response(result.stream).text()
  const record = JSON.parse(text)

  // Single-use: delete the token the moment it's read, whether or not it
  // turns out to still be valid, so it can never be replayed.
  await del(resetTokenPathname(token)).catch(() => {})

  if (record.expiresAt < Date.now()) return null
  return record.email
}
