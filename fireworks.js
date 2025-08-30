const canvas = document.getElementById('fireworks-canvas');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

const particles = [];

function createFirework() {
  const x = Math.random() * w;
  const y = Math.random() * h * 0.6; // évite le bas
  const count = 100 + Math.random() * 50;
  for (let i = 0; i < count; i++) {
    particles.push({
      x,
      y,
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 3 + 2,
      radius: Math.random() * 2 + 1,
      alpha: 1,
      decay: Math.random() * 0.02 + 0.01
    });
  }
}

function animate() {
  ctx.fillStyle = 'rgba(26, 26, 26, 0.2)';
  ctx.fillRect(0, 0, w, h);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.alpha -= p.decay;

    if (p.alpha <= 0) {
      particles.splice(i, 1);
      continue;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 215, 0, ${p.alpha})`; // jaune
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

// Lancer un feu d'artifice toutes les 800ms
setInterval(createFirework, 800);
animate();
