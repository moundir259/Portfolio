import Image from "next/image";
import { site } from "@/data/site";

const facts = [
  { label: "Based in", value: "Kraków, Poland" },
  { label: "Works in", value: "Arabic · French · English" },
  { label: "Focus", value: "AI-first commercials, UGC, narrative film" },
  { label: "Available for", value: "Brand campaigns, worldwide" },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <div className="relative aspect-[4/5] w-full max-w-sm rounded-sm overflow-hidden border border-brass/30">
            <Image
              src="/images/profile.webp"
              alt="Portrait of Moundir Rammit"
              fill
              className="object-cover object-[center_15%]"
            />
          </div>
        </div>

        <div className="md:col-span-8">
          <p className="eyebrow mb-4">About</p>
          <h2 className="font-display text-4xl sm:text-5xl text-parchment mb-8 max-w-xl">
            A director's eye, an engineer's pipeline.
          </h2>

          <p className="text-parchment/80 leading-relaxed max-w-2xl mb-4">
            I'm <span className="text-parchment font-semibold">{site.name}</span>, an AI Creative
            Director and Visual Artist based in {site.location}. Over the years I've built a
            multidisciplinary workflow combining AI, filmmaking, and photography to produce
            cinematic content for brands, commercial products, and narrative projects.
          </p>
          <p className="text-parchment/80 leading-relaxed max-w-2xl mb-6">
            I create AI-first commercials, UGC campaigns, short films, and high-end visuals that
            blend real-world production with cutting-edge generative tools. The focus isn't just
            beautiful imagery — it's work that captures attention, communicates emotion, and
            delivers results.
          </p>

          <p className="font-display italic text-xl text-ember-soft max-w-2xl mb-10">
            Combining creativity, technology and storytelling to build modern digital
            experiences.
          </p>

          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-6 max-w-2xl">
            {facts.map((f) => (
              <div key={f.label} className="border-t border-white/10 pt-3">
                <dt className="font-mono text-[0.65rem] uppercase tracking-widest2 text-smoke mb-1">
                  {f.label}
                </dt>
                <dd className="text-parchment/90">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
