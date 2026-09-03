import Image from "next/image";
import { whatsappHref } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Portrait, full-bleed right */}
      <div className="absolute inset-0">
        <Image
          src="/images/profile.webp"
          alt="Moundir Rammit, AI Artist and Creative Technologist, lighting a flame"
          fill
          priority
          className="object-cover object-[70%_20%] sm:object-[75%_center]"
        />
        {/* Feathered gradient so type sits legibly over the frame */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent sm:via-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 min-h-[100svh] flex flex-col justify-center pt-24 pb-16">
        <p className="eyebrow mb-6">AI Artist &amp; Creative Technologist · Kraków, PL</p>

        <h1 className="font-display italic text-[13vw] sm:text-6xl md:text-7xl leading-[0.98] text-parchment max-w-3xl">
          Every campaign
          <br />
          starts with a spark.
        </h1>

        <p className="mt-8 max-w-xl text-base sm:text-lg text-parchment/80 font-body">
          I'm <span className="text-parchment font-semibold">Moundir Rammit</span> — creating
          cinematic AI commercials, visual stories, and digital experiences for brands where real
          filmmaking meets generative production.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-mono uppercase tracking-widest2 text-ink hover:bg-ember-soft transition-colors"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-parchment/25 px-6 py-3 text-sm font-mono uppercase tracking-widest2 text-parchment/80 hover:border-parchment/60 hover:text-parchment transition-colors"
          >
            See the work ↓
          </a>
        </div>
      </div>
    </section>
  );
}
