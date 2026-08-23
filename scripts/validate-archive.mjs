import { readFile } from 'node:fs/promises';

const archive = JSON.parse(await readFile(new URL('../data/archive.v0.1.0.json', import.meta.url), 'utf8'));
const errors = [];

function uniqueIds(records, label) {
  const seen = new Set();
  for (const record of records) {
    if (!record.id) errors.push(`${label} record is missing an id`);
    if (seen.has(record.id)) errors.push(`duplicate ${label} id: ${record.id}`);
    seen.add(record.id);
  }
  return seen;
}

const cultivarIds = uniqueIds(archive.cultivars, 'cultivar');
const sourceIds = uniqueIds(archive.sources, 'source');
const claimIds = uniqueIds(archive.claims, 'claim');
uniqueIds(archive.relationships, 'relationship');
uniqueIds(archive.mediaAssets, 'asset');

const slugs = new Set();
for (const cultivar of archive.cultivars) {
  if (slugs.has(cultivar.slug)) errors.push(`duplicate cultivar slug: ${cultivar.slug}`);
  slugs.add(cultivar.slug);
}

const edgeKeys = new Set();
const parentsByChild = new Map();
for (const edge of archive.relationships) {
  if (!cultivarIds.has(edge.from)) errors.push(`relationship ${edge.id} has missing from node ${edge.from}`);
  if (!cultivarIds.has(edge.to)) errors.push(`relationship ${edge.id} has missing to node ${edge.to}`);
  if (!claimIds.has(edge.claimId)) errors.push(`relationship ${edge.id} has missing claim ${edge.claimId}`);
  if (edge.from === edge.to) errors.push(`relationship ${edge.id} is self-parenting`);
  const key = `${edge.from}|${edge.type}|${edge.to}`;
  if (edgeKeys.has(key)) errors.push(`duplicate relationship edge: ${key}`);
  edgeKeys.add(key);
  if (edge.type === 'HAS_PARENT') {
    const parents = parentsByChild.get(edge.from) ?? [];
    parents.push(edge.to);
    parentsByChild.set(edge.from, parents);
  }
}

for (const claim of archive.claims) {
  if (!cultivarIds.has(claim.subjectId)) errors.push(`claim ${claim.id} has missing subject ${claim.subjectId}`);
  for (const sourceId of claim.sourceIds ?? []) {
    if (!sourceIds.has(sourceId)) errors.push(`claim ${claim.id} has missing source ${sourceId}`);
  }
}

function visit(node, trail = []) {
  if (trail.includes(node)) {
    errors.push(`pedigree cycle: ${[...trail, node].join(' -> ')}`);
    return;
  }
  for (const parent of parentsByChild.get(node) ?? []) visit(parent, [...trail, node]);
}
for (const cultivarId of cultivarIds) visit(cultivarId);

for (const asset of archive.mediaAssets) {
  if (['unknown', 'permission_pending', 'prohibited'].includes(asset.rightsStatus)) {
    errors.push(`asset ${asset.id} is not publishable: ${asset.rightsStatus}`);
  }
  if (asset.cultivarId && !cultivarIds.has(asset.cultivarId)) errors.push(`asset ${asset.id} has missing cultivar ${asset.cultivarId}`);
}

if (errors.length) {
  console.error(`Archive validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Archive ${archive.datasetVersion} valid: ${archive.cultivars.length} cultivar nodes, ${archive.claims.length} claims, ${archive.relationships.length} typed edges, ${archive.sources.length} sources, ${archive.mediaAssets.length} media assets.`);
