# Serve these docs as static files

This repository contains the approved public documentation for **autheo-os/autheo-dev-docs**. All 23 documents are committed as ordinary HTML. **Serve the repository root: no build, framework, backend, CDN or SPA fallback is required.** Reading and navigation work without JavaScript; local search is an optional enhancement.

**[Read the live documentation](https://autheo-os.github.io/autheo-dev-docs/).** GitHub Pages publishes the committed files from **main / repository root**, using the existing .nojekyll file and HTTPS. No project build command or custom deployment workflow is required. The [GitHub repository](https://github.com/autheo-os/autheo-dev-docs) is the source view, not the rendered website.

This documentation deployment does not verify an AUTHEO product deployment. The site retains **noindex, nofollow** pending a separate indexing decision; this is **not access control**.

## Simplest host settings

- Publish directory: **repository root (./)**.
- Build command: **none**.
- Entry file: **index.html**, already committed.
- Serve normal .html, .css, .js and .svg files with their normal content types.
- Do not enable a catch-all SPA rewrite. Each document has a real file, including directory index.html files.

The same files work at **/** and **/autheo-dev-docs/**, or another subpath. Links and assets are relative; there is no mount-specific compilation. For example, reference/api.html is an ordinary file and remains readable when opened directly or reloaded.

## Preview without installing dependencies

With Node.js 22 or newer, run from this repository root:

~~~sh
node scripts/serve.mjs
~~~

Open the printed loopback URL. Stop with Ctrl+C. This small preview server has no rewrites and serves only the static-file allowlist, excluding source files, maintenance scripts, Git history, dependencies and test artifacts. No package installation is required to preview the committed viewer. Any ordinary static file server can also display it.

When publishing a tracked repository root, maintenance files and the approved Markdown sources may also be reachable; they are public source, not secrets. Never upload an unfiltered local working directory containing ignored artifacts or credentials. Deny dotfiles, especially .git, and exclude node_modules, .gm and artifacts. For a static-only upload, use the explicit generated page/asset allowlist or the optional dist copy below.

## Edit and regenerate

The Markdown sources remain under site. publication.json is the exact 23-page public allowlist. Use the pinned build-time parser only when updating generated HTML:

~~~sh
npm ci --ignore-scripts
npm run docs:build
npm run check
~~~

First regenerate the root HTML and local search index with docs:build. The check then runs source safety, provenance and generated-output parity tests, regenerates again and checks all local links, assets and fragments at both mounts. If adapting the deployment page, update its publishedSha256 in provenance.json before checking; do not change the other 22 source-page hashes. Commit the generated files together with source changes. No runtime dependency is needed by the resulting viewer.

The same command also creates **dist/** containing only allowlisted HTML and assets. If an existing host already publishes dist, keep that publish directory and use this build command:

~~~sh
npm ci --ignore-scripts && npm run docs:build
~~~

This is optional compatibility for existing build-based hosting. The default remains **root, no build**. The docs:build:pages command is an alias for the same portable output, not a different build.

## Verify before release

~~~sh
npm run test:browser
npm run export
~~~

Browser tests start and stop their own loopback ordinary-file server. They cover every direct HTML URL and reload at root and project subpath, desktop and mobile viewports, navigation, keyboard access, local search, no-JavaScript reading and WCAG-tagged automated rules. Set CHROMIUM_PATH to an installed Chromium executable if necessary. Automated checks are not full accessibility certification. Reports and screenshots stay ignored under artifacts.

The export command writes an independent allowlisted source package, including committed static output, to artifacts/standalone-docs. It excludes private material, ignored artifacts, dependencies and Git history. It is not automatically pushed or uploaded. provenance.json retains original source hashes, with only this deployment page adapted to the plain-file viewer.

The inactive ci/verify.yml.example template checks the same portable artifact. It remains outside .github/workflows and does not deploy. No credential escalation is needed to use the viewer.

## Hosting status and 404 diagnosis

On **9 October 2026 (America/Denver)**, the repository source was accessible, but GitHub Pages was not configured and the documentation website returned HTTP 404. Committing index.html alone had not activated hosting. GitHub Pages was then enabled for **main / repository root**, and the initial deployment completed successfully. The public homepage and API reference returned HTTP 200 and byte-matched the committed HTML.

To verify an update, check the repository Actions page for the successful **pages-build-deployment** run at the intended commit, then open the [homepage](https://autheo-os.github.io/autheo-dev-docs/) and a direct document such as [API reference](https://autheo-os.github.io/autheo-dev-docs/reference/api.html). The Pages source must remain **main / (root)**. A GitHub blob URL is a source-code view, not the documentation viewer.

If a previously copied link returns 404, use the live documentation link above and its navigation. Document URLs end in .html; Markdown source paths and unconfigured extensionless routes are not the published document URLs. No catch-all rewrite masks missing pages. Verify both HTTP status and expected page content, including a direct reload, before claiming an update is live.

## Operator release checklist

- Preserve source-backed, design/planned and unknown status statements.
- Keep all 23 reviewed public documents and confidentiality exclusions.
- Confirm applicable rights and official support/security contacts; this viewer adds neither a license grant nor invented contacts.
- If regenerating, install from the lockfile and review dependency advisories.
- Verify direct links, refresh, search, keyboard access and mobile navigation at the actual host URL.
- Decide separately whether to remove noindex or configure a domain.
- Publish only approved files; retain the previous Git revision for rollback.
- Smoke-test the actual public URL and record the release commit and date. Local checks alone do not establish live deployment.
