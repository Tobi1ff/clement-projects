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

## Quotation and enquiry email routing — 31 October 2026

- Standard enquiries for all five contact service options now prepare drafts to `info@clementprojectssolution.co.za`. Selected pump-accessory quotation requests and direct quotation links use `sales@clementprojectssolution.co.za`.
- Selected-part drafts now identify themselves as quotation requests in the button, subject, message and result heading. Editing and changing service restores the standard enquiry flow and recipient.
- Updated the reviewed public profile’s quotation address on page 12, including tagged text. Its other eleven pages render identically to the previous approved public PDF; both bid redactions remain intact. Updated the SHA-256 manifest and verified the built download.
- Static checks pass for 16 pages and 827 references; JavaScript syntax passes. Chrome verified all five enquiry routes, all ten accessory quotations, project-reference enquiries, direct contact links and labels at 320, 390 and 1440px. No JavaScript errors or horizontal overflow occurred. No email was sent.
- Browser verification: `/tmp/clement-email-routing-check.cjs`; temporary document update: `/tmp/clement-update-profile-email.py`.

## Footer partners and SIZA — 31 October 2026

- Added the original Netcash and Sage images from the industrial profile’s Partnered with section, PDF page 4 (printed page 3), to the shared footer strip. Asset bytes match the extracted originals.
- Desktop now displays six logos in one row. The mobile-only leftward loop runs for 36 seconds to preserve its previous movement speed with six items. Decorative copies remain hidden from assistive technology. Foskor and Stibium remain excluded; the company logo’s background remains transparent.
- Added the official SIZA logo from siza.co.za to About → Registered Bodies, with its full organisation name. The asset is unchanged from the official download. Updated source provenance, section copy and responsive five-body layout without adding audit ratings or certificate-validity claims.
- Static checks pass for 16 pages and 860 references; both logo-data modules pass JavaScript syntax checks. Chrome verified all six footer images, all five body cards, mobile-only motion, reduced-motion fallback and no overflow or JavaScript errors at 320, 390, 700, 701, 768, 1024 and 1440px. Desktop/mobile screenshots visually reviewed.
- Browser verification: `/tmp/clement-partner-body-check.cjs`.

## Compact footer registered-body logos — 31 October 2026

- Added CIDB, RMA, Information Regulator, NHBRC and SIZA as five small image-only icons beside the company logo in the shared footer. Image alternatives identify each body without visible labels or extra claims.
- The brand row spans the footer width above the existing columns and keeps all six logos aligned on one line down to 320px. The company logo remains transparent. Existing About-page cards and the mobile client/partner strip remain available.
- Static checks pass for 16 pages and 940 references. Chrome verified loading, accessible names, no visible label text, alignment, transparency and no overflow or JavaScript errors at 320, 360, 390, 560, 700, 768, 1024 and 1440px. Desktop and narrow-mobile footer screenshots visually reviewed.
- Browser verification: `/tmp/clement-footer-bodies-check.cjs`.

## Lifting catalogue and complete model sheet — 31 October 2026

- Added Lifting & Rigging within the industrial offering, linked from Services, Mining & Industrial, Resources and the footer. The catalogue contains 37 product choices in seven groups, based on PDF pages 4–6 of the supplied 2026 lifting profile. Its photograph is the original rigging-hardware image extracted from PDF page 2.
- Product links prefill a quotation enquiry with product, size/reference, quantity and optional requirements. Quotations prepare drafts addressed to sales; general lifting enquiries prepare drafts addressed to info. The visitor still reviews and sends the email. No email was sent during verification.
- Omitted the disputed inspection-service claim, unconfirmed grades and numerical load ratings. Existing reviewed public downloads remain unchanged; the newly uploaded source PDFs are not served.
- Completed the pump sheet with all 59 pairings across eight family groups, including SP/SP(R), SH, AF/AMF and the G/GH continuation. All reference/model strings were found in both the legacy and new industrial profiles; the continuation was checked against the existing profile review. Added the second source-page link and special-model enquiry series. The public source remains the reviewed, bid-redacted legacy PDF, printed pages 6–7 (PDF pages 7–8).
- Build, JavaScript syntax, whitespace and static integrity checks passed: 17 pages and 1,082 local references, with valid document hashes and links.
- Chrome checked all 17 pages at 320 and 1440px; changed pages additionally at 390, 600, 768 and 1024px. No horizontal overflow, image decoding failures or page JavaScript errors occurred.
- Verified all 37 product selections; required-product and quantity validation; size/reference and quantity in quotation drafts; sales/info routing; editing and service changes; existing pump quotation behaviour; all eight family filters; flexible model search; no-results/reset; all 59 rows in print; and catalogue/table fallbacks with JavaScript disabled.
- Desktop/mobile catalogue and mobile enquiry screenshots visually reviewed. Session automation: `/tmp/clement-lifting-iteration-check.cjs`; screenshots: `/tmp/clement-lifting-1440.png`, `/tmp/clement-lifting-390.png` and `/tmp/clement-lifting-form-390.png`.

