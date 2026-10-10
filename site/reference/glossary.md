# Glossary

| Term | Meaning in these docs |
| --- | --- |
| AUTHEO Chain / L1 | Chain application and its consensus-backed state; source includes EVM integration |
| L0 Mesh | Design vocabulary for off-chain coordination and compute execution |
| Cosmos chain ID | String identifying a Cosmos network configuration; not interchangeable with a JSON-RPC chain ID |
| EVM | Ethereum Virtual Machine execution environment; distinct from a general-purpose workload host |
| REST gateway | HTTP interface mapped to protobuf service methods |
| gRPC | Typed service interface defined by protobuf |
| Genesis | Initial chain state/configuration artifact that must match the intended network |
| THEO / aauth | Display unit and native denomination as published by the network source; see network reference |
| DevHub | Developer-facing project and deployment concept |
| Marketplace | Commercial coordination concept; not proof of a released payment contract |
| Freddie | Agent-assisted operations concept; delegated permissions require a separate contract |
| OpenEdge GitOps | Planned bridge from versioned application source to DevHub desired deployment state |
| Agentic OS | Umbrella name for developer interfaces and Freddie, not a separate operating-system kernel |
| Control plane | Intent, admission, scheduling, authorization and policy decisions |
| Data plane | Artifact/input movement, workload execution, service traffic and results |
| Fluid Compute | Proposed warm-runtime reuse; no guaranteed start time |
| Peer / endpoint identity | Identity used to address and authenticate a mesh participant; distinct from wallet authority |
| CRDT | Mergeable replicated-state model proposed for operational synchronization; not payment consensus |
| Attestation | Evidence about a specified platform/property, not universal proof of safe behavior |
| DaaS | Developer-as-a-Service: proposed application/support offerings, potentially bundled with hosting |
| Drain | Stop admitting new work while completing or safely recovering existing work |
| Admission | Decision that current policy and capacity permit a particular workload |
| Settlement | Verified accounting/payment outcome under a specified chain mechanism |
| Source-backed | Supported by a particular source revision, without claiming live deployment |

See [architecture](../concepts/architecture.md), [networks](./networks.md), and [status](./status.md).
