document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const open = item.dataset.open === 'true';
    item.dataset.open = open ? 'false' : 'true';
    btn.setAttribute('aria-expanded', String(!open));
  });
});

const ham = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (ham && navLinks) {
  ham.addEventListener('click', () => {
    const expanded = ham.getAttribute('aria-expanded') === 'true';
    ham.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open', !expanded);
  });
}
