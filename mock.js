// Mock data for Sahil Bhoi — Cinematic Portfolio

export const personal = {
  name: "Sahil Bhoi",
  role: "VFX Artist • Video Editor • Creator",
  location: "Raipur, India",
  phone: "8435149722",
  email: "sahilbhoi09@gmail.com",
  experience: "3+",
  tagline: "I CREATE CINEMATIC EXPERIENCES",
  bio: "Creative VFX artist & editor with 3+ years of experience turning raw footage into cinematic visual stories. Known for atmospheric visuals, bold color grading, and social media optimized edits.",
  longBio: "I transform ordinary footage into extraordinary cinematic moments. My work blends atmospheric color grading, intricate compositing, and motion design to craft visuals that feel like moments stolen from a blockbuster film. Whether it's a 15-second reel or a long-form narrative, every frame is obsessively crafted.",
  instagram: [
    { handle: "its.sahil2809", url: "https://instagram.com/its.sahil2809" },
    { handle: "sxb.edits09", url: "https://instagram.com/sxb.edits09" },
  ],
};

export const skills = [
  { name: "Motion Tracking", level: 92, icon: "Crosshair" },
  { name: "Particle FX", level: 88, icon: "Sparkles" },
  { name: "Compositing", level: 95, icon: "Layers" },
  { name: "Cinematic Color Grading", level: 96, icon: "Palette" },
  { name: "Sound Design", level: 80, icon: "AudioWaveform" },
  { name: "Editing Rhythm & Pacing", level: 94, icon: "Film" },
];

// Real brand logos served from Wikipedia / Wikimedia (public brand assets)
export const software = [
  {
    name: "DaVinci Resolve",
    description: "Color grading & finishing",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/DaVinci_Resolve_17_logo.svg/1200px-DaVinci_Resolve_17_logo.svg.png",
    color: "#d94436",
    glow: "rgba(217, 68, 54, 0.45)",
  },
  {
    name: "Premiere Pro",
    description: "Editing pipeline",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png",
    color: "#9999ff",
    glow: "rgba(153, 153, 255, 0.4)",
  },
  {
    name: "After Effects",
    description: "Motion graphics & VFX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Adobe_After_Effects_CC_icon.svg/1200px-Adobe_After_Effects_CC_icon.svg.png",
    color: "#d291ff",
    glow: "rgba(210, 145, 255, 0.4)",
  },
  {
    name: "CapCut Pro",
    description: "Social-first editing",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/CapCut_logo.svg/1200px-CapCut_logo.svg.png",
    color: "#a5d0ff",
    glow: "rgba(165, 208, 255, 0.4)",
  },
];

export const achievements = [
  { label: "Instagram Audience", value: 100000, suffix: "+", sub: "Across creator pages" },
  { label: "Viral Reach", value: 100000, suffix: "+", sub: "Single-post record" },
  { label: "Projects Delivered", value: 120, suffix: "+", sub: "Brand & creator edits" },
  { label: "Years Experience", value: 3, suffix: "+", sub: "Since 2022" },
];

export const works = [
  {
    id: "w1",
    title: "Neon Drift",
    category: "Cinematic Reel",
    duration: "0:32",
    year: 2025,
    tags: ["Color Grade", "Compositing", "Sound Design"],
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80",
    description: "A high-contrast nocturnal edit chasing chrome and rain-soaked neon.",
    embedUrl: "",
  },
  {
    id: "w2",
    title: "Ashes of Tomorrow",
    category: "Short Film VFX",
    duration: "1:48",
    year: 2025,
    tags: ["Particle FX", "Motion Tracking"],
    poster: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80",
    description: "Embers, atmospheric haze, and practical VFX composited into a single breath.",
    embedUrl: "",
  },
  {
    id: "w3",
    title: "Signal Lost",
    category: "Music Video",
    duration: "2:54",
    year: 2024,
    tags: ["Editing", "Grade"],
    poster: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
    description: "Rhythmic cuts married to a bruised magenta palette.",
    embedUrl: "",
  },
  {
    id: "w4",
    title: "Kinetic Bloom",
    category: "Brand Ad",
    duration: "0:21",
    year: 2024,
    tags: ["Motion Graphics", "Sound"],
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
    description: "Type, tempo, and texture layered for a scroll-stopping brand spot.",
    embedUrl: "",
  },
  {
    id: "w5",
    title: "Ghost Frequency",
    category: "Experimental",
    duration: "1:12",
    year: 2025,
    tags: ["Compositing", "Particle FX"],
    poster: "https://images.unsplash.com/photo-1518621012118-1d6d83fe6d5a?w=1200&q=80",
    description: "Analog distortion meets weightless particle storms.",
    embedUrl: "",
  },
  {
    id: "w6",
    title: "Midnight Monsoon",
    category: "Travel Film",
    duration: "2:08",
    year: 2024,
    tags: ["Grade", "Pacing"],
    poster: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=1200&q=80",
    description: "Raipur rains shot and graded into a moody cinematic travelogue.",
    embedUrl: "",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Craft" },
  { id: "software", label: "Tools" },
  { id: "achievements", label: "Impact" },
  { id: "contact", label: "Contact" },
];
