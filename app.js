/* ═══════════════════════════════════════════════════
   EZZ TANTAWY — PORTFOLIO APP.JS
   Scroll Scrub · Cursor · Loader · SFX · UI
═══════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════
   PROJECT DATA
══════════════════════════════════ */
const PROJECTS = [
  {
    index: 0, category: 'editing',
    title: 'Plains YouTube Channel',
    cat: 'Video Editing',
    desc: 'Channel content editing for a creative studio — reels, cuts, branded sequences, and social-first delivery. Pacing-driven editing that keeps audiences hooked.',
    tags: ['Premiere Pro', 'Color Grading', 'Reel Editing', 'YouTube'],
    img: 'assets/project-plains-youtube-channel.jpg',
    link: 'https://www.youtube.com/@plains_studio'
  },
  {
    index: 1, category: 'editing',
    title: 'Teleperformance Media Coverage',
    cat: 'Editing · Videography',
    desc: 'Corporate media coverage at Teleperformance Egypt — videography, photography, and edited deliverables for internal communications and external brand presence.',
    tags: ['Videography', 'Photography', 'Premiere Pro', 'Corporate', 'Teleperformance'],
    img: 'assets/project-teleperformance-media-coverage.jpg',
    link: null
  },
  {
    index: 2, category: 'editing',
    title: 'Land of the Brave — Mobile Game Ad',
    cat: 'Video Editing · Color Grading',
    desc: 'Full production editing for Tamatem\'s Land of the Brave mobile game campaign. Cinematic color grade, multi-layer timeline, audio mix, and final delivery. The project featured in this portfolio\'s cinematic intro.',
    tags: ['Premiere Pro', 'After Effects', 'Color Grade', 'Mobile Game', 'Tamatem', 'FINAL_GRADE_v7'],
    img: 'assets/project-tamatem-heroes-land-ad.jpg',
    link: null
  },
  {
    index: 3, category: 'editing',
    title: 'Color Grading — Raw Footage',
    cat: 'Color Grading',
    desc: 'From flat log footage to a rich cinematic grade. LUT design, node-based grading workflows, and final delivery across multiple output formats.',
    tags: ['Color Grading', 'LUT Design', 'Premiere Pro', 'DaVinci Resolve'],
    img: 'assets/project-color-grading-raw-footage.jpg',
    link: null
  },
  {
    index: 4, category: 'editing',
    title: 'Urgent Course Reel',
    cat: 'Reel Editing',
    desc: 'Fast-turnaround reel edit built for social-first distribution. Pacing-driven cut structure designed to retain viewer attention from the first second.',
    tags: ['Reel Editing', 'Fast Turnaround', 'Social Media', 'Premiere Pro'],
    img: 'assets/project-urgent-course-reel.jpg',
    link: null
  },
  {
    index: 5, category: 'editing',
    title: 'Waraha Hekaya — Editor',
    cat: 'Long-Form Editing',
    desc: 'Long-form storytelling edit for a narrative project. Scene sequencing, pacing decisions, and continuity work across an extended production.',
    tags: ['Long-Form', 'Storytelling', 'Scene Sequencing', 'Premiere Pro'],
    img: 'assets/project-waraha-hekaya-editor.jpg',
    link: null
  },
  {
    index: 6, category: 'threeD',
    title: 'Automotive Service Center',
    cat: '3D Visualization',
    desc: 'Full 3D visualization of a branded automotive service space — architectural modeling, photorealistic lighting, material design, and a rendered walkthrough presentation.',
    tags: ['Blender', '3D Modeling', 'Architectural Viz', 'Lighting', 'Rendering'],
    img: 'assets/project-automotive-service-center.jpg',
    link: null
  },
  {
    index: 7, category: 'threeD',
    title: 'Apartment Visualization',
    cat: '3D Interior Design',
    desc: 'Photo-realistic interior rendering for a residential apartment — spatial planning, material work, furniture modeling, and cinematic lighting for client presentation.',
    tags: ['Blender', 'Interior Design', 'Rendering', '3D Modeling', 'Photorealistic'],
    img: 'assets/project-apartment-visualization.jpg',
    link: null
  },
  {
    index: 8, category: 'threeD',
    title: 'Apartment Floor Plan Visualization',
    cat: '3D Architecture',
    desc: 'Technical 3D floor plan for architectural presentation — precise spatial modeling, overhead rendering, and client-ready layout visualization.',
    tags: ['Floor Plan', 'Architecture', '3D Modeling', 'Blender', 'Technical Viz'],
    img: 'assets/project-apartment-floor-plan-visualization.jpg',
    link: null
  },
  {
    index: 9, category: 'ai',
    title: 'ComfyUI AI Animation',
    cat: 'AI Animation',
    desc: 'Custom ComfyUI workflow for AI-driven animation — image-to-video conditioning, iterative prompt engineering, model selection, and post-production refinement.',
    tags: ['ComfyUI', 'AI Animation', 'Image-to-Video', 'Prompt Engineering', 'Post-Production'],
    img: 'assets/project-comfyui-ai-animation.jpg',
    link: null
  },
  {
    index: 10, category: 'ai',
    title: 'AI Building VFX Animation',
    cat: 'AI VFX · Motion',
    desc: 'AI-generated architectural VFX sequence — multi-stage pipeline from prompt planning and image generation through to final composite and motion refinement.',
    tags: ['AI VFX', 'Motion Design', 'ComfyUI', 'Composite', 'Architecture'],
    img: 'assets/project-ai-building-vfx-animation.jpg',
    link: null
  }
];

/* ══════════════════════════════════
   CHAPTER DEFINITIONS
   scrollPct: when to show (0-1)
   hidePct:   when to hide
══════════════════════════════════ */
const CHAPTERS = [
  { id: 'chapterLanding',    show: 0.00, hide: 0.15 },
  { id: 'chapterBrief',      show: 0.15, hide: 0.38 },
  { id: 'chapterWarp',       show: 0.20, hide: 0.38 },
  { id: 'chapterWorkstation',show: 0.38, hide: 0.62 },
  { id: 'chapterMind',       show: 0.62, hide: 0.88 },
  { id: 'chapterSynapse',    show: 0.65, hide: 0.88 },
  { id: 'chapterEye',        show: 0.70, hide: 0.88 },
  { id: 'chapterDone',       show: 0.88, hide: 1.01 }
];

/* ══════════════════════════════════
   DOM REFS
══════════════════════════════════ */
const $  = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);

const introLoader    = $('introLoader');
const loaderRing     = $('loaderRing');
const loaderSub      = $('loaderSub');
const loaderParticles= $('loaderParticles');

/* ══════════════════════════════════
   LOADER BACKGROUND PARTICLES
══════════════════════════════════ */
function spawnLoaderParticles() {
  if (!loaderParticles) return;
  for (let i = 0; i < 35; i++) {
    const p = document.createElement('div');
    p.className = 'loader-particle';
    const x = Math.random() * 100;
    const delay = Math.random() * 3;
    const dur = 2 + Math.random() * 2;
    p.style.cssText = `left:${x}%;bottom:${Math.random()*40}%;--dur:${dur}s;animation-delay:${delay}s;opacity:${0.3+Math.random()*0.7}`;
    loaderParticles.appendChild(p);
  }
}
spawnLoaderParticles();
const mainNav        = $('mainNav');
const scrollProgress = $('scrollProgress');
const cinematicHero  = $('cinematicHero');
const canvasContainer= $('canvasContainer');
const filmCanvas     = $('webglCanvas'); // Select new WebGL canvas
const soundFab       = $('soundFab');
const soundIcon      = $('soundIcon');
const navHamburger   = $('navHamburger');
const mobileMenu     = $('mobileMenu');
const projectsGrid   = $('projectsGrid');
const modalBackdrop  = $('modalBackdrop');
const projectModal   = $('projectModal');
const modalClose     = $('modalClose');
const orbitTooltip   = $('orbitTooltip');
const footerYear     = $('footerYear');
const cursorOuter    = $('cursorOuter');
const cursorInner    = $('cursorInner');
const cursorTrail    = $('cursorTrail');

/* ══════════════════════════════════
   STATE
══════════════════════════════════ */
let videoReady    = false;
let soundEnabled  = false;
let audioCtx      = null;
let ambientSource = null;
let ambientBuffer = null;
let gainNode      = null;
let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;
let outerX = 0, outerY = 0;
let currentFilter = 'all';
let loaderProgress = 0;
let loadingDone = false;
let loaderFallback = null;
let fakeInterval   = null;

/* ══════════════════════════════════
   THREE.JS & WEBGL WORKSTATION ENGINE
══════════════════════════════════ */
let scene, camera, renderer;
let camState = { x: 0, y: 0.5, z: 5.5, tx: 0, ty: -0.2, tz: 0 };
let keysGroup = new THREE.Group();
let deskMesh;
let fan1, fan2, fan3, rearFan, cpuFan, psuFan, fanBladeMat;
let dustParticles;
let steamParticles = [];
let steamOrigin = new THREE.Vector3(-1.4, -0.58, 0.8);
let deskLightBulb;
let pcRigLight;

// Interactive clickable objects & their click-state
let mugGroup, mugLiquid, lampGroup, bulbGlow;
let speakerL, speakerR, mouseGroup, pcGroup;
let mugState  = { clicks: 0, broken: false };
let lampState = { clicks: 0, broken: false, flickering: false };
let lampFlickerInterval = null;
// Notebook (interactive ink) + RGB accents
let notepadMesh, notepadCanvas, notepadCtx, notepadTexture;
let todoCanvas, todoCtx, todoTexture;
let notepadLast = null;
let isDrawingNote = false;
let noteHasDrawing = false;
let noteAttachEnabled = true;
let suppressNextClick = false;
let fanRings = [];
let speakerRings = [];
// procedural parts we hide once the real GLB models load
let kbBase, kbDeckPlate, kbGlow, knob, knobTop, radFanA, radFanB;

// Dynamic Screen Canvases & Textures
let canvasLeft, ctxLeft, textureLeft;
let canvasCenter, ctxCenter, textureCenter;
let canvasRight, ctxRight, textureRight;

// Parallax parameters
let mouseParallaxX = 0, mouseParallaxY = 0;
let tiltParallaxX = 0, tiltParallaxY = 0;
let tiltTargetX = 0, tiltTargetY = 0;
let isMobileDevice = false;
let scrollProgressPct = 0;

// Initialize canvases
function initScreenCanvases() {
  canvasLeft = document.createElement('canvas');
  canvasLeft.width = 512;
  canvasLeft.height = 384;
  ctxLeft = canvasLeft.getContext('2d');

  canvasCenter = document.createElement('canvas');
  canvasCenter.width = 1024;
  canvasCenter.height = 576;
  ctxCenter = canvasCenter.getContext('2d');

  canvasRight = document.createElement('canvas');
  canvasRight.width = 512;
  canvasRight.height = 1024;
  ctxRight = canvasRight.getContext('2d');

  textureLeft = new THREE.CanvasTexture(canvasLeft);
  textureCenter = new THREE.CanvasTexture(canvasCenter);
  textureRight = new THREE.CanvasTexture(canvasRight);

  drawLeftScreen(0);
  drawCenterScreen(0);
  drawRightScreen(0);
}

// 1. Draw Left Screen: After Effects Workspace & Looping Motion Graphic
function drawLeftScreen(progress) {
  ctxLeft.fillStyle = '#1c1c1c';
  ctxLeft.fillRect(0, 0, 512, 384);

  // Menu bar
  ctxLeft.fillStyle = '#131313';
  ctxLeft.fillRect(0, 0, 512, 22);
  ctxLeft.fillStyle = '#8e8e8e';
  ctxLeft.font = '9px "Space Mono", monospace';
  ctxLeft.fillText("After Effects 2026 - Composition: Workstation_Intro", 12, 14);

  // Left layer panel (Composition Panel)
  ctxLeft.fillStyle = '#181818';
  ctxLeft.fillRect(6, 28, 148, 196);
  ctxLeft.strokeStyle = '#2d2d2d';
  ctxLeft.strokeRect(6, 28, 148, 196);
  
  ctxLeft.font = '7px sans-serif';
  const layers = ["◇ Text Logo", "◇ Camera Tracker", "◇ Particle System", "◇ Adjustment Layer", "◇ Background Grid"];
  const layerColors = ["#b39ddb", "#90caf9", "#ffcc80", "#a5d6a7", "#ef9a9a"];
  layers.forEach((l, idx) => {
    ctxLeft.fillStyle = 'rgba(255,255,255,0.02)';
    ctxLeft.fillRect(10, 42 + idx*18, 140, 15);
    ctxLeft.fillStyle = layerColors[idx];
    ctxLeft.fillRect(13, 46 + idx*18, 4, 7); // color label
    ctxLeft.fillStyle = '#aaa';
    ctxLeft.fillText(l, 22, 53 + idx*18);
  });

  // Viewport (Center monitor preview window)
  ctxLeft.fillStyle = '#070709';
  ctxLeft.fillRect(160, 28, 346, 196);
  ctxLeft.strokeStyle = '#2d2d2d';
  ctxLeft.strokeRect(160, 28, 346, 196);

  // Viewport Dynamic Text Animation (After Effects Layer Simulation)
  const time = Date.now() * 0.0015;
  const cx = 160 + 346/2;
  const cy = 28 + 196/2;

  // Kinetic typography titles
  const titles = ["EZZ TANTAWY", "VIDEO EDITING", "3D VISUALIZATION", "MOTION GRAPHICS"];
  const titleIdx = Math.floor(time / 2.2) % titles.length;
  const fullText = titles[titleIdx];
  
  // Calculate typing progress
  const wordTime = (time % 2.2);
  let charCount = 0;
  if (wordTime < 1.4) {
    charCount = Math.floor((wordTime / 1.4) * fullText.length);
  } else {
    charCount = fullText.length;
  }
  const displayText = fullText.substring(0, charCount);

  // Draw alignment guides in viewport
  ctxLeft.strokeStyle = 'rgba(255, 140, 0, 0.1)';
  ctxLeft.lineWidth = 0.5;
  ctxLeft.beginPath();
  ctxLeft.moveTo(160, cy); ctxLeft.lineTo(506, cy); // horizontal center
  ctxLeft.moveTo(cx, 28); ctxLeft.lineTo(cx, 224); // vertical center
  ctxLeft.stroke();

  // Draw typing text
  ctxLeft.fillStyle = '#ffffff';
  ctxLeft.font = 'bold 15px "Space Mono", monospace';
  ctxLeft.textAlign = 'center';
  ctxLeft.textBaseline = 'middle';
  
  // Blinking typing cursor
  const cursor = (Math.floor(Date.now() / 250) % 2 === 0) ? "|" : " ";
  ctxLeft.fillText(displayText + cursor, cx, cy);

  // Draw bounding box corners around text to look like AE layer handles!
  const textWidth = ctxLeft.measureText(fullText).width;
  const bx = cx - textWidth / 2 - 10;
  const by = cy - 14;
  const bw = textWidth + 20;
  const bh = 28;

  ctxLeft.strokeStyle = 'rgba(0, 245, 255, 0.45)'; // Cyan AE selection color
  ctxLeft.lineWidth = 0.8;
  ctxLeft.strokeRect(bx, by, bw, bh);

  // Corner handle boxes
  ctxLeft.fillStyle = '#00f5ff';
  ctxLeft.fillRect(bx - 3, by - 3, 6, 6);
  ctxLeft.fillRect(bx + bw - 3, by - 3, 6, 6);
  ctxLeft.fillRect(bx - 3, by + bh - 3, 6, 6);
  ctxLeft.fillRect(bx + bw - 3, by + bh - 3, 6, 6);
  ctxLeft.fillRect(cx - 3, by - 3, 6, 6); // top middle handle
  ctxLeft.fillRect(cx - 3, by + bh - 3, 6, 6); // bottom middle handle
  
  // Anchor point crosshair (classic AE anchor!)
  ctxLeft.strokeStyle = '#00f5ff';
  ctxLeft.beginPath();
  ctxLeft.arc(cx, cy, 5, 0, Math.PI*2);
  ctxLeft.stroke();
  ctxLeft.beginPath();
  ctxLeft.moveTo(cx - 8, cy); ctxLeft.lineTo(cx + 8, cy);
  ctxLeft.moveTo(cx, cy - 8); ctxLeft.lineTo(cx, cy + 8);
  ctxLeft.stroke();

  ctxLeft.textAlign = 'left'; // reset text align
  ctxLeft.textBaseline = 'alphabetic'; // reset baseline

  // Graph/Timeline at bottom
  ctxLeft.fillStyle = '#141414';
  ctxLeft.fillRect(6, 230, 500, 148);
  ctxLeft.strokeStyle = '#2d2d2d';
  ctxLeft.strokeRect(6, 230, 500, 148);

  // Time ruler tick lines
  ctxLeft.strokeStyle = '#252525';
  ctxLeft.lineWidth = 0.5;
  for (let x = 160; x < 500; x += 22) {
    ctxLeft.beginPath();
    ctxLeft.moveTo(x, 230);
    ctxLeft.lineTo(x, 240);
    ctxLeft.stroke();
  }

  // Draw graph editor motion curve
  ctxLeft.strokeStyle = '#4ba3e3';
  ctxLeft.lineWidth = 1.2;
  ctxLeft.beginPath();
  ctxLeft.moveTo(160, 310);
  for (let x = 160; x < 500; x++) {
    const angle = (x - 160) * 0.025 - time;
    const y = 300 + Math.sin(angle) * 25 + Math.cos(angle*2.2) * 10;
    ctxLeft.lineTo(x, y);
  }
  ctxLeft.stroke();

  // Keyframes diamonds
  ctxLeft.fillStyle = '#ff8c00';
  for (let x = 180; x < 500; x += 64) {
    ctxLeft.save();
    ctxLeft.translate(x, 275);
    ctxLeft.rotate(Math.PI / 4);
    ctxLeft.fillRect(-3, -3, 6, 6);
    ctxLeft.restore();
  }

  // Time scrubber line
  const scrubX = 160 + ((time * 18) % 330);
  ctxLeft.strokeStyle = '#ff3b30';
  ctxLeft.lineWidth = 1.2;
  ctxLeft.beginPath();
  ctxLeft.moveTo(scrubX, 230);
  ctxLeft.lineTo(scrubX, 372);
  ctxLeft.stroke();

  textureLeft.needsUpdate = true;
}

