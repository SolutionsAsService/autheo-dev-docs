# Prepare a compute-provider design review

**Audience:** prospective mesh providers. **Scope:** qualification questions, not installation or a promise of earnings. A compute provider is not automatically an L1 validator; [chain node preparation](./node-operator.md) is a different path.

## Capacity and runtime

Inventory the host, available resources, supported runtime/device profile and workload classes. Validate isolation prerequisites for the actual release before offering capacity. Do not infer arbitrary OS or GPU support from a list of architectural technologies.

## Reachability and identity

Plan endpoint identity, key storage/rotation, permitted inbound/outbound paths and relay dependence. Establish how capacity advertisements expire and are revoked. Keep private topology and administrative endpoints out of public listings.

## Admission and tenancy

Define quotas, allowed workload classes, tenant isolation, secret cleanup and warm-runtime reuse. Admission must use current local capacity, not only replicated advertisements. Separate administration/signing credentials from tenant execution.

## Evidence and operations

Record dispatch identity, observed execution state, usage units and retention policy. Establish monitoring, drain, maintenance, incident response and recovery procedures. A signed report proves attribution, not correctness; the agreement must define acceptable evidence and disputes.

## Commercial obligations

Review metering, service acceptance, price units, cancellation, timeout and settlement behavior against released terms/contracts. Include power, hardware, bandwidth, relay and operational costs in your own evaluation. Historical examples are neither revenue projections nor guarantees.

## Qualification outcome

A useful review produces a supported host/runtime profile, a tested workload isolation result, verified network paths, an admission/drain demonstration and a reconciliation test. Until these are available, describe the node as a candidate rather than production-ready capacity.

See [Mesh lifecycle](../components/mesh.md), [connectivity](../components/connectivity.md), [Marketplace](../components/marketplace.md) and [security](../concepts/security.md).
