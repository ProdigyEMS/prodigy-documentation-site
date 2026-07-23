import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

/**
 * Flat config replacing .eslintrc.json ("extends": "next/core-web-vitals")
 * after Next 16 removed `next lint`.
 */
const eslintConfig = defineConfig([
  ...nextVitals,
  // Preserve eslint-config-next's default ignores when overriding them.
  // Netlify edge functions run in Deno (different globals: `Deno`, Web APIs),
  // so they are outside the Next app's lint surface.
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'netlify/edge-functions/**',
  ]),
])

export default eslintConfig
