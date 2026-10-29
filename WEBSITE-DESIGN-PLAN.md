# Clement Projects Solution — website design plan

Status: proposed design and content plan; implementation and publishing are outside this planning task.

## Basis and objective

This plan draws on `clemets-projects/clemet-project-solutions.pdf`, `clemets-projects/Fruit Picking Profile 2026.pdf`, the CPS logo embedded in the fruit picking profile, and sample photographs from `clemets-projects/Fruit-picking-display-images/`.

Both profiles identify Clement Projects Solution and the same company registration number. The recommended structure is one corporate website with three service areas: Mining & Industrial, Construction, and Agriculture. Each area gets its own landing page, imagery, service information, and enquiry path.

The website should help procurement teams, mine and plant managers, construction clients, and farmers understand the relevant offering, assess the company's capabilities, and request a quotation. The main conversion is a qualified enquiry.

## Visual direction

Create a professional, practical South African company website built around real people, equipment, and completed work. Preserve the existing CPS logo and its blue, grey, and orange identity. Use generous spacing, short paragraphs, strong headings, and clearly labelled buttons.

Proposed palette, to be checked against the original logo asset:

| Colour | Suggested value | Role |
| --- | --- | --- |
| Deep navy | `#172554` | Main headings, navigation, footer |
| Industrial blue | `#2474A6` | Links, icons, supporting graphics |
| Orange | `#EF7D31` | Primary action backgrounds and small accents |
| Off-white | `#F7F8FA` | Alternating section backgrounds |
| Charcoal | `#202A35` | Body text |
| Agricultural green | `#2F6547` | Limited accents on the agriculture page |

Use dark text on orange buttons; confirm accessible contrast for all final colour combinations. Keep the same typography and navigation throughout the three service areas. Suggested typography: Manrope for headings and Source Sans 3 for body text, with system sans-serif fallbacks and locally hosted font files.

Use rectangular photographs with modest corner rounding, restrained borders, and simple line icons. Avoid heavy shadows, busy backgrounds, or ornamental motion. Keep the logo on a light background so its details remain visible.

## Navigation and page structure

Desktop navigation: **Home · About · Services ▾ · Projects · Company Documents · Contact**, followed by **Request a Quote**.

The Services menu contains the three service areas. On mobile, place the same links in a menu with separate, tappable service links.

| Page | Purpose and key content | Main action |
| --- | --- | --- |
| Home | Introduce CPS, present the three service areas, show selected work and company credentials | Request a Quote |
| About | Company overview, Phalaborwa base, leadership, mission, values, approach to quality and safety | Discuss Your Requirements |
| Mining & Industrial | Pumps, spares, accessories, actuators, fabrication, equipment supply, installation, repairs and maintenance | Request Equipment or Service |
| Construction | Civil works, general building, drainage, paving, earthmoving, electrical construction, plant hire and maintenance | Request a Project Quote |
| Agriculture | Fruit picking, sorting, grading, packing and loading; additional farming and environmental services listed in the profile | Enquire About Agricultural Services |
| Projects | Project summaries and genuine work photographs, with service-area filters if enough examples are available | Enquire About Similar Work |
| Company Documents | Both company profiles and approved current procurement documents | Download a Profile / Request Documents |
| Contact / Request a Quote | Department contacts and an enquiry form that adapts to the selected service | Send Enquiry |

Add a privacy page covering the actual form handling and any analytics introduced during implementation.

Start with one landing page per service area. Add individual product or service pages later when there is sufficient useful content. Keep detailed pump specifications and compatibility tables on the industrial page or in a downloadable catalogue, with clear headings and mobile-friendly presentation.

## Homepage layout

1. **Header:** CPS logo, straightforward navigation, and a prominent quotation button. Keep it compact on mobile.
2. **Opening section:** headline, a short statement of capability, two actions, and an authentic equipment or project photograph. Make all three service areas visible immediately below it. Use a static image rather than a rotating slideshow.
3. **Service areas:** three equal cards for Mining & Industrial, Construction, and Agriculture. Each includes a relevant photograph, one short description, and a specific link.
4. **Company credentials:** a compact strip for confirmed credentials, such as Level 1 B-BBEE status, CIDB registration, and SIZA membership. Give context where a credential applies to a particular service area. Publish current wording only after the supporting documents are checked.
5. **Selected work:** two or three project examples showing scope, location, date and confirmed status. Link to fuller project information where available.
6. **Why work with CPS:** explain relevant capabilities, quality, safety and the enquiry process using concrete information supported by the profiles and supplied evidence.
7. **Company introduction:** short overview, Phalaborwa location, leadership introduction, and an About link.
8. **Profile downloads:** separate buttons labelled **Mining, Industrial & Construction Profile** and **Agriculture Profile**, with file type and size.
9. **Closing enquiry section:** short invitation, quotation button, and click-to-call number.
10. **Footer:** service links, company contact details, location, registration number, document links and privacy information.

### Proposed opening copy

**Headline:** Practical solutions for industry, construction and agriculture.

**Supporting text:** Clement Projects Solution supplies pumping equipment and industrial services, undertakes construction work, and provides fruit picking and agricultural services from its base in Phalaborwa.

**Primary button:** Request a Quote

**Secondary button:** Explore Our Services

**Service card copy:**

- **Mining & Industrial:** Pumping equipment, spares, installations and maintenance for industrial operations.
- **Construction:** Civil works, general building, electrical construction and plant hire.
- **Agriculture:** Fruit picking, sorting, grading, packing and loading for farmers and growers.

