import * as Sentry from '@sentry/nextjs'
import { dataCollection } from './lib/sentry-data-collection'

// No edge routes exist today; this covers future middleware/edge additions.
if (process.env.NEXT_RUNTIME === 'edge') {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 0,
    dataCollection,
  })
}
