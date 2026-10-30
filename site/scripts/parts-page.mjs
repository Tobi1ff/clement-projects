import { pumpFamilies } from './parts-data.mjs';

export function renderPartsPage({ eyebrow, button, arrow, download }) {
  const count = pumpFamilies.reduce((total, family) => total + family.pairs.length, 0);
  return `<section class="parts-hero"><div class="container">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span><a href="mining-industrial.html">Mining & Industrial</a><span>/</span>Models & parts</div>
    <div class="parts-hero-grid"><div>${eyebrow('MINING EQUIPMENT SUPPLIES', true)}
      <h1>Interchangeable <br>Models & <br><em>Parts Sheet.</em></h1>
      <p>Find your pump model and the corresponding model listed in our company profile. Share your reference with our team to discuss the parts you need.</p>
      <div class="hero-actions">${button('Find your model', '#model-sheet')}${button('Ask about a part', 'contact.html?service=industrial', 'ghost')}</div>
    </div><figure><img src="assets/mining-pumps.jpg" alt="Industrial pumps featured in the CPS company profile" width="700" height="600" fetchpriority="high"><figcaption><span class="small-label">MODEL REFERENCE</span><strong>${count} model pairings. Five pump families.</strong><span>From the CPS industrial company profile.</span></figcaption></figure></div>
  </div></section>
  <section class="section parts-sheet" id="model-sheet"><div class="container">
    <div class="section-heading"><div>${eyebrow('FIND A MODEL')}<h2>Your reference.<br><span>The corresponding model.</span></h2></div><a class="text-link" href="downloads/cps-industrial-construction-profile.pdf#page=7">View original PDF · page 6${download}</a></div>
    <div class="parts-tools" id="parts-tools" hidden>
      <div class="parts-search"><label for="model-search">Search either model</label><input type="search" id="model-search" placeholder="e.g. 6/4D-AH or 6/4D-AM" autocomplete="off" spellcheck="false" aria-controls="models-table"><p>Enter a complete model, size or series. Spaces and hyphens are optional.</p></div>
      <fieldset class="parts-families"><legend>Filter by pump family</legend><div role="group" aria-label="Pump family"><button type="button" class="filter-button active" data-pump-family="all" aria-pressed="true">All families <span>${count}</span></button>${pumpFamilies.map(family => `<button type="button" class="filter-button" data-pump-family="${family.id}" aria-pressed="false">${family.label} <span>${family.pairs.length}</span></button>`).join('')}</div></fieldset>
    </div>
    <div class="parts-toolbar"><p id="model-count" role="status" aria-live="polite">Showing all ${count} model pairings.</p><button class="text-link" id="print-sheet" type="button" hidden>Print full sheet${download}</button></div>
    <table class="models-table" id="models-table" role="table"><caption class="sr-only">Pump model pairings transcribed from the CPS company profile, printed page 6.</caption><thead role="rowgroup"><tr role="row"><th scope="col" role="columnheader">Warman reference model</th><th scope="col" role="columnheader">Listed interchangeable model</th><th scope="col" role="columnheader">Parts enquiry</th></tr></thead><tbody role="rowgroup">${pumpFamilies.map(family => family.pairs.map(([reference, model]) => {
      const detail = `Reference model: ${reference}; listed model: ${model}; sheet reference: CPS-3785-SP`;
      return `<tr role="row" data-model-row data-pump-group="${family.id}" data-reference="${reference}" data-model="${model}"><th scope="row" role="rowheader"><span class="model-mobile-label" aria-hidden="true">Warman reference model</span><strong>${reference}</strong><span class="model-family">${family.label} family</span></th><td role="cell"><span class="model-mobile-label" aria-hidden="true">Listed interchangeable model</span><strong>${model}</strong></td><td role="cell"><a class="text-link model-enquire" href="contact.html?service=industrial&amp;detail=${encodeURIComponent(detail)}" aria-label="Enquire about ${reference} and ${model}">Enquire${arrow}</a></td></tr>`;
    }).join('')).join('')}</tbody></table>
    <div class="parts-empty" id="models-empty" hidden><h3>No matching models.</h3><p>Try a shorter reference or clear the filters to see the full sheet.</p><button class="button button-primary" id="reset-models" type="button">Clear search & filters${arrow}</button><a class="text-link" href="contact.html?service=industrial">Ask our team about your model${arrow}</a></div>
    <aside class="parts-reference"><span class="small-label">SHEET REFERENCE · CPS-3785-SP</span><p>Model pairings are reproduced from the company profile, printed page 6. Please confirm the exact model, dimensions, materials and application with our team before ordering.</p></aside>
    <noscript><p class="parts-noscript">All model pairings are shown above. Enable JavaScript to search and filter the sheet.</p></noscript>
  </div></section>
  <section class="parts-help"><div class="container parts-help-grid"><div>${eyebrow('LET’S IDENTIFY YOUR REQUIREMENT')}<h2>Have a model.<br><em>Need a part?</em></h2></div><div><p>Select “Enquire” beside a model to include both references in your enquiry. Add the part required, quantity and operating conditions so our team can discuss your requirements.</p><p>Unsure of the model? Include the details from your pump nameplate in your message.</p><a class="text-link parts-accessories-link" href="pump-accessories.html">Browse pump accessories & spares${arrow}</a>${button('Discuss your parts requirement', 'contact.html?service=industrial')}</div></div></section>`;
}
