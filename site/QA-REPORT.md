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

## Agriculture gallery update — 30 October 2026

- Selected 24 original photos from the supplied fruit-picking folder: 8 people/picking, 6 orchard/transport and 10 harvest/handling photographs. All deployed photo files were verified byte-for-byte against the supplied originals.
- Added a gallery page, an Agriculture-page preview and links from Services, Our Work and the footer.
- Static checks pass for 12 pages and 566 local references.
- Chrome checked all 12 pages at 320 and 1440 pixels, plus the gallery and Agriculture page at 390, 600, 768 and 1024 pixels. Images load without decoding failures; no horizontal overflow or JavaScript errors occurred.
- Verified all category filters and linked category views; next/previous controls, wraparound, arrow keys, Escape and return of focus; and the existing Our Work photo dialog.
- With JavaScript disabled, all 24 photos remain visible and links open the original images.
- Desktop, mobile, photo-grid and viewer screenshots visually reviewed. Automation: `/tmp/clement-agriculture-check.cjs`.

## Footer client logos — 30 October 2026

- Extracted the four selected original logos from the industrial profile’s Current Clients section (PDF page 12): Mopani TVET College, Ba-Phalaborwa Municipality, Dwellers Trading and Projects, and South African National Parks.
- Foskor and Stibium are excluded from the footer logo list and build assets.
- The strip has only images, with accessible alternative text. No visible heading, additional client claims, links, animation or external image requests were added.
- All 12 generated footers contain exactly these four logos. Static checks pass for 12 pages and 602 local references.
- Chrome checked logo loading, preserved proportions, lack of visible labels/links and no horizontal overflow at 320, 390, 700, 768, 1024 and 1440 pixels. Desktop/mobile strips visually reviewed. Automation: `/tmp/clement-clients-check.cjs`.

## Mobile client logo scrolling — 30 October 2026

- Added a seamless leftward logo loop only on screens up to 700px. Desktop retains the four-logo row.
- Added a mobile pause/resume icon control; touch and keyboard focus pause the strip. Reduced-motion preferences and browsers without JavaScript provide manual horizontal scrolling without automatic motion.
- Loop copies are decorative, inert and hidden from assistive technology; the four original logos retain accessible names. Foskor and Stibium remain excluded.
- Static checks pass for 12 pages and 602 local references.
- Chrome verified leftward direction and the loop seam, pause/resume, touch/focus pause, reduced-motion and no-JavaScript fallbacks, no document overflow, and the 700/701px mobile boundary across 320, 390, 700, 701, 768 and 1440px widths. Desktop/mobile strips visually reviewed. Automation: `/tmp/clement-logo-scroll-check.cjs`.
