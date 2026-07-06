const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
  // @docsearch/react v4 ships ESM syntax in .js files without "type": "module",
  // so the externalized runtime require() crashes on Node 20 (Netlify Lambda).
  // Bundling it via webpack avoids the runtime require entirely.
  transpilePackages: ['@docsearch/react'],
}

module.exports = withMarkdoc()(nextConfig)
