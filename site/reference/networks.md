# Network configuration reference

**Checked:** 9 October 2026. **Not checked:** live RPC health, current block height, validator membership, transaction execution, or endpoint ownership.

The public [network repository](https://github.com/autheo-blockchain/networks/blob/a02ac6576dd3b687effc0d741a71a88b094aba21/README.md) identifies itself as the official configuration source. Its inspected tree contains mainnet artifacts. A README reference to testnet in the chain repo does not supply a verified testnet configuration in this snapshot.

| Item | Published value or artifact | Evidence |
| --- | --- | --- |
| Cosmos chain ID in mainnet configuration | autheo_2127-1 | [chain-id](https://github.com/autheo-blockchain/networks/blob/a02ac6576dd3b687effc0d741a71a88b094aba21/mainnet/chain-id) |
| Native denomination | aauth | [network README](https://github.com/autheo-blockchain/networks/blob/a02ac6576dd3b687effc0d741a71a88b094aba21/README.md) |
| Published display conversion | 1 THEO = 10^18 aauth | [network README](https://github.com/autheo-blockchain/networks/blob/a02ac6576dd3b687effc0d741a71a88b094aba21/README.md) |
| Binary name | autheod | [network README](https://github.com/autheo-blockchain/networks/blob/a02ac6576dd3b687effc0d741a71a88b094aba21/README.md) |
| Bech32 prefix | autheo | [network README](https://github.com/autheo-blockchain/networks/blob/a02ac6576dd3b687effc0d741a71a88b094aba21/README.md) |
| Genesis | mainnet/genesis.json | [source file](https://github.com/autheo-blockchain/networks/blob/a02ac6576dd3b687effc0d741a71a88b094aba21/mainnet/genesis.json) |
| Peer and seed configuration | mainnet/persistent_peers.txt, mainnet/seeds.txt | [configuration tree](https://github.com/autheo-blockchain/networks/tree/a02ac6576dd3b687effc0d741a71a88b094aba21/mainnet) |

These are published configuration values, not financial guidance or a guarantee that a particular service is available. Do not infer a JSON-RPC numeric chain ID, explorer URL, faucet URL, or bridge address from the table. Obtain those from a reviewed environment-specific source before connecting a wallet.

Continue with [node preparation](../guides/node-operator.md) or [integration preparation](../guides/integration.md).
