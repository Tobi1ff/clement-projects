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
