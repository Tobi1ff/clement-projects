# SEO launch and ongoing search work

Prepared 1 November 2026 for Clement Projects Solution.

The public website is **https://www.clementprojectss.co.za/**. The bare domain redirects there, so canonical links, structured data, social previews and the sitemap use the www origin. The existing mailbox domain remains **clementprojectssolution.co.za**; it must not be replaced with the website spelling.

## Implemented in the website

- Unique titles and descriptions for all 18 HTML pages, matched to each page's actual content.
- Sixteen indexable pages in https://www.clementprojectss.co.za/sitemap.xml, with original photograph URLs and modification dates that change with page content. Privacy and the error page are excluded and carry `noindex`.
- Crawlable robots.txt, canonical URLs, Open Graph/Twitter previews, local favicons and LocalBusiness, WebSite, page, breadcrumb, service and gallery image structured data.
- Useful service questions on industrial, construction and agriculture pages; internal links connect services, equipment, galleries, project records and enquiries.
- Responsive WebP delivery for 34 photographs, preserving original files and full-size gallery links. Locally hosted WOFF2 replaces the larger TTF download. No external fonts or analytics scripts are loaded.
- Vercel redirects `/index.html` to `/`; genuine missing URLs retain HTTP 404. Reviewed PDF downloads remain accessible but receive an `X-Robots-Tag: noindex` header to focus search results on useful enquiry pages. Do not block PDF crawling in robots.txt: search engines need to read that header.
- Vercel preview builds emit `noindex` on every page and an empty sitemap. The separate Sites copy retains its owner-private audience.
- A keyword map and page inventory in `seo/`, and automated regression checks included in `npm run check`.

## Account steps still needed

These need access to the company's search and listing accounts. Files in this repository do not verify ownership or submit a site automatically.

1. In [Google Search Console](https://search.google.com/search-console), add the **Domain property `clementprojectss.co.za`**. Copy Google's exact TXT verification record into the domain's DNS and finish verification. Keep the TXT record. This covers www, bare domain and protocol variants.
2. Submit **https://www.clementprojectss.co.za/sitemap.xml** in Sitemaps. Inspect the homepage, Construction, Mining & Industrial, Agriculture, Pump Accessories, Lifting & Rigging, and both galleries. Check live fetching and Google's selected canonical; request indexing for these key pages once.
3. Test public pages in [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/). The generic Service and ImageObject data can describe content without qualifying for a Google rich result. No reviews, ratings, opening hours or coordinates have been invented.
4. In [Bing Webmaster Tools](https://www.bing.com/webmasters/), import the verified Search Console property or verify ownership and submit the same sitemap. If using HTML verification, put only the supplied token into `googleSiteVerification` or `bingSiteVerification` in `seo.config.json`, rebuild and publish. Empty tokens emit no tags. A Google Domain property uses DNS verification instead.
5. Find and claim the existing [Google Business Profile](https://www.google.com/business/) before creating a new listing. Use the consistent details and draft description in `seo/business-listing-copy.md`. Confirm real opening hours, the customer-facing address/service-area settings, and current categories within the account. Add approved original photographs and a link to this public domain.
6. Update the website URL on the company's Facebook, LinkedIn and business listings. Keep company name, address and phone consistent. Request genuine customer reviews through the company's normal process, without incentives or prewritten customer reviews.
7. Check Vercel deployment protection for preview URLs. Verify only the intended production domain is public; do not expose the owner-private Sites copy to get it indexed.

## Measurement and content

Review Search Console weekly for the first month, then monthly. Record the date range, indexed canonical pages, indexing issues, non-brand search queries, impressions, clicks and landing pages. Compare equivalent periods; a single day is not enough to judge changes. Use the Core Web Vitals report once real-user data becomes available; a lab audit is a diagnostic, not field data.

The enquiry form prepares an email draft. A click or draft is not a delivered lead. Track actual incoming enquiries by asking how the customer found CPS; analytics and conversion events can be configured later with the company's chosen account and privacy settings.

Use `seo/content-plan.md` for the next 12 weeks. Publish only real work, useful product guidance and approved photographs. Confirm project status before describing any record as current. Keep bid amounts withheld. Registration/vendor logos do not establish endorsements or current certification grades.

## Maintenance

Edit `scripts/seo-data.mjs` when adding a page or changing its search topic. Business and verification details live in `seo.config.json`. Keep existing URLs stable; if one must move, add a permanent redirect rather than deleting the old URL without a replacement.

Run:

```sh
npm --prefix site run build
npm --prefix site run check
```

For a deliberate preview check, run a build and check with `SEO_PREVIEW=1`, then rebuild **without** that variable before production publication. Normal builds have no npm dependencies. Optional image regeneration uses `scripts/optimize-images.mjs` and Sharp installed separately; point `CPS_SHARP_MODULE` at its module if it is outside this project. Commit the generated manifest and variants together. Keep already published hash-named variants available for cached pages, and leave original photographs untouched.

Generated `seo/page-revisions.json` preserves modification dates when the final HTML is unchanged. Do not refresh dates merely because a build ran. Generated inventories and keyword maps stay in source, outside `dist/`.

## Reference guidance

[Google canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business), [image guidance](https://developers.google.com/search/docs/appearance/google-images), [noindex rules](https://developers.google.com/search/docs/crawling-indexing/block-indexing), [Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start), [Business Profile guidelines](https://support.google.com/business/answer/3039617), [Vercel configuration](https://vercel.com/docs/project-configuration/vercel-json).

Search engines choose indexing, snippets and rankings. A submitted sitemap or valid structured data does not guarantee search placement.
