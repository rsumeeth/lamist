<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>IFV — Where Life Begins with Love</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --champagne: #FFF0E8;
    --blush: #FFEAE5;
    --cream: #FFFEF9;
    --rose: #C8748A;
    --rose-light: #E8A4B4;
    --rose-gold: #D4956A;
    --charcoal: #1A1A2E;
    --charcoal-soft: #2C2C4A;
    --muted: #8A7B8A;
    --serif: 'Cormorant Garamond', Georgia, serif;
    --sans: 'Outfit', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--sans);
    background: var(--cream);
    color: var(--charcoal);
    overflow-x: hidden;
    min-height: 100vh;
  }

  /* ─── NOISE TEXTURE OVERLAY ─── */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1000;
    opacity: 0.4;
  }

  /* ─── NAVBAR ─── */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 500;
    padding: 0 60px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.4s ease;
  }

  nav.scrolled {
    background: rgba(255, 254, 249, 0.88);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 1px 40px rgba(200, 116, 138, 0.08);
  }

  .nav-logo {
    font-family: var(--serif);
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--charcoal);
  }

  .nav-logo span {
    color: var(--rose);
    font-style: italic;
  }

  .nav-links {
    display: flex;
    gap: 40px;
    list-style: none;
  }

  .nav-links a {
    font-family: var(--sans);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--charcoal);
    text-decoration: none;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .nav-links a:hover { opacity: 1; }

  .nav-cta {
    background: var(--charcoal);
    color: var(--cream) !important;
    padding: 10px 24px !important;
    border-radius: 40px !important;
    opacity: 1 !important;
    font-weight: 500 !important;
    transition: background 0.3s, transform 0.2s !important;
  }

  .nav-cta:hover {
    background: var(--rose) !important;
    transform: translateY(-1px);
  }

  /* ─── THREE.JS CANVAS ─── */
  #bg-canvas {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  /* ─── HERO ─── */
  .hero {
    position: relative;
    z-index: 2;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    align-items: center;
    padding: 120px 80px 80px 80px;
    overflow: hidden;
  }

  /* ─── LEFT SIDE ─── */
  .hero-left {
    padding-right: 60px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(200, 116, 138, 0.08);
    border: 1px solid rgba(200, 116, 138, 0.2);
    padding: 8px 18px 8px 10px;
    border-radius: 40px;
    width: fit-content;
    opacity: 0;
    animation: fadeUp 0.8s ease 0.2s forwards;
  }

  .badge-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--rose);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.3); }
  }

  .badge span {
    font-family: var(--sans);
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--rose);
    font-weight: 500;
  }

  .hero-headline {
    font-family: var(--serif);
    font-size: clamp(52px, 5.5vw, 82px);
    font-weight: 400;
    line-height: 1.08;
    letter-spacing: -0.01em;
    color: var(--charcoal);
    opacity: 0;
    animation: fadeUp 0.9s ease 0.4s forwards;
  }

  .hero-headline em {
    font-style: italic;
    color: var(--rose);
    font-weight: 300;
  }

  .hero-headline .line-two {
    display: block;
    font-weight: 300;
    font-size: 0.82em;
    color: var(--charcoal-soft);
    margin-top: 4px;
  }

  .hero-sub {
    font-family: var(--sans);
    font-size: 16px;
    line-height: 1.75;
    color: var(--muted);
    max-width: 440px;
    font-weight: 300;
    opacity: 0;
    animation: fadeUp 0.9s ease 0.6s forwards;
  }

  .hero-sub strong {
    color: var(--charcoal);
    font-weight: 500;
  }

  .hero-ctas {
    display: flex;
    align-items: center;
    gap: 16px;
    opacity: 0;
    animation: fadeUp 0.9s ease 0.8s forwards;
  }

  .btn-primary {
    background: var(--charcoal);
    color: var(--cream);
    border: none;
    padding: 16px 36px;
    border-radius: 50px;
    font-family: var(--sans);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--rose), var(--rose-gold));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .btn-primary:hover::before { opacity: 1; }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(200, 116, 138, 0.35); }

  .btn-primary span { position: relative; z-index: 1; }

  .btn-outline {
    background: transparent;
    color: var(--charcoal);
    border: 1.5px solid rgba(26, 26, 46, 0.2);
    padding: 15px 32px;
    border-radius: 50px;
    font-family: var(--sans);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.05em;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
  }

  .btn-outline:hover {
    border-color: var(--rose);
    color: var(--rose);
    transform: translateY(-2px);
  }

  .play-icon-small {
    width: 28px; height: 28px;
    border-radius: 50%;
    background: var(--charcoal);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
  }

  .btn-outline:hover .play-icon-small { background: var(--rose); }

  .play-icon-small svg { width: 10px; margin-left: 1px; }

  /* ─── TRUST STATS ─── */
  .hero-stats {
    display: flex;
    gap: 36px;
    padding-top: 8px;
    opacity: 0;
    animation: fadeUp 0.9s ease 1s forwards;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .stat-divider {
    width: 1px;
    background: rgba(26, 26, 46, 0.12);
    align-self: stretch;
  }

  .stat-number {
    font-family: var(--serif);
    font-size: 34px;
    font-weight: 500;
    color: var(--charcoal);
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .stat-number em {
    font-style: normal;
    color: var(--rose);
  }

  .stat-label {
    font-family: var(--sans);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    font-weight: 400;
  }

  /* ─── RIGHT SIDE ─── */
  .hero-right {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    opacity: 0;
    animation: fadeIn 1.2s ease 0.5s forwards;
  }

  /* Arch/capsule container */
  .arch-container {
    position: relative;
    width: min(440px, 90%);
    aspect-ratio: 3/4.2;
    border-radius: 220px 220px 160px 160px;
    overflow: hidden;
    box-shadow:
      0 40px 100px rgba(200, 116, 138, 0.18),
      0 8px 30px rgba(200, 116, 138, 0.1),
      inset 0 1px 0 rgba(255,255,255,0.8);
  }

  .arch-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(160deg,
      #FFF0E8 0%,
      #FFEAE5 30%,
      #F5C8D0 60%,
      #E8A4B4 85%,
      #C8748A 100%
    );
  }

  /* Floating orbs inside arch */
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    pointer-events: none;
  }

  .orb-1 {
    width: 200px; height: 200px;
    background: rgba(255, 255, 255, 0.5);
    top: -20px; left: -20px;
  }

  .orb-2 {
    width: 150px; height: 150px;
    background: rgba(200, 116, 138, 0.25);
    bottom: 60px; right: -30px;
  }

  .orb-3 {
    width: 100px; height: 100px;
    background: rgba(212, 149, 106, 0.3);
    top: 40%; left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Floating elements inside arch */
  .arch-content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  /* Central play button */
  .play-btn {
    width: 76px; height: 76px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 32px rgba(200, 116, 138, 0.3);
    position: relative;
    z-index: 10;
    border: 1px solid rgba(255,255,255,0.9);
  }

  .play-btn::before {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    border: 1.5px solid rgba(200, 116, 138, 0.3);
    animation: ripple 2s infinite;
  }

  .play-btn::after {
    content: '';
    position: absolute;
    inset: -18px;
    border-radius: 50%;
    border: 1px solid rgba(200, 116, 138, 0.15);
    animation: ripple 2s infinite 0.5s;
  }

  @keyframes ripple {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(1.3); opacity: 0; }
  }

  .play-btn:hover { transform: scale(1.08); box-shadow: 0 16px 48px rgba(200, 116, 138, 0.45); }

  .play-btn svg { width: 20px; margin-left: 3px; }

  /* Floating pill cards */
  .pill-card {
    position: absolute;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 50px;
    padding: 10px 18px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 8px 30px rgba(200, 116, 138, 0.15);
    z-index: 20;
    white-space: nowrap;
  }

  .pill-card-icon {
    width: 32px; height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background: linear-gradient(135deg, var(--champagne), var(--blush));
    flex-shrink: 0;
  }

  .pill-card-text { display: flex; flex-direction: column; gap: 1px; }

  .pill-card-label {
    font-family: var(--sans);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--muted);
    font-weight: 400;
  }

  .pill-card-value {
    font-family: var(--serif);
    font-size: 15px;
    color: var(--charcoal);
    font-weight: 500;
  }

  .pill-1 {
    top: 15%;
    right: -60px;
    animation: float 4s ease-in-out infinite;
  }

  .pill-2 {
    bottom: 22%;
    left: -70px;
    animation: float 4s ease-in-out infinite 1.5s;
  }

  .pill-3 {
    bottom: 8%;
    right: -40px;
    animation: float 4s ease-in-out infinite 0.8s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }

  /* Decorative corner quote */
  .arch-quote {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 15;
    width: 75%;
  }

  .arch-quote p {
    font-family: var(--serif);
    font-size: 15px;
    font-style: italic;
    color: rgba(26, 26, 46, 0.65);
    line-height: 1.5;
    font-weight: 300;
  }

  /* ─── AMBIENT DECORATIONS ─── */
  .ambient-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(200, 116, 138, 0.12);
    pointer-events: none;
  }

  .ring-1 {
    width: 600px; height: 600px;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    animation: slowRotate 20s linear infinite;
  }

  .ring-2 {
    width: 800px; height: 800px;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    border-color: rgba(200, 116, 138, 0.07);
    animation: slowRotate 30s linear infinite reverse;
  }

  /* ─── SCROLL INDICATOR ─── */
  .scroll-hint {
    position: absolute;
    bottom: 40px;
    left: 80px;
    display: flex;
    align-items: center;
    gap: 12px;
    opacity: 0;
    animation: fadeIn 1s ease 1.5s forwards;
    z-index: 10;
  }

  .scroll-line {
    width: 48px;
    height: 1px;
    background: var(--muted);
    opacity: 0.5;
    position: relative;
    overflow: hidden;
  }

  .scroll-line::after {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: var(--rose);
    animation: scanLine 2s ease-in-out infinite 2s;
  }

  @keyframes scanLine {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  .scroll-text {
    font-family: var(--sans);
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    font-weight: 400;
  }

  /* ─── ANIMATIONS ─── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slowRotate {
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }

  /* ─── RESPONSIVE ─── */
  @media (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
      padding: 100px 30px 60px;
      text-align: center;
    }
    .hero-left { padding-right: 0; align-items: center; }
    .hero-right { margin-top: 40px; }
    .arch-container { width: 280px; }
    .pill-1, .pill-2, .pill-3 { display: none; }
    nav { padding: 0 24px; }
    .nav-links { display: none; }
    .scroll-hint { left: 30px; }
  }
