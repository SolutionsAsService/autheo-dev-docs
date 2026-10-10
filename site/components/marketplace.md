# Marketplace: offers, matching and accountable outcomes

**Design / planned.** The Marketplace coordinates demand and provider supply. This page explains its intended commercial workflow; it is not an offer, price list, payment instruction, custody determination or released contract specification.

## Participants and offerings

A **buyer** states workload/service needs and acceptance terms. A **provider** advertises resources or a packaged service and accepts execution obligations. The **coordination layer** discovers offers, checks eligibility, matches demand, correlates evidence and prepares settlement-related actions.

The planning distinguishes:

- **Raw compute:** CPU, memory, GPU, storage and network capacity with units and eligibility constraints.
- **Packaged services:** an application plus hosting configuration, such as a game server, database or CI runner.
- **Developer services:** application delivery or ongoing support, possibly bundled with infrastructure. Human-service acceptance needs different evidence from machine resource metering.

These are intended categories, not currently purchasable listings. A packaged application still needs maintenance, data protection and an explicit service boundary.

## Matching is more than finding the lowest price

The proposed sequence is **validate request → filter eligible supply → rank candidates → reserve/admit → execute → collect evidence → reconcile settlement**. Candidate criteria include hardware/runtime fit, region and locality, availability, path quality, provider history and commercial terms.

A capacity advertisement may be stale. Matching must be followed by an admission/reservation mechanism with expiry and conflict handling. A private-node requirement must not silently become public placement just because capacity is scarce.

## Agreement and evidence

| Information | Why it must be explicit |
| --- | --- |
| Resource unit and time basis | Prevent ambiguous usage and price comparisons |
| Completion/acceptance condition | Distinguish a successful start from delivered work |
| Usage attribution | Correlate provider records with the accepted dispatch |
| Cancellation, timeout and dispute rules | Define who may act and what evidence is required |
| Retry identity | Avoid duplicate execution and duplicate settlement |
| Recovery/data ownership | Establish what survives provider failure |

The design proposes signed or attributable usage/completion records. A provider's signed assertion attributes a claim; it does not independently prove that the claim is correct. Reputation, attestation and dispute evidence serve different purposes.

## Settlement design and unresolved mechanics

The more consolidated planning prefers buyer-authorized, direct buyer/provider settlement using chain-enforced terms, rather than an operator-maintained customer balance. Older exchange drafts also explore escrow and other market models. Those descriptions are **not merged into a single implemented payment protocol**.

In particular, “funds stay in a wallet,” “contract locks a commitment” and “automatic refund” do not define the actual contract state or authority. A release must specify asset location, signing/approval rights, spend restrictions, timeout execution, fees, acceptance evidence, dispute paths and failure recovery. No deployed contract or verified bridge flow was established here; do not transfer funds based on this design.

## Reputation and service tiers

The proposal uses completion history, availability, latency outcomes and policy/attestation signals to inform provider selection. On-chain anchoring may record durable evidence or summaries; it does not require every raw metric to be stored on-chain. A score is not a guarantee against failure.

Best-effort, standard, premium and private capacity are design categories. Availability targets, compensation, reserve capacity and enforcement must be defined before any category becomes an SLA. Historical price examples and projected savings are not current quotes or measured economics.

## Failure behavior to agree before work starts

Provider loss should preserve evidence and distinguish retryable work from stateful recovery. Control-plane loss should not invent a new bill or assume every in-flight workload stopped. Reconciliation needs dispatch identity, usage records and verified chain outcomes. A retry is not permission to charge again.

Continue with [data flows](../concepts/data-flows.md), [provider preparation](../guides/provider-design.md) and [status](../reference/status.md).
