# Build and deploy these docs separately

This repository contains the approved public documentation source for **autheo-os/autheo-dev-docs**. It is a standalone static VitePress site. Publishing the source does not activate hosting, configure a domain, or verify an AUTHEO product deployment. The build retains a noindex directive pending a separate indexing decision; that directive is **not access control**.

## Build locally

~~~sh
npm ci --ignore-scripts
npm run check
npm run docs:preview
~~~

Use Node 22 or newer. Run commands from this repository root. The preview binds to loopback; use its printed URL. The publication allowlist stages only reviewed pages and configuration under .build/site; production output is **dist**. No private repository or runtime backend is required. Do not upload the repository root, .build, test artifacts, or dependency directories.

## Mount path and host settings

For a domain root, use the default **/**:

~~~sh
npm run docs:build
~~~

For the GitHub project path **/autheo-dev-docs/**, use this cross-platform command:

~~~sh
npm run docs:build:pages
~~~

For another subpath on a POSIX shell:

~~~sh
DOCS_BASE=/your-path/ npm run docs:build
~~~

The path must begin and end with a slash. Select repository root as the working directory, install with npm ci --ignore-scripts, choose the build command above, and publish **dist/**. Each build is specific to its mount; rebuild rather than relocating an artifact compiled for a different path.

The host must serve static .html pages, assets, directory index.html files and 404.html. No SPA rewrite, application backend or paid platform is required. No hosting provider, custom domain or DNS change is configured here.

## Test the production artifact

The build automatically validates all allowlisted routes and local links, assets and fragments. Run npm test for source and publication safety checks. External reference URLs and live network behavior are outside these offline checks.

For browser testing, start a preview on port 4175 in one terminal:

~~~sh
npm run docs:preview -- --port 4175
~~~

In another terminal, run npm run test:browser. Set CHROMIUM_PATH to an installed Chromium executable if no Playwright-managed browser is available. QA_ORIGIN overrides the default http://127.0.0.1:4175 origin. For a project-path build, also set DOCS_BASE=/autheo-dev-docs/ in both preview and test environments. On PowerShell, set environment values using $env:DOCS_BASE = "/autheo-dev-docs/" before the commands.

Browser checks cover every page at desktop and mobile sizes, accessibility rules, search, navigation and keyboard access. Automated checks are not full accessibility certification. Browser reports and screenshots remain local under artifacts/ and are not site inputs. Stop the preview when finished.

## Export an independent source package

~~~sh
npm run export
~~~

This writes artifacts/standalone-docs from an explicit source-file allowlist, excluding Git history, private material, dependencies and build output. Inspect the export and build it independently. It is not automatically pushed or uploaded anywhere. provenance.json records the reviewed source revision and page hashes without private source paths.

## Optional verification CI

The inactive ci/verify.yml.example template runs local tests and builds both supported mounts. It is intentionally outside .github/workflows because the current publishing credential lacks workflow scope. A maintainer with existing authority can review and activate it later; no credential escalation is required to use this viewer. The template does not deploy or configure hosting.

## Operator release checklist

- Preserve source-backed, design/planned and unknown status statements.
- Choose the hosting operator and actual mount; hosting activation is a separate decision.
- Confirm applicable rights and official support/security contacts; this export adds no license grant or invented contact.
- Build from the lockfile and review dependency advisories.
- Verify routes, search, keyboard access and mobile navigation at the actual mount.
- Decide separately whether to remove noindex and add domain-specific canonical/sitemap settings.
- Deploy only dist; retain the previous artifact for rollback.
- Smoke-test the actual public URL before claiming a live deployment, recording the release commit and date.
