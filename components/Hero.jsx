"use client";

import { useState } from "react";
import Image from "next/image";

const HOOK_VIDEO_ID = "Dq1qh2QqoYY";

function scrollToWork() {
  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      {/* Full-bleed thumbnail, replaced by the live reel once playing */}
      <div className="absolute inset-0">
        {!isPlaying ? (
          <>
            <Image
              src="/images/hero-cta.webp"
              alt="Moundir Rammit — Professional AI video editing and content production"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Light feathering only, so the artwork reads at full strength */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
          </>
        ) : (
          <iframe
            key="reel"
            src={`https://www.youtube.com/embed/${HOOK_VIDEO_ID}?autoplay=1&rel=0`}
            title="Moundir Rammit — Showreel"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {/* Idle state — the two entry buttons */}
      {!isPlaying && (
        <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-end gap-5 pb-16 sm:pb-20 px-6">
          <button
            onClick={() => setIsPlaying(true)}
            className="inline-flex items-center gap-3 rounded-full bg-ember border-[3px] border-ink px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-body font-extrabold uppercase tracking-wide text-ink shadow-[0_7px_0_0_rgba(0,0,0,0.4)] hover:-translate-y-0.5 hover:shadow-[0_9px_0_0_rgba(0,0,0,0.4)] active:translate-y-0.5 active:shadow-[0_3px_0_0_rgba(0,0,0,0.4)] transition-all"
          >
            <span className="text-xl leading-none">▶</span> Watch the Reel
          </button>

          <button
            onClick={scrollToWork}
            className="inline-flex items-center gap-2 rounded-full border-2 border-parchment/50 px-6 py-3 text-xs sm:text-sm font-body font-bold uppercase tracking-wide text-parchment/90 hover:border-parchment hover:bg-parchment/10 transition-colors"
          >
            Skip to Projects ↓
          </button>
        </div>
      )}

      {/* Playing state — skip pill moves to the top right */}
      {isPlaying && (
        <button
          onClick={() => {
            setIsPlaying(false);
            scrollToWork();
          }}
          className="absolute top-24 right-5 sm:right-8 z-20 inline-flex items-center gap-2 rounded-full bg-danger border-[3px] border-ink px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-body font-extrabold uppercase tracking-wide text-parchment shadow-[0_6px_0_0_rgba(0,0,0,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_rgba(0,0,0,0.4)] active:translate-y-0.5 active:shadow-[0_2px_0_0_rgba(0,0,0,0.4)] transition-all"
        >
          Skip to Projects →
        </button>
      )}
    </section>
  );
}
