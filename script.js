const body = document.body;
const themeToggle = document.querySelector('#themeToggle');
const menuToggle = document.querySelector('#menuToggle');
const savedTheme = localStorage.getItem('afeef-theme');
if (savedTheme === 'dark') body.classList.add('dark');
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('afeef-theme', body.classList.contains('dark') ? 'dark' : 'light');
});
menuToggle.addEventListener('click', () => {
  const isOpen = body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  body.style.overflow = isOpen ? 'hidden' : '';
});

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');
filters.forEach((filter) => filter.addEventListener('click', () => {
  filters.forEach((item) => item.classList.remove('active'));
  filter.classList.add('active');
  const category = filter.dataset.filter;
  projects.forEach((project) => {
    const visible = category === 'all' || project.dataset.category === category;
    project.style.display = visible ? 'grid' : 'none';
  });
}));

const form = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');
const contactMessage = document.querySelector('#contactMessage');
const characterCount = document.querySelector('#characterCount');
contactMessage.addEventListener('input', () => {
  characterCount.textContent = contactMessage.value.length;
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#contactName').value.trim();
  const senderEmail = document.querySelector('#contactEmail').value.trim();
  const message = contactMessage.value.trim();
  const subject = `Portfolio enquiry from ${name}`;
  const body = `Hi Afeef,\n\n${message}\n\nYou can reply to me at: ${senderEmail}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mohammedafeef7006@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmailWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  if (!gmailWindow) window.location.href = gmailUrl;
  formMessage.textContent = 'Gmail is opening. Click Send there to deliver your message.';
});

document.querySelectorAll('.desktop-nav a').forEach((link) => link.addEventListener('click', () => {
  document.querySelectorAll('.desktop-nav a').forEach((item) => item.classList.remove('active'));
  link.classList.add('active');
  body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
  body.style.overflow = '';
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && body.classList.contains('menu-open')) {
    body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    body.style.overflow = '';
  }
});
