"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const EMAIL = "techmarwan70@gmail.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

const SOCIALS = [
  { icon: GithubIcon, label: "GitHub", handle: "@marwankhan", href: "https://github.com/MarwanKhan-design" },
  { icon: LinkedinIcon, label: "LinkedIn", handle: "in/marwankhan", href: "https://www.linkedin.com/in/marwan-coding/" },
  { icon: Mail, label: "Email", handle: EMAIL, href: GMAIL_COMPOSE_URL },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      {/* atmosphere */}
      <div
        className="pointer-events-none absolute left-1/2 top-8 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[130px]"
        aria-hidden
      />
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-line2 bg-panel/80 px-4 py-1.5">
            <span className="dot-live h-2 w-2 rounded-full bg-live" />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">
              <span className="text-accent">06</span> — open to internships · freelance · collabs
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-8 font-display text-[clamp(2.6rem,6.5vw,4.8rem)] font-bold leading-[1.02] tracking-[-0.03em] text-foreground">
            Have an idea
            <br />
            <span className="text-gradient">worth building?</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
            I&apos;m interested in building useful products, working on challenging software, and
            collaborating on interesting ideas. If it ships and matters — I want to hear about it.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mx-auto mt-10 flex max-w-lg flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center justify-between gap-3 rounded-xl border border-line bg-panel px-5 py-3.5">
              <span className="truncate font-mono text-sm text-foreground">{EMAIL}</span>
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-mono text-[11px] transition-all duration-300 ${
                  copied
                    ? "border-live/40 bg-live/10 text-live"
                    : "border-line2 text-muted hover:border-white/30 hover:text-foreground"
                }`}
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                {copied ? "copied" : "copy"}
              </button>
            </div>
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-6! py-3.5!"
            >
              Say Hello
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="card lift group flex flex-col items-center gap-2 rounded-xl px-3 py-5"
              >
                <s.icon size={18} className="text-muted transition-colors duration-300 group-hover:text-accent" />
                <span className="text-[13px] font-medium text-foreground">{s.label}</span>
                <span className="flex items-center gap-0.5 font-mono text-[10px] text-faint">
                  {s.handle}
                  <ArrowUpRight
                    size={9}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* giant outline statement */}
      <div className="pointer-events-none relative mt-20 select-none overflow-hidden" aria-hidden>
        <div className="text-outline whitespace-nowrap text-center font-display text-[13vw] font-bold leading-none tracking-[-0.03em]">
          LET&apos;S BUILD
        </div>
      </div>
    </section>
  );
}
