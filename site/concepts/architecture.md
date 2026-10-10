# Architecture and execution boundaries

## Implemented chain: source-backed

The public application is an EVM-capable Cosmos SDK chain. Its [application wiring](https://github.com/autheo-blockchain/autheo-chain-core/blob/976ec4328d342a07e6ef7eb9ecaec222c55f29e1/app/app.go) includes Ethermint EVM and fee-market modules. Its [dependency manifest](https://github.com/autheo-blockchain/autheo-chain-core/blob/976ec4328d342a07e6ef7eb9ecaec222c55f29e1/go.mod) declares Cosmos SDK v0.53.4 and CometBFT v0.38.17 at the reviewed revision. These are source facts, not a claim about the binary running on any endpoint.

An older description that the chain is not EVM-compatible is not an appropriate integration guide. General-purpose containers or mesh workloads are also not equivalent to smart-contract execution: EVM execution is part of the chain application, while off-chain workloads have a separate runtime and trust boundary.

## Separate the planes

| Plane | Responsibility | Documentation status |
| --- | --- | --- |
| Chain | Ordered state, transaction execution, application modules | Public implementation sources inspected |
| Connectivity | Peer identity, discovery, transport, routing | Ecosystem design context; AUTHEO runtime not verified here |
| Compute | Scheduling and executing general workloads | Design context; no supported deployment API established |
| Commercial services | Capacity offers, metering, agreements, settlement integration | Do not assume a released marketplace contract |
| Developer and agent tools | Application lifecycle and delegated operations | Product-specific release evidence required |

## What this boundary prevents

A chain transaction success does not prove that an off-chain workload ran correctly. A transport connection does not authorize a workload. A configuration file labelled mainnet does not prove current network health. Security and accounting claims must name the component, version, and evidence supporting them.

Continue with [ecosystem concepts](./ecosystem.md), [API families](../reference/api.md), or [the status matrix](../reference/status.md).
