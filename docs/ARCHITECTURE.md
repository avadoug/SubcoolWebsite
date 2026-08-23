# Architecture

## Current implementation

The public site uses a Vinext/Next-compatible React application built for Cloudflare Workers through the Sites Vite plugin. The page shell is server-rendered; filtering, search, random discovery, and record dialogs are isolated in a client component. Images are local, responsive assets served through the application.

The research layer is a versioned JSON snapshot at `data/archive.v0.1.0.json`. It deliberately remains portable and vendor-neutral. `npm run validate:data` checks referential and pedigree integrity before builds or imports.

## Production evolution

A production archive should move canonical entities into PostgreSQL (or D1 only if its operational constraints remain suitable) with versioned migrations. Normalized relational tables plus recursive queries are sufficient for the initial knowledge graph; a graph database is not justified until real query scale proves otherwise.

Search should begin with database full-text and trigram indexes. Media masters belong in object storage with derivatives and hashes; Git is suitable only for this demonstration set. Authentication, role authorization, moderation, and append-oriented audit logging must be server-enforced before any write UI ships.

## Rendering boundaries

- Server: public records, citations, metadata, policy pages, export endpoints.
- Client: filters, dialogs, graph interaction, compare tools.
- Background jobs: dead-link checks, image derivatives, backups, search indexing, import reports.

## Feature flags

Future AI, WebGPU, community submissions, accounts, and public API work must be independently disableable. None is simulated in the current release.
