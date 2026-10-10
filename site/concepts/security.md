# Security boundaries

## No blanket security claims

This documentation is not an audit certificate. It does not establish that all AUTHEO traffic uses post-quantum cryptography, that a workload is isolated on every host, that keys never leave hardware, or that the entire ecosystem is non-custodial.

Treat each claim as a versioned assertion that needs implementation evidence and a deployment configuration. A library's capabilities do not prove AUTHEO has integrated or enabled them.

## Protect the right assets

- **Wallet and validator keys:** separate signing authority from ordinary application access; follow the supported signer procedure for your chosen release.
- **API credentials:** use the endpoint operator's documented scopes and storage requirements. Never put credentials in browser-delivered documentation or examples.
- **Node data:** test restore and upgrade procedures in an isolated environment before production changes.
- **Agent actions:** require clear authorization boundaries and a way to revoke delegated access.
- **Workload secrets:** do not assume an execution provider is trusted merely because transport is encrypted.

## When something goes wrong

Stop the affected operation, retain non-sensitive logs, record versions and times, and contact the operator through an independently verified channel. Do not paste secret material into public issues. This review did not verify a dedicated AUTHEO vulnerability-reporting address, so none is invented here.

[Sources](../reference/sources.md) and [troubleshooting](../troubleshooting/index.md) describe the scope of verification.

## Design threat boundaries

| Boundary | Intended control to evaluate | What it does not establish |
| --- | --- | --- |
| Peer session | Identity binding, authenticated transport, authorization | An honest provider or permission to run any workload |
| Tenant runtime | Supported isolation profile, quotas and cleanup | Immunity to host compromise or device-side exposure |
| Workload supply chain | Artifact provenance and controlled deployment inputs | Correctness of arbitrary application code |
| Provider evidence | Attributable dispatch, usage and outcome records | Independent proof that every reported result is true |
| Agent delegation | Explicit action scope, caps, confirmation and revocation | Unlimited authority inherited from a connected account |
| Payment | Verified network, contract and signer authority | Legal classification or automatic refunds from prose |

## Reconcile security vocabulary

The design discusses microVM isolation, software sandboxes and hardware-assisted confidential execution. They protect different boundaries; naming several technologies does not prove a composed security property. Specify the host/runtime/device profile and test the actual tenant boundary. Warm-pool reuse also needs cleanup and tenant-state rules.

Post-quantum key exchange and post-quantum signatures are separate requirements. A transport proposal does not establish protection for wallet signing, software updates, stored data or every fallback path. This review does not claim an enabled algorithm suite.

For sensitive workloads, require a documented threat model, supported versions, deployment configuration, key lifecycle, revocation behavior, independent review where appropriate and reproducible failure tests. Reject absolute claims such as “a tenant cannot affect another tenant” without a scoped assurance case.

See [Freddie permission boundaries](../components/freddie.md), [Mesh runtime choices](../components/mesh.md), and [data ownership](./data-flows.md).
