# Moundir Rammit — Portfolio

A Next.js (App Router) portfolio site built to get clients to reach out directly —
framed as a director's showreel, with your work organized by category, a live
scroll-timecode bar, a credits ticker, and a one-tap WhatsApp contact flow.

This version is set up to deploy cleanly to **Vercel** and push cleanly to
**GitHub** — no video files are stored in the repo, and all images are
compressed `.webp`.

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Changes to any file save and reload instantly.

## Push to GitHub

```bash
git init                      # if not already a repo
git add .
git commit -m "Initial commit"
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

`node_modules`, `.next`, and OS files are already excluded via `.gitignore`,
so the repo stays small and fast to clone.

## Deploy to Vercel

1. Push this folder to a GitHub repo (above).
2. Import the repo at vercel.com/new.
3. Leave all settings on default — Vercel detects Next.js automatically and deploys.

No environment variables are required for the current setup.

## Videos are hosted externally — not in the repo

Large video files are never committed to GitHub. Instead, each project in
`data/projects.js` points to a `videoUrl`, which can be:

- a **Cloudinary** direct file link (what's used for the two projects already
  wired up), or
- a **YouTube** link (Unlisted works fine) — `youtube.com/watch?v=...` or
  `youtu.be/...`

Clicking "Watch Video" on any project opens a lightbox (`components/VideoModal.jsx`)
that loads the video from that URL — nothing plays until the visitor clicks,
which keeps the site fast.

**Before uploading a new video to Cloudinary:** compress it first if it's 4K
or very large — Cloudinary can transcode quality automatically, but very
large source files still slow down your upload and delivery. Keep file
names clean and descriptive (e.g. `brand-campaign-name.mp4`).

## Add a new project

Everything the Work section shows comes from `data/projects.js`. Copy an
existing object and fill in your own values — nothing else needs to change:

```js
{
  scene: "03",
  category: "AI Experiments",   // one of the categories below
  client: "Client Name",
  title: "Project Title",
  tagline: "One line that sells the idea.",
  year: "2026",
  format: "16:9",                // or "9:16" for vertical
  runtime: "00:00:12",
  role: "AI Creative Direction · Post",
  description: "A short paragraph on the brief and the approach.",
  tools: ["Sora", "VEO", "Seedance", "Premiere Pro"],
  image: "/images/covers/your-cover.webp",
  videoUrl: "https://res.cloudinary.com/your-cloud/video/upload/....mp4",
}
```

Categories currently supported (edit the list in `data/projects.js` if you
want different ones): **AI Commercials · UGC Ads · AI Experiments · Personal
Creative Projects**. The filter bar on the site is generated automatically
from whichever categories your projects actually use.

### Cover images

Add a small, compressed cover image to `public/images/covers/` — aim for a
`.webp` around 800×1000px and under 100KB. A quick way to produce one from
any image or exported video frame:

```bash
# using the Pillow Python library
python3 -c "
from PIL import Image
im = Image.open('your-frame.jpg').convert('RGB')
im.save('public/images/covers/your-cover.webp', 'WEBP', quality=80)
"
```

## Adding a whole new section (general recipe)

Every section on the site follows the same three-step pattern. To add a
brand-new section from scratch:

1. **(Optional) Add a data file** in `data/` if the section lists repeatable
   items (copy the shape of `data/projects.js`).
2. **Create a component** in `components/` (copy `components/Work.jsx` as a
   starting template if it's a gallery/grid, or any existing section for a
   single block of content). Give it a unique `id` on its outer `<section>`
   so it can be linked to from the nav.
3. **Register it in two places:**
   - `app/page.js` — import the component and add it inside `<main>` in
     the order you want it to appear.
   - `components/Nav.jsx` — add an `<a href="#your-id">Label</a>` link if
     it should appear in the header menu.

That's the whole pattern — no other file needs touching.


Everything in the Contact section and the header button reads from
`data/site.js`:

```js
export const site = {
  ...
  email: "you@example.com",
  whatsappNumber: "48000000000",
  linkedin: "",     // paste your LinkedIn URL to show the button
  instagram: "",
  tiktok: "",
  youtube: "",
};
```

Any social field left as `""` is automatically hidden — no broken/empty
buttons will show on the live site.

## SEO, favicon & social previews

`app/layout.js` sets the page title, description, and Open Graph/Twitter
card metadata. `app/icon.png` is the favicon and `app/opengraph-image.jpg`
is the image shown when the site is shared on social media or messaging
apps — both use Next.js's automatic file-based conventions, so no extra
code is needed if you want to swap them for your own artwork later (just
replace the files, same names).

Update `siteUrl` at the top of `app/layout.js` once you have your real
domain, so Open Graph links resolve correctly.

## About the "Framer" question

Framer's own site builder uses its visual canvas and component system —
it doesn't import an existing Next.js/React codebase directly. Two honest
paths if you want to keep editing visually in Framer instead of code:

- Rebuild the sections in Framer's canvas, using this project as the exact
  spec (copy, colors, layout, video links) for a designer or for yourself.
- Or keep this as a real Next.js site (which a developer can extend forever)
  and use Framer separately for quick one-off landing pages if you ever
  need one.

## Project structure

```
app/                 Next.js App Router: layout, page, global styles, icon, OG image
components/          One file per section/piece (Hero, Work, ProjectCard, VideoModal, About, Craft, Contact, Nav, Ticker, ScrollProgress)
data/                projects.js (your case studies) and site.js (contact, social, toolkit)
public/images/       Compressed .webp cover images and portrait — no video files
```
