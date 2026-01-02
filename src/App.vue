<template>
  <div
    class="relative min-h-[100dvh] bg-slate-950 text-slate-100 flex items-center justify-center overflow-hidden touch-none"
    @wheel.prevent="onWheel"
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
      
      <!-- WRAPPER FOR FLIPPING CARDS -->
      <div 
        class="relative w-full transition-all duration-700 ease-out"
        style="min-height: 580px; transform-style: preserve-3d;"
      >
        <!-- FLIPPER -->
        <div
          class="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-out"
          :style="{ transform: `rotateY(${ cardState * 180 }deg)` }"
        >
          <!-- FRONT FACE (Holds two potential contents: Counter OR Bonus) -->
          <div
            class="absolute inset-0 flex backface-hidden"
            :style="{ transform: 'translateZ(1px)' }"
          >
            <!-- CONTENT A: COUNTER (Visible when cardState is 0) -->
            <div
              v-show="!showBonusOnFront"
              class="group bg-slate-900/70 border border-slate-700/50 rounded-3xl shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl px-6 sm:px-8 py-7 sm:py-8 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] w-full backface-hidden h-full flex flex-col"
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
                class="w-full h-48 sm:h-56 mb-6 rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-700/70 shadow-inner shrink-0"
              ></div>

              <!-- Counter -->
              <div class="flex flex-col items-center gap-4 mt-auto">
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
                  Scroll <span class="font-semibold text-slate-200">down</span> (or
                  swipe up) to open the calculator.
                </p>
              </div>
            </div>

            <!-- CONTENT C: BONUS CARD (Visible when cardState is 2) -->
            <div 
              v-show="showBonusOnFront"
              class="group bg-slate-900/80 border border-purple-500/40 rounded-3xl shadow-[0_24px_80px_rgba(30,27,75,0.9)] backdrop-blur-xl px-6 sm:px-8 py-7 sm:py-8 w-full h-full flex flex-col backface-hidden"
            >
               <!-- Tiny label -->
              <div class="flex items-center gap-2 mb-4 text-xs font-medium text-purple-300/80">
                <span class="inline-flex h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
                <span>Bonus Card • Vue 3D Magic</span>
              </div>

              <!-- Title -->
              <div class="mb-4 text-center">
                <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  You Found Me!
                </h2>
                <p class="text-xs sm:text-sm text-slate-300/90">
                  I was hiding behind the calculator all along.
                </p>
              </div>

              <!-- Content, pushed to bottom to match counter card style -->
              <div class="space-y-6 text-slate-300 text-sm sm:text-base text-center w-full max-w-sm mt-auto mx-auto">
                <p>
                  By rotating 360 degrees, we return to the "front" face, but the content has magically changed!
                </p>
                <div class="p-6 rounded-2xl bg-slate-950/50 border border-purple-500/20 shadow-inner flex flex-col gap-2">
                  <div class="text-slate-400 text-xs uppercase tracking-widest">Current Rotation</div>
                  <div class="text-3xl font-mono text-purple-200">360°</div>
                </div>
                
                 <div class="pt-4">
                   <button
                    class="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-lg shadow-purple-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    @click="stateToStart"
                  >
                    Reset & Spin Back
                  </button>
                 </div>
                 
                 <p class="text-[11px] sm:text-xs text-slate-400 mt-2">
                   Scroll <span class="font-semibold text-slate-200">up</span> or swipe down to go back.
                </p>
              </div>
            </div>
          </div>

          <!-- BACK FACE (Calculator - Always visible when cardState is 1) -->
          <div
            class="absolute inset-0 flex backface-hidden"
            :style="{
              transform: 'rotateY(180deg) translateZ(1px)',
            }"
          >
            <div
              class="group bg-slate-900/80 border border-sky-500/40 rounded-3xl shadow-[0_24px_80px_rgba(8,47,73,0.9)] backdrop-blur-xl px-6 sm:px-8 py-7 sm:py-8 w-full backface-hidden h-full flex flex-col"
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
                  Scroll <span class="font-semibold text-slate-200">down</span> (swipe up) to next card, 
                  or up (swipe down) to previous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import * as THREE from "three";

const count = ref(0);
const threeContainer = ref(null);
const bgContainer = ref(null);
// 0 = front (counter), 1 = back (calc), 2 = front (bonus)
const cardState = ref(0); 
const showBonusOnFront = ref(false); 
const isFlipping = ref(false); // Lock to prevent rapid scroll events during animation

// Watch state to switch front content
watch(cardState, (newVal, oldVal) => {
  // Moving from Back(1) to Front(2): Show Bonus
  if (oldVal === 1 && newVal === 2) {
     showBonusOnFront.value = true;
  }
  // Moving from Back(1) to Front(0): Hide Bonus (Show Counter)
  if (oldVal === 1 && newVal === 0) {
     showBonusOnFront.value = false;
  }
});


// ---------- COUNTER ----------
const increment = () => {
  count.value++;
};

const reset = () => {
  count.value = 0;
};

const stateToStart = () => {
  if (isFlipping.value) return;
  
  handleStateChange(0);
};

// Start Animation Lock
const handleStateChange = (newState) => {
  if (newState === cardState.value) return;

  isFlipping.value = true;
  cardState.value = newState;

  // Unlock after CSS transition (700ms)
  setTimeout(() => {
    isFlipping.value = false;
    
    // Safety check for content (e.g. if we jumped to 0)
    if (newState === 0) {
      showBonusOnFront.value = false;
    }
  }, 700);
};

// ... (Calculator logic omitted for brevity, unchanged) ...

// ... (Three.js logic omitted for brevity, unchanged) ...


// desktop scroll 
const onWheel = (e) => {
  // Immediate response if not currently animating
  if (isFlipping.value) return;
  
  // No threshold: capture ALL scrolls to fix desktop issues
  // The 'prevent' modifier on the listener ensures we own the event.
  
  if (e.deltaY > 0) {
    // Scroll Down -> Next State
    if (cardState.value < 2) {
      handleStateChange(cardState.value + 1);
    }
  } else {
    // Scroll Up -> Prev State
    if (cardState.value > 0) {
      handleStateChange(cardState.value - 1);
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
  
  // Also respect the animation lock for swipes
  if (isFlipping.value) {
    touchStartY = null;
    return;
  }

  const endY = e.changedTouches[0].clientY;
  const deltaY = endY - touchStartY;

  const threshold = 40; // minimum swipe distance

  if (deltaY < -threshold) {
    // Swipe UP (like scrolling down) -> Next State
    if (cardState.value < 2) {
      handleStateChange(cardState.value + 1);
    }
  } else if (deltaY > threshold) {
     // Swipe DOWN (like scrolling up) -> Prev State
     if (cardState.value > 0) {
      handleStateChange(cardState.value - 1);
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

let resizeObserver = null;

onMounted(() => {
  initThreeScenes();
  
  // Watch for container size changes to prevent 0x0 bug
  if (threeContainer.value) {
    resizeObserver = new ResizeObserver(() => {
      onResize();
    });
    resizeObserver.observe(threeContainer.value);
  }
});

onUnmounted(() => {
  cancelAnimationFrame(cubeAnimationId);
  cancelAnimationFrame(bgAnimationId);

  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("resize", onResize);
  
  if (resizeObserver) resizeObserver.disconnect();

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

const initThreeScenes = () => {
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
};


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
</style>
