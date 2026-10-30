# Website verification — 29 October 2026

The local preview at `http://localhost:4173/` passed the checks below. No website changes were needed during this verification.

## Completed

- Static integrity: 10 pages and 349 local references; heading structure, unique IDs, form labels, image alternatives and accessibility CSS.
- JavaScript syntax: `node --check src/app.js`.
- Chrome layout checks: all 10 pages at widths of 320, 390, 768, 1024 and 1440 pixels. No document horizontal overflow, broken image sources, HTTP failures or page JavaScript errors were detected.
- Visual review of full-page homepage screenshots at 390 and 1440 pixels.
- Mobile navigation opens, closes with Escape and updates its expanded state.
- Gallery category links and filters show the expected items; photo dialogs open and close with Escape.
- All five enquiry service selections prepare drafts addressed to the appropriate configured mailbox. Required fields prevent incomplete drafts, and editing preserves entered details.
- Both profile downloads return HTTP 200 and valid PDF headers.

Browser automation and its report are available in this session at `/tmp/clement-browser-check.cjs` and `/tmp/clement-browser-report.json`. Homepage screenshots are `/tmp/clement-desktop.png` and `/tmp/clement-mobile.png`.

## Before public launch

Confirm the preferred domain, business contacts, current credentials and permissions for public content. The enquiry form prepares a draft for the visitor to send through their email app; server-side delivery and mailbox receipt were not tested or implemented. These checks do not establish that the listed company mailboxes are active.

This was a local verification pass. No hosting deployment or domain change was performed. Safari, Firefox, physical devices and a full assistive-technology audit were outside this pass.

## Parts sheet update — 30 October 2026

- All 40 pairings were compared against text and column positions in the original PDF (printed page 6 / PDF page 7).
- Static checks pass for 11 pages and their local references.
- Chrome checks passed for the parts sheet, industrial, resources and contact pages at 320, 390, 600, 768, 1024 and 1440 pixels, with no horizontal overflow or JavaScript/HTTP errors.
- Verified all five family filters, model searches with flexible spacing/hyphens, combined filtering, no-results and reset states.
- A model enquiry prefills both references; preparing an email draft retains these details. No email was sent.
- Print styling includes all 40 rows even when the screen search has no results.
- Verified mobile navigation and the complete model table with JavaScript disabled.
- Desktop and mobile screenshots visually reviewed. Automation: `/tmp/clement-parts-check.cjs`; print output: `/tmp/clement-parts-sheet-print.pdf`.
- Pairings remain company-profile references; current availability and suitability require company confirmation.

## Founder portrait update — 30 October 2026

- Extracted the original 214 × 314 JPEG beside the founder biography from the industrial profile (PDF page 4, image object 138).
- Added the portrait to the About page founder section, with descriptive alternative text and a stable `#founder` link.
- Static checks pass for 11 pages and 449 local references.
- Chrome verified loading, proportions, native-size display, desktop/mobile placement and no horizontal overflow at 320, 390, 700, 768, 1024 and 1440 pixels. Desktop and mobile founder-section screenshots visually reviewed.
