import * as Sentry from '@sentry/nextjs'

// Idempotent server-side Sentry init, imported from _app so it runs when any
// page's server bundle loads. Needed because Netlify's Next runtime does not
// reliably load instrumentation.js (opennextjs-netlify#3503) — with Turbopack
// builds the static-import workaround in src/instrumentation.js stops being
// enough (verified: a deliberate preview throw produced no Sentry event).
// Guards: never on the client, never double-init (getClient()), and uses
// `typeof window` rather than NEXT_RUNTIME so it still fires if the Netlify
// bundle does not set that env var.
if (
  typeof window === 'undefined' &&
  !Sentry.getClient() &&
  process.env.NEXT_PUBLIC_SENTRY_DSN
) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 0,
  })
}
