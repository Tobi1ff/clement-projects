# Public company profile

`cps-industrial-construction-profile.pdf` is the reviewed public copy. Both project bid amounts have been removed from page text and the corresponding tagged-PDF ActualText entries, and replaced with “Available on request”. The local source file in `clemets-projects/` is unchanged and excluded from Git. Historical Git revisions still retain previously published content.

The build copies this public document into `dist/downloads/`. Do not replace it with the unredacted source. After an approved document update, review the PDF’s rendered content and extracted text, then update the SHA-256 in `public-profile.json`.

The redaction used PyMuPDF 2.0 as temporary local tooling; the website build has no Python or PDF-tool dependency. The bid redaction left the other eleven pages visually unchanged. A subsequent quotation-email update on page 12 uses `sales@clementprojectssolution.co.za`; its other eleven pages render identically to the approved bid-redacted copy. The old quotation email was also removed from tagged text. The replacement document retains twelve pages and the existing page links.
