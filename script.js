const yesBtn = document.getElementById('yesBtn');
const aboutSection = document.getElementById('about');

if (yesBtn) {
  yesBtn.addEventListener('click', () => {
    // scroll fluide vers la section
    aboutSection.scrollIntoView({ behavior: 'smooth' });

    // petit délai pour lancer l’animation après scroll
    setTimeout(() => {
      aboutSection.classList.add('show');
    }, 600);
  });
}
