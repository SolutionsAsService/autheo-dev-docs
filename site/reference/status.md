# Status and support boundaries

Status here means **what this documentation review established**, not the product's operational status page.

| Capability | Evidence | What remains unknown |
| --- | --- | --- |
| Cosmos SDK / CometBFT chain | Pinned dependency manifest and application source | Software actually running on each network endpoint |
| EVM integration | Ethermint EVM imports, keeper and module wiring | Enabled endpoint methods and release compatibility |
| Mainnet configuration | Official configuration artifacts | Current liveness and peer reachability |
| AUTHEO module query contracts | Protobuf source mappings | Live gateway exposure, auth, quotas, response behavior |
| Connectivity / L0 Mesh | Detailed peer, execution and node-lifecycle design | Release, supported runtime profiles, tested discovery/admission/recovery |
| DevHub / OpenEdge | Project, build and GitOps handoff design | Released portal/integration, auth, schema, rollback workflow |
| Marketplace | Offering, matching, evidence and settlement-intent design | Contract state/authority, metering/disputes, released terms |
| Freddie | Persistent workflow and delegation design | Runtime release, enforceable scopes/caps/revocation/recovery |
| Quantum-resilient transport | No AUTHEO deployment proof established in this review | Actual enabled algorithms, negotiation and key lifecycle |
| Security, performance, SLA and compliance | No certification established by this review | Applicable independent assurance and approved claims |

## Status vocabulary

- **Source-backed:** an identified revision contains the implementation or declaration.
- **Configuration-published:** an owned repository publishes a network artifact.
- **Live-tested:** a dated test against a named environment established a specific behavior. None is claimed in this update.
- **Design / planned:** intended behavior without reviewed release evidence.
- **Unknown:** required evidence has not been established; this does not mean the feature is absent.

## Move a feature to supported documentation

Provide the owner, public source or approved artifact, exact version, supported environment, successful reproducible test, known failure modes, and publication approval. Follow [contribution rules](../contributing/index.md). Record a new verification date rather than silently replacing evidence.
