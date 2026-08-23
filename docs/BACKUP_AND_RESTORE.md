# Backup and restore

## Current demonstration

The code and versioned JSON snapshot are recoverable from repository history. The five downloaded images are not an adequate model for a real archival media backup.

## Production policy

- Database: encrypted daily backup, 30 daily and 12 monthly restore points.
- Media masters and permissions metadata: versioned object storage plus an encrypted copy in a separate failure domain.
- Static research snapshot: monthly versioned JSON export with schema and dataset versions.
- Search indexes and image derivatives: rebuildable, not primary backup artifacts.

## Restore test

Quarterly: restore into an isolated staging environment, run migrations, run graph validation, verify media hashes, rebuild search, and record time/result. Never test by overwriting production.

## Demonstration verification

```bash
npm install
npm run validate:data
npm run build
```

Production service-specific commands must be added only after the database and object-storage providers are selected; inventing them now would create unsafe documentation.
