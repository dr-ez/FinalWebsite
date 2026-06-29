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
    title: 'Land of Heroes — Mobile Game Ad',
    cat: 'Video Editing · Color Grading',
    desc: 'Full production editing for Tamatem\'s Land of Heroes mobile game campaign. Cinematic color grade, multi-layer timeline, audio mix, and final delivery. The project featured in this portfolio\'s cinematic intro.',
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
let deskLightBulb;
let pcRigLight;

// Dynamic Screen Canvases & Textures
let canvasLeft, ctxLeft, textureLeft;
let canvasCenter, ctxCenter, textureCenter;
let canvasRight, ctxRight, textureRight;

// Parallax parameters
let mouseParallaxX = 0, mouseParallaxY = 0;
let tiltParallaxX = 0, tiltParallaxY = 0;
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
  ctxCenter.fillStyle = '#1e1e1e';
  ctxCenter.fillRect(0, 0, 1024, 576);

  // Menu bar
  ctxCenter.fillStyle = '#161616';
  ctxCenter.fillRect(0, 0, 1024, 30);
  ctxCenter.fillStyle = '#8e8e8e';
  ctxCenter.font = '11px sans-serif';
  ctxCenter.fillText("File  Edit  Clip  Sequence  Markers  Graphics  Window  Help", 20, 19);
  ctxCenter.fillText("Premiere Pro 2026 - Project: Land of Heroes", 380, 19);

  // Left sidebar project bin
  ctxCenter.fillStyle = '#252525';
  ctxCenter.fillRect(10, 40, 280, 310);
  ctxCenter.strokeStyle = '#2d2d2d';
  ctxCenter.strokeRect(10, 40, 280, 310);
  ctxCenter.fillStyle = '#8e8e8e';
  ctxCenter.font = '10px sans-serif';
  ctxCenter.fillText("Project: Land of Heroes", 20, 56);
  ctxCenter.fillStyle = 'rgba(255, 140, 0, 0.15)';
  ctxCenter.fillRect(20, 70, 16, 12); // folder icon
  ctxCenter.fillStyle = '#bbb';
  ctxCenter.fillText("Land_Of_Heroes_Footage", 44, 80);

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