// 2. Draw Center Screen: Premiere Pro Workspace
function drawCenterScreen(progress) {
  if (gameActive) return;   // the mini-game owns the centre monitor while running
  ctxCenter.fillStyle = '#1e1e1e';
  ctxCenter.fillRect(0, 0, 1024, 576);

  // Menu bar
  ctxCenter.fillStyle = '#161616';
  ctxCenter.fillRect(0, 0, 1024, 30);
  ctxCenter.fillStyle = '#8e8e8e';
  ctxCenter.font = '11px sans-serif';
  ctxCenter.fillText("File  Edit  Clip  Sequence  Markers  Graphics  Window  Help", 20, 19);
  ctxCenter.fillText("Premiere Pro 2026 - Project: Land of the Brave", 380, 19);

  // Left sidebar project bin
  ctxCenter.fillStyle = '#252525';
  ctxCenter.fillRect(10, 40, 280, 310);
  ctxCenter.strokeStyle = '#2d2d2d';
  ctxCenter.strokeRect(10, 40, 280, 310);
  ctxCenter.fillStyle = '#8e8e8e';
  ctxCenter.font = '10px sans-serif';
  ctxCenter.fillText("Project: Land of the Brave", 20, 56);
  ctxCenter.fillStyle = 'rgba(255, 140, 0, 0.15)';
  ctxCenter.fillRect(20, 70, 16, 12); // folder icon
  ctxCenter.fillStyle = '#bbb';
  ctxCenter.fillText("Land_Of_The_Brave_Footage", 44, 80);

  // Preview monitor (Program Monitor)
  ctxCenter.fillStyle = '#0d0d0d';
  ctxCenter.fillRect(300, 40, 714, 310);
  ctxCenter.strokeStyle = '#2d2d2d';
  ctxCenter.strokeRect(300, 40, 714, 310);

  if (progress > 0.88) {
    ctxCenter.fillStyle = '#fff';
    ctxCenter.font = 'bold 36px "Outfit", sans-serif';
    ctxCenter.textAlign = 'center';
    ctxCenter.fillText("The end", 657, 190);
    ctxCenter.textAlign = 'left';
  } else {
    // Grid alignment
    ctxCenter.strokeStyle = 'rgba(255, 140, 0, 0.05)';
    ctxCenter.beginPath();
    ctxCenter.moveTo(657, 40); ctxCenter.lineTo(657, 350);
    ctxCenter.moveTo(300, 195); ctxCenter.lineTo(1014, 195);
    ctxCenter.stroke();
  }

  // Timeline panels
  ctxCenter.fillStyle = '#222222';
  ctxCenter.fillRect(10, 360, 1004, 206);
  ctxCenter.strokeStyle = '#2d2d2d';
  ctxCenter.strokeRect(10, 360, 1004, 206);

  // Track labels
  ctxCenter.fillStyle = '#181818';
  ctxCenter.fillRect(10, 360, 140, 206);
  ctxCenter.fillStyle = '#777';
  ctxCenter.font = '9px sans-serif';
  ctxCenter.fillText("V3 Overlay", 20, 390);
  ctxCenter.fillText("V2 VFX", 20, 420);
  ctxCenter.fillText("V1 Main Cuts", 20, 450);
  ctxCenter.fillText("A1 Audio Mix", 20, 500);

  // Draw colorful cuts on timeline
  const clipWidths = [120, 60, 90, 150, 80, 100, 140];
  const clipColors = ['#e57373', '#ba68c8', '#64b5f6', '#4db6ac', '#81c784', '#ffb74d'];
  let currentX = 160;

  for (let i = 0; i < clipWidths.length; i++) {
    const w = clipWidths[i];
    // Don't draw future clips if progress hasn't reached them
    if (currentX + w * 0.7 > 160 + progress * 800) break;

    ctxCenter.fillStyle = clipColors[i % clipColors.length];
    ctxCenter.fillRect(currentX, 432, w, 24);
    ctxCenter.strokeRect(currentX, 432, w, 24);

    if (i % 2 === 0) {
      ctxCenter.fillStyle = clipColors[(i + 3) % clipColors.length];
      ctxCenter.fillRect(currentX + 15, 402, w * 0.6, 24);
      ctxCenter.strokeRect(currentX + 15, 402, w * 0.6, 24);
    }

    ctxCenter.fillStyle = '#4ba3e3';
    ctxCenter.fillRect(currentX, 482, w, 24);
    ctxCenter.strokeRect(currentX, 482, w, 24);

    currentX += w + 6;
  }

  // Red playhead scrubbing
  const playheadX = 160 + progress * 800;
  ctxCenter.strokeStyle = '#ff3b30';
  ctxCenter.lineWidth = 1.5;
  ctxCenter.beginPath();
  ctxCenter.moveTo(playheadX, 360);
  ctxCenter.lineTo(playheadX, 566);
  ctxCenter.stroke();

  ctxCenter.fillStyle = '#ff3b30';
  ctxCenter.beginPath();
  ctxCenter.moveTo(playheadX - 6, 360);
  ctxCenter.lineTo(playheadX + 6, 360);
  ctxCenter.lineTo(playheadX, 370);
  ctxCenter.closePath();
  ctxCenter.fill();

  textureCenter.needsUpdate = true;
}

// 3. Draw Right Screen: Belgrade Tower VFX wireframe & spiral neon
function getBuildingRadius(y) {
  if (y < 120 || y > 800) return 0;
  if (y < 160) {
    const pct = (y - 120) / 40;
    return Math.sqrt(pct) * 50;
  }
  const t = (y - 160) / 680;
  const factor = 1.0 + 0.14 * Math.sin(t * Math.PI * 1.8);
  return (46 + t * 24) * factor;
}

function drawRightScreen(progress) {
  ctxRight.fillStyle = '#1c1c1f';
  ctxRight.fillRect(0, 0, 512, 1024);

  // Viewport box
  ctxRight.fillStyle = '#0a0a0d';
  ctxRight.fillRect(10, 10, 492, 880);
  ctxRight.strokeStyle = '#2d2d32';
  ctxRight.strokeRect(10, 10, 492, 880);

  // Grid floor
  ctxRight.strokeStyle = '#141418';
  ctxRight.lineWidth = 0.5;
  for (let i = 0; i < 492; i += 32) {
    ctxRight.beginPath(); ctxRight.moveTo(10 + i, 10); ctxRight.lineTo(10 + i, 890); ctxRight.stroke();
    ctxRight.beginPath(); ctxRight.moveTo(10, 10 + i); ctxRight.lineTo(502, 10 + i); ctxRight.stroke();
  }

  const cx = 256;
  const time = Date.now() * 0.001 * 1.2;

  // 1. Draw BACK spiral segments (so they appear behind the building)
  ctxRight.lineWidth = 1.8;
  let inBackSegment = false;

  for (let tStep = 0; tStep <= 1.0; tStep += 0.002) {
    const y = 800 - tStep * 660;
    const r = getBuildingRadius(y) + 10;
    const angle = tStep * 7.5 * Math.PI * 2 - time * 3.5;
    const sx = cx + Math.cos(angle) * r;
    const isBack = Math.sin(angle) < 0;

    if (isBack) {
      if (!inBackSegment) {
        ctxRight.beginPath();
        ctxRight.moveTo(sx, y);
        inBackSegment = true;
      } else {
        ctxRight.lineTo(sx, y);
      }
    } else {
      if (inBackSegment) {
        ctxRight.strokeStyle = 'rgba(255, 110, 0, 0.28)';
        ctxRight.stroke();
        inBackSegment = false;
      }
    }
  }
  if (inBackSegment) {
    ctxRight.strokeStyle = 'rgba(255, 110, 0, 0.28)';
    ctxRight.stroke();
  }

  // 2. Draw Building Wireframe
  // Vertical mullion lines
  ctxRight.lineWidth = 0.6;
  ctxRight.strokeStyle = 'rgba(0, 245, 255, 0.16)'; // Cyan wireframe
  for (let c = 0; c < 12; c++) {
    const angleOffset = (c / 12) * Math.PI * 2;
    ctxRight.beginPath();
    for (let y = 800; y >= 120; y -= 10) {
      const r = getBuildingRadius(y);
      const gx = cx + Math.cos(angleOffset) * r;
      if (y === 800) ctxRight.moveTo(gx, y);
      else ctxRight.lineTo(gx, y);
    }
    ctxRight.stroke();
  }

  // Horizontal floor plates (ellipses)
  for (let y = 800; y >= 120; y -= 18) {
    const r = getBuildingRadius(y);
    ctxRight.beginPath();
    ctxRight.ellipse(cx, y, r, r * 0.24, 0, 0, Math.PI * 2);
    ctxRight.strokeStyle = 'rgba(255, 140, 0, 0.22)'; // Orange floors
    ctxRight.stroke();
  }

  // Center vertical core shaft
  ctxRight.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctxRight.strokeRect(cx - 8, 120, 16, 680);

  // 3. Draw FRONT spiral segments (on top of building)
  let inFrontSegment = false;
  for (let tStep = 0; tStep <= 1.0; tStep += 0.002) {
    const y = 800 - tStep * 660;
    const r = getBuildingRadius(y) + 10;
    const angle = tStep * 7.5 * Math.PI * 2 - time * 3.5;
    const sx = cx + Math.cos(angle) * r;
    const isFront = Math.sin(angle) >= 0;

    if (isFront) {
      if (!inFrontSegment) {
        ctxRight.beginPath();
        ctxRight.moveTo(sx, y);
        inFrontSegment = true;
      } else {
        ctxRight.lineTo(sx, y);
      }
    } else {
      if (inFrontSegment) {
        // Neon outer glow stroke
        ctxRight.strokeStyle = 'rgba(255, 110, 0, 0.85)';
        ctxRight.lineWidth = 3.6;
        ctxRight.stroke();
        // Neon inner core stroke
        ctxRight.strokeStyle = '#ffffff';
        ctxRight.lineWidth = 1.0;
        ctxRight.stroke();
        inFrontSegment = false;
      }
    }
  }
  if (inFrontSegment) {
    ctxRight.strokeStyle = 'rgba(255, 110, 0, 0.85)';
    ctxRight.lineWidth = 3.6;
    ctxRight.stroke();
    ctxRight.strokeStyle = '#ffffff';
    ctxRight.lineWidth = 1.0;
    ctxRight.stroke();
  }

  // Workspace Metadata Text overlay
  ctxRight.fillStyle = '#ff8c00';
  ctxRight.font = 'bold 12px "Space Mono", monospace';
  ctxRight.fillText("AI VFX Node - Project Belgrade", 24, 40);
  ctxRight.fillStyle = '#8e8e93';
  ctxRight.fillText("Belgrade_Tower_AI_VFX_Timeline.blend", 24, 60);

  // Telemetry details at bottom panel
  ctxRight.fillStyle = '#0f0f12';
  ctxRight.fillRect(10, 900, 492, 114);
  ctxRight.fillStyle = '#9e9e9e';
  ctxRight.font = '10px "Space Mono", monospace';
  ctxRight.fillText("Render Engine: AI VFX Temporal Flow Pipeline", 24, 928);
  ctxRight.fillText("Verts: 34,921  Edges: 64,802  Faces: 28,109", 24, 952);
  ctxRight.fillText("Tracking Path Node: Spiral_Glow_Orbit (Active)", 24, 976);

  textureRight.needsUpdate = true;
}

// Spawns 3D particle ripples when user clicks on desk/canvas
const ripplesList = [];
function spawn3DRipple(point) {
  const geom = new THREE.SphereGeometry(0.06, 16, 16);
  const mat  = new THREE.MeshBasicMaterial({ color: 0xff8c00, transparent: true, opacity: 0.8 });
  const mesh = new THREE.Mesh(geom, mat);
  mesh.position.copy(point);
  scene.add(mesh);
  ripplesList.push(mesh);

  gsap.to(mesh.scale, { x: 4, y: 4, z: 4, duration: 0.6, ease: "power1.out" });
  gsap.to(mesh.material, {
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
    onComplete: () => {
      const idx = ripplesList.indexOf(mesh);
      if (idx !== -1) ripplesList.splice(idx, 1);
      scene.remove(mesh);
      geom.dispose();
      mat.dispose();
    }
  });
}

/* ══════════════════════════════════
   FLAPPY MINI-GAME (renders on the centre monitor)
   Unlocked by tapping the 3D spacebar 5×
══════════════════════════════════ */
let gameActive = false, spaceClicks = 0, game = null;
let gameHi = parseInt((window.localStorage && localStorage.getItem('flappyHi')) || '0', 10) || 0;
const GAME_BTNS = [];

function startGame() {
  gameActive = true; spaceClicks = 0;
  game = { y: 240, v: 0, pipes: [], t: 0, score: 0, dead: false, started: false };
}
function gameFlap() { if (game && !game.dead) { game.started = true; game.v = -7.2; } }
window.startFlappy = startGame;   // hidden cheat: run startFlappy() in the console
document.addEventListener('keydown', (e) => {
  if (!gameActive) return;
  if (e.key === ' ' || e.code === 'Space') {
    const t = (document.activeElement && document.activeElement.tagName) || '';
    if (t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT') return;
    e.preventDefault();
    gameFlap();
  }
});
function gameOver() {
  if (!game || game.dead) return;
  game.dead = true;
  if (game.score > gameHi) { gameHi = game.score; if (window.localStorage) localStorage.setItem('flappyHi', String(gameHi)); }
}
function endGameToPremiere() {
  gameActive = false; game = null; GAME_BTNS.length = 0;
  drawCenterScreen(scrollProgressPct);
}
function gameClickAt(uv) {
  if (!game) return;
  const x = uv.x * canvasCenter.width, y = (1 - uv.y) * canvasCenter.height;
  if (game.dead) {
    for (const b of GAME_BTNS) {
      if (x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h) {
        if (b.id === 'again') startGame();
        else if (b.id === 'back') endGameToPremiere();
        else if (b.id === 'request') {
          endGameToPremiere();
          const c = document.getElementById('contact');
          if (c) { if (typeof lenis !== 'undefined' && lenis) lenis.scrollTo(c, { offset: -40 }); else c.scrollIntoView({ behavior: 'smooth' }); }
        }
        return;
      }
    }
  } else { gameFlap(); }
}
function gameRoundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}
function drawGame() {
  const ctx = ctxCenter, W = canvasCenter.width, H = canvasCenter.height;
  const TITLE = 50, FLOOR = H - 26, BX = 300, BR = 24;

  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#0a1018'); bg.addColorStop(1, '#0e1622');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = '#11161f'; ctx.fillRect(0, 0, W, TITLE);
  [['#ff5f57', 28], ['#febc2e', 54], ['#28c840', 80]].forEach(([c, x]) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(x, TITLE / 2, 8, 0, Math.PI * 2); ctx.fill(); });
  ctx.fillStyle = '#cfd2d6'; ctx.font = 'bold 17px "Space Mono", monospace'; ctx.textAlign = 'center';
  ctx.fillText('flappy_ezz.exe  —  Premiere Pro stopped responding', W / 2, TITLE / 2 + 6);
  ctx.textAlign = 'left';

  if (game.started && !game.dead) {
    game.t++;
    game.v += 0.42; game.y += game.v;
    if (game.t % 90 === 0) {
      const gap = 172, m = 80;
      const top = TITLE + m + Math.random() * (FLOOR - TITLE - gap - m * 2);
      game.pipes.push({ x: W + 30, top, gap, passed: false });
    }
    game.pipes.forEach(p => p.x -= 3.6);
    game.pipes = game.pipes.filter(p => p.x > -100);
    game.pipes.forEach(p => { if (!p.passed && p.x + 64 < BX) { p.passed = true; game.score++; } });
    if (game.y + BR > FLOOR || game.y - BR < TITLE + 6) gameOver();
    game.pipes.forEach(p => { if (BX + BR > p.x && BX - BR < p.x + 70 && (game.y - BR < p.top || game.y + BR > p.top + p.gap)) gameOver(); });
  }

  game.pipes.forEach(p => {
    const grd = ctx.createLinearGradient(p.x, 0, p.x + 70, 0);
    grd.addColorStop(0, '#ff9a1f'); grd.addColorStop(1, '#cc5500');
    ctx.fillStyle = grd;
    ctx.fillRect(p.x, TITLE, 70, p.top - TITLE);
    ctx.fillRect(p.x, p.top + p.gap, 70, FLOOR - (p.top + p.gap));
    ctx.fillStyle = 'rgba(255,255,255,0.14)';
    ctx.fillRect(p.x - 3, p.top - 16, 76, 16);
    ctx.fillRect(p.x - 3, p.top + p.gap, 76, 16);
  });

  ctx.fillStyle = '#1a2230'; ctx.fillRect(0, FLOOR, W, H - FLOOR);
  ctx.fillStyle = 'rgba(255,140,0,0.5)'; ctx.fillRect(0, FLOOR, W, 3);

  ctx.save();
  ctx.translate(BX, game.y);
  ctx.rotate(Math.max(-0.5, Math.min(1.0, game.v * 0.05)));
  ctx.fillStyle = '#fff'; ctx.strokeStyle = '#ff8c00'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(0, 0, BR, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#ff8c00'; ctx.beginPath(); ctx.moveTo(18, -2); ctx.lineTo(34, 3); ctx.lineTo(18, 9); ctx.fill();
  ctx.fillStyle = '#11161f'; ctx.beginPath(); ctx.arc(9, -8, 4, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  ctx.fillStyle = '#fff'; ctx.font = 'bold 46px "Outfit", sans-serif'; ctx.textAlign = 'center';
  ctx.fillText(String(game.score), W / 2, TITLE + 70);
  if (!game.started && !game.dead) {
    ctx.font = 'bold 26px "Outfit", sans-serif'; ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.fillText('Tap the screen or press Space to fly', W / 2, H / 2 + 90);
  }
  ctx.textAlign = 'left';

  if (game.dead) {
    ctx.fillStyle = 'rgba(6,9,14,0.82)'; ctx.fillRect(0, TITLE, W, H - TITLE);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ff5f57'; ctx.font = 'bold 58px "Outfit", sans-serif';
    ctx.fillText('YOU LOST', W / 2, 160);
    ctx.fillStyle = '#cfd2d6'; ctx.font = '22px "Space Mono", monospace';
    ctx.fillText(`Score ${game.score}   ·   Best ${gameHi}`, W / 2, 206);
    GAME_BTNS.length = 0;
    const opts = [['again', 'Try again'], ['request', 'Realize your vision →'], ['back', 'Back to Premiere']];
    const bw = 380, bh = 54, gp = 16, top0 = 250;
    opts.forEach(([id, text], i) => {
      const bx = W / 2 - bw / 2, y = top0 + i * (bh + gp);
      GAME_BTNS.push({ id, x: bx, y, w: bw, h: bh });
      ctx.fillStyle = id === 'request' ? '#ff8c00' : 'rgba(255,255,255,0.08)';
      gameRoundRect(ctx, bx, y, bw, bh, 12); ctx.fill();
      ctx.strokeStyle = id === 'request' ? '#ff8c00' : 'rgba(255,255,255,0.22)'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = id === 'request' ? '#000' : '#fff'; ctx.font = 'bold 21px "Outfit", sans-serif';
      ctx.fillText(text, W / 2, y + bh / 2 + 7);
    });
    ctx.textAlign = 'left';
  }

  textureCenter.needsUpdate = true;
}

// Procedural image-based-lighting environment (warm studio room) → real reflections
function buildEnvironment(rndr) {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 256;
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, '#2a2622');     // ceiling, warm dark
  g.addColorStop(0.46, '#3a332b');
  g.addColorStop(0.5, '#241d16');   // horizon
  g.addColorStop(1, '#0e0b08');     // floor
  ctx.fillStyle = g; ctx.fillRect(0, 0, 512, 256);
  // warm key softbox (upper-left)
  let rg = ctx.createRadialGradient(150, 66, 8, 150, 66, 185);
  rg.addColorStop(0, 'rgba(255,224,178,0.92)');
  rg.addColorStop(1, 'rgba(255,224,178,0)');
  ctx.fillStyle = rg; ctx.fillRect(0, 0, 512, 256);
  // cool screen fill (right)
  rg = ctx.createRadialGradient(384, 108, 8, 384, 108, 150);
  rg.addColorStop(0, 'rgba(120,160,220,0.35)');
  rg.addColorStop(1, 'rgba(120,160,220,0)');
  ctx.fillStyle = rg; ctx.fillRect(0, 0, 512, 256);
  // cyan rgb spill (low)
  rg = ctx.createRadialGradient(300, 205, 5, 300, 205, 120);
  rg.addColorStop(0, 'rgba(0,200,255,0.16)');
  rg.addColorStop(1, 'rgba(0,200,255,0)');
  ctx.fillStyle = rg; ctx.fillRect(0, 0, 512, 256);

  const tex = new THREE.CanvasTexture(c);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  const pmrem = new THREE.PMREMGenerator(rndr);
  const rt = pmrem.fromEquirectangular(tex);
  tex.dispose();
  pmrem.dispose();
  return rt.texture;
}

