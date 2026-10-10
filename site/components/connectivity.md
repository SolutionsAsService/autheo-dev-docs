# Connectivity: identity, discovery and transport

**Design / planned.** The proposed connectivity substrate lets a workload or node address a peer without treating a fixed IP address as its identity. This page does not assert a deployed AUTHEO transport stack.

## Four separate questions

| Question | Design responsibility |
| --- | --- |
| Who is this peer? | Key-derived endpoint identity and an explicit key lifecycle |
| Where might it be reached? | Discovery records and reachability hints |
| Can a session be established? | Direct connection attempts, NAT traversal and relay fallback |
| May it perform this action? | Application authorization and node/workload policy |

Discovery is not authorization. A signed address record can attribute an advertisement without proving capacity, reputation, permission or safe execution.

## Proposed connection flow

1. Load endpoint identity and local policy.
2. Publish or resolve current reachability hints.
3. Attempt eligible direct paths; use NAT traversal where supported.
4. Establish an authenticated transport session and apply application authorization.
5. Observe path quality and repair or replace degraded paths.
6. Use eligible relays when a direct path cannot be established; keep this visible in diagnostics and capacity planning.

The planning discusses Iroh/QUIC transport, Pkarr/DHT address publication and local discovery. Bluetooth, multipath, relay optimization and post-quantum negotiation appear in research/design material; they are not a released capability list. Exact protocol versions and fallback behavior need implementation evidence.

## Underlay, overlay and edge ingress

The design's peer sessions still depend on physical links, IP routing, internet providers and often relay infrastructure. Local communication is an intended option; the whole ecosystem is not independent of the internet. DNS, BGP, anycast, PoPs and submarine cables describe different parts of that underlying environment, not AUTHEO-owned infrastructure.

Edge ingress can bring a conventional client request into a service; peer transport connects participating endpoints. Neither decides price or settles a workload agreement. Path locality also does not establish data residency or compliance: artifact placement, backups, logs and relay paths all need separate review.

## Diagnose by stage

- **Cannot resolve:** inspect record availability, freshness and identity binding.
- **Cannot connect:** inspect local firewall/NAT policy and allowed relay paths without exposing private topology.
- **Connected but denied:** inspect authorization, not only transport connectivity.
- **Connected but slow:** distinguish resource saturation from loss, latency and relay transit.
- **Unexpected peer or stale identity:** stop privileged actions and follow the supported revocation/rotation procedure.

These are review questions, not commands for an unverified daemon. See [data flows](../concepts/data-flows.md) and [security boundaries](../concepts/security.md).

## Path policy and advertisement freshness

The routing design considers latency, loss, jitter, bandwidth, reliability, headroom, locality and cost only after hard policy constraints. It proposes hysteresis or cooldown behavior to avoid repeatedly switching between similarly ranked paths. Exact thresholds remain implementation decisions, not published service guarantees.

Discovery records need a publication/expiry lifecycle and a stale-record response. Cached information can aid recovery but must not perpetuate revoked identity or expired eligibility. Browser-mediated discovery and node participation may have different transport constraints; no unsupported browser networking capability is assumed here.
