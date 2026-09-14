"use client";

import { useState } from "react";
import Image from "next/image";
import VideoModal from "./VideoModal";

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="font-display text-xl sm:text-2xl text-parchment leading-tight">
          {project.title}
        </h3>

        <button
          onClick={() => setIsOpen(true)}
          aria-label={`Play ${project.title}`}
          className="group relative block w-full aspect-square overflow-hidden rounded-sm border-2 border-ink bg-ink-soft"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 90vw, 380px"
          />
          <div className="absolute inset-0 bg-ink/25 group-hover:bg-ink/45 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-ember border-[3px] border-ink text-ink text-xl sm:text-2xl shadow-[0_6px_0_0_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform">
              ▶
            </span>
          </span>
        </button>

        <p className="text-parchment/70 text-sm leading-relaxed">{project.tagline}</p>
      </div>

      {isOpen && (
        <VideoModal
          videoUrl={project.videoUrl}
          title={project.title}
          format={project.format}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
