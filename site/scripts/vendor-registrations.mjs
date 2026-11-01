// Organisations listed under Qualified Suppliers in the supplied 2026
// Construction and Mining & Industrial profiles, PDF page 3 of each.
export const vendorRegistrations = [
  'Palabora Mining Company',
  'Foskor',
  'Lepelle Northern Waters',
  'Ba-Phalaborwa Municipality',
  'SASSA',
  'Mopani TVET College',
  'Ivanplats',
];

export function renderVendorRegistrations({ eyebrow }) {
  return `<section class="section vendor-registrations-section" id="vendor-registrations"><div class="container"><div class="section-heading"><div>${eyebrow('SUPPLIER REGISTRATIONS')}<h2>Vendor registrations.</h2></div><p>Our company profiles list Clement Projects Solution as a qualified supplier to these organisations.</p></div><ul class="vendor-registrations-list">${vendorRegistrations.map((name, index) => `<li><span class="vendor-registration-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><span>${name}</span></li>`).join('')}</ul></div></section>`;
}
