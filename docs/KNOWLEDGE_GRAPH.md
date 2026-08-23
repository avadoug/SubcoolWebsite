# Knowledge graph

The graph is a data model, not a commitment to a specialized graph database.

## Nodes

Current: cultivars, sources, claims, media assets. Planned: people, organizations, releases, awards, events, preservation records, catalog entries, seed packs, and editorial decisions.

## Edges

Current `HAS_PARENT` edges point from child to parent and carry `claimId` provenance. Planned edges include `BRED`, `SELECTED`, `RELEASED_AS`, `PRESERVED_AS`, `SUPPORTS`, `CONTRADICTS`, `WON`, and `AFFECTED`.

## Uncertainty

The presence of an edge does not erase uncertainty. Each edge resolves to a claim whose state may be documented, supported, disputed, unresolved, superseded, or rejected. Competing claims coexist until an editorial decision selects a public canonical interpretation.

## Traversal

Ancestor queries follow `HAS_PARENT`; descendant queries reverse it. Family filters should derive from traversal rather than string labels once the full dataset is normalized. Cycle checks run before import, and the production database should repeat equivalent constraints at the transaction boundary.
