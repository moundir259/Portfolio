"use client";

import { useState } from "react";
import Image from "next/image";
import VideoModal from "./VideoModal";

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="group border border-white/10 hover:border-brass/40 transition-colors rounded-sm overflow-hidden bg-ink-soft flex flex-col">
        {/* Cover image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.client} — ${project.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 90vw, 380px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />

          <div className="absolute top-3 left-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.62rem] uppercase tracking-widest2 text-parchment/80">
            <span className="text-ember">Scene {project.scene}</span>
            <span>{project.format}</span>
            <span>{project.runtime}</span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-center gap-2 rounded-full bg-ember/95 px-5 py-2.5 text-xs font-mono uppercase tracking-widest2 text-ink hover:bg-ember-soft transition-colors"
          >
            ▶ Watch Video
          </button>
        </div>

        {/* Copy */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          <p className="font-mono text-[0.62rem] uppercase tracking-widest2 text-smoke">
            {project.category}
          </p>
          <h3 className="font-display text-2xl text-parchment leading-tight">
            {project.client}
          </h3>
          <p className="font-display italic text-ember-soft text-sm">{project.tagline}</p>
          <p className="text-parchment/70 text-sm leading-relaxed">{project.description}</p>

          <div className="mt-auto pt-3 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/15 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-smoke"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <VideoModal
          videoUrl={project.videoUrl}
          title={`${project.client} — ${project.title}`}
          format={project.format}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