// Warm textured plaster wall (procedural, inspired by the reference photo)
function makeWallTexture() {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 576;
  const ctx = c.getContext('2d');

  // base warm vertical gradient
  const base = ctx.createLinearGradient(0, 0, 0, 576);
  base.addColorStop(0, '#241a12');
  base.addColorStop(0.5, '#2f2218');
  base.addColorStop(1, '#1b130c');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 1024, 576);

  // warm light pool from the upper-left (where the lamp sits)
  const glow = ctx.createRadialGradient(300, 200, 30, 300, 200, 640);
  glow.addColorStop(0, 'rgba(156, 108, 60, 0.85)');
  glow.addColorStop(0.4, 'rgba(98, 68, 40, 0.42)');
  glow.addColorStop(1, 'rgba(40, 28, 18, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 1024, 576);

  // fine plaster grain
  for (let i = 0; i < 26000; i++) {
    const x = Math.random() * 1024, y = Math.random() * 576;
    const a = Math.random() * 0.06;
    ctx.fillStyle = Math.random() > 0.5 ? `rgba(255,235,205,${a})` : `rgba(0,0,0,${a})`;
    ctx.fillRect(x, y, 1.4, 1.4);
  }

  // large-scale mottling
  for (let i = 0; i < 60; i++) {
    const x = Math.random() * 1024, y = Math.random() * 576;
    const r = 40 + Math.random() * 130;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, Math.random() > 0.5 ? 'rgba(0,0,0,0.05)' : 'rgba(120,90,60,0.05)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }

  // edge vignette
  const vig = ctx.createRadialGradient(512, 288, 200, 512, 288, 740);
  vig.addColorStop(0, 'rgba(0,0,0,0)');
  vig.addColorStop(1, 'rgba(0,0,0,0.62)');
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, 1024, 576);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// Notepad to-do list (drawn to a canvas texture)
const NOTEPAD_TODO = [
  'Organize and analyze media',
  'Pick main music track',
  'Create first cut',
  'Sync with music',
  'Add VFX',
  'Add motion graphics',
  'Add SFX',
  'Revise',
  'Finalize'
];

function paperFill(ctx, W, H) {
  const paper = ctx.createLinearGradient(0, 0, 0, H);
  paper.addColorStop(0, '#fcf8ee');
  paper.addColorStop(1, '#f2e9d4');
  ctx.fillStyle = paper;
  ctx.fillRect(0, 0, W, H);
  for (let i = 0; i < 1500; i++) {
    ctx.fillStyle = `rgba(120,100,70,${Math.random() * 0.03})`;
    ctx.fillRect(Math.random() * W, Math.random() * H, 1, 1);
  }
}

// Left page — the to-do list
function drawTodoPage() {
  const ctx = todoCtx, W = todoCanvas.width, H = todoCanvas.height;
  paperFill(ctx, W, H);
  ctx.fillStyle = '#2a2a2a';
  ctx.font = 'bold 30px "Space Mono", monospace';
  ctx.fillText('TO-DO', 26, 48);
  ctx.fillStyle = '#a07c34';
  ctx.font = '13px "Space Mono", monospace';
  ctx.fillText('EDIT PIPELINE', 150, 46);
  ctx.strokeStyle = 'rgba(200,70,60,0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(48, 70); ctx.lineTo(48, H - 16); ctx.stroke();
  const top = 96, step = 44;
  ctx.textBaseline = 'middle';
  for (let i = 0; i < NOTEPAD_TODO.length; i++) {
    const y = top + i * step;
    ctx.strokeStyle = 'rgba(70,110,160,0.28)';
    ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.moveTo(16, y + 15); ctx.lineTo(W - 16, y + 15); ctx.stroke();
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 1.8;
    ctx.strokeRect(60, y - 9, 18, 18);
    ctx.fillStyle = '#33312c';
    ctx.font = '18px "Outfit", sans-serif';
    ctx.fillText(NOTEPAD_TODO[i], 90, y);
  }
  ctx.textBaseline = 'alphabetic';
  todoTexture.needsUpdate = true;
}

// Right page — blank, drawable
function drawNotepadBase() {
  const ctx = notepadCtx, W = notepadCanvas.width, H = notepadCanvas.height;
  paperFill(ctx, W, H);
  ctx.strokeStyle = 'rgba(70,110,160,0.16)';
  ctx.lineWidth = 1;
  for (let y = 70; y < H - 18; y += 40) {
    ctx.beginPath(); ctx.moveTo(16, y); ctx.lineTo(W - 16, y); ctx.stroke();
  }
  ctx.fillStyle = 'rgba(120,100,70,0.4)';
  ctx.font = 'italic 14px "Outfit", sans-serif';
  ctx.fillText('notes — tap to write', 22, 40);
  notepadTexture.needsUpdate = true;
}

// Black glossy ink stroke from a raycast UV hit on the right page
function drawNotepadPencil(uv) {
  if (!notepadCtx || !uv) return;
  const x = uv.x * notepadCanvas.width;
  const y = (1 - uv.y) * notepadCanvas.height;
  const ctx = notepadCtx;
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const now = Date.now();
  if (notepadLast && now - notepadLast.t < 1400) {
    ctx.strokeStyle = 'rgba(8,10,20,0.94)';
    ctx.lineWidth = 3.0;
    ctx.beginPath(); ctx.moveTo(notepadLast.x, notepadLast.y); ctx.lineTo(x, y); ctx.stroke();
    // wet-ink highlight (fake specular)
    ctx.strokeStyle = 'rgba(150,170,210,0.32)';
    ctx.lineWidth = 1.0;
    ctx.beginPath(); ctx.moveTo(notepadLast.x - 0.8, notepadLast.y - 0.8); ctx.lineTo(x - 0.8, y - 0.8); ctx.stroke();
  } else {
    ctx.fillStyle = 'rgba(8,10,20,0.94)';
    ctx.beginPath(); ctx.arc(x, y, 2.0, 0, Math.PI * 2); ctx.fill();
  }
  notepadLast = { x, y, t: now };
  notepadTexture.needsUpdate = true;
  noteHasDrawing = true;
}

// Build a cylinder spanning two points (for lamp arms, cables, etc.)
function cylinderBetween(a, b, radius, mat) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, len, 16), mat);
  mesh.position.copy(a).add(b).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  mesh.castShadow = true;
  return mesh;
}

// RGB ring around a front fan; pushes its emissive colour for cycling
function addFanRing(fanGroup) {
  const mat = new THREE.MeshStandardMaterial({ color: 0x00b0ff, emissive: 0x00b0ff, emissiveIntensity: 1.6, roughness: 0.4 });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.118, 0.013, 8, 32), mat);
  ring.rotation.x = Math.PI / 2; // sit in the fan's rim plane
  fanGroup.add(ring);
  fanRings.push(mat.emissive);
}

/* ══════════════════════════════════
   REAL GLB MODELS — replace procedural keyboard / mouse / PC / speaker / lamp.
   Tweak pos / fit / size / rot* here if a model sits or faces wrong.
══════════════════════════════════ */
const MODEL_CONFIG = {
  keyboard: { file: 'Keyboard.glb',  pos: [0, -0.822, 0.85],   fit: 'width',  size: 1.55, rotY: -Math.PI / 2 },
  mouse:    { file: 'mouse.glb',     pos: [1.12, -0.822, 0.86], fit: 'depth',  size: 0.24, rotY: 0, yNudge: 0.004 },
  pc:       { file: 'PC case.glb',   pos: [2.05, -1.81, -0.3],  fit: 'height', size: 1.4,  rotY: -Math.PI / 2, yNudge: -0.05 },
  speaker:  { file: 'speaker.glb',   posL: [-1.0, -0.822, 0.22], posR: [1.0, -0.822, 0.22], fit: 'height', size: 0.42, rotY: -Math.PI / 2 },
  lamp:     { file: 'Desk lamp.glb', pos: [-2.0, -0.822, 1.0],  fit: 'height', size: 0.92, rotY: 0 },
  mug:      { file: 'Mug.glb',       pos: [-1.4, -0.822, 0.8],  fit: 'height', size: 0.28, rotY: 0 }
};

function fitAndPlace(root, cfg, pos) {
  if (cfg.rotX) root.rotation.x = cfg.rotX;
  if (cfg.rotY) root.rotation.y = cfg.rotY;
  if (cfg.rotZ) root.rotation.z = cfg.rotZ;
  root.updateMatrixWorld(true);
  let box = new THREE.Box3().setFromObject(root);
  let sz = box.getSize(new THREE.Vector3());
  const native = cfg.fit === 'height' ? sz.y : cfg.fit === 'width' ? sz.x : cfg.fit === 'depth' ? sz.z : Math.max(sz.x, sz.y, sz.z);
  root.scale.setScalar(cfg.size / (native || 1));
  root.updateMatrixWorld(true);
  box = new THREE.Box3().setFromObject(root);
  const c = box.getCenter(new THREE.Vector3());
  root.position.x += pos[0] - c.x;
  root.position.z += pos[2] - c.z;
  root.position.y += pos[1] - box.min.y;   // seat the base on the surface
  root.position.y += cfg.yNudge || 0;      // manual fine-tune (avoids z-fighting / matches feedback)
  root.traverse(o => {
    if (o.isMesh) {
      o.castShadow = true; o.receiveShadow = true;
      if (o.material) o.material.envMapIntensity = 0.9;
    }
  });
  scene.add(root);
  root.updateMatrixWorld(true); // keep world transforms fresh for any immediate post-placement bbox reads
  return root;
}

function tagPush(root) {
  root.userData.clickKind = 'push';
  root.userData.home = { px: root.position.x, py: root.position.y, pz: root.position.z, rx: root.rotation.x, ry: root.rotation.y, rz: root.rotation.z };
  return root;
}
function disableProc(objs) {
  objs.forEach(o => { if (!o) return; o.visible = false; o.traverse(x => { x.raycast = function () {}; }); });
}

function loadModels() {
  if (typeof THREE.GLTFLoader !== 'function') { console.warn('GLTFLoader missing — keeping procedural props'); return; }
  const loader = new THREE.GLTFLoader();
  const base = '3d models/';
  const get = (cfg, cb) => loader.load(encodeURI(base + cfg.file), cb, undefined, (e) => console.warn('GLB failed:', cfg.file, e));

  get(MODEL_CONFIG.keyboard, (g) => {
    const m = fitAndPlace(g.scene, MODEL_CONFIG.keyboard, MODEL_CONFIG.keyboard.pos);
    m.userData.clickKind = 'keyboard';
    m.userData.home = { py: m.position.y };
    disableProc([keysGroup, kbBase, kbDeckPlate, kbGlow, knob, knobTop]);
  });
  get(MODEL_CONFIG.mouse, (g) => {
    tagPush(fitAndPlace(g.scene, MODEL_CONFIG.mouse, MODEL_CONFIG.mouse.pos));
    disableProc([mouseGroup]);
  });
  get(MODEL_CONFIG.pc, (g) => {
    tagPush(fitAndPlace(g.scene, MODEL_CONFIG.pc, MODEL_CONFIG.pc.pos));
    disableProc([pcGroup, fan1, fan2, fan3, radFanA, radFanB]);
    if (pcRigLight) pcRigLight.intensity = 1.4;
  });
  get(MODEL_CONFIG.speaker, (g) => {
    const c = MODEL_CONFIG.speaker;
    const right = g.scene.clone(true);
    tagPush(fitAndPlace(g.scene, c, c.posL));
    tagPush(fitAndPlace(right, c, c.posR));
    disableProc([speakerL, speakerR]);
  });
  get(MODEL_CONFIG.lamp, (g) => {
    tagPush(fitAndPlace(g.scene, MODEL_CONFIG.lamp, MODEL_CONFIG.lamp.pos));
    disableProc([lampGroup]);
  });
  get(MODEL_CONFIG.mug, (g) => {
    const root = fitAndPlace(g.scene, MODEL_CONFIG.mug, MODEL_CONFIG.mug.pos);
    root.userData.clickKind = 'mug';
    root.userData.home = {
      px: root.position.x, py: root.position.y, pz: root.position.z,
      rx: root.rotation.x, ry: root.rotation.y, rz: root.rotation.z
    };
    // The mug's two meshes are both named "...Coffee_0_*" — the liquid surface is
    // the flat one (near-zero local bbox height); the body is the tall one. Find it
    // by shape rather than name so the steam origin tracks the real coffee surface.
    let coffeeMesh = null, flattest = Infinity;
    root.traverse(o => {
      if (o.isMesh) {
        const b = new THREE.Box3().setFromObject(o);
        const h = b.max.y - b.min.y;
        if (h < flattest) { flattest = h; coffeeMesh = o; }
      }
    });
    if (coffeeMesh) {
      mugLiquid = coffeeMesh; // clickMug()'s break-fade now targets the real coffee surface
      const cb = new THREE.Box3().setFromObject(coffeeMesh);
      steamOrigin.set((cb.min.x + cb.max.x) / 2, cb.max.y, (cb.min.z + cb.max.z) / 2);
    }
    disableProc([mugGroup]);
  });
}

