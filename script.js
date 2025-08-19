// Menu mobile
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
if(menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });
}

// Année auto
document.getElementById("year").textContent = new Date().getFullYear();
