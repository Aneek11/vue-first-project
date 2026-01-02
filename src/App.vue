<template>
  <div
    class="relative min-h-[100dvh] bg-slate-950 text-slate-100 flex items-center justify-center overflow-hidden touch-none"
    @wheel.passive="onWheel"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
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

    <!-- MAIN SCENE CONTAINER -->
    <div class="relative z-10 px-4 sm:px-6 w-full max-w-xl perspective-container">
      
      <!-- WRAPPER FOR FLIPPING CARDS (States 0 & 1) -->
      <!-- We hide/fade this out when state becomes 2 to make room for the 3rd card, or keep it as background -->
      <div 
        class="relative w-full transition-all duration-700 ease-out"
        :class="{
          'opacity-0 scale-90 translate-z-[-200px] pointer-events-none': cardState === 2,
          'opacity-100 scale-100 translate-z-0': cardState < 2
        }"
        style="min-height: 580px; transform-style: preserve-3d;"
      >
        <!-- FLIPPER -->
        <div
          class="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-out"
          :style="{ transform: `rotateY(${ cardState >= 1 ? 180 : 0 }deg)` }"
        >
          <!-- FRONT CARD (original counter card) -->
          <div
            class="absolute inset-0 flex backface-hidden"
            :style="{ transform: 'translateZ(1px)' }"
          >
            <div
              class="group bg-slate-900/70 border border-slate-700/50 rounded-3xl shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl px-6 sm:px-8 py-7 sm:py-8 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] w-full backface-hidden"
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
                  This counter is powered by Vue reactivity, wrapped in a 3D
                  galaxy background crafted with Three.js.
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
                  <span
                    class="text-xs uppercase tracking-[0.2em] text-slate-400"
                  >
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
                  Scroll
                  <span class="font-semibold text-slate-200">down</span> (or
                  swipe up) to open the calculator on the back.
                </p>
              </div>
            </div>
          </div>

          <!-- BACK CARD (calculator) -->
          <div
            class="absolute inset-0 flex backface-hidden"
            :style="{
              transform: 'rotateY(180deg) translateZ(1px)',
            }"
          >
            <div
              class="group bg-slate-900/80 border border-sky-500/40 rounded-3xl shadow-[0_24px_80px_rgba(8,47,73,0.9)] backdrop-blur-xl px-6 sm:px-8 py-7 sm:py-8 w-full backface-hidden"
            >
              <!-- Tiny label -->
              <div
                class="flex items-center gap-2 mb-4 text-xs font-medium text-sky-300/80"
              >
                <span
                  class="inline-flex h-2 w-2 rounded-full bg-sky-400 animate-ping"
                ></span>
                <span>Galaxy Calculator • Back of the card</span>
              </div>

              <!-- Title -->
              <div class="mb-4 text-center">
                <h2
                  class="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 bg-gradient-to-r from-sky-300 via-indigo-300 to-sky-300 bg-clip-text text-transparent"
                >
                  Galaxy Calculator
                </h2>
                <p class="text-xs sm:text-sm text-slate-300/90">
                  Simple calculator built with Vue refs and event handlers.
                </p>
              </div>

              <!-- CALCULATOR UI -->
              <div class="flex flex-col items-center gap-4 mt-2">
                <!-- Display -->
                <div class="w-full max-w-xs">
                  <div
                    class="rounded-2xl bg-slate-950/80 px-4 py-3 border border-slate-700/80 shadow-inner text-right"
                  >
                    <div
                      class="text-[11px] uppercase tracking-[0.15em] text-slate-500"
                    >
                      Galaxy Calc
                    </div>
                    <div
                      class="mt-1 text-2xl sm:text-3xl font-semibold tabular-nums break-all"
                    >
                      {{ display }}
                    </div>
                  </div>
                </div>

                <!-- Buttons -->
                <div
                  class="w-full max-w-xs grid grid-cols-4 gap-2 mt-3 text-sm select-none"
                >
                  <!-- Row 1 -->
                  <button
                    class="col-span-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-800 border border-slate-600/80 text-slate-100 font-semibold"
                    @click="clearAll"
                  >
                    C
                  </button>
                  <button
                    class="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-800 border border-slate-600/80 text-slate-100 font-semibold"
                    @click="deleteLast"
                  >
                    DEL
                  </button>
                  <button
                    class="py-2.5 rounded-xl bg-sky-500/90 hover:bg-sky-400 active:bg-sky-500 text-slate-950 font-semibold"
                    @click="appendOperator('÷')"
                  >
                    ÷
                  </button>

                  <!-- Row 2 -->
                  <button
                    class="py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold"
                    @click="appendDigit('7')"
                  >
                    7
                  </button>
                  <button
                    class="py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold"
                    @click="appendDigit('8')"
                  >
                    8
                  </button>
                  <button
                    class="py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold"
                    @click="appendDigit('9')"
                  >
                    9
                  </button>
                  <button
                    class="py-2.5 rounded-xl bg-sky-500/90 hover:bg-sky-400 active:bg-sky-500 text-slate-950 font-semibold"
                    @click="appendOperator('×')"
                  >
                    ×
                  </button>

                  <!-- Row 3 -->
                  <button
                    class="py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold"
                    @click="appendDigit('4')"
                  >
                    4
                  </button>
                  <button
                    class="py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold"
                    @click="appendDigit('5')"
                  >
                    5
                  </button>
                  <button
                    class="py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold"
                    @click="appendDigit('6')"
                  >
                    6
                  </button>
                  <button
                    class="py-2.5 rounded-xl bg-sky-500/90 hover:bg-sky-400 active:bg-sky-500 text-slate-950 font-semibold"
                    @click="appendOperator('-')"
                  >
                    -
                  </button>

                  <!-- Row 4 -->
                  <button
                    class="py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold"
                    @click="appendDigit('1')"
                  >
                    1
                  </button>
                  <button
                    class="py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold"
                    @click="appendDigit('2')"
                  >
                    2
                  </button>
                  <button
                    class="py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold"
                    @click="appendDigit('3')"
                  >
                    3
                  </button>
                  <button
                    class="py-2.5 rounded-xl bg-sky-500/90 hover:bg-sky-400 active:bg-sky-500 text-slate-950 font-semibold"
                    @click="appendOperator('+')"
                  >
                    +
                  </button>

                  <!-- Row 5 -->
                  <button
                    class="col-span-2 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold"
                    @click="appendDigit('0')"
                  >
                    0
                  </button>
                  <button
                    class="py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold"
                    @click="appendDot"
                  >
                    .
                  </button>
                  <button
                    class="py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-slate-950 font-semibold shadow-lg shadow-emerald-500/40"
                    @click="calculate"
                  >
                    =
                  </button>
                </div>

                <p
                  class="text-[11px] sm:text-xs text-slate-400 mt-1 text-center"
                >
                  Scroll <span class="font-semibold text-slate-200">down</span> (swpie up) to next card, 
                  or up (swipe down) to previous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- THIRD CARD (Coming from background) -->
      <div 
        class="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out pointer-events-none"
        :class="{
          'opacity-0 translate-y-12 translate-z-[-500px] rotate-x-12': cardState !== 2,
          'opacity-100 translate-y-0 translate-z-0 rotate-x-0 pointer-events-auto': cardState === 2
        }"
        style="transform-style: preserve-3d;"
      >
        <div class="group bg-slate-900/80 border border-purple-500/40 rounded-3xl shadow-[0_24px_80px_rgba(30,27,75,0.9)] backdrop-blur-xl px-6 sm:px-8 py-7 sm:py-8 w-full max-w-xl">
           <!-- Tiny label -->
           <div class="flex items-center gap-2 mb-4 text-xs font-medium text-purple-300/80">
            <span class="inline-flex h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span>Bonus Card • Vue 3D Magic</span>
          </div>

          <!-- Title -->
           <div class="mb-4 text-center">
            <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Cosmic Arrival
            </h2>
            <p class="text-xs sm:text-sm text-slate-300/90">
              I arrived from the depths of the 3D background.
            </p>
          </div>

          <!-- Content -->
           <div class="space-y-4 text-slate-300 text-sm sm:text-base text-center">
            <p>
              This entire playground is built with a single persistent Three.js scene in the background.
            </p>
            <div class="p-4 rounded-xl bg-slate-950/50 border border-purple-500/20 shadow-inner">
               <span class="text-purple-200 font-mono">cardState === 2</span>
            </div>
             <button
              class="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-lg shadow-purple-500/30 transition-all"
              @click="stateToStart"
            >
              Reset to Start
            </button>
             <p class="text-[11px] sm:text-xs text-slate-400 mt-2">
               Scroll <span class="font-semibold text-slate-200">up</span> or swipe down to go back.
            </p>
           </div>
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
// 0 = front, 1 = back (calc), 2 = third card
const cardState = ref(0); 

