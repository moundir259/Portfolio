const credits = [
  "Hamoud Boualem",
  "El-Madina",
  "Nike",
  "Seedance 2.0",
  "Veo 3",
  "Kling 3.0",
  "Runway Gen-3",
  "Higgsfield",
];

export default function Ticker() {
  const items = [...credits, ...credits];
  return (
    <div className="border-y border-white/10 bg-ink-soft py-4 overflow-hidden">
      <div className="marquee-track">
        {items.map((c, i) => (
          <span
            key={i}
            className="mx-6 font-mono text-xs sm:text-sm uppercase tracking-widest2 text-smoke whitespace-nowrap"
          >
            {c} <span className="text-ember ml-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
