import * as Sentry from '@sentry/nextjs'
import { dataCollection } from './lib/sentry-data-collection'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0,
  dataCollection,
  // Session Replay intentionally omitted to keep the client bundle small.
})
