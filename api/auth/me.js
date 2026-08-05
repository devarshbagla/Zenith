import { parseCookies, verifySession } from '../../src/lib/authServer.js'

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const cookies = parseCookies(request.headers.cookie)
  const session = cookies.session ? verifySession(cookies.session) : null

  if (!session) {
    return response.status(200).json({ authenticated: false })
  }

  return response.status(200).json({ authenticated: true, email: session.email })
}
