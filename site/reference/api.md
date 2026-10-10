# Source-backed API reference

**Evidence level:** source-defined, not live endpoint-tested. Reviewed source: [proto/autheo/query.proto](https://github.com/autheo-blockchain/autheo-chain-core/blob/976ec4328d342a07e6ef7eb9ecaec222c55f29e1/proto/autheo/query.proto). This is a bounded reference to one module, not the entire AUTHEO API.

## Interface families

- **Cosmos REST gateway:** HTTP mappings declared in protobuf annotations.
- **gRPC:** protobuf service and message contracts.
- **CometBFT RPC:** consensus/node interface, not an interchangeable REST base URL.
- **Ethereum JSON-RPC:** EVM-facing interface; enabled methods and server configuration must be checked for your release.

## AUTHEO module queries

| gRPC query | Declared HTTP mapping | Request data |
| --- | --- | --- |
| ContractByDenom | GET /autheo/v1/contract_by_denom | denom query field |
| DenomByContract | GET /autheo/v1/denom_by_contract/{contract} | contract path field |
| Params | GET /autheo/v1/params | Empty request |
| Permissions | GET /autheo/v1/permissions | address query field |
| BlockList | GET /autheo/v1/blocklist | Empty request |
| ReplayBlock | No HTTP annotation in reviewed file | Protobuf request with Ethereum messages and block metadata |

ContractByDenomResponse declares contract and auto_contract strings. DenomByContractResponse declares a denom string. QueryParamsResponse wraps a Params message. QueryPermissionsResponse declares can_change_token_mapping and can_turn_bridge booleans. QueryBlockListResponse contains a blob bytes field. Follow the referenced schema for serialization and types; do not infer runtime permissions from a query name.

## Full schema navigation

- [Protobuf tree](https://github.com/autheo-blockchain/autheo-chain-core/tree/976ec4328d342a07e6ef7eb9ecaec222c55f29e1/proto)
- [Generated Swagger artifact](https://github.com/autheo-blockchain/autheo-chain-core/blob/976ec4328d342a07e6ef7eb9ecaec222c55f29e1/client/docs/swagger-ui/swagger.yaml)
- [Application wiring](https://github.com/autheo-blockchain/autheo-chain-core/blob/976ec4328d342a07e6ef7eb9ecaec222c55f29e1/app/app.go)

A generated specification can lag deployed code. For an integration contract, compare the chosen release, generated API artifacts, server configuration, and observed responses. Authentication, quotas, error envelopes, availability, and public endpoint addresses were not established by this review.

See [integration preparation](../guides/integration.md) for a deliberately read-only example.
