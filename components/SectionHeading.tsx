"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
}

export function SectionHeading({ index, eyebrow, title, sub, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
      <Reveal>
        <div className={cn("flex items-center gap-3", centered && "justify-center")}>
          <span className="h-px w-8 bg-accent/70" aria-hidden />
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-faint">
            <span className="text-accent">{index}</span> — {eyebrow}
          </span>
          <span className={cn("h-px w-8 bg-accent/70", !centered && "hidden")} aria-hidden />
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.9rem]">
          {title}
        </h2>
      </Reveal>
      {sub ? (
        <Reveal delay={160}>
          <p className="mt-5 text-base leading-relaxed text-muted">{sub}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
