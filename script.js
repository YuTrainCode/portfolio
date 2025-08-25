// === Intersection observer ===
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.section').forEach(section => observer.observe(section));
});

// === Ghost Mouse Effect ===
const scene = new THREE.Scene();
const camera = new THREE.Camera();
camera.position.z = 1;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const uniforms = {
  u_time: { type: "f", value: 1.0 },
  u_resolution: { type: "v2", value: new THREE.Vector2() },
  u_mouse: { type: "v2", value: new THREE.Vector2() }
};

const fragmentShader = `
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    float d = distance(st, u_mouse / u_resolution);

    // Animate glow intensity with time
    float pulse = sin(u_time * 2.0) * 0.5 + 0.5; // Ranges from 0 to 1
    float glow = 0.02 / d * (0.8 + 0.2 * pulse); // More dynamic and responsive

    vec3 yellow = vec3(1.0, 0.84, 0.0);
    vec3 color = yellow * glow;

    gl_FragColor = vec4(color, 1.0);
}
`;

const material = new THREE.ShaderMaterial({
  uniforms: uniforms,
  fragmentShader: fragmentShader
});

const geometry = new THREE.PlaneBufferGeometry(2, 2);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function onMouseMove(e) {
  uniforms.u_mouse.value.x = e.clientX;
  uniforms.u_mouse.value.y = window.innerHeight - e.clientY;
}
window.addEventListener("mousemove", onMouseMove, false);

function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  uniforms.u_resolution.value.x = renderer.domElement.width;
  uniforms.u_resolution.value.y = renderer.domElement.height;
}
window.addEventListener("resize", onWindowResize, false);
onWindowResize();

function animate() {
  requestAnimationFrame(animate);
  uniforms.u_time.value += 0.05;
  renderer.render(scene, camera);
}
animate();
