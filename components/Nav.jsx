import { whatsappHref } from "@/data/site";

export default function Nav() {
  return (
    <header className="fixed top-[3px] left-0 right-0 z-40 backdrop-blur-md bg-ink/70 border-b border-white/5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 h-16">
        <a href="#top" className="font-display text-lg tracking-wide text-parchment">
          Moundir<span className="text-ember">.</span>Rammit
        </a>
        <div className="hidden md:flex items-center gap-8 font-mono text-[0.72rem] tracking-widest2 uppercase text-smoke">
          <a href="#work" className="hover:text-parchment transition-colors">Works</a>
          <a href="#about" className="hover:text-parchment transition-colors">About</a>
          <a href="#process" className="hover:text-parchment transition-colors">Process</a>
          <a href="#contact" className="hover:text-parchment transition-colors">Contact</a>
        </div>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ember/60 px-4 py-2 text-xs font-mono uppercase tracking-widest2 text-ember hover:bg-ember hover:text-ink transition-colors"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}
