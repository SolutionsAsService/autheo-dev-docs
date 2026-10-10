# DevHub and OpenEdge: from source to deployment

**Design / planned.** DevHub is the intended developer control plane. OpenEdge GitOps is the proposed synchronization bridge between application source and that control plane. This is not a verified login, installation or deployment tutorial.

## Responsibility boundary

The planned path is **GitHub → OpenEdge GitOps → DevHub → L0 Mesh**, with Marketplace admission/placement and chain settlement alongside the execution path. The short diagram describes the developer experience; it does not bypass commercial or security checks.

- **Source repository:** application code, versioned build inputs and review history.
- **OpenEdge:** associate repository/branch with a project and synchronize desired deployment configuration.
- **DevHub:** expose projects, builds, environments, resource requirements, deployment control, logs, domains and status.
- **Marketplace:** match permitted demand with eligible capacity and agreed terms.
- **Mesh:** admit and execute the selected workload.

DevHub should expose underlying decisions, not hide failures behind a single green deployment badge.

## Objects readers should distinguish

| Object | Meaning in the design |
| --- | --- |
| Project | Application identity and its source/configuration relationships |
| Build | Attempt to produce an artifact from a particular source revision |
| Environment | Runtime configuration and separately controlled secrets/policy |
| Deployment | Desired artifact/configuration placed into an execution environment |
| Workload instance | A specific execution attempt on admitted capacity |
| Domain | User-facing ingress configuration, separate from endpoint identity |

## Intended developer workflow

1. Choose a source revision and reproducible build inputs.
2. Connect a project through the supported GitOps integration once one is released.
3. Specify artifact/runtime, resources, region, exposure, secret references, budget and recovery requirements.
4. Review build output and admission/placement decisions before enabling traffic.
5. Observe execution health and logs separately from settlement state.
6. Update through a new revision; validate rollback and data compatibility rather than assuming a reverse Git change undoes every effect.

The planning contains sample deployment manifests and CLI verbs. They are sketches, not stable schemas or installable packages. No registry hostname, CLI package, SDK language support, IDE extension or infrastructure-as-code provider is promised here.

## Failure states that matter

A **build failure** precedes placement. An **admission rejection** may be caused by budget, policy or unavailable capacity. An **execution failure** means a specific attempt failed after admission. A **settlement delay** is a separate accounting outcome and must not be displayed as if the workload never ran.

## Before using a released integration

Verify owner and version; authentication/scopes; repository permissions; webhook validation; artifact provenance; secret delivery; cancellation; rollback; log retention and support. Use [application lifecycle preparation](../guides/application-lifecycle.md) to assemble these requirements. [Freddie](./freddie.md) adds delegated operations, not a replacement for these controls.
