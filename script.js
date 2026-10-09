const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
  menuToggle.textContent = isOpen ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) { menuToggle.textContent = '☰'; menuToggle.setAttribute('aria-label', 'Menüyü aç'); }
}));
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const subject = String(data.get('subject') || 'Genel bilgi');
  const message = String(data.get('message') || '').trim();
  const body = `Ad / Kurum: ${name}\nE-posta: ${email}\nKonu: ${subject}\n\nMesaj:\n${message}`;
  const mailto = `mailto:sadecekumpanya@gmail.com?subject=${encodeURIComponent('Sadece Kumpanya - ' + subject)}&body=${encodeURIComponent(body)}`;
  const status = document.getElementById('formStatus');
  status.textContent = 'E-posta taslağı açılıyor. Göndermek için e-posta uygulamanızda Gönder düğmesine basın.';
  window.location.href = mailto;
});