// Setup the entire Three.js scene
function initThree() {
  initScreenCanvases();

  const width  = filmCanvas.clientWidth;
  const height = filmCanvas.clientHeight;

  renderer = new THREE.WebGLRenderer({ canvas: filmCanvas, antialias: true, alpha: false });
  renderer.setSize(width, height, false);
  const lowPower = !!(window.matchMedia && window.matchMedia('(max-width: 768px)').matches);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPower ? 1.4 : 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.physicallyCorrectLights = true;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x140f0b);          // warm dark room
  scene.fog = new THREE.FogExp2(0x120d09, 0.058);        // slightly denser → wall recedes
  scene.environment = buildEnvironment(renderer);        // image-based reflections

  // Warm textured plaster wall behind the desk (dimmed so focus stays on the monitors)
  const wallMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(46, 26),
    new THREE.MeshBasicMaterial({ map: makeWallTexture(), color: 0x565049 })
  );
  wallMesh.position.set(-1.0, 2.4, -7.2);
  scene.add(wallMesh);

  camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
  camera.position.set(camState.x, camState.y, camState.z);

  // ── 3D OBJECTS CONSTRUCTED FROM SCRATCH ──

  // A. Desk
  const deskGeom = new THREE.BoxGeometry(6.4, 0.15, 3.4);
  const deskMat  = new THREE.MeshPhysicalMaterial({
    color: 0x3a2416,            // richer warm walnut
    roughness: 0.4,
    metalness: 0.0,
    clearcoat: 0.85,           // lacquered finish
    clearcoatRoughness: 0.12,
    reflectivity: 0.55
  });
  deskMesh = new THREE.Mesh(deskGeom, deskMat);
  deskMesh.position.set(0, -0.9, 0);
  deskMesh.receiveShadow = true;
  deskMesh.castShadow = true;
  scene.add(deskMesh);

  // Desk legs (cylinders)
  const legGeom = new THREE.CylinderGeometry(0.05, 0.05, 1.8);
  const legMat  = new THREE.MeshPhysicalMaterial({ color: 0x0a0a0a, metalness: 0.95, roughness: 0.15, clearcoat: 0.3 });
  const legPos = [
    [-3.0, -1.8, -1.4],
    [3.0, -1.8, -1.4],
    [-3.0, -1.8, 1.4],
    [3.0, -1.8, 1.4]
  ];
  legPos.forEach(pos => {
    const leg = new THREE.Mesh(legGeom, legMat);
    leg.position.set(pos[0], pos[1], pos[2]);
    leg.castShadow = true;
    scene.add(leg);
  });

  // B. Three-Monitor Setup
  const frameMat = new THREE.MeshPhysicalMaterial({ color: 0x0e0e0e, roughness: 0.55, metalness: 0.05, clearcoat: 0.15, clearcoatRoughness: 0.6 });
  const standMat = new THREE.MeshPhysicalMaterial({ color: 0xb8b8b8, metalness: 0.95, roughness: 0.18, clearcoat: 0.4, clearcoatRoughness: 0.08 });

  // 1. Left Monitor (Landscape, Angled)
  const leftGroup = new THREE.Group();
  leftGroup.position.set(-1.8, 0.0, 0.2);
  leftGroup.rotation.y = Math.PI / 6;

  const leftFrame = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.0, 0.08), frameMat);
  leftFrame.castShadow = true;
  leftGroup.add(leftFrame);

  const leftScreen = new THREE.Mesh(new THREE.BoxGeometry(1.54, 0.94, 0.02), new THREE.MeshBasicMaterial({ map: textureLeft }));
  leftScreen.position.z = 0.035;
  leftGroup.add(leftScreen);

  const leftStand = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.8), standMat);
  leftStand.position.set(0, -0.525, -0.1);
  leftStand.castShadow = true;
  leftGroup.add(leftStand);

  const leftBase = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.02, 0.2), standMat);
  leftBase.position.set(0, -0.925, -0.1);
  leftBase.castShadow = true;
  leftGroup.add(leftBase);

  scene.add(leftGroup);

  // 2. Center Monitor (Widescreen, Flat)
  const centerGroup = new THREE.Group();
  centerGroup.position.set(0, 0.2, -0.2);

  const centerFrame = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.45, 0.08), frameMat);
  centerFrame.castShadow = true;
  centerGroup.add(centerFrame);

  const centerScreen = new THREE.Mesh(new THREE.BoxGeometry(2.44, 1.39, 0.02), new THREE.MeshBasicMaterial({ map: textureCenter }));
  centerScreen.position.z = 0.035;
  centerGroup.add(centerScreen);

  const centerStand = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.0), standMat);
  centerStand.position.set(0, -0.675, -0.1);
  centerStand.castShadow = true;
  centerGroup.add(centerStand);

  const centerBase = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.02, 0.25), standMat);
  centerBase.position.set(0, -1.175, -0.1);
  centerBase.castShadow = true;
  centerGroup.add(centerBase);

  scene.add(centerGroup);

  // 3. Right Monitor (Portrait, Angled)
  const rightGroup = new THREE.Group();
  rightGroup.position.set(1.9, 0.5, 0.1);
  rightGroup.rotation.y = -Math.PI / 8;

  const rightFrame = new THREE.Mesh(new THREE.BoxGeometry(1.15, 2.05, 0.08), frameMat);
  rightFrame.castShadow = true;
  rightGroup.add(rightFrame);

  const rightScreen = new THREE.Mesh(new THREE.BoxGeometry(1.09, 1.99, 0.02), new THREE.MeshBasicMaterial({ map: textureRight }));
  rightScreen.position.z = 0.035;
  rightGroup.add(rightScreen);

  const rightStand = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.3), standMat);
  rightStand.position.set(0, -0.95, -0.1);
  rightStand.castShadow = true;
  rightGroup.add(rightStand);

  const rightBase = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.02, 0.25), standMat);
  rightBase.position.set(0, -1.595, -0.1);
  rightBase.castShadow = true;
  rightGroup.add(rightBase);

  scene.add(rightGroup);

  // C. Wireless mechanical keyboard — sculpted PBT keycaps, bevelled case, volume knob, RGB underglow
  const kbCaseMat = new THREE.MeshPhysicalMaterial({ color: 0xdedde3, roughness: 0.5, metalness: 0.2, clearcoat: 0.3, clearcoatRoughness: 0.3, envMapIntensity: 0.8 });
  const kbDeckMat = new THREE.MeshPhysicalMaterial({ color: 0x202024, roughness: 0.55, metalness: 0.4, envMapIntensity: 0.6 });

  kbBase = new THREE.Mesh(new THREE.BoxGeometry(1.62, 0.06, 0.62), kbCaseMat);
  kbBase.position.set(0, -0.808, 0.8);
  kbBase.receiveShadow = true; kbBase.castShadow = true;
  scene.add(kbBase);
  kbDeckPlate = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.02, 0.52), kbDeckMat);
  kbDeckPlate.position.set(0, -0.778, 0.8);
  kbDeckPlate.receiveShadow = true;
  scene.add(kbDeckPlate);

  // RGB underglow strip (front edge) — cycles with the rig RGB
  kbGlow = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.012, 0.012), new THREE.MeshStandardMaterial({ color: 0x00b0ff, emissive: 0x00b0ff, emissiveIntensity: 1.6, roughness: 0.3 }));
  kbGlow.position.set(0, -0.83, 1.11);
  scene.add(kbGlow);
  fanRings.push(kbGlow.material.emissive);

  // volume knob (top-right, metallic)
  knob = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.05, 24), new THREE.MeshPhysicalMaterial({ color: 0x3a3a40, roughness: 0.35, metalness: 0.9, clearcoat: 0.4, envMapIntensity: 1.0 }));
  knob.position.set(0.74, -0.76, 0.62);
  knob.castShadow = true;
  scene.add(knob);
  knobTop = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.004, 24), new THREE.MeshStandardMaterial({ color: 0x111114, roughness: 0.5 }));
  knobTop.position.set(0.74, -0.733, 0.62);
  scene.add(knobTop);

  // sculpted keycaps (4-sided tapered prisms = PBT keycap shape)
  const keyMatWhite = new THREE.MeshPhysicalMaterial({ color: 0xeceae6, roughness: 0.6, metalness: 0.0, clearcoat: 0.18, clearcoatRoughness: 0.5, envMapIntensity: 0.4 });
  const keyMatGrey  = new THREE.MeshPhysicalMaterial({ color: 0x9a9aa2, roughness: 0.6, metalness: 0.0, clearcoat: 0.18, clearcoatRoughness: 0.5, envMapIntensity: 0.4 });
  const keyMatDark  = new THREE.MeshPhysicalMaterial({ color: 0x35353c, roughness: 0.6, metalness: 0.0, clearcoat: 0.18, clearcoatRoughness: 0.5, envMapIntensity: 0.4 });
  const keyMatAmber = new THREE.MeshStandardMaterial({ color: 0xff8c00, emissive: 0xff6a00, emissiveIntensity: 0.5, roughness: 0.45 });
  const capGeo = new THREE.CylinderGeometry(0.034, 0.0424, 0.034, 4);

  keysGroup.position.set(-0.63, -0.766, 0.62);
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 15; c++) {
      if (r === 4) {
        if (c === 5) {
          const sb = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.032, 0.058), keyMatWhite);
          sb.position.set(7 * 0.09, 0, r * 0.08); sb.castShadow = true; sb.userData.isSpace = true; keysGroup.add(sb);
        }
        if (c >= 5 && c <= 9) continue;
      }
      let mat = keyMatWhite;
      if ((c === 0 && r === 0) || c === 14 || (c === 13 && r === 4)) mat = keyMatAmber;
      else if (r === 0 || c === 0) mat = keyMatDark;
      else if ((r + c) % 5 === 0) mat = keyMatGrey;
      const key = new THREE.Mesh(capGeo, mat);
      key.position.set(c * 0.09, 0, r * 0.08);
      key.rotation.y = Math.PI / 4;
      key.castShadow = true;
      keysGroup.add(key);
    }
  }
  scene.add(keysGroup);

  // Mouse (Refined with wheel)
  mouseGroup = new THREE.Group();
  mouseGroup.position.set(1.1, -0.825, 0.8);
  
  const mouseBody = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.05, 0.22), frameMat);
  mouseBody.position.y = 0.025;
  mouseBody.castShadow = true;
  mouseGroup.add(mouseBody);

  const mouseWheel = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.03, 0.04), keyMatAmber);
  mouseWheel.position.set(0, 0.05, -0.05);
  mouseWheel.castShadow = true;
  mouseGroup.add(mouseWheel);
  scene.add(mouseGroup);

  // D. Small Desk Speakers (with detailed speaker cones)
  const speakerGeom = new THREE.BoxGeometry(0.24, 0.4, 0.24);
  speakerL = new THREE.Mesh(speakerGeom, frameMat);
  speakerL.position.set(-1.0, -0.62, 0.2);
  speakerL.castShadow = true;
  
  const coneMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.92, metalness: 0.05 });
  const tweeterL = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.005, 12), coneMat);
  tweeterL.position.set(0, 0.1, 0.121);
  tweeterL.rotation.x = Math.PI / 2;
  speakerL.add(tweeterL);

  const wooferL = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.005, 12), coneMat);
  wooferL.position.set(0, -0.08, 0.121);
  wooferL.rotation.x = Math.PI / 2;
  speakerL.add(wooferL);

  const spkRingL = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.008, 8, 28), new THREE.MeshStandardMaterial({ color: 0x00b0ff, emissive: 0x00b0ff, emissiveIntensity: 1.5, roughness: 0.4 }));
  spkRingL.position.set(0, -0.08, 0.122);
  speakerL.add(spkRingL);
  speakerRings.push(spkRingL.material.emissive);
  scene.add(speakerL);

  speakerR = new THREE.Mesh(speakerGeom, frameMat);
  speakerR.position.set(1.0, -0.62, 0.2);
  speakerR.castShadow = true;
  
  const tweeterR = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.005, 12), coneMat);
  tweeterR.position.set(0, 0.1, 0.121);
  tweeterR.rotation.x = Math.PI / 2;
  speakerR.add(tweeterR);

  const wooferR = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.005, 12), coneMat);
  wooferR.position.set(0, -0.08, 0.121);
  wooferR.rotation.x = Math.PI / 2;
  speakerR.add(wooferR);

  const spkRingR = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.008, 8, 28), new THREE.MeshStandardMaterial({ color: 0x00b0ff, emissive: 0x00b0ff, emissiveIntensity: 1.5, roughness: 0.4 }));
  spkRingR.position.set(0, -0.08, 0.122);
  speakerR.add(spkRingR);
  speakerRings.push(spkRingR.material.emissive);
  scene.add(speakerR);

  // (speaker wash point lights removed for perf — emissive rings still cycle RGB)

  // E. Articulated desk lamp — arm meets the shade cap, bulb inside the mouth, light straight down
  lampGroup = new THREE.Group();
  lampGroup.position.set(-2.0, -0.825, 1.0);

  const lampMetal = new THREE.MeshPhysicalMaterial({ color: 0x26262b, roughness: 0.38, metalness: 0.85, clearcoat: 0.3, clearcoatRoughness: 0.25, envMapIntensity: 0.9 });
  const lampMatte = new THREE.MeshPhysicalMaterial({ color: 0x161618, roughness: 0.6, metalness: 0.4, clearcoat: 0.2, envMapIntensity: 0.5 });
  const jointMat  = new THREE.MeshPhysicalMaterial({ color: 0x0e0e10, roughness: 0.35, metalness: 0.9, envMapIntensity: 0.8 });

  const baseDisc = new THREE.Mesh(new THREE.CylinderGeometry(0.135, 0.145, 0.028, 40), lampMetal);
  baseDisc.position.set(0, 0.014, 0); baseDisc.castShadow = true; baseDisc.receiveShadow = true; lampGroup.add(baseDisc);
  const baseRim = new THREE.Mesh(new THREE.TorusGeometry(0.135, 0.01, 12, 40), jointMat);
  baseRim.rotation.x = Math.PI / 2; baseRim.position.set(0, 0.028, 0); lampGroup.add(baseRim);
  const baseDome = new THREE.Mesh(new THREE.SphereGeometry(0.05, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), lampMetal);
  baseDome.position.set(0, 0.028, 0); lampGroup.add(baseDome);

  // jointed arm reaching out over the notebook
  const j0 = new THREE.Vector3(0, 0.06, 0);
  const j1 = new THREE.Vector3(0.30, 0.46, 0.02);   // elbow
  const j2 = new THREE.Vector3(0.72, 0.70, 0.05);   // head joint = top cap of the shade
  [j0, j1, j2].forEach(j => { const s = new THREE.Mesh(new THREE.SphereGeometry(0.026, 16, 12), jointMat); s.position.copy(j); lampGroup.add(s); });
  lampGroup.add(cylinderBetween(j0, j1, 0.016, lampMetal));
  lampGroup.add(cylinderBetween(j1, j2, 0.014, lampMetal));

  for (let i = 0; i < 6; i++) {
    const p = new THREE.Vector3().lerpVectors(j0, j1, 0.15 + (i / 6) * 0.7);
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.004, 8, 16), jointMat);
    coil.position.copy(p); coil.rotation.x = Math.PI / 2 - 0.2;
    lampGroup.add(coil);
  }

  // conical shade — cap sits AT the joint, cone opens straight down
  const lampHead = new THREE.Group();
  lampHead.position.copy(j2);
  lampHead.rotation.z = -0.1;
  const shadeOuter = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.135, 0.16, 30, 1, true), lampMatte);
  shadeOuter.position.y = -0.08; shadeOuter.castShadow = true; lampHead.add(shadeOuter);
  const shadeInner = new THREE.Mesh(new THREE.CylinderGeometry(0.046, 0.129, 0.155, 30, 1, true), new THREE.MeshStandardMaterial({ color: 0xfff0d6, roughness: 0.3, metalness: 0.6, side: THREE.BackSide, emissive: 0x553311, emissiveIntensity: 0.4 }));
  shadeInner.position.y = -0.08; lampHead.add(shadeInner);
  const shadeCap = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.052, 0.022, 30), lampMatte);
  shadeCap.position.y = 0.0; lampHead.add(shadeCap);
  // warm bulb just inside the shade mouth
  bulbGlow = new THREE.Mesh(new THREE.SphereGeometry(0.032, 16, 12), new THREE.MeshBasicMaterial({ color: 0xfff0cc }));
  bulbGlow.position.set(0, -0.11, 0); lampHead.add(bulbGlow);
  lampGroup.add(lampHead);

  scene.add(lampGroup);

  // Spotlight from the bulb, straight down onto the notebook pool (no shadow → perf)
  deskLightBulb = new THREE.SpotLight(0xffd9ad, 14.0, 6, Math.PI / 6, 0.5, 1.4);
  deskLightBulb.position.set(-1.28, -0.235, 1.05);
  deskLightBulb.target.position.set(-1.2, -0.95, 1.1);
  deskLightBulb.castShadow = false;
  scene.add(deskLightBulb);
  scene.add(deskLightBulb.target);

  // E2. Open notebook on the desk under the lamp — left page = to-do, right page = blank/drawable
  const notebookGroup = new THREE.Group();
  notebookGroup.position.set(-1.18, -0.818, 1.12);
  notebookGroup.rotation.x = -Math.PI / 2;  // lie flat, pages facing up
  notebookGroup.rotation.z = 0.08;          // slight natural yaw on the desk

  const coverMat = new THREE.MeshPhysicalMaterial({ color: 0x1c2230, roughness: 0.55, metalness: 0.1, clearcoat: 0.4, clearcoatRoughness: 0.3, envMapIntensity: 0.6 });
  const cover = new THREE.Mesh(new THREE.BoxGeometry(0.70, 0.46, 0.022), coverMat);
  cover.position.set(0, 0, -0.014);
  cover.castShadow = true; cover.receiveShadow = true;
  notebookGroup.add(cover);

  const pageMatBase = { roughness: 0.82, metalness: 0.0, clearcoat: 0.22, clearcoatRoughness: 0.4, envMapIntensity: 0.4 };

  // left page: to-do list
  todoCanvas = document.createElement('canvas'); todoCanvas.width = 384; todoCanvas.height = 504;
  todoCtx = todoCanvas.getContext('2d');
  todoTexture = new THREE.CanvasTexture(todoCanvas);
  drawTodoPage();
  const leftPage = new THREE.Mesh(new THREE.PlaneGeometry(0.32, 0.42), new THREE.MeshPhysicalMaterial({ map: todoTexture, ...pageMatBase }));
  leftPage.position.set(-0.165, 0, 0.002);
  leftPage.receiveShadow = true;
  notebookGroup.add(leftPage);

  // right page: blank, drawable with ink
  notepadCanvas = document.createElement('canvas'); notepadCanvas.width = 384; notepadCanvas.height = 504;
  notepadCtx = notepadCanvas.getContext('2d');
  notepadTexture = new THREE.CanvasTexture(notepadCanvas);
  drawNotepadBase();
  notepadMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.32, 0.42), new THREE.MeshPhysicalMaterial({ map: notepadTexture, ...pageMatBase }));
  notepadMesh.position.set(0.165, 0, 0.002);
  notepadMesh.receiveShadow = true;
  notepadMesh.userData.clickKind = 'notepad';
  notebookGroup.add(notepadMesh);

  // spiral binding rings down the middle
  const ringMat = new THREE.MeshStandardMaterial({ color: 0xcfd2d6, roughness: 0.3, metalness: 0.9, envMapIntensity: 0.9 });
  for (let i = 0; i < 9; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.012, 0.0035, 8, 16), ringMat);
    ring.position.set(0, 0.19 - i * 0.046, 0.006);
    ring.rotation.y = Math.PI / 2;
    notebookGroup.add(ring);
  }

  scene.add(notebookGroup);

  // F. Computer Tower Custom PC Chassis (Right - Matching Reference Image)
  pcGroup = new THREE.Group();
  pcGroup.position.set(1.85, -1.65, -0.2);

  // White satin case panels — modern, powerful look
  const pcCaseMat = new THREE.MeshPhysicalMaterial({ color: 0xf2f2f4, roughness: 0.45, metalness: 0.1, clearcoat: 0.3, clearcoatRoughness: 0.4 });

  // PSU Shroud base cover (white chassis bottom box)
  const psuShroud = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.35, 1.35), pcCaseMat);
  psuShroud.position.set(0, -0.55, 0);
  psuShroud.castShadow = true;
  psuShroud.receiveShadow = true;
  pcGroup.add(psuShroud);

  // Top panel
  const topPanel = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.08, 1.35), pcCaseMat);
  topPanel.position.set(0, 0.68, 0);
  topPanel.castShadow = true;
  pcGroup.add(topPanel);

  // Rear panel
  const rearPanel = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.3, 0.08), pcCaseMat);
  rearPanel.position.set(0, 0.06, -0.63);
  rearPanel.castShadow = true;
  pcGroup.add(rearPanel);

  // Slim white front frame (open center so the RGB fans show) + metal corner trim
  const frontBarV = new THREE.BoxGeometry(0.06, 1.32, 0.06);
  const frontBarH = new THREE.BoxGeometry(0.84, 0.07, 0.06);
  const fFrameL = new THREE.Mesh(frontBarV, pcCaseMat); fFrameL.position.set(-0.39, 0.06, 0.64); pcGroup.add(fFrameL);
  const fFrameR = new THREE.Mesh(frontBarV, pcCaseMat); fFrameR.position.set(0.39, 0.06, 0.64); pcGroup.add(fFrameR);
  const fFrameT = new THREE.Mesh(frontBarH, pcCaseMat); fFrameT.position.set(0, 0.69, 0.64); pcGroup.add(fFrameT);
  const fFrameB = new THREE.Mesh(frontBarH, pcCaseMat); fFrameB.position.set(0, -0.57, 0.64); pcGroup.add(fFrameB);

  const pcTrimMat = new THREE.MeshPhysicalMaterial({ color: 0xdedee4, roughness: 0.28, metalness: 0.6, clearcoat: 0.5, clearcoatRoughness: 0.18, envMapIntensity: 1.0 });
  const trimGeo = new THREE.BoxGeometry(0.05, 1.34, 0.05);
  [[-0.395, 0.665], [0.395, 0.665], [-0.395, -0.665], [0.395, -0.665]].forEach(([tx, tz]) => {
    const t = new THREE.Mesh(trimGeo, pcTrimMat); t.position.set(tx, 0.06, tz); pcGroup.add(t);
  });
  // vertical RGB accent strip on the front-left corner
  const frontRgb = new THREE.Mesh(new THREE.BoxGeometry(0.012, 1.18, 0.012), new THREE.MeshStandardMaterial({ color: 0x00b0ff, emissive: 0x00b0ff, emissiveIntensity: 1.5, roughness: 0.3 }));
  frontRgb.position.set(-0.36, 0.06, 0.67); pcGroup.add(frontRgb);
  fanRings.push(frontRgb.material.emissive);

  // Right Side cover (Solid metal)
  const rightCover = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.3, 1.3), pcCaseMat);
  rightCover.position.set(0.38, 0.06, 0);
  rightCover.castShadow = true;
  pcGroup.add(rightCover);

  // Wrap-around tempered glass — left side + front
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xaad4ff,
    transparent: true,
    opacity: 0.12,
    roughness: 0.04,
    metalness: 0.0,
    transmission: 0.96,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    reflectivity: 0.9,
    envMapIntensity: 1.0,
    depthWrite: false
  });
  const glassSide = new THREE.Mesh(new THREE.BoxGeometry(0.02, 1.26, 1.26), glassMat);
  glassSide.position.set(-0.385, 0.06, 0.02);
  pcGroup.add(glassSide);
  const glassFront = new THREE.Mesh(new THREE.BoxGeometry(0.72, 1.26, 0.02), glassMat);
  glassFront.position.set(0, 0.06, 0.665);
  pcGroup.add(glassFront);

  // Motherboard on the right inner wall (faces the left glass)
  const moboMat = new THREE.MeshStandardMaterial({ color: 0x111119, roughness: 0.7, metalness: 0.25 });
  const mobo = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.12, 1.12), moboMat);
  mobo.position.set(0.33, 0.1, -0.02);
  pcGroup.add(mobo);

  const darkMetal = new THREE.MeshPhysicalMaterial({ color: 0x17171c, roughness: 0.5, metalness: 0.75, envMapIntensity: 0.7 });
  // VRM / IO heatsinks
  [[0.30, 0.52, -0.30], [0.30, 0.52, 0.30]].forEach(p => {
    const hs = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.32, 0.18), darkMetal);
    hs.position.set(p[0], p[1], p[2]); pcGroup.add(hs);
  });

  // CPU AIO pump block with RGB ring
  const aioPump = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.2, 0.2), darkMetal);
  aioPump.position.set(0.27, 0.34, -0.02); pcGroup.add(aioPump);
  const aioRgb = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.012, 24), new THREE.MeshStandardMaterial({ color: 0x00b0ff, emissive: 0x00b0ff, emissiveIntensity: 1.4, roughness: 0.3 }));
  aioRgb.rotation.z = Math.PI / 2; aioRgb.position.set(0.232, 0.34, -0.02); pcGroup.add(aioRgb);
  fanRings.push(aioRgb.material.emissive);

  // 4 RGB RAM sticks
  for (let i = 0; i < 4; i++) {
    const ramBody = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.3, 0.03), darkMetal);
    ramBody.position.set(0.265, 0.18, 0.10 + i * 0.05); pcGroup.add(ramBody);
    const ramTop = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.022, 0.032), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.2, roughness: 0.3 }));
    ramTop.position.set(0.265, 0.335, 0.10 + i * 0.05); pcGroup.add(ramTop);
    fanRings.push(ramTop.material.emissive);
  }

  // Horizontal GPU: shroud + white backplate + RGB edge + 2 fans
  const gpuShroud = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.12, 0.8), new THREE.MeshPhysicalMaterial({ color: 0x1a1a20, roughness: 0.45, metalness: 0.6, envMapIntensity: 0.7 }));
  gpuShroud.position.set(0.16, -0.18, -0.02); gpuShroud.castShadow = true; pcGroup.add(gpuShroud);
  const gpuBack = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.13, 0.82), pcCaseMat);
  gpuBack.position.set(0.30, -0.18, -0.02); pcGroup.add(gpuBack);
  const gpuRgb = new THREE.Mesh(new THREE.BoxGeometry(0.245, 0.012, 0.02), new THREE.MeshStandardMaterial({ color: 0xff2d75, emissive: 0xff2d75, emissiveIntensity: 1.3, roughness: 0.3 }));
  gpuRgb.position.set(0.16, -0.115, 0.36); pcGroup.add(gpuRgb);
  fanRings.push(gpuRgb.material.emissive);
  [-0.18, 0.16].forEach(zz => {
    const gf = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.012, 20), new THREE.MeshStandardMaterial({ color: 0x0b0b0d, roughness: 0.85 }));
    gf.position.set(0.12, -0.245, zz); pcGroup.add(gf);
  });

  // Braided cables (subtle)
  const cableMat = new THREE.MeshStandardMaterial({ color: 0xe8e8ec, roughness: 0.6, metalness: 0.0 });
  [
    [[0.27, 0.22, 0.06], [0.18, 0.0, 0.2], [0.12, -0.3, 0.34]],
    [[0.27, 0.24, -0.06], [0.2, 0.05, -0.2], [0.14, -0.28, -0.34]]
  ].forEach(pts => {
    const curve = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(p[0], p[1], p[2])));
    const cable = new THREE.Mesh(new THREE.TubeGeometry(curve, 20, 0.012, 8, false), cableMat);
    pcGroup.add(cable);
  });

  // PSU shroud underglow + front power LED
  const psuGlow = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.012, 0.012), new THREE.MeshStandardMaterial({ color: 0x00b0ff, emissive: 0x00b0ff, emissiveIntensity: 1.0, roughness: 0.4 }));
  psuGlow.position.set(0.0, -0.36, 0.5); pcGroup.add(psuGlow);
  fanRings.push(psuGlow.material.emissive);
  const powerLed = new THREE.Mesh(new THREE.SphereGeometry(0.01, 8, 8), new THREE.MeshBasicMaterial({ color: 0x3aa0ff }));
  powerLed.position.set(0.0, -0.55, 0.69); pcGroup.add(powerLed);

  scene.add(pcGroup);

  // Internal lighting — single bright white core (emissive components carry the RGB)
  pcRigLight = new THREE.PointLight(0xffffff, 3.2, 3.0);
  pcRigLight.position.set(1.7, -1.5, -0.1);
  scene.add(pcRigLight);


  // Generic Rig Fan Builder (flat cylinders in XZ plane radiating outwards)
  function createRigFanCustom(shroudColor, bladeColor, bladeOpacity = 0.7) {
    const group = new THREE.Group();
    // Shroud casing with emissive RGB glow
    const isGlowing = shroudColor !== 0x1a1a1a && shroudColor !== 0x2c2c2c;
    const sMat = isGlowing
      ? new THREE.MeshStandardMaterial({ color: shroudColor, emissive: shroudColor, emissiveIntensity: 0.7, transparent: true, opacity: 0.85, roughness: 0.5 })
      : new THREE.MeshPhysicalMaterial({ color: shroudColor, roughness: 0.6, metalness: 0.4 });
    
    const shroud = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.04, 32, 1, true),
      sMat
    );
    group.add(shroud);

    // Hub
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.03, 16), new THREE.MeshPhysicalMaterial({ color: 0x1a1a1a, roughness: 0.4, metalness: 0.7 }));
    group.add(hub);

    // Motion-blurred spin disc layers
    const blurMat1 = new THREE.MeshStandardMaterial({ color: bladeColor, emissive: isGlowing ? shroudColor : 0x000000, emissiveIntensity: 0.2, transparent: true, opacity: bladeOpacity * 0.25 });
    const disc1 = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.005, 24), blurMat1);
    group.add(disc1);

    const blurMat2 = new THREE.MeshStandardMaterial({ color: bladeColor, emissive: isGlowing ? shroudColor : 0x000000, emissiveIntensity: 0.3, transparent: true, opacity: bladeOpacity * 0.4 });
    const disc2 = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.006, 24), blurMat2);
    group.add(disc2);

    const blurMat3 = new THREE.MeshStandardMaterial({ color: bladeColor, emissive: isGlowing ? shroudColor : 0x000000, emissiveIntensity: 0.4, transparent: true, opacity: bladeOpacity * 0.55 });
    const disc3 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.007, 24), blurMat3);
    group.add(disc3);

    // Blurred blade radial streaks
    const streakGeom = new THREE.BoxGeometry(0.006, 0.004, 0.10);
    const streakMat = new THREE.MeshBasicMaterial({ color: bladeColor, transparent: true, opacity: bladeOpacity * 0.2 });
    for (let i = 0; i < 12; i++) {
      const streakHolder = new THREE.Group();
      streakHolder.rotation.y = i * (Math.PI * 2 / 12);
      const streak = new THREE.Mesh(streakGeom, streakMat);
      streak.position.z = 0.05;
      streakHolder.add(streak);
      group.add(streakHolder);
    }

    return group;
  }

  // 1. Front intake fans x3 — white-shining with cycling RGB rings, behind the front glass
  fan1 = createRigFanCustom(0xffffff, 0xffffff, 0.5);
  fan1.position.set(1.85, -1.18, 0.44); fan1.rotation.set(Math.PI / 2, 0, 0);
  scene.add(fan1); addFanRing(fan1);

  fan2 = createRigFanCustom(0xffffff, 0xffffff, 0.5);
  fan2.position.set(1.85, -1.50, 0.44); fan2.rotation.set(Math.PI / 2, 0, 0);
  scene.add(fan2); addFanRing(fan2);

  fan3 = createRigFanCustom(0xffffff, 0xffffff, 0.5);
  fan3.position.set(1.85, -1.82, 0.44); fan3.rotation.set(Math.PI / 2, 0, 0);
  scene.add(fan3); addFanRing(fan3);

  // 2. Top radiator fans x2 — under the top panel, facing down
  radFanA = createRigFanCustom(0xffffff, 0xffffff, 0.45);
  radFanA.position.set(1.72, -1.02, 0.12); scene.add(radFanA); addFanRing(radFanA);
  radFanB = createRigFanCustom(0xffffff, 0xffffff, 0.45);
  radFanB.position.set(1.72, -1.02, -0.18); scene.add(radFanB); addFanRing(radFanB);

  // White glow spilling from the front fans
  const pcFrontLight = new THREE.PointLight(0xffffff, 1.4, 1.9);
  pcFrontLight.position.set(1.85, -1.5, 0.62);
  scene.add(pcFrontLight);

  // G. Coffee Mug on desk (Shifted far left to clear keyboard & speakers)
  const ceramicMat = new THREE.MeshPhysicalMaterial({
    color: 0xf0ebe5,
    roughness: 0.25,
    metalness: 0.0,
    clearcoat: 0.9,
    clearcoatRoughness: 0.06,
    reflectivity: 0.6,
    side: THREE.DoubleSide,
    envMapIntensity: 0.7
  });
  const coffeeMat = new THREE.MeshPhysicalMaterial({
    color: 0x3a2110,
    roughness: 0.08,
    metalness: 0.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    envMapIntensity: 1.0
  });

  // Mug assembled as one group so it can shake / topple as a unit
  mugGroup = new THREE.Group();
  mugGroup.position.set(-1.4, -0.73, 0.8);

  // Hollow ceramic body — lathe profile: outer wall up, over the rim, down the
  // inner wall, across the floor. Genuinely open at the top.
  const mugProfile = [
    [0.001, -0.140], [0.108, -0.140], [0.118, -0.116], [0.119, 0.100],
    [0.118, 0.138], [0.104, 0.140], [0.103, -0.085], [0.094, -0.108], [0.001, -0.108]
  ].map(p => new THREE.Vector2(p[0], p[1]));
  const mugBody = new THREE.Mesh(new THREE.LatheGeometry(mugProfile, 48), ceramicMat);
  mugBody.castShadow = true;
  mugBody.receiveShadow = true;
  mugGroup.add(mugBody);

  // Coffee ~2/3 full: radius inset from the 0.103 inner wall, top well below the
  // 0.14 rim, floor just above the 0.108 inner floor — zero clipping anywhere.
  mugLiquid = new THREE.Mesh(new THREE.CylinderGeometry(0.097, 0.097, 0.17, 40), coffeeMat);
  mugLiquid.position.set(0, -0.022, 0); // surface ≈ y 0.063, floor ≈ -0.107
  mugGroup.add(mugLiquid);

  // Handle sits fully OUTSIDE the wall (inner edge ≈ 0.118 ≥ 0.119 wall) — no interior clipping
  const mugHandle = new THREE.Mesh(new THREE.TorusGeometry(0.072, 0.019, 14, 28), ceramicMat);
  mugHandle.position.set(-0.19, 0.0, 0);
  mugHandle.castShadow = true;
  mugGroup.add(mugHandle);
  // short stubs joining the handle to the outer wall so it reads as attached
  [0.072, -0.072].forEach(yy => {
    const stub = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.09, 12), ceramicMat);
    stub.rotation.z = Math.PI / 2;
    stub.position.set(-0.152, yy, 0);
    mugGroup.add(stub);
  });

  scene.add(mugGroup);

  // Steam particle array — many overlapping, phase-staggered wisps read as one continuous
  // rising trail (hot liquid curls upward steadily) rather than the old discrete "puffs".
  const STEAM_COUNT = 18, STEAM_LIFE = 1700;
  for (let i = 0; i < STEAM_COUNT; i++) {
    const steamPart = new THREE.Mesh(
      new THREE.SphereGeometry(0.01 + Math.random() * 0.006, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 })
    );
    steamPart.scale.set(1, 1.8, 1); // elongated into a soft wisp rather than a round puff
    steamPart.position.copy(steamOrigin);
    scene.add(steamPart);
    steamParticles.push({
      mesh: steamPart,
      life: STEAM_LIFE,
      born: Date.now() - Math.random() * STEAM_LIFE, // staggered phase → continuous from frame 1
      phase: Math.random() * Math.PI * 2,
      driftAmp: 0.016 + Math.random() * 0.018
    });
  }

  // ── REGISTER INTERACTIVE CLICK TARGETS ──
  function tagClickable(root, kind) {
    root.userData.clickKind = kind;
    root.userData.home = {
      px: root.position.x, py: root.position.y, pz: root.position.z,
      rx: root.rotation.x, ry: root.rotation.y, rz: root.rotation.z
    };
  }
  tagClickable(mugGroup, 'mug');
  tagClickable(lampGroup, 'lamp');
  tagClickable(speakerL, 'push');
  tagClickable(speakerR, 'push');
  tagClickable(mouseGroup, 'push');
  leftScreen.userData.clickKind = 'monitor';
  leftScreen.userData.monitor = { w: 1.54, h: 0.94 };
  centerScreen.userData.clickKind = 'monitor';
  centerScreen.userData.monitor = { w: 2.44, h: 1.39 };
  centerScreen.userData.isCenter = true;
  rightScreen.userData.clickKind = 'monitor';
  rightScreen.userData.monitor = { w: 1.09, h: 1.99 };



  // ── CINEMATIC LIGHTING RIG ──

  // 1. Warm ambient base (very low — just prevents pure black)
  const globalAmbient = new THREE.AmbientLight(0x080810, 0.6);
  scene.add(globalAmbient);

  // 2. Key light — warm overhead from upper-left (simulates ceiling studio softbox)
  const keyLight = new THREE.SpotLight(0xffeedd, 15, 18, Math.PI / 5, 0.55, 1.5);
  keyLight.position.set(-2, 4.5, 3);
  keyLight.target = deskMesh;
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = lowPower ? 1024 : 2048;
  keyLight.shadow.mapSize.height = lowPower ? 1024 : 2048;
  keyLight.shadow.bias = -0.0005;
  keyLight.shadow.normalBias = 0.02;
  keyLight.shadow.radius = 4;
  scene.add(keyLight);

  // 3. Fill light — cool blue from right (cinematic contrast)
  const fillLight = new THREE.PointLight(0x4488cc, 3.0, 12);
  fillLight.position.set(3.5, 1.5, 2);
  scene.add(fillLight);

  // 4. Rim light — cyan edge light from behind (separation from background)
  const rimLight = new THREE.SpotLight(0x00ccff, 6.0, 15, Math.PI / 6, 0.7, 1.5);
  rimLight.position.set(0, 2.5, -5);
  rimLight.target = deskMesh;
  scene.add(rimLight);

  // 5. (under-desk bounce fill removed for mobile perf)

  // 6. (Monitor glow planes removed — they rendered as hard-edged dark rectangles behind
  //     the monitors. The emissive screens + IBL provide the bleed instead.)

  // 7. (monitor point lights removed for perf — emissive screens carry the glow)

  // 8. (extra PC RGB point lights removed — pcRigLight + emissive components remain)

  // Shadows floor receiver plane
  const floorGeom = new THREE.PlaneGeometry(30, 30);
  const floorMat  = new THREE.ShadowMaterial({ opacity: 0.7 });
  const floorMesh = new THREE.Mesh(floorGeom, floorMat);
  floorMesh.position.y = -1.81;
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.receiveShadow = true;
  scene.add(floorMesh);

  // ── REFINED DUST PARTICLES ──
  const particleCount = 200;
  const pGeom = new THREE.BufferGeometry();
  const pPositions = new Float32Array(particleCount * 3);
  const pSizes = new Float32Array(particleCount);
  for (let i = 0; i < particleCount; i++) {
    pPositions[i * 3]     = (Math.random() - 0.5) * 10;
    pPositions[i * 3 + 1] = (Math.random() - 0.5) * 5;
    pPositions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    pSizes[i] = 0.008 + Math.random() * 0.02;
  }
  pGeom.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0xffcc88,
    size: 0.015,
    transparent: true,
    opacity: 0.35,
    sizeAttenuation: true
  });
  dustParticles = new THREE.Points(pGeom, pMat);
  scene.add(dustParticles);

  // Setup GSAP Camera Interpolation Timeline — continuous scrub, no snapping.
  // The camera must track scroll position 1:1 (wheel or touch) with zero
  // discrete stops; only the scrub value below adds a touch of smoothing lag.
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cinematic-hero",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        scrollProgressPct = self.progress;
        drawLeftScreen(scrollProgressPct);
        drawCenterScreen(scrollProgressPct);
        drawRightScreen(scrollProgressPct);
      }
    }
  });

  // GSAP interpolates camState coordinates along scroll
  tl.to(camState, { x: -1.4, y: -0.2, z: 2.3, tx: -1.7, ty: -0.4, tz: 0.2, duration: 1.2, ease: "power1.inOut" }) // Focus Left Screen
    .to(camState, { x: -1.05, y: 0.18, z: 1.75, tx: -1.2, ty: -0.95, tz: 1.1, duration: 1.2, ease: "power1.inOut" }) // Look down at the notebook
    .to(camState, { x: 0, y: -0.1, z: 2.1, tx: 0, ty: -0.2, tz: 0, duration: 1.2, ease: "power1.inOut" })       // Focus Center screen
    .to(camState, { x: 1.3, y: -1.2, z: 2.4, tx: 1.8, ty: -1.8, tz: -0.2, duration: 1.2, ease: "power1.inOut" }) // Focus Rig
    .to(camState, { x: 0, y: 0.4, z: 5.3, tx: 0, ty: -0.3, tz: 0, duration: 1.2, ease: "power1.inOut" });       // Pull back wide

  // Ready state trigger
  videoReady = true;
  clearTimeout(loaderFallback);
  clearInterval(fakeInterval);
  progressLoader(100, 'Experience loaded.');

  // Trigger resize once
  resizeCanvas();

  // Run render loop
  requestAnimationFrame(animate);
}

