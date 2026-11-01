# Clement Projects Solution website

First implementation of the approved website design plan. Plain HTML, CSS and JavaScript; no package installation or build service required.

## Open the website

Open `dist/index.html` in a browser. Navigation, the work gallery, enquiry drafts and PDF downloads also work as local files. Alternatively run `npm run dev` from this folder and open `http://127.0.0.1:4173` when the host allows sockets.

## Edit and rebuild

- `scripts/build.mjs`: page content, shared components and generation.
- `scripts/parts-data.mjs`: model pairings transcribed from the industrial profile.
- `scripts/parts-page.mjs`: model sheet page layout.
- `scripts/lifting-equipment.mjs`: lifting catalogue, product groups and preselected quotation links.
- `scripts/pump-accessories.mjs`: accessory catalogue and preselected enquiry links.
- `scripts/project-records.mjs`: structured public project records, status and source references; bid amounts are withheld.
- `scripts/project-archive-page.mjs`: archive filters, cards and individual record pages.
- `scripts/client-logos.mjs`: selected client and partner footer logos from the company profile; Foskor and Stibium are excluded.
- `scripts/social-links.mjs`: supplied Facebook/LinkedIn destinations, WhatsApp contact and shared social-link rendering.
- `scripts/vendor-registrations.mjs`: seven qualified-supplier organisations shown after Business platforms on About.
- `scripts/business-platforms.mjs`: About-page Netcash, Sage, SAP Ariba and Coupa platform logos.
- `scripts/registered-bodies.mjs`: About-page registration and compliance logos from the supplied industrial profile, plus the official SIZA logo.
- `scripts/construction-gallery-data.mjs`: five unique supplied construction photographs and descriptive captions.
- `scripts/construction-gallery-page.mjs`: construction gallery, filters and Construction-page preview.
- `scripts/agriculture-gallery-data.mjs`: selected original agriculture photographs and captions.
- `scripts/agriculture-gallery-page.mjs`: agriculture gallery and service-page preview.
- `src/styles.css`: responsive design, including mobile layouts and reduced-motion support.
- `src/app.js`: navigation, gallery filters, photo dialog and enquiry draft preparation.
- `assets/`: selected original company photographs, transparent CPS logo, and locally hosted Inter font.
- `assets/assets-manifest.json`: image provenance and usage notes.

Run `npm run build` after changes, then `npm run check`. The agriculture profile is copied from the adjacent `clemets-projects` directory. The Mining & Industrial, Construction and Lifting profiles are copied from reviewed public documents in `documents/`, protected by `public-profiles.json` SHA-256 hashes. The reviewed legacy combined profile remains available at its existing URL and retains its separate manifest.

## Current behaviour

The primary navigation uses Home, About us, Services & Equipment, Our work, Downloads and Enquire. Services & Equipment is a native disclosure grouped into three services and three equipment/parts links, including direct pump accessories access. It starts collapsed, supports mouse/touch/keyboard and highlights the current service or equipment page. Screens up to 1100px use the compact menu with a sticky Enquire action; Escape, outside click and breakpoint changes reset the menu. Navigation remains available without JavaScript. Galleries and the project archive remain outside Services & Equipment.

Eighteen generated pages: home, about, three service areas, lifting and rigging equipment, pump accessories and spares, interchangeable models and parts sheet, work gallery, agriculture gallery, construction gallery, a project archive, two individual project records, resources, contact, privacy and 404. The parts sheet contains all 59 model pairings across eight families from printed pages 6–7 of the industrial profile, with model search, family filters, a full-sheet print layout and links that prefill model references in an industrial enquiry. The work gallery supports category links and accessible native photo dialogs. The agriculture gallery contains 24 original photographs with three category filters, captions and a full-size viewer with previous/next buttons and arrow-key navigation. Photos load lazily; without JavaScript, links open the original photographs. The Agriculture page includes a three-photo preview. Service enquiry links preselect the corresponding contact option.

The Construction gallery contains five distinct photographs from the latest uploads, including the Redmi 14C drainage image. Six identical uploads of the setting-out photograph are represented once. Visitors can filter concrete/drainage, site preparation and plant/earthworks, then browse full-size images with previous/next and arrow-key navigation. Without JavaScript, all photos remain visible and links open the original images. Construction has a three-photo preview; links also appear in Our Work, the footer and the homepage Civil Construction card. The gallery remains outside the Services & Equipment menu. Original photographs and watermarks are retained; captions describe visible work without assigning clients, contract values or completion status.

The Projects & Bids Archive contains the two project records in the Construction profile, with search, status, year and work-type filters and individual record URLs. Bid information is marked “Available on request”; values are absent from public records and the linked public PDF. Source links point to the reviewed redacted copy. The 2024 municipal plant-hire record is marked completed. The Dwellers 2025 record remains last-reported ongoing with its current status unconfirmed; no confirmed current projects are listed. Project enquiries carry the selected reference into the contact form. All records remain readable without JavaScript.

