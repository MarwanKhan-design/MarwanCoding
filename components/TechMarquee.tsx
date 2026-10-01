"use client";

const ITEMS = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Python",
  "MongoDB",
  "REST APIs",
  "Git",
  "Vercel",
];

export function TechMarquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-line bg-surface/50 py-5" aria-hidden>
      <div className="mask-fade-x overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-10 pr-10">
          {row.map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="whitespace-nowrap font-mono text-[13px] tracking-wide text-faint transition-colors duration-300 hover:text-foreground">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-accent/40" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
