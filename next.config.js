const path = require('path')
const withMarkdoc = require('@markdoc/next.js')
const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
  // @docsearch/react v4 ships ESM syntax in .js files without "type": "module",
  // so the externalized runtime require() crashes on old-Node lambdas and the
  // package must be bundled rather than required at runtime.
  transpilePackages: ['@docsearch/react'],
  // withMarkdoc only emits its Turbopack '*.md' rule when this key exists.
  turbopack: {},
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
// @markdoc/next.js 0.6.1's Turbopack rule forwards only these plugin options
// to its loader, so dir/pagesDir must be given here: without `dir` the
// loader's path.resolve(dir, schemaPath) crashes; without `pagesDir` no
// getStaticProps is emitted.
const finalConfig = withSentryConfig(
  withMarkdoc({
    dir: __dirname,
    pagesDir: path.join(__dirname, 'src', 'pages'),
    schemaPath: './markdoc',
    mode: 'static',
  })(nextConfig),
  sentryBuildOptions,
)

// The builds are Turbopack-only now: drop the webpack config that withMarkdoc
// unconditionally attaches (Next 16 fails fast on webpack config otherwise).
// Consequence: `next build --webpack` no longer compiles .md pages — the
// Turbopack path is the only supported build.
delete finalConfig.webpack

module.exports = finalConfig
