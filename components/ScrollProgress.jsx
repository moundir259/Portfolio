"use client";

import { useEffect, useState } from "react";

const TOTAL_SECONDS = 150; // the page is framed as a 2:30 reel

function formatTimecode(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.floor(totalSeconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(pct);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const elapsed = formatTimecode(progress * TOTAL_SECONDS);
  const total = formatTimecode(TOTAL_SECONDS);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-[3px] w-full bg-white/10">
        <div
          className="h-full bg-ember transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <div className="hidden sm:flex justify-end pr-4 pt-1">
        <span className="eyebrow !text-[0.62rem] !tracking-[0.2em] text-smoke">
          {elapsed} / {total}
        </span>
      </div>
    </div>
  );
}
