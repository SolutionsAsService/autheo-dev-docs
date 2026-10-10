# autheo-dev-docs

Standalone AUTHEO documentation viewer: 23 reviewed public pages, built with the existing VitePress toolchain. Includes local full-text search, grouped navigation, keyboard access and responsive mobile navigation.

## Build and preview

Use Node.js 22 or newer and npm. From this repository root:

```sh
npm ci --ignore-scripts
npm run check
npm run docs:preview
```

`check` runs the source tests, stages only the explicit page allowlist, builds static HTML and checks local links, assets and fragments. Output: **`dist/`**. Preview binds to loopback; use its printed URL. No private repository, external content API or runtime server is required.

| Deployment mount | Build command | Publish directory |
| --- | --- | --- |
| Domain root `/` | `npm run docs:build` | `dist` |
| GitHub project path `/autheo-dev-docs/` | `npm run docs:build:pages` | `dist` |

The project-path command is cross-platform. For another mount on POSIX shells, use `DOCS_BASE=/your-path/ npm run docs:build`; the path must begin and end with `/`. Build separately for each mount. Serve generated `.html` pages, assets, directory `index.html` files and `404.html` as ordinary static files; no SPA rewrite is needed. Upload **only `dist/`**, never the repository root, dependency directory or test artifacts.

## Scope and verification

- `publication.json` is the 23-page content allowlist and sidebar source.
- `site/` contains edited public documentation, theme and configuration.
- `scripts/` and `tests/` provide the standalone build, safety checks and browser checks.
- `provenance.json` records source revision and per-page hashes without exposing private source paths or history. The deployment page is intentionally adapted to this repository; all other 22 pages retain byte-for-byte source parity.
- `npm run export` writes a fresh, allowlisted independent source package to `artifacts/standalone-docs`; it never pushes or deploys.
- `npm run test:browser` tests a running production preview (default `http://127.0.0.1:4175`). Set `QA_ORIGIN`, `DOCS_BASE` and `CHROMIUM_PATH` as needed. See [deployment instructions](site/deployment/index.md).

**Source-backed is not live-tested.** Mesh, connectivity, DevHub/OpenEdge, Marketplace and Freddie preserve their design/planned qualifications. API/network references retain pinned public evidence and explicit live-verification limits. Publication does not certify a running product, security, compliance or performance.

## Publication and hosting

This repository is the approved public documentation-source destination. Hosting is **not activated by this repository**; no DNS/domain or paid hosting is configured. The site retains `noindex, nofollow` until an operator separately approves search-engine indexing; this is not access control.

`ci/verify.yml.example` is an **inactive** GitHub Actions verification template. It is deliberately outside `.github/workflows`: the current publishing credential lacks workflow scope. An authorized maintainer may review and activate it later; it does not deploy. No credentials or permissions changes are needed for local builds.

No new license grant or support/security contact is introduced by this export. Maintainers must confirm applicable rights and official contacts before adding them.
