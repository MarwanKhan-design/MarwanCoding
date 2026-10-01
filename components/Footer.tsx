import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const GMAIL_COMPOSE_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=techmarwan70@gmail.com";

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line2 bg-panel font-display text-sm font-bold text-accent">
                MK
              </span>
              <span>
                <span className="block font-display text-[15px] font-semibold text-foreground">
                  Marwan Khan
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  Full-Stack Developer &amp; AI/ML Builder
                </span>
              </span>
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted">
            {["home", "about", "skills", "projects", "journey", "contact"].map((id) => (
              <a key={id} href={`#${id}`} className="capitalize transition-colors hover:text-foreground">
                {id}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {[
              { icon: GithubIcon, href: "https://github.com/MarwanKhan-design", label: "GitHub" },
              { icon: LinkedinIcon, href: "https://www.linkedin.com/in/marwan-coding", label: "LinkedIn" },
              { icon: Mail, href: GMAIL_COMPOSE_URL, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent"
              >
                <s.icon size={15} />
              </a>
            ))}
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-[#0a0a0b] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <ArrowUp size={15} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 font-mono text-[11px] text-faint sm:flex-row sm:items-center">
          <span>© 2026 Marwan Khan. All rights reserved.</span>
          <span>
            Designed &amp; built from scratch — <span className="text-muted">React</span> ·{" "}
            <span className="text-muted">TypeScript</span> ·{" "}
            <span className="text-muted">Tailwind CSS</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
