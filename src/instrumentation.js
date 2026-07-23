import * as Sentry from '@sentry/nextjs'

// Static imports (NOT dynamic import()) — OpenNext/Netlify drops dynamic
// imports inside instrumentation, which silently disables server-side
// capture. Each config self-guards on NEXT_RUNTIME.
import './sentry.server.config'
import './sentry.edge.config'

// Next.js 15 hook: captures errors thrown in API routes, getServerSideProps,
// and middleware.
export const onRequestError = Sentry.captureRequestError

/**
 * Next.js instrumentation entry point. Initialization happens via the static
 * imports above because Netlify's runtime does not reliably call register()
 * (opennextjs-netlify#3503), so this is intentionally a no-op.
 */
export function register() {}
