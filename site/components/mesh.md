# L0 Mesh: execution and node lifecycle

**Design / planned.** This explains the proposed execution fabric. No AUTHEO mesh release, installation command, admission service or workload benchmark was verified in this review.

## What the mesh adds

The connectivity layer supplies peer identity, discovery and transport. L0 Mesh adds resource advertisements, node admission, workload placement/execution, health reporting and distributed operational state. Its peer is a machine running the proposed node software, with identity, advertised capacity, local policy and one or more workload runtimes.

Providers may be data-center, edge, home, cloud-hosted or GPU operators. These are design categories, not evidence that every host can join. An eligible runtime, network path, security policy and supported hardware profile would all be required.

## Control and data responsibilities

| Node control functions | Node data functions |
| --- | --- |
| Advertise available resources and supported runtime classes | Fetch artifacts and receive workload inputs |
| Apply admission, quotas and placement policy | Execute the workload and carry service traffic |
| Manage warm pools and drain decisions | Return results and stream permitted logs |
| Report health and synchronize operational state | Retain or transfer state according to recovery policy |

Marketplace matching identifies commercially eligible supply; the node still needs a local admission decision. An advertisement is not a reservation, and stale capacity must not authorize over-allocation.

## Workload lifecycle

1. **Describe:** supply runtime/artifact, CPU/memory/storage needs, network exposure, region, budget and recovery policy.
2. **Match and admit:** select eligible providers and verify current capacity and local policy before execution.
3. **Prepare:** obtain artifacts, configure secrets and network access, and select the supported isolation profile.
4. **Execute and observe:** track start state, health, resource use, logs and completion independently.
5. **Finish or recover:** return results; preserve evidence; clean up runtime and credentials; retry only when workload semantics permit.

Long-running services need health and renewal policies. A batch task needs an unambiguous completion condition. A stateful service additionally needs a data durability and recovery contract; rescheduling a process does not restore its data.

## Runtime choices and Fluid Compute

The principal compute design proposes Firecracker microVMs on suitable Linux/KVM hosts. Other research explores containers, gVisor, Litebox and hardware-assisted confidential execution. These alternatives are not interchangeable guarantees and are not all declared supported by this site. The released runtime profile must settle compatibility, host prerequisites, tenant boundaries and device access.

**Fluid Compute** means keeping eligible runtimes warm so repeated invocations may avoid some initialization. A warm-pool hit is an optimization, not a latency guarantee. Reuse requires a defined tenant boundary, secret cleanup and state-reset policy; exhaustion needs a documented cold-start or admission response.

## Distributed state and failure behavior

The design proposes CRDT-based synchronization for operational state such as availability and workload status. That does not make stale advertisements safe or turn distributed telemetry into authoritative financial state. Reservations, duplicate work, revocation and settlement each need explicit conflict and freshness rules.

| Failure | Required behavior to specify and test |
| --- | --- |
| Provider disappears | Distinguish never-started, failed and unknown outcome; retain evidence before retry |
| Partition | Limit new admission when global state is uncertain; reconcile on rejoin |
| Warm capacity exhausted | Expose cold-start or capacity rejection, not an unexplained timeout |
| Runtime or policy drifts | Stop new placements; drain safely and verify before readmission |
| Stateful workload moves | Restore from a tested checkpoint/replica; do not imply automatic data recovery |

## Provider state model

**Bootstrap → qualify/admit → execute → drain → retire or recover.** A draining node stops accepting new work while preserving in-flight obligations. Track admission failures, warm-pool hit rate, launch latency, completion rate, resource saturation, connectivity and policy freshness. No numeric target is established here.

Continue with [connectivity](./connectivity.md), [provider preparation](../guides/provider-design.md), and [security](../concepts/security.md).

## Private and hybrid capacity

Enterprise planning includes owned hardware, approved provider domains and optional overflow to external capacity. Treat these as distinct placement policies. A private workload must remain within its approved boundary unless the owner explicitly allows overflow; availability pressure is not permission to move sensitive data. Offering spare capacity to other buyers additionally requires tenancy, maintenance and commercial obligations to be defined. None of these patterns is a verified enterprise service in this review.
