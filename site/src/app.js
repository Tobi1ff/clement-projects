const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() {
  nav?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open', open);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});
nav?.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
window.matchMedia('(min-width: 801px)').addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});

const filters = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('[data-category]')];
function applyFilter(filter) {
  if (!filters.some(button => button.dataset.filter === filter)) filter = 'all';
  filters.forEach(button => {
    const active = button.dataset.filter === filter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  projects.forEach(project => {
    project.hidden = filter !== 'all' && project.dataset.category !== filter;
    if (!project.hidden) count++;
  });
  const status = document.getElementById('filter-status');
  if (status) status.textContent = status.dataset.kind === 'photos'
    ? `Showing ${count} of ${projects.length} photographs.`
    : `Showing ${count} ${filter === 'all' ? '' : filter + ' '}items.`;
}
filters.forEach(button => button.addEventListener('click', () => {
  applyFilter(button.dataset.filter);
  const url = new URL(location.href);
  if (button.dataset.filter === 'all') url.searchParams.delete('filter');
  else url.searchParams.set('filter', button.dataset.filter);
  try { history.replaceState(null, '', url); } catch { /* Local-file previews may restrict history updates. */ }
}));
if (filters.length) applyFilter(new URLSearchParams(location.search).get('filter') || 'all');
const agricultureFilters = document.getElementById('agriculture-filters');
if (agricultureFilters) agricultureFilters.hidden = false;

const dialog = document.getElementById('image-dialog');
const photoLinks = [...document.querySelectorAll('[data-image]')];
let galleryImages = [];
let galleryIndex = 0;
let photoOpener = null;
function showPhoto(link) {
  const image = dialog.querySelector('img');
  image.src = link.dataset.image;
  image.alt = link.dataset.caption;
  document.getElementById('image-caption').textContent = link.dataset.caption;
  const navigation = document.getElementById('image-navigation');
  navigation.hidden = galleryImages.length < 2;
  document.getElementById('image-position').textContent = galleryImages.length
    ? `${galleryIndex + 1} / ${galleryImages.length}` : '';
}
function movePhoto(direction) {
  if (!galleryImages.length) return;
  galleryIndex = (galleryIndex + direction + galleryImages.length) % galleryImages.length;
  showPhoto(galleryImages[galleryIndex]);
}
photoLinks.forEach(link => link.addEventListener('click', event => {
  if (!dialog || typeof dialog.showModal !== 'function') return;
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  photoOpener = link;
  galleryImages = link.dataset.gallery
    ? photoLinks.filter(item => item.dataset.gallery === link.dataset.gallery && !item.closest('[data-category]')?.hidden)
    : [];
  galleryIndex = Math.max(0, galleryImages.indexOf(link));
  showPhoto(link);
  dialog.showModal();
}));
document.getElementById('previous-image')?.addEventListener('click', () => movePhoto(-1));
document.getElementById('next-image')?.addEventListener('click', () => movePhoto(1));
dialog?.addEventListener('keydown', event => {
  if (!galleryImages.length || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  movePhoto(event.key === 'ArrowRight' ? 1 : -1);
});
dialog?.addEventListener('close', () => {
  galleryImages = [];
  photoOpener?.focus({ preventScroll: true });
});
dialog?.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
});

const form = document.getElementById('enquiry-form');
if (form) {
  const service = document.getElementById('service');
  const detail = document.getElementById('detail');
  const detailField = document.querySelector('.service-extra');
  const details = {
    industrial: ['Equipment, model or part number', 'A model, part number or quantity helps us understand your requirement.', 'e.g. pump model, spare part and quantity'],
    construction: ['Approximate scope and timing', 'Tell us the work type, approximate size and preferred dates.', 'e.g. drainage works, approximate length and dates'],
    agriculture: ['Fruit type and harvest dates', 'Include approximate scale and the picking or handling services you need.', 'e.g. citrus harvest, dates and approximate scale'],
    documents: ['Documents required', 'Specify the procurement or company documents you need.', 'e.g. company registration, CIDB or B-BBEE documents'],
  };
  function updateDetails() {
    const current = details[service.value];
    detailField.hidden = !current;
    detail.disabled = !current;
    if (current) {
      document.getElementById('detail-label').textContent = current[0] + ' (optional)';
      document.getElementById('detail-help').textContent = current[1];
      detail.placeholder = current[2];
    }
  }
  const enquiryParams = new URLSearchParams(location.search);
  const preselect = enquiryParams.get('service');
  if ([...service.options].some(option => option.value === preselect)) service.value = preselect;
  updateDetails();
  if (service.value === 'industrial') detail.value = (enquiryParams.get('detail') || '').slice(0, 300);
  service.addEventListener('change', () => { detail.value = ''; updateDetails(); });
  let prepared = '';
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = key => String(data.get(key) || '').trim();
    if (!value('name') || !value('location') || !value('message')) {
      const empty = ['name', 'location', 'message'].find(key => !value(key));
      const input = document.getElementById(empty);
      input.setCustomValidity('Please enter your details.');
      input.reportValidity();
      input.addEventListener('input', () => input.setCustomValidity(''), { once: true });
      return;
    }
    const selected = service.selectedOptions[0].textContent;
    const recipient = ['documents', 'general'].includes(service.value) ? 'info@clementprojectssolution.co.za' : 'quotations@clementprojectssolution.co.za';
    const extra = !detail.disabled && value('detail') ? `${details[service.value][0]}: ${value('detail')}\n` : '';
    prepared = `Hello CPS team,\n\nI would like to enquire about ${selected.toLowerCase()}.\n\nName: ${value('name')}\n${value('company') ? `Company: ${value('company')}\n` : ''}Email: ${value('email')}\n${value('phone') ? `Phone: ${value('phone')}\n` : ''}Location: ${value('location')}\n${extra}\nRequirements:\n${value('message')}\n\nKind regards,\n${value('name')}`;
    document.getElementById('enquiry-preview').textContent = prepared;
    document.getElementById('email-draft').href = `mailto:${recipient}?subject=${encodeURIComponent(`${selected} enquiry — ${value('company') || value('name')}`)}&body=${encodeURIComponent(prepared)}`;
    document.getElementById('draft-recipient').textContent = recipient;
    form.hidden = true;
    const result = document.getElementById('enquiry-result');
    result.hidden = false;
    document.getElementById('copy-status').textContent = '';
    result.focus();
    result.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  });
  document.getElementById('edit-enquiry').addEventListener('click', () => {
    document.getElementById('enquiry-result').hidden = true;
    form.hidden = false;
    service.focus();
  });
  document.getElementById('copy-enquiry').addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(prepared);
      status.textContent = 'Enquiry copied. Paste it into an email to the address below.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(document.getElementById('enquiry-preview'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Your draft is selected. Use your device’s Copy command to copy it.';
    }
  });
}

