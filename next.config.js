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
  // Hand-written Turbopack rule for markdoc .md pages. @markdoc/next.js
  // 0.5.0's own createTurbopackConfig omits the `dir`/`pagesDir` options its
  // loader requires (path.resolve(dir, schemaPath) crashes; without pagesDir
  // no getStaticProps is emitted), so the full option set is supplied here,
  // routed through the local shim loader (see that file for the why and the
  // removal condition — upstream fix pending in markdoc/next.js#70).
  turbopack: {
    rules: {
      '*.md': {
        loaders: [
          {
            loader: require.resolve('./markdoc-turbopack-loader.js'),
            options: {
              dir: __dirname,
              pagesDir: path.join(__dirname, 'src', 'pages'),
              schemaPath: './markdoc',
              mode: 'static',
            },
          },
        ],
        as: '*.js',
      },
    },
  },
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
const finalConfig = withSentryConfig(withMarkdoc()(nextConfig), sentryBuildOptions)

// withMarkdoc's createTurbopackConfig emits an incomplete '*.md' rule under
// the same key as ours and would win the spread; restore the complete rule.
finalConfig.turbopack = nextConfig.turbopack

// The builds are Turbopack-only now: drop the webpack config that withMarkdoc
// unconditionally attaches (Next 16 fails fast on webpack config otherwise).
// Consequence: `next build --webpack` no longer compiles .md pages — the
// Turbopack path via the shim is the only supported build.
delete finalConfig.webpack

module.exports = finalConfig
