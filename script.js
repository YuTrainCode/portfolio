// ===== Menu mobile =====
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', menu.classList.contains('active'));
  });
}

// ===== Année auto =====
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// ===== Scroll animation =====
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
cards.forEach(card => observer.observe(card));

// ===== Toggle Dark/Light =====
const toggleBtn = document.getElementById('themeToggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    toggleBtn.textContent = theme === 'light' ? '🌙' : '☀️';
    localStorage.setItem('theme', theme);
  });
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (toggleBtn) toggleBtn.textContent = savedTheme === 'light' ? '🌙' : '☀️';
}
