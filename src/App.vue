<template>
  <div
    class="relative min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden"
  >
    <!-- 3D BACKGROUND CANVAS (poori screen, card ke peeche) -->
    <div
      ref="bgContainer"
      class="pointer-events-none absolute inset-0 z-0"
    ></div>

    <!-- CARD -->
    <div
      class="bg-slate-600 text-white p-8 rounded-2xl shadow-lg w-full max-w-md relative z-10"
    >
      <!-- 3D Canvas (cube) -->
      <div
        ref="threeContainer"
        class="w-full h-48 mb-4 rounded-xl overflow-hidden"
      ></div>

      <h1 class="text-2xl font-bold mb-4 text-center">Hello Vue + Tailwind</h1>

      <p class="mb-4 text-slate-300 text-center">
        This is my first component. The counter below is reactive.
      </p>

      <div class="flex flex-col items-center gap-4">
        <div class="text-4xl font-semibold">
          {{ count }}
        </div>

        <div class="flex gap-2">
          <button
            class="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition"
            @click="increment"
          >
            + Increment
          </button>
          <button
            class="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition"
            @click="reset"
          >
            Reset
          </button>
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
