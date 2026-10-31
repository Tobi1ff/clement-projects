# Public company profile

`cps-industrial-construction-profile.pdf` is the reviewed public copy. Both project bid amounts have been removed from page text and the corresponding tagged-PDF ActualText entries, and replaced with “Available on request”. The local source file in `clemets-projects/` is unchanged and excluded from Git. Historical Git revisions still retain previously published content.

The build copies this public document into `dist/downloads/`. Do not replace it with the unredacted source. After an approved document update, review the PDF’s rendered content and extracted text, then update the SHA-256 in `public-profile.json`.

The redaction used PyMuPDF 2.0 as temporary local tooling; the website build has no Python or PDF-tool dependency. The other eleven pages were checked for identical rendered pixels against the original. The replacement document retains twelve pages and the existing page links.
