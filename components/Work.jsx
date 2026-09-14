import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
      <div className="mb-12">
        <p className="eyebrow mb-4">Works</p>
        <h2 className="font-display text-4xl sm:text-5xl text-parchment">
          Brands, shorts, and everything
          <br className="hidden sm:block" /> in between.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projects.map((project) => (
          <ProjectCard key={`${project.client}-${project.title}`} project={project} />
        ))}
      </div>
    </section>
  );
}
