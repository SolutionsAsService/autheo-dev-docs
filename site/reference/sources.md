# Sources and verification

Review date: **9 October 2026**. Public source inspection was read-only. No wallet credentials, private planning exports, or live transaction payloads were sent to these sources.

## Primary evidence

| ID | Source | What it supports |
| --- | --- | --- |
| C1 | [Chain go.mod](https://github.com/autheo-blockchain/autheo-chain-core/blob/976ec4328d342a07e6ef7eb9ecaec222c55f29e1/go.mod) | Declared Go, Cosmos SDK, CometBFT and Ethermint dependencies |
| C2 | [Application wiring](https://github.com/autheo-blockchain/autheo-chain-core/blob/976ec4328d342a07e6ef7eb9ecaec222c55f29e1/app/app.go) | EVM integration in source |
| C3 | [Query protobuf](https://github.com/autheo-blockchain/autheo-chain-core/blob/976ec4328d342a07e6ef7eb9ecaec222c55f29e1/proto/autheo/query.proto) | Bounded API mappings and message fields |
| C4 | [Chain README](https://github.com/autheo-blockchain/autheo-chain-core/blob/976ec4328d342a07e6ef7eb9ecaec222c55f29e1/README.md) | Repository ownership/context; operator links, with version drift noted |
| N1 | [Network README](https://github.com/autheo-blockchain/networks/blob/a02ac6576dd3b687effc0d741a71a88b094aba21/README.md) | Published denomination, prefix, binary and configuration role |
| N2 | [Mainnet chain ID](https://github.com/autheo-blockchain/networks/blob/a02ac6576dd3b687effc0d741a71a88b094aba21/mainnet/chain-id) | Exact published Cosmos chain ID |

Chain revision: 976ec4328d342a07e6ef7eb9ecaec222c55f29e1.
Network revision: a02ac6576dd3b687effc0d741a71a88b094aba21.

## Evidence precedence

For implementation details, prefer the selected release's code, manifests, schemas, and tests over an unversioned narrative. The reviewed chain README still names older Go and SDK versions than its manifest. A source implementation also does not prove that every network enables it.

## Limits

This review did not deploy the chain, run an AUTHEO SDK, verify mainnet transactions, attest infrastructure, audit cryptography, or obtain legal conclusions. Broader ecosystem implementation remains unverified; the component guides explain design intent separately. [Status](./status.md) makes those limits visible by component.

## Design evidence versus implementation evidence

The component and lifecycle guides are editorial consolidations of ecosystem planning reviewed on the date above. They preserve component responsibilities, workload classes and intended handoffs while removing internal organization/legal material, example prices, unsupported deployment claims and speculative commands. Their **Design / planned** labels apply to the entire described workflow.

Planning evidence supports an explanation of intent, not a claim that a service is operating. Public chain evidence above takes precedence for chain implementation details. A private source-to-page review ledger is retained for maintainers; private documents and paths are not exported by this site. When a release is verified, add its public source, version, environment and test result rather than erasing the design/implementation distinction.
