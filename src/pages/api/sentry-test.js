/**
 * Deliberate server-side crash endpoint for verifying Sentry capture on the
 * deployed Netlify Lambda. PRD-2004 taught us that server-side crashes on
 * this stack can be invisible to builds, CI, and local dev — the only
 * trustworthy verification is throwing on the real runtime and seeing the
 * event arrive in Sentry. Hit /api/sentry-test?marker=<id> after a deploy to
 * re-verify the pipeline end to end.
 *
 * @param {import('next').NextApiRequest} req - Incoming API request.
 * @param {import('next').NextApiResponse} res - API response (never used; the throw happens first).
 * @returns {void} Never returns; always throws.
 */
export default function handler(req, res) {
  throw new Error(
    `Sentry verification error (deliberate) marker=${req.query.marker ?? 'none'}`
  )
}
