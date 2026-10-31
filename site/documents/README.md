# Public company profile

`cps-industrial-construction-profile.pdf` is the reviewed public copy. Both project bid amounts have been removed from page text and the corresponding tagged-PDF ActualText entries, and replaced with “Available on request”. The local source file in `clemets-projects/` is unchanged and excluded from Git. Historical Git revisions still retain previously published content.

The build copies this public document into `dist/downloads/`. Do not replace it with the unredacted source. After an approved document update, review the PDF’s rendered content and extracted text, then update the SHA-256 in `public-profile.json`.

The redaction used PyMuPDF 2.0 as temporary local tooling; the website build has no Python or PDF-tool dependency. The bid redaction left the other eleven pages visually unchanged. A subsequent quotation-email update on page 12 uses `sales@clementprojectssolution.co.za`; its other eleven pages render identically to the approved bid-redacted copy. The old quotation email was also removed from tagged text. The replacement document retains twelve pages and the existing page links.

## Separate 2026 service profiles

The website offers the following reviewed public copies, tracked in `public-profiles.json` with SHA-256 hashes and page counts:

- `cps-mining-industrial-profile.pdf`: ten pages from the supplied Mining & Industrial profile. The quotation mailbox is updated to sales.
- `cps-construction-profile.pdf`: seven pages from the supplied Construction profile. Both bid amounts on PDF page 6 are physically redacted, including tagged ActualText, and replaced with “Available on request”. The quotation mailbox on page 7 is updated to sales.
- `cps-lifting-equipment-profile.pdf`: six pages from the supplied lifting catalogue. The page 3 inspection-service paragraph naming another business is replaced with product-enquiry guidance, without asserting that CPS performs inspection or repairs.

The general mailbox remains info and quotation mailbox is sales at clementprojectssolution.co.za. Metadata and embedded files were removed from these public copies. Other source content, including legacy website addresses and supplied registration wording, remains as supplied; the website adds no current grade, load-capacity or certificate-validity claims.

All source PDFs remain unchanged. Unmodified pages of each public copy were verified against the corresponding source for identical rendered pixels. Removed text was checked in extracted text, PDF object dictionaries, ActualText and decoded streams; edited pages were visually reviewed. The build/check workflow serves only the reviewed files and verifies their hashes against deployment output.

The legacy combined profile remains at its existing download URL for previously shared links. Current project/registration links use Construction PDF page 6; model-sheet links use Mining & Industrial PDF pages 7–8. Agriculture continues to use the supplied Agriculture PDF.
