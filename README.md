# AUTHEO documentation — plain static files

**Open [index.html](index.html), or serve this repository root. No build required.** All 23 reviewed documents are committed as complete HTML pages with relative links and local CSS. Reading, navigation, headings, tables and code work without JavaScript. Optional local full-text search adds no backend or CDN dependency.

## Simplest hosting

- Publish directory: **repository root (`./`)**.
- Build command: **none**.
- Serve ordinary files and directory `index.html`; **no SPA rewrite or clean-URL fallback**.
- The same files work at a domain root or a subpath such as `/autheo-dev-docs/`, without rebuilding. Direct document URLs end in `.html` and work on reload.

For a local loopback preview, with Node.js 22 or newer (no package installation needed):

~~~sh
node scripts/serve.mjs
~~~

Open the printed URL. This preview only serves the explicit static-output allowlist; it never serves source, scripts, dependencies, Git history or local artifacts. Stop with Ctrl+C. Any basic static host can serve the committed HTML/CSS/JS instead. Do not upload an unfiltered local working directory containing ignored files or credentials. When uploading files yourself, use only the generated page paths and `assets/` listed by `publication.json` and `scripts/static-files.mjs`, or the optional static-only `dist/` copy below. A host that publishes the tracked repository root may also expose these already-public Markdown sources and maintenance files; those are not secrets. Deny dotfiles and never publish `.git`, `node_modules`, `.gm` or `artifacts`.

## Optional editing and regeneration

Markdown source remains in `site/`; `publication.json` is the exact 23-page allowlist. After changing public documentation:

~~~sh
npm ci --ignore-scripts
npm run check
~~~

This validates content/provenance and regenerates committed root HTML plus `assets/search-index.js`. Commit generated changes along with the source. It also makes an identical **static-only `dist/` copy**, useful when a host is already configured to publish `dist`. For that existing configuration only, use build command `npm ci --ignore-scripts && npm run docs:build` and publish `dist`. The default remains **root, no build**. `docs:build:pages` is a compatibility alias; no mount-specific build is needed.

Build-time Markdown parsing uses markdown-it; no framework or client Markdown renderer is shipped. `npm test` checks source safety and 22 unchanged page hashes; the deployment page is deliberately adapted. `npm run test:browser` starts its own loopback ordinary-file server and checks both mounts, all direct pages/reloads, desktop/mobile, keyboard/search, no-JavaScript reading, and accessibility rules. Set `CHROMIUM_PATH` if needed. `npm run export` creates an explicitly allowlisted independent source package including the ready-to-serve HTML under `artifacts/standalone-docs`. It never pushes or deploys.

## Publication and deployment status

**Source-backed is not live-tested.** Design/planned qualifications, pinned public evidence and operational limits are unchanged. These docs do not certify product launch, network availability, security, compliance or performance.

Hosting is not activated by this repository. At inspection on **9 October 2026**, GitHub reported no configured repository homepage, `has_pages: false`, no deployments, and its Pages API returned 404. No public hosting URL could therefore be verified. A previous source-only repository root had no `index.html`; serving that root could fail to display the docs. This version commits it. That repairs the missing entry file, not an unconfigured external host.

The site retains `noindex, nofollow`; this is not access control. No new license grant or invented support/security contact is introduced. `ci/verify.yml.example` remains an inactive verification-only template, not a deployment workflow. No remote account settings, DNS, credentials or paid hosting were changed.
