const yesBtn = document.getElementById('yesBtn');
const aboutSection = document.getElementById('about');
const catsSection = document.getElementById('cats');

if (yesBtn) {
  yesBtn.addEventListener('click', () => {
    // scroll fluide (plus lent avec scrollIntoView nativement)
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Apparition de "Qui suis-je"
    setTimeout(() => {
      aboutSection.classList.add('show');
    }, 800);

    // Apparition des chats après la section
    setTimeout(() => {
      catsSection.classList.add('show');
    }, 2000);
  });
}
