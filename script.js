// ⏳ Quand le DOM est prêt
document.addEventListener("DOMContentLoaded", () => {

  // 💡 Affiche les sections quand elles deviennent visibles
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hidden');
      }
    });
  });

  // 🔍 Observe les sections à faire apparaître
  document.querySelectorAll('.about-section, .cats-section').forEach(el => {
    observer.observe(el);
  });

  // 🧨 Supprime automatiquement l'animation d’intro après 10s
  const intro = document.querySelector('.intro-animation');
  if (intro) {
    setTimeout(() => {
      intro.style.display = 'none';
    }, 10000); // 10 secondes
  }

});