// 3D Animation Render loop
function animate() {
  requestAnimationFrame(animate);

  // Real-time animated screen updates
  drawLeftScreen(scrollProgressPct);
  drawRightScreen(scrollProgressPct);
  if (gameActive) drawGame();



  // 2. Subtle pulse on the white tower core light
  if (pcRigLight) {
    pcRigLight.intensity = 3.2 + Math.sin(Date.now() * 0.002) * 0.5;
  }

  // 2b. RGB cycle for the front fans & speaker accents
  const rgbT = Date.now() * 0.0006;
  for (let i = 0; i < fanRings.length; i++) fanRings[i].setHSL((rgbT + i * 0.12) % 1, 0.95, 0.6);
  for (let i = 0; i < speakerRings.length; i++) speakerRings[i].setHSL((rgbT * 0.8 + i * 0.2 + 0.35) % 1, 0.9, 0.55);

  // 3. Float dust particles
  if (dustParticles) {
    const positions = dustParticles.geometry.attributes.position.array;
    for (let i = 1; i < positions.length; i += 3) {
      positions[i] += 0.002; // Float Y up
      if (positions[i] > 3) {
        positions[i] = -2; // Reset under desk
      }
    }
    dustParticles.geometry.attributes.position.needsUpdate = true;
  }

  // 4. Mug steam — a continuous rising, curling trail (tracks steamOrigin, which the
  //    real GLB mug's coffee surface sets once it loads) instead of discrete puffs.
  steamParticles.forEach(part => {
    if (mugState.broken) { part.mesh.material.opacity = 0; return; }
    const age = Date.now() - part.born;
    if (age > part.life || age < 0) {
      part.born = Date.now();
      part.phase = Math.random() * Math.PI * 2;
      return;
    }
    const t = age / part.life; // 0 → 1 across the rise
    const rise = t * 0.4;
    const sway = Math.sin(t * Math.PI * 2.1 + part.phase) * part.driftAmp * t;
    const drift = Math.cos(t * Math.PI * 1.6 + part.phase) * part.driftAmp * 0.6 * t;
    part.mesh.position.set(steamOrigin.x + sway, steamOrigin.y + rise, steamOrigin.z + drift);
    const growth = 1 + t * 1.7;
    part.mesh.scale.set(growth, growth * 1.8, growth);
    part.mesh.material.opacity = Math.sin(t * Math.PI) * 0.22; // smooth fade in/out, never pops
  });

  // 5. Parallax Camera target calculating
  // smooth gyro toward its target so phone tilt glides instead of snapping
  tiltParallaxX += (tiltTargetX - tiltParallaxX) * 0.05;
  tiltParallaxY += (tiltTargetY - tiltParallaxY) * 0.05;

  let px = 0, py = 0;
  if (isMobileDevice) {
    px = tiltParallaxX;
    py = tiltParallaxY;
  } else {
    px = mouseParallaxX;
    py = mouseParallaxY;
  }

  // Target camera coordinates (interpolated camState + parallax offsets)
  const targetX = camState.x + px;
  const targetY = camState.y + py;
  const targetZ = camState.z;

  camera.position.x += (targetX - camera.position.x) * 0.08;
  camera.position.y += (targetY - camera.position.y) * 0.08;
  camera.position.z += (targetZ - camera.position.z) * 0.08;

  const lookX = camState.tx + px * 0.6;
  const lookY = camState.ty + py * 0.6;
  const lookZ = camState.tz;

  camera.lookAt(lookX, lookY, lookZ);

  renderer.render(scene, camera);
}

// ── PARALLAX LISTENERS ──

// Mouse Movement Listener (Desktop)
document.addEventListener('mousemove', (e) => {
  if (isMobileDevice) return;
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  mouseParallaxX = ((e.clientX - cx) / cx) * 0.45;
  mouseParallaxY = -((e.clientY - cy) / cy) * 0.35;
});

// Device Orientation Listener (Mobile Gyroscope/Accelerometer)
function onDeviceOrientation(e) {
  isMobileDevice = true;
  // beta measures pitch (-180 to 180), gamma measures roll (-90 to 90)
  const beta  = e.beta;  // forward/backward tilt
  const gamma = e.gamma; // left/right tilt

  if (beta === null || gamma === null) return;

  // Clamp and normalize offsets
  const normalBeta  = Math.max(-30, Math.min(30, beta - 45)) / 30; // offset based on standard sitting angle (~45 deg)
  const normalGamma = Math.max(-30, Math.min(30, gamma)) / 30;

  tiltTargetX = normalGamma * 0.22;
  tiltTargetY = -normalBeta * 0.18;
}

// iOS permission requesting on user interaction
function requestGyroPermission() {
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          window.addEventListener('deviceorientation', onDeviceOrientation, true);
        }
      })
      .catch(err => console.log("Orientation permission blocked:", err));
  } else {
    window.addEventListener('deviceorientation', onDeviceOrientation, true);
  }
}

// Bind permission request to interactions
document.addEventListener('click', requestGyroPermission, { once: true });
document.addEventListener('touchstart', requestGyroPermission, { once: true });

// Lenis smooth scroll initialization
let lenis;
function initSmoothScroll() {
  gsap.registerPlugin(ScrollTrigger);
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: true
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}
initSmoothScroll();

// Resize canvas viewport and camera aspect ratio
function resizeCanvas() {
  if (!renderer) return;
  const cw = filmCanvas.clientWidth;
  const ch = filmCanvas.clientHeight;
  renderer.setSize(cw, ch, false);
  applyCameraFraming(cw, ch);
}

// Dynamic framing: on narrow/portrait screens widen the vertical FOV so the desk
// stays fully framed (keeps the horizontal field ~constant) instead of zooming in.
function applyCameraFraming(cw, ch) {
  if (!camera) return;
  const aspect = cw / ch;
  camera.aspect = aspect;
  const baseFov = 42, refAspect = 1.6;
  if (aspect < refAspect) {
    const hFovRef = 2 * Math.atan(Math.tan(baseFov * Math.PI / 360) * refAspect);
    const vFov = 2 * Math.atan(Math.tan(hFovRef / 2) / aspect) * 180 / Math.PI;
    camera.fov = Math.min(vFov, 82);
  } else {
    camera.fov = baseFov;
  }
  camera.updateProjectionMatrix();
}

window.addEventListener('resize', () => {
  resizeCanvas();
});

// Run Three.js initialization when script executes

/* ══════════════════════════════════
   LOADER PROGRESS
══════════════════════════════════ */
const CIRCUMFERENCE = 2 * Math.PI * 54; // r=54

