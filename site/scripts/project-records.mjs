// Public project summaries transcribed from the industrial company profile,
// PDF page 11 (printed page 10). Reference contacts are omitted.
// Bid amounts are recorded bids, not confirmed contract awards or final payments.
// Change status to "current" only after obtaining a current company update.
export const projectRecords = [
  {
    slug: 'dwellers-side-drains-2025',
    title: 'Side-drain construction',
    client: 'Dwellers Trading & Projects',
    service: 'construction',
    workType: 'civil-works',
    workTypeLabel: 'Civil works',
    year: 2025,
    status: 'unconfirmed',
    reportedStatus: 'Ongoing',
    statusNote: 'The profile lists this 2025 project as ongoing. Its current status has not been confirmed.',
    scope: 'Construction of side open drains.',
    duration: null,
    bidAmountCents: 57205813,
    source: 'Industrial & Construction Company Profile',
    sourcePage: 11,
  },
  {
    slug: 'ba-phalaborwa-plant-hire-2024',
    title: 'Plant hire for water & sanitation works',
    client: 'Ba-Phalaborwa Municipality',
    service: 'construction',
    workType: 'plant-hire',
    workTypeLabel: 'Plant hire',
    year: 2024,
    status: 'completed',
    reportedStatus: 'Completed',
    statusNote: 'Recorded as completed in 2024 in the company profile.',
    scope: 'TLB plant hire to assist water and sanitation teams repairing leaking pipes.',
    duration: '30 days',
    bidAmountCents: 14100000,
    source: 'Industrial & Construction Company Profile',
    sourcePage: 11,
  },
];

export const archiveStatuses = [
  { id: 'all', label: 'All records' },
  { id: 'current', label: 'Current projects' },
  { id: 'completed', label: 'Completed projects' },
  { id: 'unconfirmed', label: 'Last reported' },
];

export function validateProjectRecords(records) {
  const slugs = new Set();
  for (const record of records) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(record.slug) || slugs.has(record.slug)) throw new Error('Project records need unique, safe slugs.');
    slugs.add(record.slug);
    if (!['current', 'completed', 'unconfirmed'].includes(record.status)) throw new Error(`Invalid status: ${record.slug}`);
    if (!['construction', 'industrial', 'agriculture'].includes(record.service)) throw new Error(`Invalid service: ${record.slug}`);
    if (!Number.isSafeInteger(record.bidAmountCents) || record.bidAmountCents < 0) throw new Error(`Invalid recorded bid amount: ${record.slug}`);
    if (!Number.isInteger(record.year) || record.year < 1900) throw new Error(`Invalid project year: ${record.slug}`);
    for (const key of ['title', 'client', 'scope', 'workType', 'workTypeLabel', 'statusNote', 'source']) {
      if (typeof record[key] !== 'string' || !record[key].trim()) throw new Error(`Missing ${key}: ${record.slug}`);
    }
    if (!Number.isInteger(record.sourcePage) || record.sourcePage < 1) throw new Error(`Invalid source page: ${record.slug}`);
  }
}