// Setup the entire Three.js scene
function initThree() {
  initScreenCanvases();

  const width  = filmCanvas.clientWidth;
  const height = filmCanvas.clientHeight;

  renderer = new THREE.WebGLRenderer({ canvas: filmCanvas, antialias: true, alpha: true });
  renderer.setSize(width, height, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(camState.x, camState.y, camState.z);

  // ── 3D OBJECTS CONSTRUCTED FROM SCRATCH ──

  // A. Desk
  const deskGeom = new THREE.BoxGeometry(6.4, 0.15, 3.4);
  const deskMat  = new THREE.MeshStandardMaterial({ color: 0x18100b, roughness: 0.95, metalness: 0.0 });
  deskMesh = new THREE.Mesh(deskGeom, deskMat);
  deskMesh.position.set(0, -0.9, 0);
  deskMesh.receiveShadow = true;
  deskMesh.castShadow = true;
  scene.add(deskMesh);

  // Desk legs (cylinders)
  const legGeom = new THREE.CylinderGeometry(0.05, 0.05, 1.8);
  const legMat  = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.8, roughness: 0.3 });
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
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x161616, roughness: 0.4 });
  const standMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.7, roughness: 0.2 });

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

  // C. Mechanical Keyboard (Refined to eliminate coplanar Z-fighting)
  const kbBase = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.05, 0.6), standMat);
  kbBase.position.set(0, -0.798, 0.8); // Top surface is at -0.773 (2mm vertical offset above bezel)
  kbBase.receiveShadow = true;
  kbBase.castShadow = true;
  scene.add(kbBase);

  // Bezel border frame for keyboard case
  const kbBezel = new THREE.Mesh(new THREE.BoxGeometry(1.64, 0.07, 0.64), frameMat);
  kbBezel.position.set(0, -0.81, 0.8); // Top surface is at -0.775
  kbBezel.castShadow = true;
  scene.add(kbBezel);

  // Keyboard Keys (Rows & Columns of tiny boxes)
  const keyMatWhite  = new THREE.MeshStandardMaterial({ color: 0xdddddd, roughness: 0.5 });
  const keyMatBlue   = new THREE.MeshStandardMaterial({ color: 0x90caf9, roughness: 0.5 });
  const keyMatPurple = new THREE.MeshStandardMaterial({ color: 0xb39ddb, roughness: 0.5 });
  const keyMatAmber  = new THREE.MeshBasicMaterial({ color: 0xff8c00 }); // Glowing Basic

  keysGroup.position.set(-0.63, -0.77, 0.62);
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 15; c++) {
      // Spacebar handling on row 4
      if (r === 4) {
        if (c === 5) {
          const key = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.03, 0.06), keyMatWhite);
          key.position.set(7 * 0.09, 0, r * 0.08);
          key.castShadow = true;
          keysGroup.add(key);
        }
        if (c >= 5 && c <= 9) continue;
      }

      let mat = keyMatWhite;
      if ((c === 0 && r === 0) || c === 14 || (c === 13 && r === 4)) mat = keyMatAmber;
      else if (c % 4 === 0) mat = keyMatBlue;
      else if (r % 2 === 0 && c % 3 === 0) mat = keyMatPurple;

      const key = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.03, 0.06), mat);
      key.position.set(c * 0.09, 0, r * 0.08);
      key.castShadow = true;
      keysGroup.add(key);
    }
  }
  scene.add(keysGroup);

  // Mouse (Refined with wheel)
  const mouseGroup = new THREE.Group();
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
  const speakerL = new THREE.Mesh(speakerGeom, frameMat);
  speakerL.position.set(-1.0, -0.62, 0.2);
  speakerL.castShadow = true;
  
  const coneMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 });
  const tweeterL = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.005, 12), coneMat);
  tweeterL.position.set(0, 0.1, 0.121);
  tweeterL.rotation.x = Math.PI / 2;
  speakerL.add(tweeterL);

  const wooferL = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.005, 12), coneMat);
  wooferL.position.set(0, -0.08, 0.121);
  wooferL.rotation.x = Math.PI / 2;
  speakerL.add(wooferL);
  scene.add(speakerL);

  const speakerR = new THREE.Mesh(speakerGeom, frameMat);
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
  scene.add(speakerR);

  // E. Classic Desk Lamp (Far Left, replacing volumetric tripod)
  const lampGroup = new THREE.Group();
  lampGroup.position.set(-2.4, -0.825, 0.4); // sits on desk surface

  const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.02, 16), standMat);
  lampGroup.add(lampBase);

  const lampLower = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.5), standMat);
  lampLower.position.set(0, 0.22, -0.05);
  lampLower.rotation.z = Math.PI / 6;
  lampGroup.add(lampLower);

  const lampUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.55), standMat);
  lampUpper.position.set(0.12, 0.55, 0.05);
  lampUpper.rotation.z = -Math.PI / 8;
  lampGroup.add(lampUpper);

  const lampHead = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.14, 0.18, 16, 1, false), frameMat);
  lampHead.position.set(0.24, 0.72, 0.05);
  lampHead.rotation.z = -Math.PI / 3; // angle pointing down-right
  lampGroup.add(lampHead);
  scene.add(lampGroup);

  // SpotLight pointing down-right from the lamp head
  deskLightBulb = new THREE.PointLight(0xffa233, 5.0, 7);
  deskLightBulb.position.set(-2.16, -0.1, 0.45);
  deskLightBulb.castShadow = true;
  scene.add(deskLightBulb);

  // F. Computer Tower Custom PC Chassis (Right - Matching Reference Image)
  const pcGroup = new THREE.Group();
  pcGroup.position.set(1.85, -1.65, -0.2);

  // PSU Shroud base cover (dark chassis bottom box)
  const psuShroud = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.35, 1.35), frameMat);
  psuShroud.position.set(0, -0.55, 0);
  psuShroud.castShadow = true;
  psuShroud.receiveShadow = true;
  pcGroup.add(psuShroud);

  // Top panel
  const topPanel = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.08, 1.35), frameMat);
  topPanel.position.set(0, 0.68, 0);
  topPanel.castShadow = true;
  pcGroup.add(topPanel);

  // Rear panel
  const rearPanel = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.3, 0.08), frameMat);
  rearPanel.position.set(0, 0.06, -0.63);
  rearPanel.castShadow = true;
  pcGroup.add(rearPanel);

  // Front panel (with vertical intake detailing)
  const frontPanel = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.3, 0.08), new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9, wireframe: true }));
  frontPanel.position.set(0, 0.06, 0.63);
  pcGroup.add(frontPanel);

  // Right Side cover (Solid metal)
  const rightCover = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.3, 1.3), frameMat);
  rightCover.position.set(0.38, 0.06, 0);
  rightCover.castShadow = true;
  pcGroup.add(rightCover);

  // Glass Side panel (Left)
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.35,
    roughness: 0.1,
    transmission: 0.9,
    depthWrite: false
  });
  const glassPanel = new THREE.Mesh(new THREE.BoxGeometry(0.02, 1.3, 1.3), glassMat);
  glassPanel.position.set(-0.38, 0.06, 0);
  pcGroup.add(glassPanel);

  // Motherboard Backplate (Dark grey/black)
  const mobo = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.1, 1.1), new THREE.MeshStandardMaterial({ color: 0x1e1e24, roughness: 0.85 }));
  mobo.position.set(0.32, 0.06, 0);
  pcGroup.add(mobo);

  // VRM Heatsinks on the left of CPU
  const heatsinkL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.28, 0.1), standMat);
  heatsinkL.position.set(0.27, 0.22, -0.28);
  pcGroup.add(heatsinkL);

  // CPU Cooler Hub and Fan (Glowing Blue ring & core)
  const aioBase = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.22, 0.22), new THREE.MeshStandardMaterial({ color: 0x222222 }));
  aioBase.position.set(0.24, 0.15, -0.05);
  pcGroup.add(aioBase);

  // 4 RAM Sticks (alternating blue/purple glowing rods)
  const ramColors = [0x00b0ff, 0xd500f9, 0x00b0ff, 0xd500f9];
  for (let i = 0; i < 4; i++) {
    const rMat = new THREE.MeshBasicMaterial({ color: ramColors[i] });
    const ram = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.26, 0.025), rMat);
    ram.position.set(0.25, 0.15, 0.08 + i * 0.045);
    pcGroup.add(ram);
  }

  // Horizontal GPU (Light grey/white, glowing blue LED strip)
  const gpuBody = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.14, 0.85), new THREE.MeshStandardMaterial({ color: 0xe0e0e0, roughness: 0.55 }));
  gpuBody.position.set(0.16, -0.15, -0.05);
  gpuBody.castShadow = true;
  pcGroup.add(gpuBody);

  const gpuLed = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.018, 0.82), new THREE.MeshBasicMaterial({ color: 0x00b0ff }));
  gpuLed.position.set(0.03, -0.15, -0.05);
  pcGroup.add(gpuLed);

  // PSU Box at bottom left (HDD/PSU box in case floor)
  const psuBox = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.3, 0.52), new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.7 }));
  psuBox.position.set(0.12, -0.36, -0.34);
  pcGroup.add(psuBox);

  // Orange case status LEDs on top right edge
  const statusLedR = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff3b30 }));
  statusLedR.position.set(-0.35, 0.73, 0.55);
  pcGroup.add(statusLedR);

  const statusLedG = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 8), new THREE.MeshBasicMaterial({ color: 0x4cd964 }));
  statusLedG.position.set(-0.35, 0.73, 0.52);
  pcGroup.add(statusLedG);

  scene.add(pcGroup);

  // Internal glowing case light
  pcRigLight = new THREE.PointLight(0x00f5ff, 4.0, 3.5);
  pcRigLight.position.set(1.65, -1.5, -0.2);
  pcRigLight.castShadow = true;
  scene.add(pcRigLight);


  // Generic Rig Fan Builder (flat cylinders in XZ plane radiating outwards)
  function createRigFanCustom(shroudColor, bladeColor, bladeOpacity = 0.7) {
    const group = new THREE.Group();
    // Shroud casing
    const shroudMat = new THREE.MeshBasicMaterial({ color: shroudColor, transparent: true, opacity: 0.8 });
    const isGlowing = shroudColor !== 0x1a1a1a && shroudColor !== 0x2c2c2c;
    const sMat = isGlowing ? shroudMat : new THREE.MeshStandardMaterial({ color: shroudColor, roughness: 0.7 });
    
    const shroud = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.04, 24, 1, true),
      sMat
    );
    group.add(shroud);

    // Hub
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.03, 12), new THREE.MeshStandardMaterial({ color: bladeColor, roughness: 0.6 }));
    group.add(hub);

    // Motion-blurred spin disc layers (three concentric transparent cylinders along Y)
    const blurMat1 = new THREE.MeshBasicMaterial({ color: bladeColor, transparent: true, opacity: bladeOpacity * 0.25 });
    const disc1 = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.005, 16), blurMat1);
    group.add(disc1);

    const blurMat2 = new THREE.MeshBasicMaterial({ color: bladeColor, transparent: true, opacity: bladeOpacity * 0.4 });
    const disc2 = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.006, 16), blurMat2);
    group.add(disc2);

    const blurMat3 = new THREE.MeshBasicMaterial({ color: bladeColor, transparent: true, opacity: bladeOpacity * 0.55 });
    const disc3 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.007, 16), blurMat3);
    group.add(disc3);

    // Blurred blade radial streaks (12 static thin bars of very low opacity, flat in XZ plane)
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

  // 1. Front Fans x3 (Glowing Blue, mounted on front panel facing forward, scaled and centered)
  fan1 = createRigFanCustom(0x00b0ff, 0x333333, 0.4);
  fan1.position.set(1.85, -1.25, 0.38);
  fan1.rotation.set(Math.PI / 2, 0, 0); // points along Z (pointing forward)
  scene.add(fan1);

  // fan2 (front middle)
  fan2 = createRigFanCustom(0x00b0ff, 0x333333, 0.4);
  fan2.position.set(1.85, -1.55, 0.38);
  fan2.rotation.set(Math.PI / 2, 0, 0); // points along Z
  scene.add(fan2);

  // fan3 (front lower)
  fan3 = createRigFanCustom(0x00b0ff, 0x333333, 0.4);
  fan3.position.set(1.85, -1.85, 0.38);
  fan3.rotation.set(Math.PI / 2, 0, 0); // points along Z
  scene.add(fan3);

  // G. Coffee Mug on desk (Shifted far left to clear keyboard & speakers)
  const mugBody = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.28), keyMatWhite);
  mugBody.position.set(-1.4, -0.73, 0.8);
  mugBody.castShadow = true;
  scene.add(mugBody);

  const mugLiquid = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.01), new THREE.MeshStandardMaterial({ color: 0x4e2714 }));
  mugLiquid.position.set(-1.4, -0.6, 0.8);
  scene.add(mugLiquid);

  const mugHandle = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.02, 6, 12), keyMatWhite);
  mugHandle.position.set(-1.53, -0.73, 0.8);
  scene.add(mugHandle);

  // Steam particle array (centered above relocated mug)
  for (let i = 0; i < 6; i++) {
    const steamPart = new THREE.Mesh(
      new THREE.SphereGeometry(0.012 + Math.random() * 0.01, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15 + Math.random() * 0.2 })
    );
    steamPart.position.set(-1.4 + (Math.random() - 0.5) * 0.05, -0.58 + Math.random() * 0.4, 0.8 + (Math.random() - 0.5) * 0.05);
    scene.add(steamPart);
    steamParticles.push({ mesh: steamPart, speed: 0.003 + Math.random() * 0.003, born: Date.now() });
  }



  // ── SCENE LIGHTING ──
  const globalAmbient = new THREE.AmbientLight(0x0a0a0c, 1.2);
  scene.add(globalAmbient);

  const deskSpotlight = new THREE.SpotLight(0xffa233, 9, 12, Math.PI / 4, 0.6, 1);
  deskSpotlight.position.set(0, 3.5, 3.5);
  deskSpotlight.target = deskMesh;
  deskSpotlight.castShadow = true;
  deskSpotlight.shadow.bias = -0.001;
  scene.add(deskSpotlight);

  // Shadows floor receiver plane
  const floorGeom = new THREE.PlaneGeometry(30, 30);
  const floorMat  = new THREE.ShadowMaterial({ opacity: 0.6 });
  const floorMesh = new THREE.Mesh(floorGeom, floorMat);
  floorMesh.position.y = -1.81;
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.receiveShadow = true;
  scene.add(floorMesh);

  // Dynamic dust particles
  const particleCount = 120;
  const pGeom = new THREE.BufferGeometry();
  const pPositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    pPositions[i]     = (Math.random() - 0.5) * 8; // x
    pPositions[i + 1] = (Math.random() - 0.5) * 4; // y
    pPositions[i + 2] = (Math.random() - 0.5) * 6; // z
  }
  pGeom.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0xff8c00,
    size: 0.016,
    transparent: true,
    opacity: 0.45
  });
  dustParticles = new THREE.Points(pGeom, pMat);
  scene.add(dustParticles);

  // Setup GSAP Camera Interpolation Snapping Timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cinematic-hero",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.0,
      snap: {
        snapTo: [0, 0.25, 0.5, 0.75, 1.0],
        duration: { min: 0.3, max: 0.6 },
        delay: 0.05,
        ease: "power2.out"
      },
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



  // 2. Pulse tower rig light color
  if (pcRigLight) {
    const time = Date.now() * 0.001;
    // Blend rgb cyan and orange
    const r = Math.sin(time) * 0.5 + 0.5;
    pcRigLight.color.setRGB(r * 0.8, (1 - r) * 0.8, 1);
  }

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

  // 4. Mug steam rising (resetting above the relocated mug at -1.4, 0.8)
  steamParticles.forEach(part => {
    part.mesh.position.y += part.speed;
    const age = Date.now() - part.born;
    part.mesh.material.opacity = Math.max(0, 0.3 * (1 - age / 1200));

    if (age > 1200) {
      part.mesh.position.set(-1.4 + (Math.random() - 0.5) * 0.05, -0.58, 0.8 + (Math.random() - 0.5) * 0.05);
      part.born = Date.now();
      part.mesh.material.opacity = 0.3;
    }
  });

  // 5. Parallax Camera target calculating
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

  tiltParallaxX = normalGamma * 0.5;
  tiltParallaxY = -normalBeta * 0.4;
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
  camera.aspect = cw / ch;
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

  projectModal.classList.add('open');
  projectModal.setAttribute('aria-hidden', 'false');
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
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
// INTERACTIVE REQUEST WIZARD LOGIC
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
let selectedRequestCategory = "";
let selectedRequestType = "3D Modeling & Visualization - Interior Design";

