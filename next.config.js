const withMarkdoc = require('@markdoc/next.js')
const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
  // @docsearch/react v4 ships ESM syntax in .js files without "type": "module",
  // so the externalized runtime require() crashes on Node 20 (Netlify Lambda).
  // Bundling it via webpack avoids the runtime require entirely.
  transpilePackages: ['@docsearch/react'],
}

/**
 * Sentry build options. Source-map upload only happens when SENTRY_AUTH_TOKEN
 * is present in the build env; without it the build still succeeds and error
 * capture works, just with minified stack traces.
 *
 * @see https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
 */
const sentryBuildOptions = {
  org: 'prodigyems',
  project: 'docs',
  silent: !process.env.CI,
  widenClientFileUpload: true,
}

// withSentryConfig must be the outermost wrapper so it processes the final
// config produced by withMarkdoc.
module.exports = withSentryConfig(withMarkdoc()(nextConfig), sentryBuildOptions)