</style>
</head>
<body>

<!-- THREE.JS BACKGROUND CANVAS -->
<canvas id="bg-canvas"></canvas>

<!-- NAVBAR -->
<nav id="navbar">
  <div class="nav-logo">IFV<span>.</span></div>
  <ul class="nav-links">
    <li><a href="#">Our Care</a></li>
    <li><a href="#">Treatments</a></li>
    <li><a href="#">Our Doctors</a></li>
    <li><a href="#">Stories</a></li>
    <li><a href="#" class="nav-cta">Book a Consultation</a></li>
  </ul>
</nav>

<!-- HERO SECTION -->
<section class="hero">

  <!-- Ambient rings -->
  <div class="ambient-ring ring-1" style="position:absolute;"></div>
  <div class="ambient-ring ring-2" style="position:absolute;"></div>

  <!-- LEFT -->
  <div class="hero-left">

    <div class="badge">
      <div class="badge-dot"></div>
      <span>Luxury Boutique Fertility &amp; Maternity Care</span>
    </div>

    <h1 class="hero-headline">
      You Are in<br/>
      <em>Safe Hands,</em><br/>
      <span class="line-two">Every Step of the Way.</span>
    </h1>

    <p class="hero-sub">
      At IFV, we hold the most precious chapters of your life with <strong>clinical precision</strong> and <strong>genuine tenderness</strong>. From your first consultation to the moment you hold your baby — we are with you, always.
    </p>

    <div class="hero-ctas">
      <button class="btn-primary">
        <span>Schedule a Visit</span>
      </button>
      <button class="btn-outline">
        <div class="play-icon-small">
          <svg viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L11 7L1 12.5V1.5Z" fill="white"/>
          </svg>
        </div>
        Our Story
      </button>
    </div>

    <div class="hero-stats">
      <div class="stat">
        <div class="stat-number">20<em>+</em></div>
        <div class="stat-label">Years of Care</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <div class="stat-number">2,400<em>+</em></div>
        <div class="stat-label">Miracles Born</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <div class="stat-number">5.0<em>★</em></div>
        <div class="stat-label">Patient Rating</div>
      </div>
    </div>

  </div>

  <!-- RIGHT -->
  <div class="hero-right">

    <div class="arch-container">
      <div class="arch-gradient"></div>
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <div class="arch-content">
        <div class="play-btn">
          <svg viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L18 12L2 22V2Z" fill="#C8748A"/>
          </svg>
        </div>
        <div class="arch-quote">
          <p>"A sanctuary where science meets the warmth of a mother's dream."</p>
        </div>
      </div>
    </div>

    <!-- Floating pill cards -->
    <div class="pill-card pill-1">
      <div class="pill-card-icon">🌸</div>
      <div class="pill-card-text">
        <span class="pill-card-label">Success Rate</span>
        <span class="pill-card-value">94% IVF Outcomes</span>
      </div>
    </div>

    <div class="pill-card pill-2">
      <div class="pill-card-icon">🫶</div>
      <div class="pill-card-text">
        <span class="pill-card-label">Dedicated to</span>
        <span class="pill-card-value">Women's Wellness</span>
      </div>
    </div>

    <div class="pill-card pill-3">
      <div class="pill-card-icon">✨</div>
      <div class="pill-card-text">
        <span class="pill-card-label">Experience</span>
        <span class="pill-card-value">24/7 Care Support</span>
      </div>
    </div>

  </div>

  <!-- Scroll hint -->
  <div class="scroll-hint">
    <div class="scroll-line"></div>
    <span class="scroll-text">Scroll to explore</span>
  </div>

