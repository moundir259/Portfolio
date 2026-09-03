"use client";

import { useEffect } from "react";

function getYouTubeEmbedUrl(url) {
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/,
  ];
  for (const re of patterns) {
    const match = url.match(re);
    if (match) return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
  }
  return null;
}

export default function VideoModal({ videoUrl, title, format = "16:9", onClose }) {
  const isPortrait = format === "9:16";
  const youtubeEmbed = getYouTubeEmbedUrl(videoUrl);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm px-4 py-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        onClick={onClose}
        aria-label="Close video"
        className="absolute top-5 right-5 sm:top-8 sm:right-8 text-parchment/80 hover:text-ember font-mono text-sm uppercase tracking-widest2 border border-parchment/25 rounded-full px-4 py-2 hover:border-ember transition-colors"
      >
        Close ✕
      </button>

      <div
        className={`relative w-full ${isPortrait ? "max-w-sm" : "max-w-4xl"} ${
          isPortrait ? "aspect-[9/16]" : "aspect-video"
        } bg-black rounded-sm overflow-hidden border border-brass/30 shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {youtubeEmbed ? (
          <iframe
            src={youtubeEmbed}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            className="w-full h-full object-contain"
            src={videoUrl}
            controls
            autoPlay
            playsInline
          />
        )}
      </div>
    </div>
  );
}