To add or update a project, edit `scripts/project-records.mjs`, keep its slug stable, set `status` to `current`, `completed` or `unconfirmed`, and record the supported year, scope, client and source. Do not put bid amounts in this public data file. Use `current` only after company confirmation, and update its status note at the same time. Rebuild, check and publish; the archive counts, filters and record pages are generated from this file.

The footer displays four selected client logos plus Netcash and Sage from the profile’s Partnered with section. On screens up to 700px, the logos scroll left in a continuous loop. Hovering or keyboard-focusing the strip temporarily pauses motion. Reduced-motion preferences and browsers without JavaScript use a manually scrollable row. Desktop keeps the static six-logo layout. Decorative loop copies are hidden from assistive technology. Beneath this strip, five small registered-body logos sit beside the transparent company logo, with accessible image names and no visible labels. The full Registered Bodies section remains on About.

The Pump Accessories & Spares page lists ten accessories from the industrial profile. Each part links to the existing contact form with its selection filled in. Industrial enquiries have optional pump-model and quantity fields. For a selected accessory, the part name is required and the additional message is optional. The selected part, model and quantity appear in the prepared email draft; the part also appears in the email subject. Editing the selected part preserves other entered details.

The Lifting & Rigging page groups 37 product choices into seven categories from the 2026 lifting profile. Product links prefill the lifting enquiry, showing product, size/reference, quantity and optional requirements. General lifting enquiries retain the standard enquiry route. Equipment imagery is extracted from the supplied profile. Inspection-service attribution and unspecified capacities/grades are omitted. Resources and Home provide four service-specific downloads: Mining & Industrial, Construction, Lifting and Agriculture. Service and source links use the relevant reviewed document. New public copies correct the quotation mailbox, withhold construction bid amounts and replace the third-party inspection-service attribution with product-enquiry guidance. Original supplied PDFs are unchanged.

The enquiry form deliberately prepares an email draft rather than pretending to send a message. Standard enquiries for every service go to `info@clementprojectssolution.co.za`. Selected pump-accessory and lifting-product quotation requests and direct quotation links go to `sales@clementprojectssolution.co.za`. Visitors review the draft, open their email app, and send it themselves. A copy action supports browsers without an email app. The form does not store personal information, and the site includes no analytics or embedded third-party resources.

About also includes a Business platforms section with Netcash, Sage, SAP Ariba and Coupa Supplier Portal. The existing profile assets are reused for Netcash and Sage; SAP Ariba comes from SAP’s official supplier guide with its original transparency, and Coupa comes from the official Supplier Portal. Logos are grouped separately from registered bodies without partner-tier or certification claims.

The footer links to Facebook, LinkedIn and WhatsApp on every page. Contact includes a direct WhatsApp card for 065 691 8895 (`https://wa.me/27656918895`) and Facebook/LinkedIn links. Links open external platforms in a new tab; no third-party widgets or embeds are added. Social icons are from Bootstrap Icons under the MIT licence, retained in `assets/LICENSE-Bootstrap-Icons.txt`.

## Content review before public launch

The public domain is https://www.clementprojectss.co.za/ (the bare domain redirects to www). Confirm current procurement documents and client publication permissions. The existing profiles use different domain spellings. No unverified current certificate badges, invented testimonials, client endorsements or nationwide service claims have been introduced. Equipment photographs are described as equipment examples from the company profile.

## Hosting and verification

The Sites project identity is retained in `.openai/hosting.json`. Static output is in `dist/`. The repository root also contains Vercel build and output-directory configuration. Hosting availability should be checked against the latest deployment result.

JavaScript syntax and static site integrity checks pass. Browser verification completed on 29 October 2026 using Chrome outside the socket-restricted sandbox: the original ten pages were checked at five viewport widths, with no horizontal overflow, broken image sources or JavaScript errors. Mobile navigation, gallery interactions, enquiry drafts and PDF downloads passed. Homepage desktop and mobile screenshots were visually reviewed. See `QA-REPORT.md` for scope and remaining launch requirements.

No external npm dependencies are used. Inter is distributed under the SIL Open Font License; see `assets/OFL-Inter.txt`.

## Search preparation

See [SEO-LAUNCH-CHECKLIST.md](SEO-LAUNCH-CHECKLIST.md) for completed website work and the remaining search-account steps. `seo.config.json` contains the canonical origin, business details and optional verification tokens. `scripts/seo-data.mjs` maps page topics and service questions; `scripts/seo.mjs` generates metadata, structured data, responsive images, robots.txt and the 16-page sitemap. `seo/` contains the generated page inventory, stable revision dates and keyword map, plus a business listing draft and content plan.

Responsive photo variants and their hashes are committed under `assets/optimized/` and `assets/image-delivery.json`; full-size originals remain available. The optional Sharp regeneration tool is separate from the dependency-free production build. Inter is served as local WOFF2 subsets. `npm run check` includes SEO checks. Vercel preview builds use noindex; production uses the confirmed www domain. PDFs are kept accessible with a noindex response header.