// ---------- COUNTER ----------
const increment = () => {
  count.value++;
};

const reset = () => {
  count.value = 0;
};

const stateToStart = () => {
  cardState.value = 0;
};

// ---------- CALCULATOR STATE ----------
const display = ref("0");

const clearAll = () => {
  display.value = "0";
};

const appendDigit = (digit) => {
  if (display.value === "0" || display.value === "Error") {
    display.value = digit;
  } else {
    display.value += digit;
  }
};

const appendDot = () => {
  const parts = display.value.split(/[\+\-\×\÷]/);
  const last = parts[parts.length - 1];
  if (last.includes(".")) return;
  display.value += ".";
};

const appendOperator = (op) => {
  if (display.value === "Error") return;
  const lastChar = display.value[display.value.length - 1];
  const operators = "+-×÷";
  if (operators.includes(lastChar)) {
    display.value = display.value.slice(0, -1) + op;
  } else {
    display.value += op;
  }
};

const deleteLast = () => {
  if (display.value === "Error") {
    display.value = "0";
    return;
  }
  if (display.value.length <= 1) {
    display.value = "0";
  } else {
    display.value = display.value.slice(0, -1);
  }
};

const calculate = () => {
  try {
    const expr = display.value.replace(/×/g, "*").replace(/÷/g, "/");
    // eslint-disable-next-line no-eval
    const result = eval(expr);
    if (typeof result === "number" && Number.isFinite(result)) {
      display.value = String(parseFloat(result.toFixed(6)));
    } else {
      display.value = "Error";
    }
  } catch {
    display.value = "Error";
  }
};

