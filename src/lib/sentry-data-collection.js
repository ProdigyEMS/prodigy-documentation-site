// @sentry/nextjs v11 replaced `sendDefaultPii` with `dataCollection` and made
// the defaults permissive (cookies, request/response bodies, user IPs). This
// is the migration guide's "keep the v10 default behavior" baseline, so the
// upgrade does not start shipping request data (e.g. traffic to the gated
// /docs/private pages) to Sentry. Shared by every Sentry.init call.
// https://github.com/getsentry/sentry-javascript/blob/develop/MIGRATION.md
const deny = { deny: ['forwarded', '-ip', 'remote-', 'via', '-user'] }

export const dataCollection = {
  userInfo: false,
  cookies: false,
  httpHeaders: { request: deny, response: deny },
  httpBodies: [],
  urlQueryParams: deny,
  genAI: { inputs: false, outputs: false },
  databaseQueryData: false,
  queues: false,
  graphQL: { document: false, variables: false },
}
