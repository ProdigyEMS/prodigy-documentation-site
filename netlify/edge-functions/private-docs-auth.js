/**
 * HTTP Basic Auth gate for non-public docs.
 *
 * Any page under `/docs/private/*` is served only to requests that present the
 * right Basic Auth credentials. This is a generic, reusable gate: to lock a
 * new doc, put it under `src/pages/docs/private/` — no per-page wiring needed.
 *
 * The credentials come from Netlify environment variables (set in the site's
 * dashboard, NOT committed): `DOCS_PRIVATE_USER` and `DOCS_PRIVATE_PASSWORD`.
 * They apply across deploy contexts, so preview and production share one
 * credential. If either is unset the gate FAILS CLOSED — the page is locked
 * (401) until configured, so a misconfiguration never exposes private content.
 *
 * Note: this protects the rendered page. The Markdown source still lives in the
 * public repo, and the screenshots under `/images/compliance-demo/` are not
 * gated (they carry no credentials — anonymized UI only). Do not put real
 * secrets in a private doc's committed source.
 *
 * @see https://docs.netlify.com/build/edge-functions/
 */

const REALM = 'Prodigy Docs (private)';

/**
 * Build a 401 response that prompts the browser for Basic Auth credentials.
 *
 * @returns {Response} A 401 with a `WWW-Authenticate` challenge header.
 */
function unauthorized() {
  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
      'Content-Type': 'text/plain; charset=utf-8',
      // Never let a browser or CDN cache the gate's challenge as page content.
      'Cache-Control': 'no-store',
    },
  });
}

/**
 * Length-safe, constant-time-ish string comparison to avoid leaking match
 * length via response timing. Not a hard guarantee in a JIT runtime, but it
 * removes the trivial early-exit `!==` side channel.
 *
 * @param {string} a - First string.
 * @param {string} b - Second string.
 * @returns {boolean} True when the strings are byte-for-byte equal.
 */
function safeEqual(a, b) {
  const enc = new TextEncoder();
  const ab = enc.encode(a);
  const bb = enc.encode(b);
  // Compare against a fixed-length buffer so length differences don't early-exit.
  const len = Math.max(ab.length, bb.length);
  let mismatch = ab.length ^ bb.length;
  for (let i = 0; i < len; i += 1) {
    mismatch |= (ab[i] ?? 0) ^ (bb[i] ?? 0);
  }

  return mismatch === 0;
}

/**
 * Edge handler: enforce Basic Auth, then continue to the framework renderer.
 *
 * @param {Request} request - The incoming request.
 * @param {import('@netlify/edge-functions').Context} context - Netlify context.
 * @returns {Promise<Response>} The 401 challenge, or the downstream response.
 */
export default async function handler(request, context) {
  const expectedUser = Deno.env.get('DOCS_PRIVATE_USER');
  const expectedPassword = Deno.env.get('DOCS_PRIVATE_PASSWORD');

  // Fail closed: no configured credentials means nobody gets in.
  if (!expectedUser || !expectedPassword) {
    return unauthorized();
  }

  const header = request.headers.get('authorization') ?? '';
  if (!header.startsWith('Basic ')) {
    return unauthorized();
  }

  let decoded;
  try {
    decoded = atob(header.slice('Basic '.length).trim());
  } catch {
    return unauthorized();
  }

  // Only split on the FIRST colon — passwords may contain colons.
  const separator = decoded.indexOf(':');
  if (separator === -1) {
    return unauthorized();
  }
  const user = decoded.slice(0, separator);
  const password = decoded.slice(separator + 1);

  // Evaluate both comparisons regardless of the first result (no `&&`
  // short-circuit) so a wrong username and a wrong password cost the same.
  const userOk = safeEqual(user, expectedUser);
  const passwordOk = safeEqual(password, expectedPassword);
  if (!(userOk && passwordOk)) {
    return unauthorized();
  }

  return context.next();
}

export const config = {
  path: ['/docs/private', '/docs/private/*'],
};
