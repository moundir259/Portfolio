import { process, toolkit } from "@/data/site";

export default function Craft() {
  return (
    <section id="process" className="bg-ink-soft border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <p className="eyebrow mb-4">Process</p>
        <h2 className="font-display text-4xl sm:text-5xl text-parchment mb-16 max-w-xl">
          How it gets made.
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {process.map((p, i) => (
            <div key={p.step} className="border-t border-brass/30 pt-6">
              <span className="font-mono text-ember text-sm">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-2xl text-parchment mt-3 mb-3">{p.step}</h3>
              <p className="text-parchment/70 leading-relaxed text-sm">{p.detail}</p>
            </div>
          ))}
        </div>

        <p className="eyebrow mb-4">Instruments</p>
        <h2 className="font-display text-3xl sm:text-4xl text-parchment mb-10 max-w-xl">
          The toolkit behind every scene.
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5">
          {toolkit.map((tool) => (
            <div key={tool.name} className="flex flex-col gap-1">
              <span className="font-display text-lg text-parchment">{tool.name}</span>
              <span className="text-sm text-parchment/60">{tool.use}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
