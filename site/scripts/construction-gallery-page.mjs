import { constructionPhotos } from './construction-gallery-data.mjs';

export function renderConstructionGallery({ eyebrow, button, arrow, diagonal, cta }) {
  // Render the scrolling carousel ("moving wheel") of all construction photos.
  const carouselItems = constructionPhotos.map((photo, index) => {
    return `<a class="construction-carousel-item" href="assets/${photo.file}" data-image="assets/${photo.file}" data-caption="${photo.title}" data-gallery="construction" aria-label="View photograph ${index + 1} of ${constructionPhotos.length}: ${photo.title}"><img src="assets/${photo.file}" alt="${photo.title}" width="${Math.round(photo.width / 4)}" height="${Math.round(photo.height / 4)}" loading="lazy" decoding="async"></a>`;
  }).join('');

  return `<section class="construction-gallery-hero"><div class="container">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span><a href="construction.html">Construction</a><span>/</span>Gallery</div>
    <div class="construction-gallery-hero-grid"><div>${eyebrow('CONSTRUCTION GALLERY', true)}<h1>On-site<br><em>construction.</em></h1><p>Photographs from our construction sites. Drainage works, concrete, earthworks and the teams behind the build.</p><div class="hero-actions">${button('View the photo wheel', '#construction-wheel')}${button('Construction services', 'construction.html', 'ghost')}</div><p class="construction-gallery-meta">${constructionPhotos.length} PHOTOGRAPHS · ON-SITE CONSTRUCTION WORK</p></div><figure><img src="assets/construction-gallery-01.jpg" alt="Construction work on site" width="768" height="1020" fetchpriority="high"><figcaption>FROM THE GROUND UP. ON SITE. IN PROGRESS.</figcaption></figure></div>
  </div></section>

  <section class="construction-wheel-section" id="construction-wheel"><div class="container">
    <div class="section-heading"><div>${eyebrow('THE PHOTO WHEEL')}<h2>Construction in motion.<br><span>Every site. Every step.</span></h2></div><p>All ${constructionPhotos.length} on-site photographs scroll across in order. Hover to pause and take a closer look, or select any photo to open it.</p></div>
  </div>
  <div class="construction-wheel-viewport" role="region" aria-label="Scrolling construction photograph gallery" tabindex="0">
    <div class="construction-wheel-track" id="construction-wheel-track">
      <div class="construction-wheel-group">${carouselItems}</div>
      <div class="construction-wheel-group construction-wheel-group-copy" aria-hidden="true" inert="">${carouselItems}</div>
    </div>
  </div>
  <div class="container">
    <div class="construction-wheel-note">
      <span class="small-label">${constructionPhotos.length} PHOTOGRAPHS</span>
      <p>Drag or use keyboard arrows to browse. Click any photo to open a larger view.</p>
      <a class="text-link" href="construction.html">Explore our construction services${arrow}</a>
    </div>
  </div></section>${cta('Have a construction project in mind?', 'Let\u2019s find the right solution, together.', 'contact.html?service=construction')}`;
}

export function renderConstructionPreview({ eyebrow, button }) {
  // Show a preview of construction photos on the construction service page.
  const previewPhotos = [constructionPhotos[0], constructionPhotos[15], constructionPhotos[40]];
  return `<section class="section construction-gallery-preview"><div class="container"><div class="section-heading"><div>${eyebrow('FROM OUR WORKING GALLERY')}<h2>On site.<br><span>In progress.</span></h2></div>${button('Explore the construction gallery', 'construction-gallery.html')}</div><div class="construction-preview-grid">${previewPhotos.map(photo => `<a href="construction-gallery.html#construction-wheel" aria-label="View on-site construction photographs"><img src="assets/${photo.file}" alt="${photo.title}" width="${Math.round(photo.width / 4)}" height="${Math.round(photo.height / 4)}" loading="lazy"><span>${photo.title}</span></a>`).join('')}</div></div></section>`;
}
