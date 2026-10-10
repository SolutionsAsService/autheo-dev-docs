# Troubleshooting

## A chain request returns 404 or HTML

Confirm the endpoint's API family. An explorer website, EVM JSON-RPC endpoint, and Cosmos REST gateway are not interchangeable. Confirm the release exposes the [source-defined route](../reference/api.md). Do not retry a state-changing request blindly.

## Chain identity does not match

Stop before signing. Compare the environment with [trusted network configuration](../reference/networks.md). Do not repair a mismatch by changing a wallet setting to a guessed value.

## Instructions mention a missing CLI or product

Check [status](../reference/status.md). Design documents are not installable packages. Ask for a release artifact rather than trying a similarly named package from an unrelated publisher.

## Docs build fails

Use the locked dependencies and the documented Node version. Run npm ci --ignore-scripts, then npm run check. A missing allowlisted page, unsafe source path, symlink, or broken local link must fail the build; do not suppress dead-link errors to ship it.

## Navigation or assets fail under a subpath

Rebuild with DOCS_BASE set to the exact leading-and-trailing-slash mount path. Publish the contents of dist only. Do not serve the repository root and do not use a single-page HTML fallback for missing Markdown or JavaScript files.

## Report a problem safely

Include the page URL, expected behavior, non-sensitive error text, browser or software version, network name, and time observed. Exclude keys, seed phrases, API tokens, personal data, and internal hostnames. Contributors should use the repository's private review channel until a public support destination is approved.
