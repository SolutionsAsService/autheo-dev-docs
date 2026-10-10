# Prepare a chain integration

**Scope:** read-only preparation. This is not a tested mainnet transaction tutorial.

## Gather the contract first

1. Select the supported release and record its source revision.
2. Obtain an endpoint from an authorized operator and identify whether it serves Cosmos REST, gRPC, CometBFT RPC, or Ethereum JSON-RPC. They are different interfaces.
3. Confirm network identity using that interface's supported method and compare it with the approved network configuration.
4. Confirm authentication, request limits, CORS policy, supported methods, and retention requirements with the operator.
5. Start with a read-only request. Do not sign, broadcast, bridge, or approve token spending during connectivity debugging.

## A source-defined REST query

The reviewed protobuf declares a GET mapping for the AUTHEO module parameters:

~~~sh
# Set this only to a Cosmos REST base URL confirmed by your operator.
export AUTHEO_REST_URL='https://your-approved-rest-host.example'
curl --fail-with-body --silent --show-error \
  "${AUTHEO_REST_URL%/}/autheo/v1/params"
~~~

Replace the example host. This command is illustrative and **was not run against a live AUTHEO endpoint**. A 404 can mean the wrong API family, a disabled gateway, or a release mismatch—not an absent chain. The [API reference](../reference/api.md) identifies the source mapping.

## Before transaction support

Add an explicit network check, fee estimation, account sequence handling, signing isolation, user confirmation, broadcast response handling, and final outcome verification based on the selected release. Do not assume a UI acknowledgement is settlement. Test failures, retries, duplicate submissions, and cancellation in an approved non-production environment.

Use [troubleshooting](../troubleshooting/index.md) to report failures safely.
