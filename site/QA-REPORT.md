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

## Remove mobile logo pause control — 30 October 2026

- Removed the pause/resume button and its manual pause state/listeners at the user’s request. The mobile track uses the full strip width.
- Kept the mobile-only leftward loop, temporary hover/keyboard-focus pause, reduced-motion/manual-scroll fallback and static desktop row.
- Static checks pass for 12 pages and 602 references. Chrome confirmed the button is absent on all 12 pages, leftward motion on mobile, full strip width, static desktop, reduced-motion scrolling and no overflow at 320, 390, 700, 701, 768 and 1440px. Mobile strip visually reviewed. Automation: `/tmp/clement-no-pause-check.cjs`.

## About-page Registered Bodies — 30 October 2026

- Extracted CIDB, RMA, Information Regulator and NHBRC logos from the supplied industrial profile’s Registered Bodies section (PDF page 11).
- Added a dedicated `#registered-bodies` section on About, a request-current-documents link and a link to the original profile page. The copy attributes the list to the profile without adding current grades or certificate-validity claims.
- Static checks pass for 12 pages and 608 local references.
- Chrome verified all four logos load with their original proportions, a responsive 2/4-column layout and no horizontal overflow at 320, 390, 560, 768, 1024 and 1440px. The enquiry link preselects company documents; the founder section and client footer remain present. Desktop/mobile screenshots visually reviewed. Automation: `/tmp/clement-registered-bodies-check.cjs`.

## Pump accessories and enquiries — 30 October 2026

- Added a catalogue for the ten accessories named on PDF page 9 of the industrial profile. The original labelled exploded-view diagram was extracted from image object 238.
- Added links from Mining & Industrial, Resources, the Models & Parts Sheet and footer.
- Part links preselect the industrial enquiry and part name. Added optional pump-model and quantity fields; a selected accessory requires its part name and allows an optional message. The draft includes the part, model, quantity and requirements, and uses the selected part in its subject.
- Static checks pass for 13 pages and 676 local references. JavaScript syntax passes.
- Chrome checked all 13 pages at 320 and 1440px, and the catalogue/contact pages at 390, 600, 768 and 1024px; no image decoding errors, JavaScript errors or horizontal overflow occurred.
- Verified all ten part links, draft data and recipient, optional message, quantity and whitespace validation, editing, service changes, all five existing enquiry routes, model-sheet references, the diagram viewer and no-JavaScript email fallback. No email was sent.
- Desktop/mobile catalogue and enquiry screenshots visually reviewed. Automation: `/tmp/clement-accessories-check.cjs`.

## Projects & Bids Archive — 30 October 2026

- Added a searchable archive and two standalone project record pages, linked from Our Work, Construction and the footer. No Services-menu entry was added.
- The 2024 Ba-Phalaborwa plant-hire record is completed, with a 30-day duration; its bid amount is now withheld. The Dwellers 2025 drain-construction record has its bid amount withheld and remains last-reported ongoing with current status unconfirmed. Both amounts, years and the completed duration were checked against the original PDF.
- Amounts are labelled as recorded bids. No contract-award values, open-tender submission process, project-specific photographs or personal reference contacts were invented or added to the project summaries. Original source-document links remain available.
- Added search, status, recorded-year and work-type filters; combined filtering; empty/reset states; and shareable filter URLs. Current-project filtering truthfully shows no confirmed current records.
- Project enquiry links preserve the project reference in the contact form and draft; switching service clears that context. The existing accessory enquiry remains supported.
- Static checks pass for 16 pages and 827 local references. JavaScript syntax passes.
- Chrome checked all 16 pages at 320 and 1440px, plus archive/detail, Our Work and Construction layouts at 390, 600, 768 and 1024px. No image decoding failures, JavaScript errors or horizontal overflow occurred.
- Verified status/year/work/search combinations, reload and deep links, invalid parameters, empty/reset states, both detail pages, source-data labels, enquiry references and no-JavaScript browsing. No email was sent.
- Desktop/mobile archive, record cards and detail pages visually reviewed. Automation: `/tmp/clement-project-archive-check.cjs`.

## Withhold public bid amounts — 31 October 2026

- Removed bid amount fields from public project data and replaced values on the archive/detail pages with “Available on request”. Updated public copy and metadata accordingly.
- Created a reviewed 12-page public profile PDF with both amounts removed from the rendered content and tagged-PDF ActualText entries. Replaced those fields with “Available on request”; removed document metadata and embedded-file payloads. The other eleven pages render identically to the source.
- The local original remains unchanged and is excluded from the current public Git revision. Earlier Git history is unchanged. Historical local export archives are also ignored.
- The build now serves the reviewed PDF from `documents/`, with a SHA-256 manifest checked against deployment output. The normal website build needs no external PDF library.
- Verified public PDF text, object dictionaries and decoded streams contain neither original figure. Verified all 16 HTML pages and public project data omit the figures.
- Static checks pass for 16 pages and 827 references. Chrome checked archive/detail layouts at 320, 390, 768 and 1440px, withheld notices, filters, project-reference enquiries and no-JavaScript output. Public PDF page and desktop/mobile cards visually reviewed.
- One-time PDF tooling: `/tmp/clement-redact-public-profile.py`; browser checks: `/tmp/clement-bid-mask-check.cjs`. No email was sent.
