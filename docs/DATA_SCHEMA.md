# Data schema

## Identity

Names and slugs are presentation fields. Immutable IDs are the relationship keys:

- `cultivar_######`
- `source_######`
- `claim_######`
- `relationship_######`
- `asset_######`

A rename changes `canonicalName` and preserves aliases; it never replaces an ID. Same-name cultivars receive separate IDs and an explicit collision notice.

## Entities

- Cultivar: canonical identity, aliases, slug, record state.
- Source: title, author, type, URL, retrieval date, evidentiary classification.
- Claim: subject, type, candidate value, confidence state, supporting sources, editorial state.
- Relationship: typed and directional edge bound to a supporting claim.
- Media asset: file, creator, rights state, license, identity status, optional cultivar/source relation.
- Editorial decision: reserved for canonical-value changes without destroying superseded claims.

## Constraints

- IDs and slugs are unique.
- All references resolve.
- A cultivar cannot parent itself.
- Identical typed edges are rejected.
- Parent traversal must be acyclic.
- Media with unknown, pending, or prohibited rights cannot publish.
- Claims remain distinct from display prose.

## Relationship sketch

```text
Cultivar <--subject-- Claim --supported by--> Source
    |                   |
    +--HAS_PARENT------>+ (provenance binding)
    |
    +--depicted by----> MediaAsset
```

## Deletion

Production records should use soft deletion. Hard deletion requires elevated authorization and an audit entry. Merges and splits preserve redirected IDs, claims, and revision history.