const modelRows = [...document.querySelectorAll('[data-model-row]')];
if (modelRows.length) {
  const search = document.getElementById('model-search');
  const familyButtons = [...document.querySelectorAll('[data-pump-family]')];
  const normalizeModel = value => value.toLowerCase().replace(/[^a-z0-9]/g, '');
  let family = 'all';
  function filterModels() {
    const query = normalizeModel(search.value);
    let count = 0;
    modelRows.forEach(row => {
      const matchesFamily = family === 'all' || row.dataset.pumpGroup === family;
      const matchesQuery = [row.dataset.reference, row.dataset.model].some(value => normalizeModel(value).includes(query));
      row.hidden = !matchesFamily || !matchesQuery;
      if (!row.hidden) count++;
    });
    familyButtons.forEach(button => {
      const active = button.dataset.pumpFamily === family;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.getElementById('model-count').textContent = `Showing ${count} of ${modelRows.length} model pairings.`;
    document.getElementById('models-empty').hidden = count !== 0;
    document.getElementById('models-table').hidden = count === 0;
  }
  document.getElementById('parts-tools').hidden = false;
  document.getElementById('print-sheet').hidden = false;
  search.addEventListener('input', filterModels);
  familyButtons.forEach(button => button.addEventListener('click', () => {
    family = button.dataset.pumpFamily;
    filterModels();
  }));
  document.getElementById('reset-models').addEventListener('click', () => {
    search.value = '';
    family = 'all';
    filterModels();
    search.focus();
  });
  document.getElementById('print-sheet').addEventListener('click', () => window.print());
}
