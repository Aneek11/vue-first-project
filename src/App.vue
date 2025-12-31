<template>
  <div
    class="relative min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center overflow-hidden"
  >
    <!-- 3D BACKGROUND -->
    <div
      ref="bgContainer"
      class="pointer-events-none absolute inset-0 z-0"
    ></div>

    <!-- Soft gradient glow behind card -->
    <div
      class="pointer-events-none absolute inset-0 z-0 opacity-70"
      aria-hidden="true"
    >
      <div
        class="absolute -top-40 right-10 h-72 w-72 bg-sky-500/40 blur-3xl rounded-full"
      ></div>
      <div
        class="absolute bottom-[-6rem] left-[-4rem] h-80 w-80 bg-indigo-500/40 blur-3xl rounded-full"
      ></div>
    </div>

    <!-- CARD WRAPPER (for max-width & padding on mobile) -->
    <div class="relative z-10 px-4 sm:px-6 w-full max-w-xl">
      <div
        class="group bg-slate-900/70 border border-slate-700/50 rounded-3xl shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl px-6 sm:px-8 py-7 sm:py-8 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01]"
      >
        <!-- Tiny label -->
        <div
          class="flex items-center gap-2 mb-4 text-xs font-medium text-slate-400"
        >
          <span
            class="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"
          ></span>
          <span>Vue + Three.js + Tailwind playground</span>
        </div>

        <!-- Top: title + description -->
        <div class="mb-6 text-center">
          <h1
            class="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 bg-gradient-to-r from-sky-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent"
          >
            Hello Vue Galaxy
          </h1>
          <p class="text-sm sm:text-base text-slate-300/90">
            This counter is powered by Vue reactivity, wrapped in a 3D galaxy
            background crafted with Three.js.
          </p>
        </div>

        <!-- 3D Canvas (cube) -->
        <div
          ref="threeContainer"
          class="w-full h-48 sm:h-56 mb-6 rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-700/70 shadow-inner"
        ></div>

        <!-- Counter -->
        <div class="flex flex-col items-center gap-4">
          <div
            class="inline-flex items-baseline gap-2 rounded-2xl bg-slate-900/70 px-5 py-3 border border-slate-700/70 shadow-inner"
          >
            <span class="text-xs uppercase tracking-[0.2em] text-slate-400">
              Count
            </span>
            <span class="text-4xl sm:text-5xl font-semibold tabular-nums">
              {{ count }}
            </span>
          </div>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
            <button
              class="flex-1 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition-colors duration-150"
              @click="increment"
            >
              + Increment
            </button>
            <button
              class="flex-1 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-800 text-sm font-semibold text-slate-100 border border-slate-600/70 transition-colors duration-150"
              @click="reset"
            >
              Reset
            </button>
          </div>

          <!-- Helper text -->
          <p class="text-xs sm:text-sm text-slate-400 mt-1 text-center">
            Each click updates a
            <span class="font-semibold text-slate-200">reactive ref</span>
            in Vue.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>




<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";

const count = ref(0);
const threeContainer = ref(null);
const bgContainer = ref(null);

// cube scene
let scene, camera, renderer, cube, cubeAnimationId;
// background particles scene
let bgScene, bgCamera, bgRenderer, bgParticles, bgAnimationId;

const mouse = { x: 0, y: 0 };

// ---------- basic counter ----------
const increment = () => {
  count.value++;
};

const reset = () => {
  count.value = 0;
};

// ---------- star texture (round + glow) ----------
const createStarTexture = () => {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );

  // center bright, outer fade
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.2, "rgba(255,255,255,1)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

const onMouseMove = (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
};

const onResize = () => {
  // resize cube canvas
  if (threeContainer.value && camera && renderer) {
    const w = threeContainer.value.clientWidth;
    const h = threeContainer.value.clientHeight || 1;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  // resize bg canvas
  if (bgCamera && bgRenderer) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    bgCamera.aspect = w / h;
    bgCamera.updateProjectionMatrix();
    bgRenderer.setSize(w, h);
  }
};

onMounted(() => {
  if (!threeContainer.value || !bgContainer.value) {
    console.error("threeContainer/bgContainer null hai");
    return;
  }

  // --------------------
  // 1) CARD CUBE SCENE
  // --------------------
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    35,
    threeContainer.value.clientWidth / threeContainer.value.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 3;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(
    threeContainer.value.clientWidth,
    threeContainer.value.clientHeight
  );
  threeContainer.value.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({
    color: 0x2a7b9b,
  });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  const animateCube = () => {
    cubeAnimationId = requestAnimationFrame(animateCube);
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    renderer.render(scene, camera);
  };
  animateCube();

  // --------------------
  // 2) BACKGROUND GALAXY STARS SCENE
  // --------------------
  bgScene = new THREE.Scene();

  bgRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  bgRenderer.setPixelRatio(window.devicePixelRatio);
  bgRenderer.setSize(window.innerWidth, window.innerHeight);
  bgRenderer.setClearColor(0x000000, 1); // deep space color
  bgContainer.value.appendChild(bgRenderer.domElement);

  bgCamera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  bgCamera.position.z = 300;

  // halki fog for depth
  bgScene.fog = new THREE.Fog(0x020617, 200, 700);

  // ★ STAR FIELD
  const particleCount = 1500;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const spread = 600;

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;

    // random position around camera
    positions[i3] = (Math.random() - 0.5) * spread * 2; // x
    positions[i3 + 1] = (Math.random() - 0.5) * spread * 1.5; // y
    positions[i3 + 2] = (Math.random() - 0.5) * spread * 2; // z

    // random galaxy-ish color (blue/purple/white)
    const color = new THREE.Color();
    const hue = 0.58 + Math.random() * 0.1; // around blue/purple
    const sat = 0.4 + Math.random() * 0.4;
    const light = 0.6 + Math.random() * 0.3;
    color.setHSL(hue, sat, light);

    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  const bgGeometry = new THREE.BufferGeometry();
  bgGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  bgGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const starTexture = createStarTexture();

  const bgMaterial = new THREE.PointsMaterial({
    map: starTexture,
    size: 8,
    sizeAttenuation: true,
    transparent: true,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending, // light jaisa mix
  });

  bgParticles = new THREE.Points(bgGeometry, bgMaterial);
  bgScene.add(bgParticles);

  const animateBg = () => {
    bgAnimationId = requestAnimationFrame(animateBg);

    // slow galaxy rotation
    bgParticles.rotation.y += 0.0008;
    bgParticles.rotation.x += 0.0003;

    // mouse parallax
    const targetX = mouse.x * 30;
    const targetY = mouse.y * 15;
    bgParticles.position.x += (targetX - bgParticles.position.x) * 0.05;
    bgParticles.position.y += (targetY - bgParticles.position.y) * 0.05;

    bgRenderer.render(bgScene, bgCamera);
  };
  animateBg();

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  cancelAnimationFrame(cubeAnimationId);
  cancelAnimationFrame(bgAnimationId);

  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("resize", onResize);

  const destroyRenderer = (r, container) => {
    if (!r) return;
    try {
      const gl = r.getContext();
      const loseExt = gl && gl.getExtension("WEBGL_lose_context");
      if (loseExt) loseExt.loseContext();
    } catch (e) {
      console.warn("webgl destroy error", e);
    }
    r.dispose();
    if (container && r.domElement && container.contains(r.domElement)) {
      container.removeChild(r.domElement);
    }
  };

  destroyRenderer(renderer, threeContainer.value);
  destroyRenderer(bgRenderer, bgContainer.value);
});
</script>