function progressLoader(pct, label) {
  if (loadingDone) return;
  loaderProgress = Math.max(loaderProgress, pct);

  const offset = CIRCUMFERENCE - (loaderProgress / 100) * CIRCUMFERENCE;
  if (loaderRing) loaderRing.style.strokeDashoffset = offset;
  if (loaderSub && label) loaderSub.textContent = label;

  const profilePic = document.querySelector('.loader-profile-pic');
  if (profilePic) {
    profilePic.style.filter = `grayscale(${100 - loaderProgress}%) contrast(1.15) brightness(${0.9 + (loaderProgress / 100) * 0.1})`;
    profilePic.style.opacity = 0.8 + (loaderProgress / 100) * 0.2;
    profilePic.style.transform = `translate(-50%, -50%) scale(${1 + (loaderProgress / 100) * 0.08})`;
  }

  if (loaderProgress >= 100 && !loadingDone) {
    loadingDone = true;
    setTimeout(hideLoader, 600);
  }
}

function hideLoader() {
  if (introLoader) {
    introLoader.classList.add('hidden');
    setTimeout(() => introLoader.remove(), 900);
  }
  // Show first chapter
  activateChapter(0);
}

// Fallback: show site anyway if scene compiling hangs
loaderFallback = setTimeout(() => {
  if (!loadingDone) {
    progressLoader(100, 'Ready.');
  }
}, 6000);

// Loader faux ticking
let fakeProgress = 0;
fakeInterval = setInterval(() => {
  fakeProgress += Math.random() * 8;
  if (fakeProgress >= 70) { clearInterval(fakeInterval); return; }
  progressLoader(fakeProgress, fakeProgress < 30 ? 'Compiling 3D workstation geometries...' : 'Constructing WebGL matrices...');
}, 180);

/* ══════════════════════════════════
   SCROLL ENGINE (Lenis ScrollTrigger)
══════════════════════════════════ */
function onScroll() {
  const hero = cinematicHero;
  if (!hero) return;

  const heroRect  = hero.getBoundingClientRect();
  const heroH     = hero.offsetHeight;
  const viewH     = window.innerHeight;
  const scrolled  = -heroRect.top;
  const scrollPct = Math.max(0, Math.min(1, scrolled / (heroH - viewH)));

  // Scroll progress bar (full page)
  const pageH = document.documentElement.scrollHeight - viewH;
  const pageScrollPct = Math.max(0, Math.min(1, window.scrollY / pageH));
  if (scrollProgress) scrollProgress.style.width = (pageScrollPct * 100) + '%';

  // Chapter overlays
  CHAPTERS.forEach((ch, i) => {
    const el = $(ch.id);
    if (!el) return;
    const visible = scrollPct >= ch.show && scrollPct < ch.hide;
    el.classList.toggle('active', visible);
  });

  // Nav scrolled state
  if (mainNav) mainNav.classList.toggle('scrolled', window.scrollY > 50);

  // Animate warp bar when warp chapter is active
  const warpFill = $('warpBarFill');
  if (warpFill && scrollPct >= 0.20 && scrollPct < 0.38) {
    const warpProgress = (scrollPct - 0.20) / 0.18;
    warpFill.style.width = Math.min(warpProgress * 100, 100) + '%';
  }
}

function activateChapter(index) {
  const ch = CHAPTERS[index];
  if (!ch) return;
  const el = $(ch.id);
  if (el) el.classList.add('active');
}

window.addEventListener('scroll', onScroll, { passive: true });

/* ══════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════ */
function lerp(a, b, t) { return a + (b - a) * t; }

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (cursorInner) {
    cursorInner.style.left = mouseX + 'px';
    cursorInner.style.top  = mouseY + 'px';
  }
});

function animateCursor() {
  // Outer lags a bit
  outerX = lerp(outerX, mouseX, 0.18);
  outerY = lerp(outerY, mouseY, 0.18);
  // Trail lags more
  trailX = lerp(trailX, mouseX, 0.1);
  trailY = lerp(trailY, mouseY, 0.1);

  if (cursorOuter) {
    cursorOuter.style.left = outerX + 'px';
    cursorOuter.style.top  = outerY + 'px';
  }
  if (cursorTrail) {
    cursorTrail.style.left = trailX + 'px';
    cursorTrail.style.top  = trailY + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover state for interactive elements
document.addEventListener('mouseover', (e) => {
  const target = e.target.closest('a, button, .project-card, .orbit-item, .contact-card');
  if (target) document.body.classList.add('cursor-hover');
});
document.addEventListener('mouseout', (e) => {
  const target = e.target.closest('a, button, .project-card, .orbit-item, .contact-card');
  if (target) document.body.classList.remove('cursor-hover');
});

/* ══════════════════════════════════
   WEB AUDIO — AMBIENT SFX ENGINE
══════════════════════════════════ */
function initAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  gainNode = audioCtx.createGain();
  gainNode.gain.value = 0;
  gainNode.connect(audioCtx.destination);
  createAmbientDrone();
}

function createAmbientDrone() {
  // Generate a deep amber-toned ambient drone using Web Audio API oscillators
  const masterGain = audioCtx.createGain();
  masterGain.gain.value = 0.04;
  masterGain.connect(gainNode);

  // Sub bass drone
  const sub = audioCtx.createOscillator();
  sub.type = 'sine';
  sub.frequency.value = 55; // A1
  const subGain = audioCtx.createGain();
  subGain.gain.value = 0.6;
  sub.connect(subGain);
  subGain.connect(masterGain);
  sub.start();

  // Mid harmonic
  const mid = audioCtx.createOscillator();
  mid.type = 'triangle';
  mid.frequency.value = 110; // A2
  const midGain = audioCtx.createGain();
  midGain.gain.value = 0.3;
  mid.connect(midGain);
  midGain.connect(masterGain);
  mid.start();

  // High shimmer
  const high = audioCtx.createOscillator();
  high.type = 'sine';
  high.frequency.value = 220.5; // slightly detuned A3
  const highGain = audioCtx.createGain();
  highGain.gain.value = 0.1;
  high.connect(highGain);
  highGain.connect(masterGain);
  high.start();

  // Slow LFO for breathing effect
  const lfo = audioCtx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.value = 0.08;
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 0.02;
  lfo.connect(lfoGain);
  lfoGain.connect(masterGain.gain);
  lfo.start();
}

function playUIClick() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const g   = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(880, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.12);
  g.gain.setValueAtTime(0.08, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
  osc.connect(g);
  g.connect(gainNode);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.15);
}

function playScrollChime() {
  if (!audioCtx) return;
  const notes = [440, 554.37, 659.25]; // A4, C#5, E5 — amber chord
  notes.forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const g   = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0.04, audioCtx.currentTime + i * 0.08);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.08 + 0.5);
    osc.connect(g);
    g.connect(gainNode);
    osc.start(audioCtx.currentTime + i * 0.08);
    osc.stop(audioCtx.currentTime + i * 0.08 + 0.6);
  });
}

function playWarpSound() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const g   = audioCtx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(80, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.8);
  g.gain.setValueAtTime(0.06, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.9);
  osc.connect(g);
  g.connect(gainNode);
  osc.start();
  osc.stop(audioCtx.currentTime + 1.0);
}

soundFab.addEventListener('click', () => {
  if (!audioCtx) initAudio();

  soundEnabled = !soundEnabled;
  const iconOn  = soundFab.querySelector('.icon-sound-on');
  const iconOff = soundFab.querySelector('.icon-sound-off');

  if (soundEnabled) {
    gainNode.gain.setTargetAtTime(1, audioCtx.currentTime, 0.5);
    soundFab.classList.add('active');
    if (iconOn)  iconOn.style.display  = '';
    if (iconOff) iconOff.style.display = 'none';
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playScrollChime();
  } else {
    gainNode.gain.setTargetAtTime(0, audioCtx.currentTime, 0.3);
    soundFab.classList.remove('active');
    if (iconOn)  iconOn.style.display  = 'none';
    if (iconOff) iconOff.style.display = '';
  }
});

// Play scroll chime at certain chapter boundaries
let lastChapterIndex = -1;
window.addEventListener('scroll', () => {
  if (!soundEnabled) return;
  const hero  = cinematicHero;
  if (!hero) return;
  const heroRect  = hero.getBoundingClientRect();
  const heroH     = hero.offsetHeight;
  const viewH     = window.innerHeight;
  const scrolled  = -heroRect.top;
  const scrollPct = Math.max(0, Math.min(1, scrolled / (heroH - viewH)));

  CHAPTERS.forEach((ch, i) => {
    if (scrollPct >= ch.show && scrollPct < ch.hide && i !== lastChapterIndex) {
      lastChapterIndex = i;
      if (i === 2) playWarpSound();
      else if (i > 0) playScrollChime();
    }
  });
}, { passive: true });

/* ══════════════════════════════════
   NAV HAMBURGER
══════════════════════════════════ */
navHamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  if (soundEnabled) playUIClick();
});

$$('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    if (soundEnabled) playUIClick();
  });
});

/* ══════════════════════════════════
   STICKY NOTE DRAGGABLE
══════════════════════════════════ */
function makeDraggable(el) {
  if (!el) return;
  let isDragging = false;
  let startX, startY, initLeft, initTop;

  el.style.position = 'relative';
  el.style.cursor   = 'grab';
  el.style.userSelect = 'none';

  el.addEventListener('mousedown', (e) => {
    isDragging = true;
    el.classList.add('dragging');
    startX = e.clientX;
    startY = e.clientY;
    const rect = el.getBoundingClientRect();
    initLeft = rect.left;
    initTop  = rect.top;
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    el.style.transform = `rotate(2deg) translate(${dx}px, ${dy}px)`;
  });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    el.classList.remove('dragging');
    if (soundEnabled) playUIClick();
  });
}

makeDraggable($('stickyBrief'));

/* ══════════════════════════════════
   FILTER & PROJECT GRID
══════════════════════════════════ */
$$('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    filterProjects(currentFilter);
    if (soundEnabled) playUIClick();
  });
});

function filterProjects(filter) {
  $$('.project-card').forEach(card => {
    const cat = card.dataset.category;
    const show = filter === 'all' || cat === filter;
    card.classList.toggle('hidden', !show);
    if (show) {
      card.style.animation = 'slideUp 0.4s var(--ease-smooth) both';
      setTimeout(() => card.style.animation = '', 500);
    }
  });
}

/* ══════════════════════════════════
   PROJECT MODAL
══════════════════════════════════ */
$$('.project-card').forEach((card) => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('.project-ext-link')) return; // let link through
    const idx = parseInt(card.dataset.index);
    const project = PROJECTS[idx];
    if (!project) return;
    openModal(project);
    if (soundEnabled) playScrollChime();
  });
});

/* ══ R2 media (videos) — half-res variants ready ══ */
const MEDIA_BASE = "https://assets.ezz-tantawy.org/";
const HALF_RES_AVAILABLE = false;            // flip to true once *-540p.mp4 variants are uploaded to R2
const PROJECT_VIDEO = {
  2:  'Ard elshog3an Promo_Ezzeldeen.mp4',   // Land of the Brave
  3:  'Color grading sample.mp4',            // Colour grading
  7:  'Showcase_3d.mp4',                     // Apartment visualization
  9:  'AI easter video.mp4',                 // ComfyUI AI animation
  10: 'Building animation.mp4'               // AI building VFX
};
let videoQuality = (window.localStorage && localStorage.getItem('vq')) || 'sd'; // default to the lighter player
function mediaURL(file, q) {
  if (q === 'sd' && HALF_RES_AVAILABLE) {
    const dot = file.lastIndexOf('.');
    return MEDIA_BASE + encodeURIComponent(file.slice(0, dot) + '-540p' + file.slice(dot));
  }
  return MEDIA_BASE + encodeURIComponent(file);
}

function openModal(project) {
  const modalImage = $('modalImage');
  const modalCat   = $('modalCat');
  const modalTitle = $('modalTitle');
  const modalDesc  = $('modalDesc');
  const modalTags  = $('modalTags');
  const modalExtLink = $('modalExtLink');

  if (modalImage) { modalImage.src = project.img; modalImage.alt = project.title; }
  if (modalCat)   modalCat.textContent = project.cat;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalDesc)  modalDesc.textContent = project.desc;
  if (modalTags) {
    modalTags.innerHTML = (project.tags || []).map(t => `<span class="chip">${t}</span>`).join('');
  }

  if (modalExtLink) {
    if (project.link) {
      modalExtLink.href = project.link;
      modalExtLink.style.display = '';
    } else {
      modalExtLink.style.display = 'none';
    }
  }

  // R2 video playback when available, otherwise the still image
  const wrap = modalImage ? modalImage.parentElement : null;
  const oldVid = $('modalVideo'); if (oldVid) { oldVid.pause(); oldVid.remove(); }
  const oldQ = document.querySelector('.modal-quality'); if (oldQ) oldQ.remove();
  const vfile = PROJECT_VIDEO[project.index];
  if (vfile && wrap) {
    if (modalImage) modalImage.style.display = 'none';
    const v = document.createElement('video');
    v.id = 'modalVideo'; v.className = 'modal-video';
    v.src = mediaURL(vfile, videoQuality);
    v.controls = true; v.autoplay = true; v.loop = true; v.muted = true; v.playsInline = true; v.preload = 'metadata';
    wrap.appendChild(v);
    const q = document.createElement('div');
    q.className = 'modal-quality';
    q.innerHTML = `<span>Quality</span><button data-q="sd" class="${videoQuality === 'sd' ? 'active' : ''}">SD</button><button data-q="hd" class="${videoQuality === 'hd' ? 'active' : ''}">HD</button>`;
    q.addEventListener('click', (ev) => {
      const b = ev.target.closest('button[data-q]'); if (!b) return;
      videoQuality = b.dataset.q;
      if (window.localStorage) localStorage.setItem('vq', videoQuality);
      q.querySelectorAll('button').forEach(x => x.classList.toggle('active', x.dataset.q === videoQuality));
      const t = v.currentTime; v.src = mediaURL(vfile, videoQuality);
      v.addEventListener('loadedmetadata', () => { try { v.currentTime = t; } catch (e) {} v.play().catch(() => {}); }, { once: true });
    });
    wrap.appendChild(q);
  } else if (modalImage) {
    modalImage.style.display = '';
  }

  projectModal.classList.add('open');
  projectModal.setAttribute('aria-hidden', 'false');
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const mv = $('modalVideo'); if (mv) mv.pause();
  projectModal.classList.remove('open');
  projectModal.setAttribute('aria-hidden', 'true');
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
  if (soundEnabled) playUIClick();
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ══════════════════════════════════
   INTERACTIVE REQUEST WIZARD LOGIC */
// ══════════════════════════════════
const requestTool = document.getElementById("requestTool");
const makeRequestBtn = document.getElementById("makeRequestBtn");
const requestChoices = document.getElementById("requestChoices");
const requestSubChoices = document.getElementById("requestSubChoices");
const requestForm = document.getElementById("requestForm");
const requestTypeSelect = document.getElementById("requestTypeSelect");
const requestDetails = document.getElementById("requestDetails");
const sendRequestBtn = document.getElementById("sendRequestBtn");
const mailOptions = document.getElementById("mailOptions");
const mailConfirmation = document.getElementById("mailConfirmation");
const mailConfirmationClose = document.getElementById("mailConfirmationClose");
const mailConfirmationText = document.getElementById("mailConfirmationText");
const REQUEST_EMAIL = "contact@ezz-tantawy.org";
const requestAddon = document.getElementById("requestAddon");
const longTermToggle = document.getElementById("longTermToggle");
const noteAttach = document.getElementById("noteAttach");
const noteAttachThumb = document.getElementById("noteAttachThumb");
const noteAttachToggle = document.getElementById("noteAttachToggle");
let selectedRequestCategory = "";
let selectedRequestType = "Long form - Long-Form Video Editing";
let longTermContract = false;
let lastAutoBody = "";
const LONG_TERM_BLOCK = "\n\nLong-term collaboration:\n- I'm also open to an ongoing or retainer arrangement.\n- Rough scope and duration:\n- Expected monthly workload:\n";

