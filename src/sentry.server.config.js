import * as Sentry from '@sentry/nextjs'

// Top-level init runs the moment this module is evaluated (via the static
// import in instrumentation.js). Netlify's plugin-nextjs does not reliably
// invoke the instrumentation register() hook per route Lambda
// (opennextjs-netlify#3503), so init must NOT live inside register().
// Guard on the runtime so a stray edge-bundle import can't double-init.
if (process.env.NEXT_RUNTIME === 'nodejs') {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    // Performance tracing off; error capture is unaffected.
    tracesSampleRate: 0,
  })
}
