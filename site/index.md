# AUTHEO documentation

AUTHEO brings together a settlement chain and a design for peer connectivity, distributed compute, a capacity marketplace, developer workflows and agent-assisted operations. This documentation explains each component, how they exchange intent and evidence, and which claims have implementation support.

::: warning Publication candidate
This documentation was reviewed on **9 October 2026**. Source-backed does not mean deployment-tested. This site does not certify network availability, platform launch status, security guarantees, or regulatory approval.
:::

## Choose your path

- **New to AUTHEO?** Start with [the orientation](./getting-started/index.md) and [architecture](./concepts/architecture.md).
- **Application developer?** Read [integration preparation](./guides/integration.md), then the [source-backed API reference](./reference/api.md).
- **Node operator?** Follow [node preparation](./guides/node-operator.md) and [network reference](./reference/networks.md).
- **Looking for mesh, DevHub, or marketplace instructions?** Read the [ecosystem map](./concepts/ecosystem.md), then [Mesh](./components/mesh.md), [DevHub](./components/devhub.md), [Marketplace](./components/marketplace.md) or [Freddie](./components/freddie.md). These design guides are not interchangeable with the implemented chain.
- **Maintaining these docs?** Use [contribution rules](./contributing/index.md) and [standalone deployment](./deployment/index.md).

## Understand the whole workflow

Start with [who does what](./concepts/ecosystem.md), follow [control, data and accounting flows](./concepts/data-flows.md), then prepare an [application brief](./guides/application-lifecycle.md) or [provider review](./guides/provider-design.md). Intended capabilities are explained without presenting planning examples as shipped commands.

## What is verified here?

The public chain repository contains Cosmos SDK, CometBFT, and Ethermint/EVM application code. The official network repository publishes a mainnet configuration. [Evidence and limits](./reference/sources.md) identify exact revisions. No live transaction, validator operation, or RPC availability test was performed for this documentation update.

Use the [status matrix](./reference/status.md) whenever a capability claim affects your implementation.