These are draft website descriptions based on the supplied profiles, subject to company review.

## Service page details

### Mining & Industrial

Lead with pumping capability and an equipment or workshop photograph. Group the long product list into pumps, wear parts and accessories, actuators and related equipment, and fabrication and installation. Place repair, maintenance and fault finding services in their own section. Include underground vehicle spares and maintenance as a supporting service category.

Offer a quotation enquiry rather than checkout. Relevant enquiry details include equipment or part type, pump model or part number if known, quantity, application, and delivery or service location. Present compatibility information carefully and distinguish supply capability from any confirmed manufacturer authorisation.

### Construction

Organise the page around civil works, general building, electrical work, and plant hire. Show project photographs alongside short descriptions of the scope delivered.

The profile's 2024 municipal plant hire work is a potential completed project example. Its 2025 side-drain construction project needs a fresh status before publication. Do not carry forward the label “current project” automatically.

Relevant enquiry details include work type, location, approximate scope and preferred timeframe.

### Agriculture

Give fruit picking the strongest emphasis because it has the clearest supporting content and photo library. Explain the sequence: picking, sorting and grading, then packing and loading. Use orchard and working-team photographs.

The profile also lists poultry farming, crop farming, environmental impact assessments and biodiversity offsetting. Include brief supporting descriptions once the company supplies their scope and delivery details. Avoid inventing technical qualifications or regulatory claims.

Relevant enquiry details include farm location, fruit or service type, approximate scale, and required dates.

## Enquiry experience

Use one enquiry form with a service selector. Service links should preselect the appropriate area. Keep the shared fields short: name, company if applicable, email or phone, location, service required, and a message. Require at least one usable contact method. Show only a few additional fields relevant to the chosen service.

Route enquiries to confirmed company mailboxes and show a real success state only after the submission is accepted. Preserve entered information when validation fails and provide a clear retry message if delivery fails. Do not promise a response time until the company sets one.

Show click-to-call links. Add WhatsApp only if the company confirms a number used for business enquiries. A mobile action bar can provide **Call** and **Request a Quote**, provided it does not cover content or form controls.

Attachments are optional for a later phase; include them only if the company needs drawings or equipment photographs and a suitable upload process is implemented.

## Photographs and content preparation

- Use the supplied orchard and fruit picking photographs for the agriculture page and selected work gallery.
- Select sharp photographs that show the team, working process and results. Avoid using photos of damaged or misshapen fruit as the main quality image.
- Prepare crops that preserve the working subject and avoid camera information strips where possible; keep the original files intact.
- Request original construction, pump, equipment and workshop photographs. PDF images can support early layouts, but some may be too small for prominent website use.
- Obtain the original logo, preferably SVG or a high-resolution transparent PNG. Preserve its proportions.
- Write informative captions and alternative text. Publish client names, logos, testimonials and reference details only when approved for the website.
- Use approved public document copies. Provide other procurement documents on request where appropriate.

## Content to confirm before launch

1. **Primary domain:** the industrial profile uses `www.clementprojectsolution.com`, while the listed email addresses use `clementprojectssolution.co.za`. Confirm ownership, preferred domain and the exact spelling before configuring links, email delivery or redirects.
2. **Brand wording:** confirm the public trading name and legal footer name. The industrial profile identifies Clement Projects Solution (Pty) Ltd.
3. **Contacts:** confirm `015 004 1433`, the address, department mailboxes and any public mobile or WhatsApp number.
4. **Credentials:** check current B-BBEE, CIDB, CSD, SIZA and other supporting documents. SIZA registration or membership should not be relabelled as certification.
5. **Projects and relationships:** confirm completion dates, current contract status, permission to name clients, and how to describe supplier registrations. Supplier registration alone should not be presented as a completed client project or endorsement.
6. **Experience:** the agriculture profile gives different experience durations in its overview and director biography. Resolve these before publishing an experience figure.
7. **Coverage:** confirm service locations and travel or delivery coverage. The company profile's South African vision does not establish nationwide service availability.

## Mobile, accessibility and performance

Design for small screens first, with stacked service cards, readable text, large tap targets, visible keyboard focus, labelled forms, and sufficient colour contrast. Keep product tables usable through a labelled scroll region or a simpler mobile view. Respect reduced-motion settings.

Use appropriately sized compressed images and load lower-page photographs as needed. Avoid autoplay video, oversized galleries and unnecessary third-party widgets. Keep phone and email details available as text links.

Give each service page a distinct title and description based on its real offering and confirmed location. Use verified company details in structured data. Add analytics only when there is an agreed purpose and appropriate disclosure.

## Delivery sequence and review criteria

1. **Content preparation:** confirm the items above, choose photos, and rewrite profile content for website reading.
2. **Design review:** prepare desktop and mobile homepage mockups plus one service-page example. Review hierarchy, branding, photographs and enquiry actions.
3. **Implementation:** build the agreed pages, document downloads, responsive layouts and enquiry handling.
4. **Verification:** check small-screen layouts, navigation, keyboard use, contact links, downloads, form success and failure states, and the actual enquiry destination.
5. **Launch preparation:** review final copy and credentials, configure the confirmed domain, and publish within the separately agreed implementation scope.

The first release is ready when visitors can find each service area easily, assess supported capabilities, download the right profile, and send an enquiry that reaches the intended company contact.
