"use client";

import { useState, useMemo } from "react";
import { projects, categories } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Work() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  const usedCategories = categories.filter(
    (c) => c === "All" || projects.some((p) => p.category === c)
  );

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <p className="eyebrow mb-4">Works</p>
          <h2 className="font-display text-4xl sm:text-5xl text-parchment">
            Brands, shorts, and everything
            <br className="hidden sm:block" /> in between.
          </h2>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest2 text-smoke">
          {String(projects.length).padStart(2, "0")} Scenes on reel
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        {usedCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 font-mono text-[0.68rem] uppercase tracking-widest2 border transition-colors ${
              active === cat
                ? "bg-ember border-ember text-ink"
                : "border-white/15 text-smoke hover:border-parchment/40 hover:text-parchment"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.client} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-smoke text-sm mt-6">No projects in this category yet.</p>
      )}
    </section>
  );
}