</section>

<script>
// ─── NAVBAR SCROLL ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ─── THREE.JS BACKGROUND ───
const canvas = document.getElementById('bg-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// ─── FLOATING PARTICLES ───
const particleGeo = new THREE.BufferGeometry();
const count = 120;
const positions = new Float32Array(count * 3);
const sizes = new Float32Array(count);
const opacities = new Float32Array(count);

for (let i = 0; i < count; i++) {
  positions[i * 3]     = (Math.random() - 0.5) * 20;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 5 - 2;
  sizes[i] = Math.random() * 3 + 1;
  opacities[i] = Math.random() * 0.5 + 0.1;
}

particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
particleGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

const particleMat = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color('#C8748A') },
    uColor2: { value: new THREE.Color('#D4956A') },
  },
  vertexShader: `
    attribute float size;
    uniform float uTime;
    varying float vAlpha;
    varying float vIndex;

    void main() {
      vIndex = position.z;
      vec3 pos = position;
      pos.y += sin(uTime * 0.3 + position.x * 0.5) * 0.15;
      pos.x += cos(uTime * 0.2 + position.y * 0.4) * 0.08;
      vAlpha = 0.15 + 0.1 * sin(uTime * 0.5 + position.x);
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying float vAlpha;
    varying float vIndex;

    void main() {
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      float alpha = (1.0 - dist * 2.0) * vAlpha;
      float t = clamp(vIndex * 0.3 + 0.5, 0.0, 1.0);
      vec3 color = mix(uColor1, uColor2, t);
      gl_FragColor = vec4(color, alpha);
    }
  `,
  transparent: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
});

