document.addEventListener("DOMContentLoaded", () => {
 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  const hiddenSections = document.querySelectorAll('.hidden');
  hiddenSections.forEach(section => observer.observe(section));
  });

