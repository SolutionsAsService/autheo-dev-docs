# Architecture handoffs and data flows

**Design / planned**, except for the separately source-backed chain references. This page makes ownership and failure boundaries explicit; it does not specify released endpoints or message schemas.

## Deployment and execution

~~~text
Source revision → GitOps synchronization → DevHub intent
                                            ↓
                         Marketplace eligibility and matching
                                            ↓
                              Provider/node admission
                                            ↓
Artifact and inputs → Mesh runtime → Service traffic / results
                              ↓
                    Logs, usage and outcome evidence
~~~

The build artifact must be attributable to the selected revision. The accepted workload must be attributable to its request and provider. Logs are useful for operations but may contain sensitive inputs; they are not automatically public or suitable for permanent chain storage.

## Commercial and chain state

~~~text
Buyer reviews terms → Authorized agreement action
                               ↓
                     Supported chain mechanism
                               ↑
Dispatch + usage + acceptance evidence → Reconciliation
                               ↓
                 Verified settlement state / unresolved dispute
~~~

The exact agreement mechanism is unresolved in this review. “Settlement pending” must remain separate from “execution failed.” A timeout observed by a client does not prove that an action had no effect. Before retrying, determine whether the original request was accepted or settled.

## What belongs where?

| Data | Intended authority/location | Important limit |
| --- | --- | --- |
| Source and build inputs | Developer-controlled source/build system | A branch name alone is not immutable provenance |
| Deployment intent | Developer control plane | Desired state is not observed runtime state |
| Capacity and health | Provider advertisements and mesh observations | Freshness and reservation are required |
| Workload secrets and application data | Approved runtime/storage boundary | Never infer confidentiality from encrypted transport alone |
| Usage and completion evidence | Attributable records correlated with dispatch | Signature attribution is not independent correctness proof |
| Payment outcome | Chosen chain/contract state | Confirm against the selected release and network |
| Reputation | Evidence-derived provider assessment | Scoring and appeals need a defined policy |

## Identity boundaries

A repository identity, developer account, mesh endpoint identity, provider identity, agent identity and wallet/validator signer serve different purposes. The design needs explicit bindings and revocation rules between them. Reusing a key or equating two identifiers without a contract obscures authority and makes incident recovery harder.

## Failure ownership

DevHub should identify invalid configuration or build failure. Marketplace should explain admission, terms and reconciliation failures. Mesh should distinguish no-start, running, failed and unknown execution outcomes. Chain integration should distinguish submission from verified transaction outcome. Freddie should preserve the caller's authority and report the state of the whole task across those systems.

See [ecosystem roles](./ecosystem.md), [Marketplace](../components/marketplace.md) and [security](./security.md).
