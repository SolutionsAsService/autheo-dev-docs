# Freddie: delegated agent operations

**Design / planned.** Freddie is the proposed persistent agent harness for transactions, operations and upkeep. Its purpose is to continue a multi-step job over time, not merely answer a prompt. No supported AUTHEO Freddie release or permission contract was verified here.

## Intended role

An agent runs inside or alongside a workload, has an addressable identity, receives events and coordinates work. Planning examples include renewing a capacity lease, restarting a degraded service, coordinating build or AI tasks, collecting results and reporting progress.

A typical design flow is **trigger → coordinator → scoped worker tasks → result/evidence collection → requester update**. The harness must retain task identity and completion state across retries or disconnections. A persistent process alone does not establish durable task execution.

## Relationships to other components

- **DevHub** presents deployment intent and operational status.
- **Marketplace** supplies offers, admission and agreement-related workflows.
- **Mesh** carries communication and executes agent/worker processes.
- **L1** handles supported chain transactions; an agent's report is not chain finality.

Freddie consumes those interfaces. It must not silently redefine payment rules or treat peer connectivity as authority to act.

## Authorization is a separate design gate

The planning explicitly leaves autonomy and spending policy unresolved. Before unattended use, a release needs:

| Boundary | Questions that must be answered |
| --- | --- |
| Principal | Who delegated this task, and for which project/environment? |
| Allowed actions | Which reads, deployments, purchases and administrative actions are permitted? |
| Money and signing | What caps, asset/network restrictions and confirmation requirements apply? |
| Delegation | Can a worker delegate again, and do restrictions follow every subtask? |
| Revocation | How quickly does withdrawal of authority stop queued and active work? |
| Audit | Which request, approval, tool action and outcome can be reconstructed? |
| Recovery | Which operations are safe to retry, and how are duplicate side effects prevented? |

These are requirements, not claims of implemented controls. Do not provide a wallet seed or unrestricted signing key to an unverified harness.

## Example: recover a service without exceeding authority

A monitoring event can propose inspecting health and logs. A restart may be allowed within the existing deployment. Moving to a different provider, changing data locality or increasing budget may require fresh approval. The agent should report **proposed**, **authorized**, **running**, **failed** and **completed** distinctly, and verify the final result rather than equating a submitted tool call with success.

Repository indexing, hot reload and code-analysis research are possible development aids, not proof of Freddie runtime features. See [developer tooling](./devhub.md), [security boundaries](../concepts/security.md) and [capability status](../reference/status.md).

## Harness responsibilities behind an agent

The tooling research separates the reasoning/control loop, context handling, model-provider adapters, callable tools, procedural skills, conversation history, machine observations, scheduling and observability. This is a useful design decomposition: a model response, a tool execution and a durable task record are different objects. An interface such as a CLI, browser or message channel is an entry point, not necessarily a mandatory serial hop through every other interface.

A procedural skill describes how to do work; it does not itself grant permission. A machine snapshot is an observation at a time, not proof that state remains unchanged. Context compression must not silently discard the caller's limits or unfinished obligations. Repository-graph integration is a research possibility, not a verified AUTHEO runtime dependency.
