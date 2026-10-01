"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 24);
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-base/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line2 bg-panel font-display text-sm font-bold tracking-tight text-accent transition-colors duration-300 group-hover:border-accent/50">
              MK
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">
              Marwan Khan
              <span className="ml-2 hidden font-mono text-[10px] font-normal uppercase tracking-[0.2em] text-faint sm:inline">
                dev · ai/ml
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                  "nav-link text-[13px] font-medium transition-colors duration-300",
                  active === link.id ? "text-foreground" : "text-muted hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="btn-primary hidden px-4! py-2! text-[13px] sm:inline-flex"
            >
              Let&apos;s Build
              <ArrowUpRight size={15} />
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line2 bg-panel text-foreground lg:hidden"
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>

        {/* scroll progress */}
        <div
          ref={progressRef}
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-accent via-accent2 to-accent"
          aria-hidden
        />
      </header>

      {/* mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-center bg-base/95 px-8 backdrop-blur-2xl transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
        <nav className="flex flex-col gap-1">
          {LINKS.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 55}ms` : "0ms" }}
              className={cn(
                "group flex items-baseline gap-4 border-b border-line py-4 transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
            >
              <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
              <span className="font-display text-3xl font-semibold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-2">
                {link.label}
              </span>
            </a>
          ))}
        </nav>
        <div
          className={cn(
            "mt-10 transition-all delay-500 duration-500",
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
            Let&apos;s Build <ArrowUpRight size={15} />
          </a>
          <p className="mt-6 text-center font-mono text-[11px] text-faint">
            hello@marwankhan.dev
          </p>
        </div>
      </div>
    </>
  );
}
