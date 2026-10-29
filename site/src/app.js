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
  if (status) status.textContent = `Showing ${count} ${filter === 'all' ? '' : filter + ' '}items.`;
}
filters.forEach(button => button.addEventListener('click', () => {
  applyFilter(button.dataset.filter);
  const url = new URL(location.href);
  if (button.dataset.filter === 'all') url.searchParams.delete('filter');
  else url.searchParams.set('filter', button.dataset.filter);
  try { history.replaceState(null, '', url); } catch { /* Local-file previews may restrict history updates. */ }
}));
if (filters.length) applyFilter(new URLSearchParams(location.search).get('filter') || 'all');

const dialog = document.getElementById('image-dialog');
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
  dialog.querySelector('img').src = button.dataset.image;
  dialog.querySelector('img').alt = button.dataset.caption;
  document.getElementById('image-caption').textContent = button.dataset.caption;
  dialog.showModal();
}));
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
  const preselect = new URLSearchParams(location.search).get('service');
  if ([...service.options].some(option => option.value === preselect)) service.value = preselect;
  updateDetails();
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
