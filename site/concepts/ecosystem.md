# The AUTHEO ecosystem

AUTHEO's design connects application development, independently supplied compute, commercial coordination, and a settlement chain. The intended experience is to describe a workload once, choose acceptable capacity and terms, run it on the mesh, and observe both execution and accounting without confusing the two.

**Status:** this page explains design intent, not general availability. The chain has separately reviewed public implementation evidence; the other components below have planning evidence but no release-tested workflow in this review. See [capability status](../reference/status.md).

## Components and their jobs

| Component | Intended responsibility | Does not replace |
| --- | --- | --- |
| Connectivity | Identify peers, discover addresses, establish sessions, repair routes | Workload authorization or proof of trustworthy execution |
| [L0 Mesh](../components/mesh.md) | Admit and execute workloads on provider nodes; report health and results | Chain consensus or commercial agreement policy |
| [Marketplace](../components/marketplace.md) | Describe offers, match demand, coordinate usage evidence and settlement | The execution runtime or the buyer's signing decision |
| [DevHub and OpenEdge](../components/devhub.md) | Turn source and deployment intent into observable project/build/deployment workflows | Provider capacity, marketplace rules or a transaction ledger |
| [Freddie](../components/freddie.md) | Carry out delegated, persistent operational workflows | User authorization, spending limits or settlement verification |
| [AUTHEO Chain / L1](./architecture.md) | Execute chain transactions and maintain ordered application state | General-purpose hosting and workload correctness |

Here **AUTHEO** means the whole ecosystem. Use **connectivity layer** for the peer-network substrate, not AUTHEO alone. **L0** is the compute-layer name in this design; it is not a claim that all application traffic is blockchain traffic. **Agentic OS** groups the developer interfaces and Freddie; it is not a separate kernel or consensus network.

## Who uses what?

- **Application developers** use DevHub to express builds, resources, environments and deployments. Start with the [application lifecycle](../guides/application-lifecycle.md).
- **Compute buyers** compare raw resources or packaged services and acceptance terms. Start with [Marketplace](../components/marketplace.md).
- **Providers** advertise eligible capacity, run workloads and produce accountable usage records. Start with [provider preparation](../guides/provider-design.md).
- **Chain integrators and validators** use versioned chain interfaces and network configuration, not a mesh installation recipe. Start with [integration](../guides/integration.md) or [node preparation](../guides/node-operator.md).
- **Security reviewers** examine permissions, provider trust, runtime isolation and signing independently. Start with [security boundaries](./security.md).

## One workload, three different flows

1. **Intent and control:** source revision → GitOps synchronization → DevHub deployment intent → Marketplace admission and placement → node admission.
2. **Execution and data:** artifact/input transfer → isolated runtime → service traffic or result → logs and completion evidence.
3. **Agreement and accounting:** buyer-approved terms → supported chain agreement mechanism → attributable usage/completion evidence → settlement outcome → reconciliation.

These are logical design relationships, not a released API sequence. Logs and large artifacts belong off-chain in the design; durable settlement facts may be recorded on-chain. A successful build is not a running workload, and a running workload is not proof of settled payment. [Data flows](./data-flows.md) details the handoffs.

## What the design makes possible

The planning covers container services, functions, batch work, builds, AI/GPU jobs, edge APIs, storage and packaged services such as game-server hosting. It also describes developer services that combine application support with infrastructure. These are intended workload classes, not a tested support matrix, available catalogue, pricing promise or service-level agreement.

For a specific use case, first state the runtime, data sensitivity, recovery requirements, region and budget. Then establish which released component can satisfy each requirement. Do not substitute an architectural aspiration for release evidence.
