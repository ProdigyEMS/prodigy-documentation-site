/**
 * Project-local shim around @markdoc/next.js's unmodified webpack loader so
 * markdoc .md pages compile under Turbopack.
 *
 * Why this exists: Turbopack's webpack-loader compatibility layer provides a
 * `this.getResolve()` whose resolver rejects the bare specifiers ('config',
 * 'tags', 'nodes', 'functions') that the markdoc loader resolves against the
 * schema directory with `preferRelative: true`. The upstream loader swallows
 * that rejection and silently falls back to an EMPTY schema, which breaks
 * rendering at prerender time. It also emits absolute-path imports, which
 * Turbopack rejects ("server relative imports are not implemented yet").
 *
 * REMOVE THIS SHIM when @markdoc/next.js >= 0.6.0 ships: the fix was merged
 * upstream (markdoc/next.js#67) but reverted over a Windows CI snapshot
 * failure; the retry is markdoc/next.js#70. Once released, the plugin's own
 * loader emits relative imports and this file plus the hand-written
 * `turbopack.rules` block in next.config.js collapse into plain plugin
 * options.
 */
const path = require('path')

// Resolve the upstream loader relative to the plugin entry point; the
// package's exports map does not expose ./src/loader as a subpath.
const markdocLoader = require(
  path.join(path.dirname(require.resolve('@markdoc/next.js')), 'loader.js'),
)

/**
 * Delegates to the upstream markdoc loader with a Node-based resolver that
 * (a) treats bare schema names as ./name, matching the preferRelative
 * semantics the loader expects, and (b) returns paths RELATIVE to the .md
 * file being compiled, because Turbopack cannot import absolute filesystem
 * paths.
 *
 * @param {string} source - Raw markdown source of the .md module.
 * @returns {void} The result is delivered via the loader's async callback.
 */
module.exports = function markdocTurbopackShim(source) {
  const ctx = Object.create(this)
  const importerDir = path.dirname(this.resourcePath)

  ctx.getResolve = () => (dir, request) => {
    const bare = request.startsWith('.') ? request : `./${request}`
    const abs = require.resolve(bare, { paths: [dir] })
    let rel = path.relative(importerDir, abs)
    if (!rel.startsWith('.')) {
      rel = `./${rel}`
    }

    return Promise.resolve(rel)
  }

  return markdocLoader.call(ctx, source)
}
