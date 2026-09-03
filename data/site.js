// Update contact details in one place — every button and link reads from here.
export const site = {
  name: "Moundir Rammit",
  role: "AI Artist & Creative Technologist",
  tagline: "Creating cinematic AI commercials, visual stories and digital experiences.",
  journey:
    "Combining creativity, technology and storytelling to build modern digital experiences.",
  location: "Kraków, Poland",
  email: "moundir259@gmail.com",
  whatsappNumber: "48889642259",
  whatsappMessage: "Hi Moundir, I'd like to talk about a project.",
  // Add your links below (leave empty "" to hide the button on the site)
  linkedin: "",
  instagram: "",
  tiktok: "",
  youtube: "",
};

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export const emailHref = `mailto:${site.email}`;

export const socialLinks = [
  { label: "Email", href: emailHref },
  { label: "WhatsApp", href: whatsappHref },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Instagram", href: site.instagram },
  { label: "TikTok", href: site.tiktok },
  { label: "YouTube", href: site.youtube },
].filter((link) => link.href);

export const toolkit = [
  { name: "Seedance 2.0", use: "First/last-frame interpolation, character continuity" },
  { name: "Veo 3", use: "Ingredients-to-video, native audio" },
  { name: "Kling 3.0", use: "Motion realism, product choreography" },
  { name: "Runway Gen-3", use: "Fine-grained shot control" },
  { name: "Higgsfield", use: "Style transfer, UGC pacing" },
];

export const process = [
  {
    step: "Concept",
    detail:
      "The brief is broken into shots before a single frame is generated — storyboard, references, and a character or product sheet locked first.",
  },
  {
    step: "Generate",
    detail:
      "Each shot is produced across the AI toolset best suited to it, iterating on frame, motion, and continuity until the take holds.",
  },
  {
    step: "Composite",
    detail:
      "Real production technique — grading, sound design, edit rhythm — brings the generated footage the rest of the way to broadcast quality.",
  },
];