const particles = new THREE.Points(particleGeo, particleMat);
scene.add(particles);

// ─── LARGE SOFT SPHERES (ambient orbs) ───
const orbGeo = new THREE.SphereGeometry(1, 32, 32);
const orbs = [];

const orbData = [
  { color: '#FFEAE5', pos: [-4, 2, -3], scale: 2.5, speed: 0.4 },
  { color: '#C8748A', pos: [5, -1, -4], scale: 1.8, speed: 0.3 },
  { color: '#D4956A', pos: [2, 3, -5], scale: 1.2, speed: 0.5 },
  { color: '#FFF0E8', pos: [-3, -3, -4], scale: 2, speed: 0.25 },
];

orbData.forEach(data => {
  const mat = new THREE.MeshBasicMaterial({
    color: data.color,
    transparent: true,
    opacity: 0.06,
  });
  const mesh = new THREE.Mesh(orbGeo, mat);
  mesh.position.set(...data.pos);
  mesh.scale.setScalar(data.scale);
  scene.add(mesh);
  orbs.push({ mesh, ...data });
});

// ─── ELEGANT RINGS ───
const ringData = [
  { radius: 3.5, tube: 0.005, color: '#C8748A', opacity: 0.15, rotX: 1.2, rotZ: 0.3 },
  { radius: 5, tube: 0.004, color: '#D4956A', opacity: 0.1, rotX: 0.5, rotZ: 1.0 },
  { radius: 6.5, tube: 0.003, color: '#C8748A', opacity: 0.07, rotX: 0.8, rotZ: 0.6 },
];

const rings = [];
ringData.forEach(data => {
  const geo = new THREE.TorusGeometry(data.radius, data.tube, 8, 200);
  const mat = new THREE.MeshBasicMaterial({
    color: data.color,
    transparent: true,
    opacity: data.opacity,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = data.rotX;
  mesh.rotation.z = data.rotZ;
  scene.add(mesh);
  rings.push({ mesh, rotX: data.rotX, rotZ: data.rotZ });
});

// ─── MOUSE PARALLAX ───
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
});

// ─── ANIMATION LOOP ───
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();

  particleMat.uniforms.uTime.value = t;

  // Slow particle drift
  particles.rotation.y = t * 0.015;
  particles.rotation.x = Math.sin(t * 0.1) * 0.05;

  // Orb float
  orbs.forEach((orb, i) => {
    orb.mesh.position.y = orb.pos[1] + Math.sin(t * orb.speed + i) * 0.4;
    orb.mesh.position.x = orb.pos[0] + Math.cos(t * orb.speed * 0.7 + i) * 0.2;
  });

  // Ring slow rotation
  rings.forEach((ring, i) => {
    ring.mesh.rotation.y = t * (0.05 + i * 0.02);
    ring.mesh.rotation.x = ring.rotX + Math.sin(t * 0.08 + i) * 0.1;
  });

  // Mouse parallax camera
  camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.03;
  camera.position.y += (mouseY * 0.2 - camera.position.y) * 0.03;
  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}

animate();

// ─── RESIZE ───
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
</script>
</body>
</html>