const requestGroups = {
  threeD: {
    label: "3D Modeling & Visualization",
    prompt: "Choose a 3D focus",
    options: [
      {
        value: "3D Modeling & Visualization - Interior Design",
        label: "Interior Design Visualization",
        body: "Hello Ezz,\n\nI would like to request support with an interior design visualization project.\n\nProject overview:\nSpace type and approximate size:\nDesign style or references:\nAvailable plans, photos, or measurements:\nPreferred deliverables:\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      },
      {
        value: "3D Modeling & Visualization - Product Visualization",
        label: "Product Visualization",
        body: "Hello Ezz,\n\nI would like to request product visualization work for a brand or product presentation.\n\nProduct overview:\nRequired visuals or animation:\nAvailable product files, photos, or references:\nPreferred style, mood, or examples:\nUsage platform:\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      },
      {
        value: "3D Modeling & Visualization - 3D Animation",
        label: "3D Animation",
        body: "Hello Ezz,\n\nI would like to request a 3D animation project.\n\nProject goal:\nScene, product, or space to animate:\nApproximate duration:\nVisual references or style direction:\nAvailable assets:\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      }
    ]
  },
  editing: {
    label: "Video Editing",
    prompt: "Choose an editing focus",
    options: [
      {
        value: "Video Editing - Short-Form Reel Editing",
        label: "Short-Form Reel Editing",
        body: "Hello Ezz,\n\nI would like to request short-form reel editing.\n\nProject goal:\nPlatform and format:\nApproximate number of reels:\nFootage status:\nPreferred pacing, captions, or reference style:\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      },
      {
        value: "Video Editing - Long-Form Video Editing",
        label: "Long-Form Video Editing",
        body: "Hello Ezz,\n\nI would like to request long-form video editing.\n\nProject goal:\nApproximate final duration:\nFootage status and total raw footage length:\nStructure, story, or reference videos:\nRequired graphics, captions, or sound work:\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      },
      {
        value: "Video Editing - Motion Design",
        label: "Motion Design",
        body: "Hello Ezz,\n\nI would like to request motion design support.\n\nProject goal:\nType of motion graphics needed:\nBrand assets or visual guidelines:\nPreferred animation style or references:\nFinal format and usage platform:\nTimeline or deadline:\nAdditional notes:\n\nThank you,"
      }
    ]
  },
  longTerm: {
    label: "Long-Term Project Request",
    prompt: "Choose a collaboration window",
    options: [
      {
        value: "Long-Term Project Request - 1-3 Months",
        label: "1-3 Months",
        body: "Hello Ezz,\n\nI would like to discuss a 1-3 month creative collaboration.\n\nProject or brand overview:\nSupport needed:\nExpected weekly or monthly workload:\nMain deliverables:\nCommunication and review rhythm:\nIdeal start date:\nAdditional notes:\n\nThank you,"
      },
      {
        value: "Long-Term Project Request - 3-6 Months",
        label: "3-6 Months",
        body: "Hello Ezz,\n\nI would like to discuss a 3-6 month production collaboration.\n\nProject or brand overview:\nSupport needed:\nExpected weekly or monthly workload:\nMain deliverables:\nCommunication and review rhythm:\nIdeal start date:\nAdditional notes:\n\nThank you,"
      },
      {
        value: "Long-Term Project Request - 6+ Months",
        label: "6+ Months",
        body: "Hello Ezz,\n\nI would like to discuss an ongoing creative partnership for more than 6 months.\n\nProject or brand overview:\nSupport needed:\nExpected weekly or monthly workload:\nMain deliverables:\nCommunication and review rhythm:\nIdeal start date:\nAdditional notes:\n\nThank you,"
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
  requestTool.classList.add("choices-open");
  requestChoices.style.display = "flex";
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
  requestDetails.value = option.body;
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
  if (soundEnabled) playUIClick();
}

makeRequestBtn?.addEventListener("click", openRequestChoices);
requestTypeSelect?.addEventListener("change", () => selectRequestType(requestTypeSelect.value));

function buildEmailUrls() {
  const type = requestTypeSelect.value || selectedRequestType || "General Project";
  const subject = `Request | ${type} |`;
  const body = requestDetails.value.trim();
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
  const openedWindow = window.open(urls[selectedProvider], "_blank");
  if (openedWindow) openedWindow.opener = null;
  if (mailConfirmationText) {
    mailConfirmationText.textContent = `${labels[selectedProvider]} should now open your prepared request in a new tab or mail app. Please review the draft and press send when you are ready. If no window appeared, allow popups and choose the email app again.`;
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

filmCanvas.addEventListener('click', (e) => {
  if (!renderer || !camera) return;

  const rect = filmCanvas.getBoundingClientRect();
  const mouse = new THREE.Vector2(
    ((e.clientX - rect.left) / rect.width) * 2 - 1,
    -((e.clientY - rect.top) / rect.height) * 2 + 1
  );

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  // Check keypress click
  const keyIntersects = raycaster.intersectObjects(keysGroup.children);
  if (keyIntersects.length > 0) {
    const keyMesh = keyIntersects[0].object;
    // Animate key depression
    const originalY = keyMesh.position.y;
    gsap.to(keyMesh.position, {
      y: originalY - 0.018,
      duration: 0.05,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut"
    });
    if (soundEnabled) playKeyboardClack();
    return;
  }

  // Check desk surface click
  if (deskMesh) {
    const deskIntersects = raycaster.intersectObject(deskMesh);
    if (deskIntersects.length > 0) {
      spawn3DRipple(deskIntersects[0].point);
      if (soundEnabled) playUIClick();
    }
  }
});



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
  reviewBtn.addEventListener('click', () => {
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
$$('.nav-link, .nav-cta, .contact-card, .filter-btn').forEach(el => {
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

// First chapter always visible before scroll
const firstChapter = $('chapterLanding');
if (firstChapter) {
  setTimeout(() => firstChapter.classList.add('active'), 300);
}

console.log('%c⚡ EZZ TANTAWY PORTFOLIO', 'color:#FF8C00;font-size:16px;font-weight:bold;');
console.log('%cScroll-driven cinematic portfolio — built with vanilla JS + Web Audio API', 'color:#888;font-size:12px;');