// ---------- THREE.JS ----------
let scene, camera, renderer, cube, cubeAnimationId;
let bgScene, bgCamera, bgRenderer, bgParticles, bgAnimationId;

const mouse = { x: 0, y: 0 };

// star texture
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

// desktop scroll 
const onWheel = (e) => {
  // Prevent rapid firing
  // Use a small timeout or just rely on Vue's reactivity speed? 
  // Ideally a debounce, but for now simple threshold:
  if (Math.abs(e.deltaY) < 10) return;

  if (e.deltaY > 0) {
    // Scroll Down -> Next State
    if (cardState.value < 2) {
      cardState.value++;
    }
  } else {
    // Scroll Up -> Prev State
    if (cardState.value > 0) {
      cardState.value--;
    }
  }
};

// mobile swipe
let touchStartY = null;

const onTouchStart = (e) => {
  if (e.touches && e.touches.length > 0) {
    touchStartY = e.touches[0].clientY;
  }
};

const onTouchEnd = (e) => {
  if (touchStartY === null) return;
  if (!e.changedTouches || e.changedTouches.length === 0) return;

  const endY = e.changedTouches[0].clientY;
  const deltaY = endY - touchStartY;

  const threshold = 40; // minimum swipe distance

  if (deltaY < -threshold) {
    // Swipe UP (like scrolling down) -> Next State
    if (cardState.value < 2) {
      cardState.value++;
    }
  } else if (deltaY > threshold) {
     // Swipe DOWN (like scrolling up) -> Prev State
     if (cardState.value > 0) {
      cardState.value--;
    }
  }

  touchStartY = null;
};

const onResize = () => {
  if (threeContainer.value && camera && renderer) {
    const w = threeContainer.value.clientWidth;
    const h = threeContainer.value.clientHeight || 1;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

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
    return;
  }

  // cube scene
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

  // background stars
  bgScene = new THREE.Scene();

  bgRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  bgRenderer.setPixelRatio(window.devicePixelRatio);
  bgRenderer.setSize(window.innerWidth, window.innerHeight);
  bgRenderer.setClearColor(0x000000, 1);
  bgContainer.value.appendChild(bgRenderer.domElement);

  bgCamera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  bgCamera.position.z = 300;

  bgScene.fog = new THREE.Fog(0x020617, 200, 700);

  const particleCount = 1500;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const spread = 600;

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;

    positions[i3] = (Math.random() - 0.5) * spread * 2;
    positions[i3 + 1] = (Math.random() - 0.5) * spread * 1.5;
    positions[i3 + 2] = (Math.random() - 0.5) * spread * 2;

    const color = new THREE.Color();
    const hue = 0.58 + Math.random() * 0.1;
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
    blending: THREE.AdditiveBlending,
  });

  bgParticles = new THREE.Points(bgGeometry, bgMaterial);
  bgScene.add(bgParticles);

  const animateBg = () => {
    bgAnimationId = requestAnimationFrame(animateBg);

    bgParticles.rotation.y += 0.0008;
    bgParticles.rotation.x += 0.0003;

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

<style>
.perspective-container {
  perspective: 1400px;
}
.backface-hidden {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* Utilities for 3D transforms that Tailwind might not have by default or for custom values */
.translate-z-0 {
  transform: translateZ(0);
}
.translate-z-\[-200px\] {
  transform: translateZ(-200px);
}
.translate-z-\[-500px\] {
  transform: translateZ(-500px);
}
.rotate-x-12 {
  transform: rotateX(12deg) translateZ(-500px); /* Combine for the starting state */
}
.rotate-x-0 {
  transform: rotateX(0deg) translateZ(0);
}
</style>
