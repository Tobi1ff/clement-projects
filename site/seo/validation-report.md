# SEO validation — 1 November 2026

## Completed local checks

- Production build and combined integrity/SEO checks pass: 18 pages, 1,216 local references and 16 canonical sitemap URLs.
- All five public PDF downloads pass file checks; reviewed document SHA-256 hashes and bid redactions are preserved.
- Every page has a unique title/description, one canonical URL, social-preview metadata and valid JSON-LD. Business contacts, breadcrumbs and linked local assets are checked.
- Sitemap URLs, image URLs, modification dates, robots directives, source-photo hashes, WebP hashes and hosting rules pass automated checks.
- Preview-mode build/check passes with all pages noindex and no sitemap entries. A final production build restores 16 indexable sitemap entries.
- Repeated production builds produce identical HTML/sitemap bytes and preserve revision dates when content is unchanged.
- Chrome checked every page at 320px, 390px and 1440px: 54 page/viewport combinations, with no horizontal overflow, broken image decodes or page script errors. Local Inter loads; mobile and desktop choose appropriate responsive hero variants. Hero corners remain square.
- Service question disclosures open on the three service pages. Both gallery viewers open and decode the full-size original photograph rather than a thumbnail.

## Payload measurements

The original Inter TTF was 876,576 bytes. The new default Latin WOFF2 is 48,256 bytes (about 94% smaller); the separate Latin-extended subset is 85,068 bytes and loads only when needed. The original TTF remains in source but is no longer shipped in the site output.

For 34 photographs, the original files total 7,264,845 bytes. The representative 800px WebP variants (or largest available variant for smaller originals) total 4,667,798 bytes, about 36% smaller. This comparison is a size diagnostic, not a measured whole-page or field-speed improvement. Browsers choose variants using viewport width and pixel density. Original photographs remain unchanged and gallery full-size links still use them.

## Public account work

Search Console and Bing verification/submission, Google Business Profile review and real-user Core Web Vitals reporting require the company's accounts. No ownership verification, ranking improvement, lead attribution or search indexing is claimed by these local checks. See the launch checklist for the exact account steps.
