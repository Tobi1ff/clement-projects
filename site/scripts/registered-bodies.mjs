// Bodies listed in the supplied industrial profile, PDF page 11.
// Do not infer current grades, accreditation or certificate validity from these logos.
export const registeredBodies = [
  {
    "file": "body-cidb.png",
    "name": "CIDB",
    "description": "Construction Industry Development Board",
    "width": 212,
    "height": 88,
    "sourceObject": 273
  },
  {
    "file": "body-rma.jpg",
    "name": "RMA",
    "description": "Rand Mutual Assurance",
    "width": 358,
    "height": 157,
    "sourceObject": 275
  },
  {
    "file": "body-information-regulator.jpg",
    "name": "Information Regulator",
    "description": "South Africa",
    "width": 347,
    "height": 139,
    "sourceObject": 276
  },
  {
    "file": "body-nhbrc.jpg",
    "name": "NHBRC",
    "description": "National Home Builders Registration Council",
    "width": 190,
    "height": 155,
    "sourceObject": 282
  }
];

export function renderRegisteredBodies({ eyebrow, button, arrow }) {
  return `<section class="section registered-bodies-section" id="registered-bodies"><div class="container"><div class="section-heading"><div>${eyebrow('REGISTRATION & COMPLIANCE')}<h2>Registered Bodies.</h2></div><p>Registration and compliance bodies listed in our company profile.</p></div><div class="registered-bodies-grid">${registeredBodies.map(body => `<article class="registered-body-card"><div class="registered-body-logo"><img src="assets/${body.file}" alt="${body.name} logo" width="${body.width}" height="${body.height}" loading="lazy" decoding="async"></div><h3>${body.name}</h3><p>${body.description}</p></article>`).join('')}</div><div class="registered-bodies-documents"><p>Contact our team for current registration records and supporting documentation relevant to your requirements.</p><div>${button('Request current documents', 'contact.html?service=documents')}<a class="text-link" href="downloads/cps-industrial-construction-profile.pdf#page=11">View company profile${arrow}</a></div></div></div></section>`;
}
