import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

import handler, { config } from '../netlify/edge-functions/private-docs-auth.js'

const DEMO_GUIDE = new URL(
  '../src/pages/docs/private/compliance-dashboard-demo.md',
  import.meta.url,
)

function setCredentials(user = 'reviewer', password = 'correct horse') {
  globalThis.Deno = {
    env: {
      get(name) {
        return {
          DOCS_PRIVATE_USER: user,
          DOCS_PRIVATE_PASSWORD: password,
        }[name]
      },
    },
  }
}

function basicAuth(user, password) {
  const bytes = new TextEncoder().encode(`${user}:${password}`)
  let binary = ''

  for (const byte of bytes) {
    binary += String.fromCharCode(byte)
  }

  return `Basic ${btoa(binary)}`
}

test('protects Next.js data routes for private docs', () => {
  assert.ok(
    config.path.includes('/_next/data/:buildId/docs/private/*'),
    'the gate must cover the JSON data route as well as the rendered page',
  )
})

test('does not commit demo credentials to the public repository', async () => {
  const guide = await readFile(DEMO_GUIDE, 'utf8')

  assert.doesNotMatch(guide, /\*\*Demo link:\*\*/)
  assert.doesNotMatch(guide, /\| Persona \| Email \| Password \|/)
})

test('allows a request with valid credentials to continue', async () => {
  setCredentials()
  let continued = false
  const request = new Request('https://docs.example.test/docs/private/guide', {
    headers: {
      authorization: `Basic ${btoa('reviewer:correct horse')}`,
    },
  })

  const response = await handler(request, {
    next() {
      continued = true
      return new Response('private guide')
    },
  })

  assert.equal(response.status, 200)
  assert.equal(continued, true)
})

test('allows UTF-8 credentials', async () => {
  const user = 'réviewer'
  const password = 'sésame 🔒'
  setCredentials(user, password)
  let continued = false
  const request = new Request('https://docs.example.test/docs/private/guide', {
    headers: { authorization: basicAuth(user, password) },
  })

  const response = await handler(request, {
    next() {
      continued = true
      return new Response('private guide')
    },
  })

  assert.equal(response.status, 200)
  assert.equal(continued, true)
})

test('prevents authenticated private responses from being cached', async () => {
  setCredentials()
  const request = new Request('https://docs.example.test/docs/private/guide', {
    headers: { authorization: basicAuth('reviewer', 'correct horse') },
  })

  const response = await handler(request, {
    next() {
      return new Response('private guide', {
        headers: {
          'Cache-Control': 'public, max-age=0, must-revalidate',
          'CDN-Cache-Control': 'public, s-maxage=31536000',
          'Netlify-CDN-Cache-Control': 'public, s-maxage=31536000',
          'X-Downstream-Header': 'preserved',
        },
      })
    },
  })

  assert.equal(response.headers.get('cache-control'), 'no-store')
  assert.equal(response.headers.get('cdn-cache-control'), 'no-store')
  assert.equal(response.headers.get('netlify-cdn-cache-control'), 'no-store')
  assert.equal(response.headers.get('x-downstream-header'), 'preserved')
})

test('fails closed when credentials are missing', async () => {
  globalThis.Deno = { env: { get: () => undefined } }

  const response = await handler(
    new Request('https://docs.example.test/docs/private/guide'),
    { next: () => new Response('must not be served') },
  )

  assert.equal(response.status, 401)
  assert.equal(response.headers.get('cache-control'), 'no-store')
})
