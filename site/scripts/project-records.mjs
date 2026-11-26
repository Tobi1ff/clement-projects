// Public project statuses and date ranges are based on the company profile and
// the client’s WhatsApp project update received on 26 November 2026.
// Bid amounts are withheld from public records and available on request.
export const projectRecords = [
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
    source: 'Construction Company Profile 2026',
    sourcePage: 6,
  },
  {
    slug: 'fruit-picking-2024-2026',
    title: 'Fruit picking',
    client: 'Agricultural project',
    service: 'agriculture',
    workType: 'agriculture',
    workTypeLabel: 'Agriculture',
    year: 2024,
    endYear: 2026,
    period: '2024–2026',
    status: 'completed',
    reportedStatus: 'Completed',
    statusNote: 'The client’s project update lists fruit picking as completed for 2024–2026.',
    scope: 'Fruit-picking project recorded in the 2026 agriculture profile.',
    duration: null,
    source: 'Fruit Picking Profile 2026',
    sourceFile: 'cps-agriculture-profile.pdf',
  },
  {
    slug: 'dwellers-side-drains-2025',
    title: 'Construction of side open drains',
    client: 'Dwellers Trading & Projects',
    service: 'construction',
    workType: 'civil-works',
    workTypeLabel: 'Civil works',
    year: 2025,
    status: 'current',
    reportedStatus: 'In progress',
    statusNote: 'The latest company profile lists this side-drain project as ongoing.',
    scope: 'Construction of side open drains.',
    duration: null,
    source: 'Construction Company Profile 2026',
    sourcePage: 6,
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
    if ('bidAmountCents' in record) throw new Error(`Keep bid amounts out of public project records: ${record.slug}`);
    if (!Number.isInteger(record.year) || record.year < 1900) throw new Error(`Invalid project year: ${record.slug}`);
    if (record.endYear != null && (!Number.isInteger(record.endYear) || record.endYear < record.year)) throw new Error(`Invalid project date range: ${record.slug}`);
    for (const key of ['title', 'client', 'scope', 'workType', 'workTypeLabel', 'statusNote', 'source']) {
      if (typeof record[key] !== 'string' || !record[key].trim()) throw new Error(`Missing ${key}: ${record.slug}`);
    }
    if (record.sourcePage != null && (!Number.isInteger(record.sourcePage) || record.sourcePage < 1)) throw new Error(`Invalid source page: ${record.slug}`);
  }
}