const requestGroups = {
  longform: {
    label: "Long form",
    prompt: "Choose a long-form focus",
    options: [
      {
        value: "Long form - Long-Form Video Editing",
        label: "Long-Form Video Editing",
        body: "Hello Ezz,\n\nI would like to request long-form video editing.\n\nProject goal:\nApproximate final duration:\nFootage status and total raw footage length:\nStructure, story, or reference videos:\nRequired graphics, captions, or sound work:\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      },
      {
        value: "Long form - Documentary / Narrative",
        label: "Documentary / Narrative",
        body: "Hello Ezz,\n\nI would like to request a documentary or narrative edit.\n\nStory or subject:\nApproximate final duration:\nFootage and interviews available:\nReference tone or style:\nMusic and sound design needs:\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      },
      {
        value: "Long form - YouTube / Episodic",
        label: "YouTube / Episodic",
        body: "Hello Ezz,\n\nI would like to request long-form YouTube or episodic editing.\n\nChannel or series:\nEpisode length and frequency:\nFootage status:\nEditing style (pacing, graphics, captions):\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      }
    ]
  },
  reel: {
    label: "Reel editing",
    prompt: "Choose a reel focus",
    options: [
      {
        value: "Reel editing - Short-Form Reel Editing",
        label: "Short-Form Reel Editing",
        body: "Hello Ezz,\n\nI would like to request short-form reel editing.\n\nProject goal:\nPlatform and format:\nApproximate number of reels:\nFootage status:\nPreferred pacing, captions, or reference style:\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      },
      {
        value: "Reel editing - Social Campaign Reels",
        label: "Social Campaign Reels",
        body: "Hello Ezz,\n\nI would like to request a batch of social campaign reels.\n\nCampaign goal:\nPlatforms and formats:\nNumber of reels and variations:\nFootage / assets status:\nBrand guidelines or references:\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      },
      {
        value: "Reel editing - Motion Design Reel",
        label: "Motion Design Reel",
        body: "Hello Ezz,\n\nI would like to request a motion-design-driven reel.\n\nProject goal:\nType of motion graphics needed:\nBrand assets or visual guidelines:\nPreferred animation style or references:\nFinal format and usage platform:\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      }
    ]
  },
  threeD: {
    label: "3D viz/modeling",
    prompt: "Choose a 3D focus",
    options: [
      {
        value: "3D viz/modeling - Interior Design",
        label: "Interior Design Visualization",
        body: "Hello Ezz,\n\nI would like to request support with an interior design visualization project.\n\nProject overview:\nSpace type and approximate size:\nDesign style or references:\nAvailable plans, photos, or measurements:\nPreferred deliverables:\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      },
      {
        value: "3D viz/modeling - Product Visualization",
        label: "Product Visualization",
        body: "Hello Ezz,\n\nI would like to request product visualization work for a brand or product presentation.\n\nProduct overview:\nRequired visuals or animation:\nAvailable product files, photos, or references:\nPreferred style, mood, or examples:\nUsage platform:\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      },
      {
        value: "3D viz/modeling - 3D Animation",
        label: "3D Animation",
        body: "Hello Ezz,\n\nI would like to request a 3D animation project.\n\nProject goal:\nScene, product, or space to animate:\nApproximate duration:\nVisual references or style direction:\nAvailable assets:\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      }
    ]
  }
};

const requestOptionsByValue = Object.fromEntries(
  Object.entries(requestGroups).flatMap(([category, group]) => (
    group.options.map((option) => [option.value, { ...option, category, categoryLabel: group.label }])
  ))
);

function openRequestChoices() {
  requestTool.classList.add("choices-open", "activated");
  requestChoices.style.display = "flex";
  if (requestAddon) requestAddon.style.display = "flex";
  if (soundEnabled) playUIClick();
}

function renderRequestSubChoices(category) {
  const group = requestGroups[category];
  if (!group) return;
  selectedRequestCategory = category;
  requestSubChoices.innerHTML = `
    <div class="request-step-label" id="requestSubLabel">${group.prompt}</div>
    ${group.options.map((option) => `<button class="choice-btn subchoice-btn interactive" type="button" data-request-value="${option.value}">${option.label}</button>`).join("")}
  `;
  requestSubChoices.style.display = "flex";
  document.querySelectorAll(".request-choices .choice-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.category === category));
  requestTool.classList.add("choices-open", "subchoices-open");
  requestTool.classList.remove("mail-open");
  requestForm.style.display = "none";
  mailOptions.style.display = "none";
  sendRequestBtn.querySelector("span").textContent = "Send request";
}

function selectRequestCategory(category) {
  renderRequestSubChoices(category);
  requestTool.classList.remove("form-open");
  if (soundEnabled) playUIClick();
}

function updateAutoRequestText(option) {
  let body = option.body;
  if (longTermContract) body += LONG_TERM_BLOCK;
  requestDetails.value = body;
  lastAutoBody = body;
  requestDetails.placeholder = "Add details, remove anything that does not apply, or leave the prepared note as it is.";
}

function selectRequestType(type) {
  const option = requestOptionsByValue[type] || requestOptionsByValue[selectedRequestType];
  if (!option) return;
  selectedRequestType = option.value;
  if (selectedRequestCategory !== option.category) renderRequestSubChoices(option.category);
  requestTypeSelect.value = option.value;
  requestSubChoices.style.display = "flex";
  requestForm.style.display = "flex";
  mailOptions.style.display = "none";
  
  // Update UI active buttons
  setTimeout(() => {
    document.querySelectorAll(".subchoice-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.requestValue === option.value));
    document.querySelectorAll(".request-choices .choice-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.category === option.category));
  }, 10);

  requestTool.classList.add("choices-open", "subchoices-open", "form-open");
  requestTool.classList.remove("mail-open");
  updateAutoRequestText(option);
  sendRequestBtn.querySelector("span").textContent = "Send request";
  window.setTimeout(() => requestDetails.focus({ preventScroll: true }), 260);
  updateNoteAttachUI();
  if (soundEnabled) playUIClick();
}

makeRequestBtn?.addEventListener("click", openRequestChoices);
requestTypeSelect?.addEventListener("change", () => selectRequestType(requestTypeSelect.value));

longTermToggle?.addEventListener("click", () => {
  longTermContract = !longTermContract;
  longTermToggle.setAttribute("aria-pressed", String(longTermContract));
  // refresh the draft only if it is still the untouched auto-generated note
  const opt = requestOptionsByValue[requestTypeSelect.value] || requestOptionsByValue[selectedRequestType];
  if (opt && requestDetails.value === lastAutoBody) updateAutoRequestText(opt);
  if (soundEnabled) playUIClick();
});

/* ══════════════════════════════════
   WRITTEN NOTE ATTACHMENT
   The doodle on the 3D notebook (notepadCanvas) can ride along with a request.
   Gmail/Outlook compose links can't accept a real file attachment (no such API
   exists for mailto/web-compose deep links) — so the practical equivalent is:
   auto-download the doodle as "Written note.png" and mention it in the email
   body, right as the user picks an email app. They can turn it off first.
══════════════════════════════════ */
function updateNoteAttachUI() {
  if (!noteAttach) return;
  if (noteHasDrawing && notepadCanvas) {
    noteAttach.style.display = "flex";
    noteAttach.setAttribute("aria-hidden", "false");
    if (noteAttachThumb) noteAttachThumb.src = notepadCanvas.toDataURL("image/png");
  } else {
    noteAttach.style.display = "none";
    noteAttach.setAttribute("aria-hidden", "true");
  }
}

noteAttachToggle?.addEventListener("click", () => {
  noteAttachEnabled = !noteAttachEnabled;
  noteAttachToggle.setAttribute("aria-pressed", String(noteAttachEnabled));
  if (soundEnabled) playUIClick();
});

function downloadWrittenNote() {
  if (!notepadCanvas) return;
  const a = document.createElement("a");
  a.href = notepadCanvas.toDataURL("image/png");
  a.download = "Written note.png";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function buildEmailUrls() {
  const type = requestTypeSelect.value || selectedRequestType || "General Project";
  const subject = longTermContract ? `Request | ${type} | Long-term contract |` : `Request | ${type} |`;
  let body = requestDetails.value.trim();
  if (longTermContract && !/long-term collaboration/i.test(body)) body += LONG_TERM_BLOCK;
  if (noteHasDrawing && noteAttachEnabled) {
    body += "\n\n(P.S. I sketched a quick note on your site — it downloaded as \"Written note.png\", attaching it here.)";
  }
  return {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(REQUEST_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(REQUEST_EMAIL)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  };
}

function showMailOptions() {
  requestTool.classList.add("mail-open");
  mailOptions.style.display = "grid";
  sendRequestBtn.querySelector("span").textContent = "Choose email app";
  if (soundEnabled) playUIClick();
}

function sendProjectRequest(provider) {
  const urls = buildEmailUrls();
  const labels = { gmail: "Gmail", outlook: "Outlook" };
  const selectedProvider = provider in urls ? provider : "gmail";
  if (noteHasDrawing && noteAttachEnabled) downloadWrittenNote();
  const openedWindow = window.open(urls[selectedProvider], "_blank");
  if (openedWindow) openedWindow.opener = null;
  if (mailConfirmationText) {
    const noteLine = (noteHasDrawing && noteAttachEnabled)
      ? " Your written note also downloaded as \"Written note.png\" — attach it to the email before sending."
      : "";
    mailConfirmationText.textContent = `${labels[selectedProvider]} should now open your prepared request in a new tab or mail app. Please review the draft and press send when you are ready. If no window appeared, allow popups and choose the email app again.${noteLine}`;
  }
  mailConfirmation.style.display = "flex";
  mailConfirmation.classList.add("open");
  if (soundEnabled) playScrollChime();
}

function closeMailConfirmation() {
  mailConfirmation.style.display = "none";
  mailConfirmation.classList.remove("open");
  if (soundEnabled) playUIClick();
}

sendRequestBtn?.addEventListener("click", showMailOptions);
mailConfirmationClose?.addEventListener("click", closeMailConfirmation);
mailConfirmation?.addEventListener("click", (event) => {
  if (event.target === mailConfirmation) closeMailConfirmation();
});

document.addEventListener("click", (event) => {
  const categoryButton = event.target.closest?.(".choice-btn[data-category]");
  const subchoiceButton = event.target.closest?.(".subchoice-btn[data-request-value]");
  const mailButton = event.target.closest?.(".mail-option[data-provider]");

  if (categoryButton) {
    event.preventDefault();
    event.stopPropagation();
    selectRequestCategory(categoryButton.dataset.category);
  }

  if (subchoiceButton) {
    event.preventDefault();
    event.stopPropagation();
    selectRequestType(subchoiceButton.dataset.requestValue);
  }

  if (mailButton) {
    event.preventDefault();
    event.stopPropagation();
    sendProjectRequest(mailButton.dataset.provider);
  }
});

/* ══════════════════════════════════
   SKILL ORBIT TOOLTIPS
══════════════════════════════════ */
$$('.orbit-item').forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    orbitTooltip.textContent = item.dataset.tooltip || '';
    orbitTooltip.classList.add('visible');
    if (soundEnabled) playUIClick();
  });
  item.addEventListener('mousemove', (e) => {
    orbitTooltip.style.left = (e.clientX + 12) + 'px';
    orbitTooltip.style.top  = (e.clientY - 32) + 'px';
  });
  item.addEventListener('mouseleave', () => {
    orbitTooltip.classList.remove('visible');
  });
});

/* ══════════════════════════════════
   REQUEST FORM TYPES
══════════════════════════════════ */
const reqTypePlaceholders = {
  editing:  'e.g. "I need a 60-second brand reel edited from raw footage. Deadline is 2 weeks. Deliverable: social media + YouTube..."',
  threeD:   'e.g. "I need a 3D visualization of an interior space. I have floor plans and reference images. Looking for 3-4 rendered angles..."',
  longTerm: 'e.g. "Looking for a long-term media partner for ongoing video content — roughly 4 videos per month across social channels..."'
};

const reqTypeEmail = {
  editing:  'Video Editing Request',
  threeD:   '3D Visualization Request',
  longTerm: 'Long-Term Project Request'
};

let selectedReqType = 'editing';

$$('.req-type-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.req-type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedReqType = btn.dataset.type;
    const ta = $('requestTextarea');
    if (ta) ta.placeholder = reqTypePlaceholders[selectedReqType] || '';
    if (soundEnabled) playUIClick();
  });
});

/* ══════════════════════════════════
   SEND EMAIL
══════════════════════════════════ */
function buildEmailBody() {
  const details = ($('requestTextarea') || {}).value || '';
  return `Hi Ezz,\n\nI'm reaching out about a ${reqTypeEmail[selectedReqType] || 'project'}.\n\n${details}\n\nLooking forward to hearing from you.`;
}

window.sendViaGmail = function() {
  const subject = encodeURIComponent(reqTypeEmail[selectedReqType] || 'Project Request');
  const body    = encodeURIComponent(buildEmailBody());
  const email   = 'ezzeldeentantawy@gmail.com';
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, '_blank');
  if (soundEnabled) playScrollChime();
};

/* ══════════════════════════════════
   CANVAS INTERACTION — 3D Raycasting & Keyboard Clicks
   ══════════════════════════════════ */
function playKeyboardClack() {
  if (!audioCtx) return;
  
  // Layer 1: Transient high-pass white noise click (keycap contact)
  const bufferSize = audioCtx.sampleRate * 0.02; // 20ms
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  
  const noiseSource = audioCtx.createBufferSource();
  noiseSource.buffer = buffer;
  
  const highpass = audioCtx.createBiquadFilter();
  highpass.type = 'highpass';
  highpass.frequency.value = 1600;
  
  const noiseGain = audioCtx.createGain();
  noiseGain.gain.setValueAtTime(0.06, audioCtx.currentTime);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.015);
  
  noiseSource.connect(highpass);
  highpass.connect(noiseGain);
  noiseGain.connect(gainNode);
  
  // Layer 2: Resonant key body pop (descending triangle sweep)
  const popOsc = audioCtx.createOscillator();
  popOsc.type = 'triangle';
  popOsc.frequency.setValueAtTime(280, audioCtx.currentTime);
  popOsc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.04);
  
  const popGain = audioCtx.createGain();
  popGain.gain.setValueAtTime(0.12, audioCtx.currentTime);
  popGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.035);
  
  popOsc.connect(popGain);
  popGain.connect(gainNode);
  
  noiseSource.start();
  popOsc.start();
  noiseSource.stop(audioCtx.currentTime + 0.02);
  popOsc.stop(audioCtx.currentTime + 0.04);
}

/* ── Interactive object helpers ── */
function findClickRoot(obj) {
  let cur = obj;
  while (cur) {
    if (cur.userData && cur.userData.clickKind) return cur;
    cur = cur.parent;
  }
  return null;
}

// Short dry impact/crack burst (filtered noise) for breaks & shatters
function playGlassCrack() {
  if (!audioCtx) return;
  const bufSize = Math.floor(audioCtx.sampleRate * 0.15);
  const buffer = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufSize, 2);
  const src = audioCtx.createBufferSource(); src.buffer = buffer;
  const hp = audioCtx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 2200;
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.14, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.16);
  src.connect(hp); hp.connect(g); g.connect(gainNode);
  src.start(); src.stop(audioCtx.currentTime + 0.16);
}

// Generic push / tilt then spring back to rest
function nudgePush(root) {
  const h = root.userData.home;
  if (!h) return;
  gsap.killTweensOf(root.rotation);
  gsap.killTweensOf(root.position);
  const dirX = (Math.random() - 0.5);
  const dirZ = (Math.random() - 0.5);
  gsap.timeline()
    .to(root.rotation, { x: h.rx + dirZ * 0.22, z: h.rz - dirX * 0.22, duration: 0.12, ease: 'power2.out' })
    .to(root.rotation, { x: h.rx, y: h.ry, z: h.rz, duration: 0.7, ease: 'elastic.out(1, 0.45)' });
  gsap.fromTo(root.position, { y: h.py }, { y: h.py + 0.03, duration: 0.12, yoyo: true, repeat: 1, ease: 'power2.out' });
  if (soundEnabled) playUIClick();
}

// Falling debris (ceramic shards / glass splinters) that settle on the desk
function spawnDebris(origin, color, count) {
  for (let i = 0; i < count; i++) {
    const size = 0.015 + Math.random() * 0.025;
    const geo = new THREE.TetrahedronGeometry(size);
    const mat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.35, metalness: 0.1, transparent: true, opacity: 1 });
    const shard = new THREE.Mesh(geo, mat);
    shard.position.copy(origin);
    scene.add(shard);
    const vx = (Math.random() - 0.5) * 0.7;
    const vz = (Math.random() - 0.5) * 0.7;
    gsap.to(shard.position, { x: origin.x + vx, z: origin.z + vz, duration: 0.9, ease: 'power1.out' });
    gsap.to(shard.position, { y: -0.8, duration: 0.9, ease: 'bounce.out' });
    gsap.to(shard.rotation, { x: Math.random() * 6, y: Math.random() * 6, z: Math.random() * 6, duration: 0.9 });
    gsap.to(mat, { opacity: 0, duration: 1.2, delay: 0.8, onComplete: () => {
      scene.remove(shard); geo.dispose(); mat.dispose();
    }});
  }
}

// Spreading coffee puddle on the desk surface
function spawnCoffeeSpill(origin) {
  const geo = new THREE.CircleGeometry(0.02, 40);
  const mat = new THREE.MeshPhysicalMaterial({ color: 0x2a1508, roughness: 0.08, metalness: 0.0, clearcoat: 1.0, clearcoatRoughness: 0.0, transparent: true, opacity: 0.92, side: THREE.DoubleSide });
  const puddle = new THREE.Mesh(geo, mat);
  puddle.rotation.x = -Math.PI / 2;
  puddle.position.set(origin.x + 0.06, -0.82, origin.z + 0.05);
  scene.add(puddle);
  gsap.to(puddle.scale, { x: 13, y: 13, duration: 1.4, ease: 'power2.out' });
}

function clickMug(root) {
  if (mugState.broken) return;
  mugState.clicks++;
  if (mugState.clicks >= 5) {
    // BREAK on the 5th click: topple, shed shards, spill coffee
    mugState.broken = true;
    const hb = root.userData.home;
    gsap.killTweensOf(root.rotation);
    gsap.to(root.rotation, { z: hb.rz + Math.PI / 2.2, x: hb.rx + 0.25, duration: 0.5, ease: 'bounce.out' });
    gsap.to(root.position, { y: hb.py - 0.06, duration: 0.5, ease: 'bounce.out' });
    if (mugLiquid) {
      mugLiquid.material.transparent = true;
      gsap.to(mugLiquid.material, { opacity: 0, duration: 0.3 });
    }
    const wp = root.getWorldPosition(new THREE.Vector3());
    spawnCoffeeSpill(wp);
    spawnDebris(wp, 0xece6df, 7);
    if (soundEnabled) playGlassCrack();
    return;
  }
  // SHAKE
  const h = root.userData.home;
  gsap.killTweensOf(root.rotation);
  gsap.timeline()
    .to(root.rotation, { z: h.rz + 0.14, duration: 0.05 })
    .to(root.rotation, { z: h.rz - 0.12, duration: 0.05 })
    .to(root.rotation, { z: h.rz + 0.07, duration: 0.05 })
    .to(root.rotation, { z: h.rz, duration: 0.12, ease: 'power2.out' });
  if (soundEnabled) playUIClick();
}

function startLampFlicker() {
  lampState.flickering = true;
  lampFlickerInterval = setInterval(() => {
    if (!deskLightBulb || lampState.broken) return;
    const hot = Math.random() < 0.55;
    deskLightBulb.intensity = hot ? 8 + Math.random() * 8 : 0.4;
    if (bulbGlow) bulbGlow.material.color.setScalar(hot ? 1 : 0.25);
  }, 75);
}

function shatterBulb() {
  lampState.broken = true;
  if (lampFlickerInterval) { clearInterval(lampFlickerInterval); lampFlickerInterval = null; }
  if (deskLightBulb) gsap.to(deskLightBulb, { intensity: 0, duration: 0.1 });
  const bp = bulbGlow ? bulbGlow.getWorldPosition(new THREE.Vector3()) : new THREE.Vector3(-2.16, -0.1, 0.45);
  spawnDebris(bp, 0xfff2cc, 10);
  if (bulbGlow) bulbGlow.visible = false;
  if (soundEnabled) playGlassCrack();
}

function clickLamp(root) {
  if (lampState.broken) return;
  lampState.clicks++;
  const h = root.userData.home;
  gsap.killTweensOf(root.rotation);
  gsap.timeline()
    .to(root.rotation, { z: h.rz + 0.10, duration: 0.05 })
    .to(root.rotation, { z: h.rz - 0.08, duration: 0.05 })
    .to(root.rotation, { z: h.rz, duration: 0.14, ease: 'elastic.out(1, 0.5)' });
  if (lampState.clicks === 4 && !lampState.flickering) startLampFlicker();
  if (lampState.clicks >= 6) shatterBulb();
  if (soundEnabled) playUIClick();
}

