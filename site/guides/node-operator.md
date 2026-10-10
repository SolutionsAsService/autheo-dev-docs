# Prepare to operate a node

This guide is a **preflight**, not a production install recipe. No node was installed or joined during this review.

## Select matching software and configuration

The chain repository provides [operator instructions](https://github.com/autheo-blockchain/autheo-chain-core/blob/976ec4328d342a07e6ef7eb9ecaec222c55f29e1/docs/validator-docker.md). The [official network repository](https://github.com/autheo-blockchain/networks/blob/a02ac6576dd3b687effc0d741a71a88b094aba21/README.md) holds configuration artifacts. Pin a release and a matching configuration revision before downloading or executing anything. Do not use an unqualified latest image as your reproducibility record.

The reviewed source [go.mod](https://github.com/autheo-blockchain/autheo-chain-core/blob/976ec4328d342a07e6ef7eb9ecaec222c55f29e1/go.mod) declares Go 1.25.8; its README still mentions Go 1.22 and Cosmos SDK v0.47. Resolve build requirements against the chosen release's manifest and CI rather than copying those stale README values.

## Full node versus validator

A full node operation and validator admission are different tasks. The upstream README describes a Sovereign license-binding prerequisite before validator creation. Verify the current release's complete admission flow with maintainers; this docs site does not grant validator eligibility or describe a bypass.

## Operator checklist

- Verify release provenance and checksums through the upstream distribution process.
- Match chain ID and genesis to the approved network configuration.
- Allocate storage, networking, and host resources from release-specific requirements; no unverified sizing numbers are supplied here.
- Separate public API access from signing and administrative access.
- Establish metrics, backup/restore testing, upgrade rehearsal, and a responsible operator.
- Document rollback limits before upgrading; restoring files is not automatically a safe chain rollback.
- Validate health without exposing signing keys or private infrastructure details.

If prerequisites are unclear, stop before validator creation and ask the release owner. See [network reference](../reference/networks.md) and [security boundaries](../concepts/security.md).
