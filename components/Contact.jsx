import { site, whatsappHref, emailHref, socialLinks } from "@/data/site";

function WhatsappIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0012.02 22C17.5 22 22 17.52 22 12S17.5 2 12.02 2zm0 18.15c-1.6 0-3.13-.43-4.47-1.24l-.32-.19-3 .79.8-2.92-.2-.3A8.13 8.13 0 013.85 12c0-4.5 3.68-8.15 8.17-8.15S20.15 7.5 20.15 12s-3.65 8.15-8.13 8.15zm4.5-6.1c-.25-.12-1.45-.71-1.68-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.77.96-.14.16-.28.18-.53.06-.25-.12-1.04-.38-1.98-1.21-.73-.65-1.22-1.45-1.37-1.7-.14-.24-.02-.37.11-.5.11-.11.25-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.47-.4-.4-.55-.41h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-36">
      <p className="eyebrow mb-6">Contact</p>
      <h2 className="font-display italic text-4xl sm:text-6xl text-parchment max-w-3xl leading-tight mb-8">
        Have a brand that deserves a better frame?
      </h2>
      <p className="text-parchment/75 max-w-xl mb-12 text-lg">
        Open to new commercial and narrative projects. The fastest way to reach me is WhatsApp —
        message me the brief and I'll reply directly.
      </p>

      <div className="flex flex-wrap items-center gap-4 mb-20">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-ember px-7 py-4 text-sm font-mono uppercase tracking-widest2 text-ink hover:bg-ember-soft transition-colors"
        >
          <WhatsappIcon className="w-4 h-4" />
          Message on WhatsApp
        </a>
        <a
          href={emailHref}
          className="inline-flex items-center gap-2 rounded-full border border-parchment/25 px-7 py-4 text-sm font-mono uppercase tracking-widest2 text-parchment/80 hover:border-parchment/60 hover:text-parchment transition-colors"
        >
          {site.email}
        </a>
      </div>

      {socialLinks.filter((l) => l.label !== "Email" && l.label !== "WhatsApp").length > 0 && (
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-16 font-mono text-xs uppercase tracking-widest2 text-smoke">
          {socialLinks
            .filter((l) => l.label !== "Email" && l.label !== "WhatsApp")
            .map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ember transition-colors"
              >
                {l.label}
              </a>
            ))}
        </div>
      )}

      <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs font-mono uppercase tracking-widest2 text-smoke">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{site.role} · {site.location}</span>
      </div>
    </section>
  );
}
