# AGENTS Instructions

Public docs site for docs.prodigyems.com — Next.js **pages router** (JS, not TS), Markdoc content, deployed by Netlify project `prodigydocumentation` from `main`. This file captures the operational gotchas learned in the July 2026 outage postmortem (PRD-2004: sitewide 500s for ~70 hours with every check green).

## The one lesson that matters

**A green build does not mean a working site.** Every page is SSG'd, so `next build` succeeds even when the server handler crashes on every request. The outage class here is *runtime-only* failure on Netlify's Lambda. Anything you change must be verified against a **deploy preview** (which runs the real Lambda handler), not just the build or local dev.

## Node version: `.nvmrc` is the single source of truth

`.nvmrc` drives **three** things that must never diverge (their divergence caused PRD-2004):

1. The Netlify **build** Node version (`.nvmrc` outranks the dashboard's dependency-management setting),
2. the Netlify **functions runtime** (Lambda runs the same major as the build — this is Netlify behavior, not config),
3. **CI** (`setup-node` reads `node-version-file: .nvmrc`).

Never pin Node anywhere else (workflow files, `NODE_VERSION` env var, dashboard). The dashboard pin is kept aligned for display purposes only.

## CI

`.github/workflows/ci.yml` builds and then **boots `next start` and asserts real HTTP responses** (200s on known pages, 404 on an unknown path). This exists because of the outage — do not remove the smoke test, and if you add significant pages consider adding one to the check list. Actions are SHA-pinned per supply-chain policy.

## Sentry (project `prodigyems/docs`)

- Server-side init uses **static imports + top-level `NEXT_RUNTIME`-guarded `Sentry.init()`** in `src/sentry.*.config.js`, imported from `src/instrumentation.js`. This is deliberate: Netlify's plugin-nextjs does **not** reliably call the instrumentation `register()` hook per route Lambda ([opennextjs-netlify#3503](https://github.com/opennextjs/opennextjs-netlify/issues/3503)), and OpenNext drops dynamic imports in instrumentation. Do not "modernize" this to the wizard's default pattern — it silently loses server events on this stack.
- **Verify capture after any Sentry or infra change:** hit `/api/sentry-test?marker=<something-unique>` on a deploy preview and confirm the event (with your marker) arrives in Sentry. That endpoint throws deliberately and exists for exactly this. A dashboard "Send Test Event" does NOT exercise the real path.
- Alerts: issue alert → Slack `#exceptions` (mirrors the app's frontend project). DSN comes from `NEXT_PUBLIC_SENTRY_DSN` (Netlify env, all contexts; DSNs are public-safe). `SENTRY_AUTH_TOKEN` (builds scope) enables source-map upload; without it builds still succeed with minified traces.

## Uptime monitoring

docs.prodigyems.com has a Route53 health check + CloudWatch alarm (`HealthCheckDocsProdAlarm` in the monorepo's `infra/monitoring-stack.yml`) → `prodigy-alarms` SNS → Chatbot → Slack `#dev`. If you rename/move the site, the health check must follow.

## Debugging a production incident

- Netlify **per-deploy permalinks** (`https://<deployId>--prodigydocumentation.netlify.app`) are immutable, including their serverless functions. Curl them to bisect exactly which deploy broke production.
- Function logs are dashboard-only: app.netlify.com → the project → Logs & metrics → Functions (tail while curling the site).
- DNS: `docs.prodigyems.com` is a Route53 CNAME (zone `prodigyems.com`) → `prodigydocumentation.netlify.app`.

## Dependency updates (Renovate)

- Renovate PRs get a deploy preview — **check the preview actually serves 200s before merging**, especially for majors. The outage was a merged major (`@docsearch/react` v4) whose packaging bug only manifested at Lambda runtime.
- `transpilePackages: ['@docsearch/react']` in `next.config.js` works around that packaging bug (ESM syntax in `.js` files without `"type": "module"`). Removing it requires proving the package fixed its packaging.
- Majors that change build tooling (Tailwind, Next itself) need real migration work — do not merge on a red preview.

## Turbopack + Markdoc

Builds run on Turbopack (Next 16 default). `@markdoc/next.js` 0.5.0's own Turbopack support is broken (incomplete loader options, bare-specifier resolution silently producing an empty schema, absolute-path imports), so `next.config.js` wires a hand-written `turbopack.rules` entry through the project-local shim `markdoc-turbopack-loader.js`. **Do not add `--webpack` back**: the webpack config is deliberately stripped from the final Next config, so webpack builds no longer compile `.md` pages. Remove the shim + rules when `@markdoc/next.js` ≥ 0.6.0 ships the upstream fix (markdoc/next.js#70).

## Tailwind v4 gotchas

- In v4, the typography plugin's `.prose` rules land in the **same cascade layer as utilities**, so an equal-specificity `.prose :where(p)` rule can override utilities like `m-0` on elements rendered inside the page-level Prose wrapper (in v3 utilities always won). Components that render inside docs content must mark non-prose elements with `not-prose` (see `Callout.jsx`, `QuickLinks.jsx`). Symptom: mysterious extra margins inside callouts/cards.
- There is no `tailwind.config.js` — the theme lives in `src/styles/tailwind.css` (`@theme` block); dark mode is the `@custom-variant dark` line; typography loads via `@plugin`.
- v4's browser floor is Safari 16.4+ / Chrome 111+ / Firefox 128+; the `:focus-visible` polyfill was removed accordingly.

## Merging PRs

`main` requires one approving review with `enforce_admins` on, and the PR author cannot self-approve. Solo-maintainer merges require a second reviewer or temporarily lifting `enforce_admins` (restore it immediately).
