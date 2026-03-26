const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const form = document.querySelector('.contact-form');
const statusLine = document.querySelector('.form-status');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

menuBtn?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name')?.toString().trim();
  const email = data.get('email')?.toString().trim();
  const message = data.get('message')?.toString().trim();

  if (!name || !email || !message) {
    statusLine.textContent = 'Please fill in all fields before sending.';
    return;
  }

  statusLine.textContent = `Thanks ${name}! Your message has been recorded.`;
  form.reset();
});
