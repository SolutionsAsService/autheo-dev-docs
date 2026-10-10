# Plan an application deployment

**Audience:** application developers evaluating the ecosystem design. **Outcome:** a reviewable deployment brief, not a live deployment. A released DevHub/mesh workflow is still required.

## 1. Describe the application

Record source revision, build inputs, artifact format, runtime, exposed services and whether the workload is a long-running service, batch job, function or agent. For AI/GPU work, record device/runtime and model requirements rather than assuming generic GPU compatibility.

## 2. State placement and trust constraints

Specify region/locality, data sensitivity, approved provider types, isolation requirements and network exposure. State which constraints are mandatory. A lower price must not silently override them.

## 3. Separate compute from persistent data

List ephemeral state, durable data, backups and restore prerequisites. Define acceptable loss and recovery behavior. Determine whether a retry can repeat side effects or whether a checkpoint/operation identifier is required.

## 4. Define commercial acceptance

Record units, budget cap, expected duration, cancellation/timeout behavior, completion evidence and who may approve spending. Keep these as requirements; do not copy illustrative prices from planning as a quote.

## 5. Define observation and rollback

Track build, admission, execution health and settlement separately. Identify where logs are retained and who can read them. A rollback needs artifact and configuration compatibility plus a data migration strategy; source reversion alone is insufficient.

## 6. Establish release evidence before connecting

Obtain the supported product version, authenticated interface, manifest schema, installation provenance, tested sample and support route. Start with a non-production workload and non-sensitive data. No executable mesh deploy command is supplied because this review did not verify one.

## Review checklist

The brief is complete when another reviewer can identify **what runs, where it may run, what it may access, what it may spend, how success is recognized, and what happens on failure**. Use [DevHub](../components/devhub.md), [Mesh](../components/mesh.md), [Marketplace](../components/marketplace.md) and [data flows](../concepts/data-flows.md) to assign ownership.
