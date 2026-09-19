// Add new work by pushing another object into this array.
// The Work section renders every entry automatically — nothing
// else in the site needs to change.
//
// category must be one of: "AI Commercials", "UGC Ads",
// "AI Experiments", "Personal Creative Projects"
//
// videoUrl can be:
//   - a direct file link (e.g. Cloudinary .mp4 URL)
//   - a YouTube link (youtube.com/watch?v=... or youtu.be/...) — unlisted works fine
export const projects = [
  {
    scene: "01",
    category: "AI Commercials",
    client: "Hamoud Boualem",
    title: "La Klasse",
    tagline: "A 148-year-old house, shot like it was made yesterday.",
    year: "2026",
    format: "16:9",
    runtime: "00:00:11",
    role: "AI Creative Direction · Cinematography · Post",
    description:
      "Hamoud Boualem has been Algeria's soft drink since 1878, born in Belcourt, Algiers. For 'La Klasse', the brief was to give a heritage brand a contemporary commercial pulse — full cinematic lighting, product choreography, and a pace built for broadcast and premium digital placements, generated and composited entirely through an AI-first production pipeline.",
    tools: ["Seedance 2.0", "Kling 3.0", "Runway Gen-3"],
    image: "/images/covers/hamoud-cover.webp",
    videoUrl:
      "https://res.cloudinary.com/slek0sfq/video/upload/v1784629127/Hammoud_La_Klasse_dblkty.mp4",
  },
  {
    scene: "02",
    category: "UGC Ads",
    client: "El-Madina Restaurant",
    title: "Every Bite Worth It",
    tagline: "A restaurant reel built for the scroll, not the billboard.",
    year: "2026",
    format: "9:16",
    runtime: "00:00:15",
    role: "AI Creative Direction · UGC Direction · Post",
    description:
      "El-Madina needed a presentation reel that felt native to Reels and TikTok — close, warm, appetite-first. Shot in vertical 9:16 with UGC pacing and generative food styling, the piece is built to stop a thumb mid-scroll and hold it through the last frame.",
    tools: ["Seedance 2.0", "Veo 3", "Higgsfield"],
    image: "/images/covers/el-madina-cover.webp",
    videoUrl:
      "https://res.cloudinary.com/slek0sfq/video/upload/v1784629253/El-Madina_Presentation_oc4cmb.mp4",
  },
  {
    scene: "03",
    category: "AI Commercials",
    client: "HOSHI",
    title: "Draw. Don't Wish!",
    tagline: "The impossible launch — a pen that gives life to whatever it draws.",
    year: "2026",
    format: "16:9",
    runtime: "00:00:40",
    role: "AI Creative Direction · Cinematography · Edit",
    description:
      "A 30–40 second cinematic launch spot for something impossible: HOSHI, a pen filled with an elixir-of-life ink that brings to life anything it draws. Built as a product launch film — the promise of the pen, the drawing, and the moment the sketch breathes — made to feel like the kind of product people would line up at 6am to own.",
    tools: ["Seedance 2.0", "Veo 3", "CapCut"],
    image: "https://i.ytimg.com/vi/yCVyuELk-L0/maxresdefault.jpg",
    videoUrl: "https://youtu.be/yCVyuELk-L0",
  },
  {
    scene: "04",
    category: "UGC Ads",
    client: "Pomidory z Piotrowic",
    title: "Pomidory z Pietrowice",
    tagline: "A family harvest story, told for the local feed.",
    year: "2026",
    format: "9:16",
    runtime: "00:00:26",
    role: "AI Creative Direction · Edit",
    description:
      "A warm, short-form introduction for a family-run Polish tomato grower — built to carry their harvest and quality story to a local Facebook audience.",
    tools: ["CapCut", "AI Video Generation"],
    image: "https://i.ytimg.com/vi/J9X8aM_NEeU/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/J9X8aM_NEeU",
  },
  {
    scene: "05",
    category: "Personal Creative Projects",
    client: "Personal Project",
    title: "#Just_Do_It",
    tagline: "One cut, one beat, no wasted frames.",
    year: "2026",
    format: "9:16",
    runtime: "00:00:08",
    role: "AI Creative Direction · Edit",
    description:
      "An 8-second personal motion study — a single sharp cut built around momentum rather than narrative.",
    tools: ["CapCut", "AI Video Generation"],
    image: "https://i.ytimg.com/vi/lfemswoz_vk/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/lfemswoz_vk",
  },
  {
    scene: "06",
    category: "Personal Creative Projects",
    client: "Personal Project",
    title: "When I Disconnect",
    tagline: "The world fades out the moment the music starts.",
    year: "2026",
    format: "9:16",
    runtime: "00:00:20",
    role: "AI Creative Direction · Edit",
    description:
      "A POV creative piece built around a simple idea — headphones on, world off. Mood over message.",
    tools: ["CapCut", "AI Video Generation"],
    image: "https://i.ytimg.com/vi/lFsLw-hXllY/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/lFsLw-hXllY",
  },
];

export const categories = [
  "All",
  "AI Commercials",
  "UGC Ads",
  "AI Experiments",
  "Personal Creative Projects",
];
