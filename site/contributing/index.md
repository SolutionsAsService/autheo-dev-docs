# Contributing to AUTHEO documentation

## Publication is explicit

Only pages listed in publication.json are staged into the site build. Legacy source material, private planning, research, compliance drafts, and audit reports are not public site inputs. A file being tracked by Git does not authorize its publication.

## Author a page

1. Choose a reader task and scope.
2. Add one clear title, prerequisites, steps or definitions, expected outcomes, failure cases, and related pages.
3. Support product claims with a pinned public source or approved evidence. Distinguish source-backed, live-tested, planned, and unknown.
4. Use placeholder hosts for examples unless an endpoint is owned, current, and reviewed. Never include credentials or executable install scripts copied without review.
5. Add the page to the allowlist and sidebar together; no orphan public pages.
6. Run the tests, inventory, production build, local link checks, and desktop/mobile review.
7. Open a reviewed branch change. Do not publish directly from the planning repository root.

## Review sensitive claims

Network identifiers, token units, payment behavior, security algorithms, benchmark numbers, uptime promises, legal status, and compliance statements require specific evidence and owner review. Remove an unsupported public claim rather than making it sound more confident.

## Preserve history

Keep source material recoverable. The private migration inventory records legacy disposition. Redirect only when the new page actually answers the same question; otherwise archive explicitly. Do not expose private source paths through a public redirect map.

See [deployment](../deployment/index.md) and [sources](../reference/sources.md).
