// Platform names requested for About us. Source provenance is in the asset manifest.
export const businessPlatforms = [
  { name: 'Netcash', file: 'partner-netcash.jpg', width: 200, height: 53 },
  { name: 'Sage', file: 'partner-sage.png', width: 56, height: 32 },
  { name: 'SAP Ariba', file: 'platform-ariba.png', width: 267, height: 52 },
  { name: 'Coupa Supplier Portal', file: 'platform-coupa.png', width: 291, height: 47 },
];

export function renderBusinessPlatforms({ eyebrow }) {
  return `<section class="section business-platforms-section" id="business-platforms"><div class="container"><div class="section-heading"><div>${eyebrow('PAYMENTS & PROCUREMENT')}<h2>Business platforms.</h2></div></div><div class="business-platforms-grid" role="group" aria-label="Business platforms">${businessPlatforms.map(platform => `<div class="business-platform-logo"><img src="assets/${platform.file}" alt="${platform.name}" width="${platform.width}" height="${platform.height}" loading="lazy" decoding="async"></div>`).join('')}</div><p class="business-platforms-copy">Clement Projects Solution is e-procurement enabled on SAP Ariba, Coupa, Sage and Netcash, ensuring seamless PO, invoicing and payment integration with enterprise clients.</p></div></section>`;
}