## Service profiles and capability updates — 31 October 2026

- Completed the profile-based iteration with four service-specific download cards on Home and Resources: Mining & Industrial, Construction, Lifting/Rigging/Lashing and Agriculture. Each service uses its matching PDF. The reviewed legacy combined PDF remains available at its existing URL.
- Prepared reviewed 10-page Mining, 7-page Construction and 6-page Lifting PDFs without changing the supplied originals. Updated quotation mailboxes to sales, physically redacted both Construction bid amounts and their tagged text, and replaced the third-party inspection-service paragraph with product-enquiry guidance. Removed document metadata and embedded files. Other source content remains as supplied.
- Checked edited pages visually; all other pages render identically to their sources. Verified removed text against extracted text, object dictionaries, ActualText/UTF-16 forms and decoded streams. New SHA-256 manifests and build checks protect all reviewed documents and verify the exact served bytes.
- Pointed project and registration references to Construction PDF page 6, and model references to Mining PDF pages 7–8. Both project statuses remain unchanged. All 59 model reference/corresponding-model strings were verified against the reviewed Mining PDF.
- Expanded the Construction and Mining service pages to six capability groups each, covering additional construction scope, components, materials and engineering supplies. Added Leadership & Governance and Business Management to the founder biography. Selected lifting-product context now uses a generic selected-product/part label.
- Build, JavaScript syntax, whitespace and integrity checks pass: 17 pages, 1,087 local references and all five PDF files, including the preserved legacy file. Chrome rechecked all 17 pages at 320/1440px and changed catalogue/contact/model pages at 390/600/768/1024px; all 37 product selections, quantity validation, sales/info routing, editing, pump regression, model filters/search/print and no-JavaScript fallbacks passed. No email was sent.
- Additional Chrome checks verified the four Home/Resources downloads, each service PDF, project/registration/model source pages, expanded service cards and founder update. Resources, Construction and Mining layouts passed at 390, 1024 and 1440px without overflow, decoding failures or JavaScript errors. Desktop/mobile service screenshots visually reviewed.
- Temporary tooling: `/tmp/clement-prepare-service-profiles.py`, `/tmp/clement-lifting-iteration-check.cjs` and `/tmp/clement-service-download-check.cjs`.

## Navigation improvements — 31 October 2026

- Replaced the hover/focus-dependent Services dropdown with a native disclosure labelled Services & Equipment. Grouped the three services separately from Pump Accessories & Spares, Lifting & Rigging, and Models & Parts Sheet. Current child pages have an active highlight and `aria-current="page"`.
- Renamed Resources to Downloads in navigation, breadcrumb/title and footer, retaining its existing URL. Renamed the header action to Enquire. Galleries and project archive remain outside the services menu.
- The compact menu starts collapsed up to 1100px. Its Enquire action stays visible while expanded content scrolls. Native disclosure works with click/touch/Space/Enter; Escape closes the submenu first and returns focus, then closes the mobile menu. Outside clicks, link selection and breakpoint changes reset open state. Without JavaScript, the mobile navigation is visible and the native disclosure still works.
- Build, syntax, whitespace and static checks pass: 17 pages and 1,087 references, including reviewed PDF hashes. Chrome checked every header and 320x640, 390x844, 768x900, 1024x768, 1100x900, 1101x900 and 1440x1000 viewports. Confirmed collapsed/expanded enquiry visibility, disclosure control, Escape/focus/outside click, resize reset, active child links, direct pump navigation, gallery/archive exclusion, no-JavaScript access and no horizontal overflow or JavaScript errors. Desktop and small-mobile menus visually reviewed.
- Browser verification: `/tmp/clement-navigation-check.cjs`; screenshots: `/tmp/clement-nav-expanded-320.png` and `/tmp/clement-nav-expanded-1440.png`.
