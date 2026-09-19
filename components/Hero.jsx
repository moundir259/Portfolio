"use client";

import { useState } from "react";
import Image from "next/image";

const HOOK_VIDEO_ID = "Dq1qh2QqoYY";

function scrollToWork() {
  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
}

/*
  The hero artwork is a 16:9 ad (1672 × 940). The old full-screen version used
  object-cover, which crops the sides on phones and the top/bottom on wide
  screens. Here the artwork lives in a stage that is ALWAYS exactly 16:9, so
  every edge and every detail is visible on any screen:
    - mobile: the stage is full width, edge to edge
    - desktop: the stage is as large as fits in the viewport (minus the nav
      and the buttons), centred, with a soft blurred copy of the artwork
      filling the space around it
  The reel iframe uses the same stage, so it is never cropped either.
*/
export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="top"
      className="relative w-full min-h-[100svh] overflow-hidden bg-ink flex flex-col items-center justify-center pt-[84px] pb-8 sm:pb-10"
    >
      {/* Ambient backdrop — blurred, darkened copy of the artwork */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-cta.webp"
          alt=""
          fill
          sizes="256px"
          quality={40}
          className="object-cover object-center scale-110 blur-3xl opacity-50"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* Stage — always 16:9, centred, never cropped */}
      <div className="relative z-10 w-full flex justify-center">
        <div
          className="relative w-full aspect-video bg-ink sm:shadow-[0_20px_80px_rgba(0,0,0,0.65)] sm:ring-1 sm:ring-white/10"
          style={{
            maxWidth:
              "min(100%, max(70vw, calc((100svh - 15rem) * 16 / 9)), 1672px)",
          }}
        >
          {!isPlaying ? (
            <Image
              src="/images/hero-cta.webp"
              alt="Moundir Rammit — Professional AI video editing and content production"
              fill
              priority
              sizes="(max-width: 1672px) 100vw, 1672px"
              quality={90}
              className="object-contain object-center"
            />
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
      </div>

      {/* Buttons sit BELOW the artwork so they never cover any of it */}
      <div className="relative z-10 mt-6 sm:mt-8 px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
        {!isPlaying ? (
          <>
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
          </>
        ) : (
          <button
            onClick={() => {
              setIsPlaying(false);
              scrollToWork();
            }}
            className="inline-flex items-center gap-2 rounded-full bg-danger border-[3px] border-ink px-6 py-3 text-xs sm:text-sm font-body font-extrabold uppercase tracking-wide text-parchment shadow-[0_6px_0_0_rgba(0,0,0,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_rgba(0,0,0,0.4)] active:translate-y-0.5 active:shadow-[0_2px_0_0_rgba(0,0,0,0.4)] transition-all"
          >
            Skip to Projects →
          </button>
        )}
      </div>
    </section>
  );
}
