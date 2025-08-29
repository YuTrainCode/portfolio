// script.js

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav-link');

  function setActiveLink() {
    let current = window.scrollY;
    links.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (
        section.offsetTop <= current + 100 &&
        section.offsetTop + section.offsetHeight > current + 100
      ) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();
});


// === Back to Top Button ===
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