// Procedural shattered-glass crack pattern radiating from the impact point
function makeCrackCanvas(w, h, ix, iy) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, w, h);
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'rgba(210,225,255,0.85)';

  const spokes = 9 + Math.floor(Math.random() * 5);
  for (let i = 0; i < spokes; i++) {
    const ang = (i / spokes) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
    let x = ix, y = iy;
    const segs = 4 + Math.floor(Math.random() * 4);
    const len = Math.min(w, h) * (0.25 + Math.random() * 0.4);
    ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.moveTo(x, y);
    for (let s = 0; s < segs; s++) {
      x += Math.cos(ang) * (len / segs) + (Math.random() - 0.5) * 14;
      y += Math.sin(ang) * (len / segs) + (Math.random() - 0.5) * 14;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  // concentric fracture rings
  ctx.lineWidth = 1.0;
  for (let r = 16; r < Math.min(w, h) * 0.4; r += 20 + Math.random() * 18) {
    ctx.beginPath();
    for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.35) {
      const rr = r + (Math.random() - 0.5) * 9;
      const x = ix + Math.cos(a) * rr, y = iy + Math.sin(a) * rr;
      if (a === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  // bright impact core
  const grd = ctx.createRadialGradient(ix, iy, 0, ix, iy, 34);
  grd.addColorStop(0, 'rgba(255,255,255,0.95)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grd;
  ctx.beginPath(); ctx.arc(ix, iy, 34, 0, Math.PI * 2); ctx.fill();
  return c;
}

function crackMonitor(screen, worldPoint) {
  const info = screen.userData.monitor || { w: 1.5, h: 1.0 };
  const local = screen.worldToLocal(worldPoint.clone());
  const cw = 512;
  const ch = Math.max(96, Math.round(512 * (info.h / info.w)));
  const ix = (local.x / info.w + 0.5) * cw;
  const iy = (0.5 - local.y / info.h) * ch;
  const tex = new THREE.CanvasTexture(makeCrackCanvas(cw, ch, ix, iy));
  const overlay = new THREE.Mesh(
    new THREE.PlaneGeometry(info.w, info.h),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 1, depthWrite: false })
  );
  overlay.position.set(screen.position.x, screen.position.y, screen.position.z + 0.02);
  screen.parent.add(overlay);
  if (soundEnabled) playGlassCrack();
  gsap.to(overlay.material, { opacity: 0, duration: 2.6, ease: 'power2.in', onComplete: () => {
    screen.parent.remove(overlay);
    overlay.geometry.dispose(); overlay.material.dispose(); tex.dispose();
  }});
}

filmCanvas.addEventListener('click', (e) => {
  if (!renderer || !camera) return;
  if (suppressNextClick) { suppressNextClick = false; return; } // notepad drag/tap already handled it

  const rect = filmCanvas.getBoundingClientRect();
  const mouse = new THREE.Vector2(
    ((e.clientX - rect.left) / rect.width) * 2 - 1,
    -((e.clientY - rect.top) / rect.height) * 2 + 1
  );

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  // 1) Keyboard keys depress individually
  const keyIntersects = raycaster.intersectObjects(keysGroup.children);
  if (keyIntersects.length > 0) {
    const keyMesh = keyIntersects[0].object;
    const originalY = keyMesh.position.y;
    gsap.to(keyMesh.position, { y: originalY - 0.018, duration: 0.05, yoyo: true, repeat: 1, ease: 'power1.inOut' });
    if (keyMesh.userData && keyMesh.userData.isSpace) {
      if (gameActive) gameFlap();
      else if (++spaceClicks >= 5) startGame();
    }
    if (soundEnabled) playKeyboardClack();
    return;
  }

  // 2) Everything else — first recognised target along the ray wins
  const hits = raycaster.intersectObjects(scene.children, true);
  for (const hit of hits) {
    const root = findClickRoot(hit.object);
    if (root) {
      const kind = root.userData.clickKind;
      if (kind === 'mug') clickMug(root);
      else if (kind === 'lamp') clickLamp(root);
      else if (kind === 'monitor') {
        if (gameActive && root.userData.isCenter) gameClickAt(hit.uv);
        else crackMonitor(root, hit.point);
      }
      else if (kind === 'keyboard') {
        gsap.killTweensOf(root.position);
        const y0 = (root.userData.home && root.userData.home.py != null) ? root.userData.home.py : root.position.y;
        gsap.to(root.position, { y: y0 - 0.012, duration: 0.06, yoyo: true, repeat: 1, ease: 'power1.inOut' });
        if (soundEnabled) playKeyboardClack();
        if (gameActive) gameFlap();
        else if (++spaceClicks >= 5) startGame();
      }
      else nudgePush(root);
      return;
    }
    if (hit.object === deskMesh) {
      spawn3DRipple(hit.point);
      if (soundEnabled) playUIClick();
      return;
    }
  }
});

/* ══════════════════════════════════
   NOTEPAD FREEHAND DRAWING (pointer drag)
   Continuous drag/write instead of tap-to-connect-dots. Owns the gesture from
   pointerdown through pointerup so mouse drag AND touch drag both work, and
   suspends page-scroll only while the drag is actually happening on the page.
══════════════════════════════════ */
function raycastNotepad(clientX, clientY) {
  if (!notepadMesh || !camera) return null;
  const rect = filmCanvas.getBoundingClientRect();
  const mouse = new THREE.Vector2(
    ((clientX - rect.left) / rect.width) * 2 - 1,
    -((clientY - rect.top) / rect.height) * 2 + 1
  );
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObject(notepadMesh, false);
  return hits.length ? hits[0] : null;
}

function commitNoteDrawing(e, hit) {
  isDrawingNote = true;
  suppressNextClick = true;
  notepadLast = null; // start a fresh stroke, don't connect to an older one
  filmCanvas.style.touchAction = 'none'; // this gesture writes on the page, not scrolls it
  if (filmCanvas.setPointerCapture) filmCanvas.setPointerCapture(e.pointerId);
  drawNotepadPencil(hit.uv);
  if (soundEnabled) playUIClick();
  e.preventDefault();
}

// While true, a touch gesture started on the notepad but hasn't moved enough yet to tell
// a stationary "write" from a swipe-through "scroll" — see pointermove below.
let notePendingDown = null;

filmCanvas.addEventListener('pointerdown', (e) => {
  if (!renderer || !camera) return;
  const hit = raycastNotepad(e.clientX, e.clientY);
  if (!hit) return;
  if (e.pointerType === 'touch') {
    // A scroll swipe can start on the notepad's screen area too. Don't claim the
    // gesture (and don't block scroll) until the first move confirms it's a write.
    notePendingDown = { x: e.clientX, y: e.clientY, id: e.pointerId };
    return;
  }
  commitNoteDrawing(e, hit); // mouse drag never scrolls a Lenis page, safe to claim immediately
});

filmCanvas.addEventListener('pointermove', (e) => {
  if (isDrawingNote) {
    const hit = raycastNotepad(e.clientX, e.clientY);
    if (hit) drawNotepadPencil(hit.uv);
    else notepadLast = null; // pointer slid off the page — don't draw a line across the gap
    e.preventDefault();
    return;
  }
  if (notePendingDown && notePendingDown.id === e.pointerId) {
    const dist = Math.hypot(e.clientX - notePendingDown.x, e.clientY - notePendingDown.y);
    if (dist > 6) { notePendingDown = null; return; } // travelled — this is a scroll swipe, let it through
    const hit = raycastNotepad(e.clientX, e.clientY);
    if (!hit) { notePendingDown = null; return; }
    notePendingDown = null;
    commitNoteDrawing(e, hit);
  }
});

function endNoteDrawing(e) {
  notePendingDown = null;
  if (!isDrawingNote) return;
  isDrawingNote = false;
  notepadLast = null;
  filmCanvas.style.touchAction = '';
  if (e && e.pointerId != null && filmCanvas.hasPointerCapture && filmCanvas.hasPointerCapture(e.pointerId)) {
    filmCanvas.releasePointerCapture(e.pointerId);
  }
}
filmCanvas.addEventListener('pointerup', endNoteDrawing);
filmCanvas.addEventListener('pointercancel', endNoteDrawing);
filmCanvas.addEventListener('pointerleave', endNoteDrawing);



/* ══════════════════════════════════
   DISCORD COPY
══════════════════════════════════ */
window.copyDiscord = function(card) {
  navigator.clipboard.writeText('ezeldeentantawy').catch(() => {});
  const arrow = $('discordArrow');
  if (arrow) {
    arrow.textContent = 'Copied! ✓';
    arrow.style.color = 'var(--amber)';
    setTimeout(() => {
      arrow.textContent = 'Copy →';
      arrow.style.color = '';
    }, 2000);
  }
  if (soundEnabled) playScrollChime();
};

/* ══════════════════════════════════
   REVEAL ON SCROLL (Intersection Observer)
══════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

$$('.reveal-up').forEach(el => revealObserver.observe(el));




/* ══════════════════════════════════
   SMOOTH PARALLAX ON HERO ELEMENTS
══════════════════════════════════ */
document.addEventListener('mousemove', (e) => {
  const chapter = document.querySelector('.chapter-overlay.active');
  if (!chapter) return;
  if (chapter.classList.contains('chapter-card')) return; // compact cards stay pinned top-right
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;
  chapter.style.transform = chapter.classList.contains('chapter-center')
    ? `translate(calc(-50% + ${dx * 8}px), calc(-50% + ${dy * 8}px))`
    : `translateY(calc(-50% + ${dy * 8}px))`;
});

/* ══════════════════════════════════
   REVIEW BUTTON click audio
══════════════════════════════════ */
const reviewBtn = $('reviewBtn');
if (reviewBtn) {
  reviewBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      if (lenis) lenis.scrollTo(workSection, { offset: -40, duration: 1.4 });
      else workSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (!audioCtx) initAudio();
    if (soundEnabled) {
      // Success chime: C major arpeggio
      const freqs = [523.25, 659.25, 783.99, 1046.5];
      freqs.forEach((f, i) => {
        setTimeout(() => {
          const o = audioCtx.createOscillator();
          const g = audioCtx.createGain();
          o.type = 'sine';
          o.frequency.value = f;
          g.gain.setValueAtTime(0.1, audioCtx.currentTime);
          g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
          o.connect(g);
          g.connect(gainNode);
          o.start();
          o.stop(audioCtx.currentTime + 0.5);
        }, i * 80);
      });
    }
  });
}

/* ══════════════════════════════════
   NAV LINKS audio
══════════════════════════════════ */
$$('.island-links a, .island-cta, .contact-card, .filter-btn').forEach(el => {
  el.addEventListener('click', () => {
    if (soundEnabled) playUIClick();
  });
});

/* ══════════════════════════════════
   INITIALISE
══════════════════════════════════ */
initThree();
resizeCanvas();
onScroll();
loadModels();   // async: swaps procedural props for the real GLB models when they finish loading

// First chapter always visible before scroll
const firstChapter = $('chapterLanding');
if (firstChapter) {
  setTimeout(() => firstChapter.classList.add('active'), 300);
}

console.log('%c⚡ EZZ TANTAWY PORTFOLIO', 'color:#FF8C00;font-size:16px;font-weight:bold;');
console.log('%cScroll-driven cinematic portfolio — built with vanilla JS + Web Audio API', 'color:#888;font-size:12px;');

/* ══════════════════════════════════
   CURSOR-WEIGHT PANELS · PRESS-X CHAOS · LIVING ROADMAP
══════════════════════════════════ */
(function () {
  const finePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;

  // --- Cursor-weight panel tilt (desktop) ---
  if (finePointer) {
    const SEL = '.about-card, .contact-card, .process-step, .stat-card';
    let cur = null;
    const reset = el => { if (el) { el.style.removeProperty('--tilt-rx'); el.style.removeProperty('--tilt-ry'); el.classList.remove('weight-tilting'); } };
    document.addEventListener('mousemove', (e) => {
      const el = (e.target && e.target.closest) ? e.target.closest(SEL) : null;
      if (el !== cur) { reset(cur); cur = el; }
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--tilt-ry', (px * 15).toFixed(2) + 'deg');
      el.style.setProperty('--tilt-rx', (-py * 15).toFixed(2) + 'deg');
      el.classList.add('weight-tilting');
    }, { passive: true });
  }

  // --- Living roadmap: scroll fill + cursor proximity + gyro tilt ---
  const proc = document.querySelector('.process-section');
  const steps = [...document.querySelectorAll('.process-step')];
  if (proc && steps.length) {
    const onRoad = () => {
      const r = proc.getBoundingClientRect();
      const vh = window.innerHeight;
      const prog = Math.max(0, Math.min(1, (vh - r.top) / (r.height + vh * 0.4)));
      proc.style.setProperty('--road-progress', prog.toFixed(3));
    };
    window.addEventListener('scroll', onRoad, { passive: true });
    window.addEventListener('resize', onRoad);
    onRoad();
    if (finePointer) {
      proc.addEventListener('mousemove', (e) => {
        let best = null, bestD = Infinity;
        steps.forEach(s => {
          const r = s.getBoundingClientRect();
          const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
          if (d < bestD) { bestD = d; best = s; }
        });
        steps.forEach(s => s.classList.toggle('road-active', s === best));
      });
      proc.addEventListener('mouseleave', () => steps.forEach(s => s.classList.remove('road-active')));
    }
    window.addEventListener('deviceorientation', (e) => {
      if (e.gamma == null) return;
      const g = Math.max(-20, Math.min(20, e.gamma)) / 20;
      proc.style.setProperty('--road-tilt', (g * 6).toFixed(2) + 'deg');
    }, true);
  }

  // --- Press-X destruction (desktop) / double-tap (mobile) ---
  let active = false; const stored = [];
  const wrap = document.querySelector('.canvas-wrapper');
  let lastPointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  document.addEventListener('mousemove', (e) => { lastPointer.x = e.clientX; lastPointer.y = e.clientY; }, { passive: true });

  function overCanvas(x, y) {
    const el = document.elementFromPoint(x, y);
    return !!(el && el.closest && el.closest('#canvasContainer, #webglCanvas, .canvas-wrapper'));
  }
  function spawnShock(x, y) {
    const s = document.createElement('div');
    s.className = 'chaos-shock';
    s.style.left = x + 'px'; s.style.top = y + 'px';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 720);
  }
  function destroy(ox, oy) {
    if (active) return;
    if (overCanvas(ox, oy)) return;            // never blow up the 3D desk
    active = true;
    spawnShock(ox, oy);
    if (wrap) wrap.classList.add('chaos-shake');
    const RAD = Math.max(window.innerWidth, window.innerHeight) * 0.6;
    document.querySelectorAll('.about-card, .project-card, .process-step, .contact-card, .request-card, .skill-orbit, .filter-bar, .proxi-inner, .work-header, .about-header').forEach(el => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const dist = Math.hypot(cx - ox, cy - oy);
      if (dist > RAD) return;                  // only what's near the blast reacts
      const f = 1 - dist / RAD;
      stored.push({ el, t: el.style.transform, o: el.style.opacity, tr: el.style.transition });
      el.style.transition = 'transform 0.7s cubic-bezier(.2,.85,.25,1), opacity 0.7s';
      const ang = Math.atan2(cy - oy, cx - ox) + (Math.random() - 0.5) * 0.6;
      const push = (120 + Math.random() * 280) * f;
      el.style.transform = `translate(${(Math.cos(ang) * push).toFixed(0)}px, ${(Math.sin(ang) * push).toFixed(0)}px) rotate(${((Math.random() - 0.5) * 80 * f).toFixed(0)}deg)`;
      el.style.opacity = (1 - 0.35 * f).toFixed(2);
    });
    document.querySelectorAll('h1, h2').forEach(h => {
      const r = h.getBoundingClientRect();
      if (Math.hypot(r.left + r.width / 2 - ox, r.top + r.height / 2 - oy) > RAD) return;
      if (h.dataset.shattered) return;
      h.dataset.shattered = '1';
      h.dataset.orig = h.innerHTML;
      h.innerHTML = h.textContent.split('').map(ch => ch === ' ' ? ' ' : `<span class="shard" style="--sx:${((Math.random() - 0.5) * 240).toFixed(0)}px;--sy:${((Math.random() - 0.5) * 200).toFixed(0)}px;--sr:${((Math.random() - 0.5) * 140).toFixed(0)}deg">${ch}</span>`).join('');
    });
    document.body.classList.add('chaos-on');
    showRestore();
  }
  function restore() {
    if (!active) return; active = false;
    if (wrap) wrap.classList.remove('chaos-shake');
    document.body.classList.remove('chaos-on');
    stored.forEach(({ el, t, o }) => { el.style.transform = t; el.style.opacity = o; });
    setTimeout(() => stored.forEach(({ el, tr }) => { el.style.transition = tr; }), 720);
    stored.length = 0;
    document.querySelectorAll('[data-shattered]').forEach(h => { h.innerHTML = h.dataset.orig; delete h.dataset.shattered; delete h.dataset.orig; });
    hideRestore();
  }
  let rbtn;
  function showRestore() {
    if (!rbtn) { rbtn = document.createElement('button'); rbtn.className = 'chaos-restore-btn interactive'; rbtn.textContent = 'Restore ↺'; rbtn.addEventListener('click', restore); document.body.appendChild(rbtn); }
    rbtn.classList.add('visible');
  }
  function hideRestore() { if (rbtn) rbtn.classList.remove('visible'); }
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'x' && e.key !== 'X') return;
    const t = (document.activeElement && document.activeElement.tagName) || '';
    if (t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT') return;
    if (active) restore(); else destroy(lastPointer.x, lastPointer.y);
  });
  let lastTap = 0;
  document.addEventListener('touchend', (e) => {
    const n = Date.now();
    const tt = e.changedTouches && e.changedTouches[0];
    const ox = tt ? tt.clientX : window.innerWidth / 2, oy = tt ? tt.clientY : window.innerHeight / 2;
    if (n - lastTap < 320) { active ? restore() : destroy(ox, oy); }
    lastTap = n;
  }, { passive: true });

  const hint = document.createElement('div');
  hint.className = 'fun-hint';
  hint.innerHTML = '<span class="d">Press <strong>X</strong> for chaos</span><span class="m">Double-tap for chaos</span>';
  document.body.appendChild(hint);
})();

/* ══════════════════════════════════
   PORTFOLIO HOVER-AUTOPLAY PREVIEWS (desktop)
══════════════════════════════════ */
(function () {
  if (window.matchMedia && !window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll('.project-card').forEach(card => {
    const idx = parseInt(card.dataset.index);
    const vfile = PROJECT_VIDEO[idx];
    if (!vfile) return;
    const thumb = card.querySelector('.project-thumb');
    if (!thumb) return;
    let vid = null;
    card.addEventListener('mouseenter', () => {
      if (vid) return;
      vid = document.createElement('video');
      vid.className = 'thumb-preview';
      vid.src = mediaURL(vfile, 'sd');
      vid.muted = true; vid.loop = true; vid.playsInline = true; vid.preload = 'none';
      thumb.appendChild(vid);
      vid.play().catch(() => {});
      card.classList.add('has-preview');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('has-preview');
      if (vid) { vid.pause(); vid.remove(); vid = null; }
    });
  });
})();

/* ══════════════════════════════════
   FLOATING ISLAND — progress stroke + bottom finale
══════════════════════════════════ */
(function () {
  const nav = document.getElementById('mainNav');
  const svg = document.getElementById('islandProgress');
  const rect = document.getElementById('islandProgressRect');
  const finale = document.getElementById('islandFinale');
  const brand = document.getElementById('navBrand');
  if (!nav || !svg || !rect) return;
  let complete = false;

  function sizeStroke() {
    const r = nav.getBoundingClientRect();
    const W = Math.max(1, Math.round(r.width)), H = Math.max(1, Math.round(r.height));
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    rect.setAttribute('x', 2); rect.setAttribute('y', 2);
    rect.setAttribute('width', W - 4); rect.setAttribute('height', H - 4);
    rect.setAttribute('rx', (H - 4) / 2); rect.setAttribute('ry', (H - 4) / 2);
  }
  sizeStroke();
  window.addEventListener('resize', sizeStroke);

  function scrollTop() {
    if (typeof lenis !== 'undefined' && lenis) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (brand) brand.addEventListener('click', (e) => { e.preventDefault(); scrollTop(); });

  function onProg() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    rect.style.strokeDashoffset = (100 - pct * 100).toFixed(2);
    const done = pct >= 0.995;
    if (done !== complete) {
      complete = done;
      nav.classList.toggle('island-complete', done);
      if (finale) finale.setAttribute('aria-hidden', String(!done));
    }
  }
  window.addEventListener('scroll', onProg, { passive: true });
  window.addEventListener('resize', onProg);
  onProg();

  nav.addEventListener('click', (e) => {
    if (!nav.classList.contains('island-complete')) return;
    e.preventDefault();
    scrollTop();
  });
})();

/* ══════════════════════════════════
   ALIVE-NESS: word anims · gyro tilt · SFX
══════════════════════════════════ */
function playHover() {
  if (!audioCtx) return;
  const o = audioCtx.createOscillator(), g = audioCtx.createGain();
  o.type = 'sine'; o.frequency.value = 1150 + Math.random() * 220;
  g.gain.setValueAtTime(0.012, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0004, audioCtx.currentTime + 0.07);
  o.connect(g); g.connect(gainNode); o.start(); o.stop(audioCtx.currentTime + 0.08);
}
function playSoftClick() {
  if (!audioCtx) return;
  const o = audioCtx.createOscillator(), g = audioCtx.createGain();
  o.type = 'triangle'; o.frequency.setValueAtTime(520, audioCtx.currentTime);
  o.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.09);
  g.gain.setValueAtTime(0.06, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.11);
  o.connect(g); g.connect(gainNode); o.start(); o.stop(audioCtx.currentTime + 0.12);
}

(function () {
  // Word animations: replay on tap + auto-play once when scrolled into view
  const words = [...document.querySelectorAll('.fx-word')];
  words.forEach(w => {
    w.addEventListener('click', () => { w.classList.remove('fx-play'); void w.offsetWidth; w.classList.add('fx-play'); });
    w.addEventListener('animationend', () => w.classList.remove('fx-play'));
  });
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('fx-play');
          setTimeout(() => e.target.classList.remove('fx-play'), 1000);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.6 });
    words.forEach(w => io.observe(w));
  }

  // Mobile: tilt panels with the accelerometer
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
    window.addEventListener('deviceorientation', (e) => {
      if (e.gamma == null || e.beta == null) return;
      const rx = Math.max(-8, Math.min(8, (e.beta - 45) * 0.18));
      const ry = Math.max(-8, Math.min(8, e.gamma * 0.18));
      document.documentElement.style.setProperty('--gyro-rx', (-rx).toFixed(2) + 'deg');
      document.documentElement.style.setProperty('--gyro-ry', ry.toFixed(2) + 'deg');
    }, true);
  }

  // SFX on every interaction (silent until the sound toggle is on)
  const canSound = () => (typeof soundEnabled !== 'undefined') && soundEnabled && audioCtx;
  const HOVER_SEL = 'a, button, .project-card, .orbit-node, .chip, .stat-item, .fx-word, .contact-card, .filter-btn, .choice-btn, .subchoice-btn, .role-card, .about-card, .metric';
  const CLICK_SEL = '.orbit-node, .fx-word, .chip, .role-card, .island-links a, .island-cta, .island-brand, .stat-item, .metric';
  let lastHover = 0;
  document.addEventListener('pointerover', (e) => {
    if (!canSound() || !e.target.closest) return;
    if (!e.target.closest(HOVER_SEL)) return;
    const now = Date.now(); if (now - lastHover < 55) return; lastHover = now;
    playHover();
  }, { passive: true });
  document.addEventListener('click', (e) => {
    if (!canSound() || !e.target.closest) return;
    if (e.target.closest(CLICK_SEL)) playSoftClick();
  }, true);
})();
