# Clement Projects Solution website

First implementation of the approved website design plan. Plain HTML, CSS and JavaScript; no package installation or build service required.

## Open the website

Open `dist/index.html` in a browser. Navigation, the work gallery, enquiry drafts and PDF downloads also work as local files. Alternatively run `npm run dev` from this folder and open `http://127.0.0.1:4173` when the host allows sockets.

## Edit and rebuild

- `scripts/build.mjs`: page content, shared components and generation.
- `scripts/parts-data.mjs`: model pairings transcribed from the industrial profile.
- `scripts/parts-page.mjs`: model sheet page layout.
- `src/styles.css`: responsive design, including mobile layouts and reduced-motion support.
- `src/app.js`: navigation, gallery filters, photo dialog and enquiry draft preparation.
- `assets/`: selected original company photographs, transparent CPS logo, and locally hosted Inter font.
- `assets/assets-manifest.json`: image provenance and usage notes.

Run `npm run build` after changes, then `npm run check`. The original company profiles are copied from the adjacent `clemets-projects` directory when rebuilding.

## Current behaviour

Eleven generated pages: home, about, three service areas, interchangeable models and parts sheet, work gallery, resources, contact, privacy and 404. The parts sheet contains the 40 model pairings from printed page 6 of the industrial profile, with model search, family filters, a full-sheet print layout and links that prefill model references in an industrial enquiry. The gallery supports category links and accessible native photo dialogs. Service enquiry links preselect the corresponding contact option.

The enquiry form deliberately prepares an email draft rather than pretending to send a message. Visitors review the draft, open their email app, and send it themselves. A copy action supports browsers without an email app. The form does not store personal information, and the site includes no analytics or embedded third-party resources.

## Content review before public launch

Confirm the preferred domain, business contact details, current procurement documents and client publication permissions. The existing profiles use different domain spellings. No unverified current certificate badges, invented testimonials, client endorsements or nationwide service claims have been introduced. Equipment photographs are described as equipment examples from the company profile.

## Hosting and verification

The Sites project identity is retained in `.openai/hosting.json`. Static output is in `dist/`. The repository root also contains Vercel build and output-directory configuration. Hosting availability should be checked against the latest deployment result.

JavaScript syntax and static site integrity checks pass. Browser verification completed on 29 October 2026 using Chrome outside the socket-restricted sandbox: the original ten pages were checked at five viewport widths, with no horizontal overflow, broken image sources or JavaScript errors. Mobile navigation, gallery interactions, enquiry drafts and PDF downloads passed. Homepage desktop and mobile screenshots were visually reviewed. See `QA-REPORT.md` for scope and remaining launch requirements.

No external npm dependencies are used. Inter is distributed under the SIL Open Font License; see `assets/OFL-Inter.txt`.
