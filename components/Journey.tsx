import { Check, CircleDashed, CircleDot, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type Status = "completed" | "shipped" | "in-progress" | "next";

const STEPS: {
  status: Status;
  title: string;
  text: string;
  stack: string[];
}[] = [
  {
    status: "completed",
    title: "Web Development Foundations",
    text: "Started from zero: HTML, CSS and JavaScript — building pages, breaking layouts, learning how the browser thinks.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    status: "completed",
    title: "Full-Stack Applications",
    text: "Went end-to-end: React and Next.js on the front, Node and databases on the back, wired together with APIs and auth.",
    stack: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    status: "shipped",
    title: "Production-Oriented Projects",
    text: "Moved from 'it works locally' to 'it works for users'. BarhtaFit is live; the Freelancer CRM is built like a real SaaS — schema, auth, analytics, deployment.",
    stack: ["TypeScript", "PostgreSQL", "Prisma", "Vercel"],
  },
  {
    status: "in-progress",
    title: "AI / Machine Learning",
    text: "Deep in ML fundamentals right now: Python, NumPy and pandas for data work, then models — regression, classification, evaluation, iteration.",
    stack: ["Python", "NumPy", "Pandas", "ML theory"],
  },
  {
    status: "next",
    title: "AI-Native Product Development",
    text: "The destination: intelligent features inside real products. Recommendation, prediction and vision — applied, not just studied.",
    stack: ["NLP", "Computer Vision", "Applied AI"],
  },
];

const STATUS_META: Record<Status, { label: string; cls: string; icon: typeof Check }> = {
  completed: {
    label: "completed",
    cls: "border-live/25 bg-live/10 text-live",
    icon: Check,
  },
  shipped: {
    label: "shipped",
    cls: "border-live/25 bg-live/10 text-live",
    icon: Rocket,
  },
  "in-progress": {
    label: "in progress",
    cls: "border-accent/30 bg-accent/10 text-accent",
    icon: CircleDot,
  },
  next: {
    label: "next",
    cls: "border-line2 bg-white/[0.03] text-faint",
    icon: CircleDashed,
  },
};

const GIT_LOG: { hash: string; ref?: string; msg: string; tone?: "head" | "feat" | "learn" }[] = [
  { hash: "9f3a2c1", ref: "HEAD -> main", msg: "ship: barhtafit v2.0 — programs engine", tone: "head" },
  { hash: "41bd7e2", msg: "feat(crm): invoices + payment tracking", tone: "feat" },
  { hash: "c08d433", msg: "feat(crm): analytics dashboard", tone: "feat" },
  { hash: "a8123ff", msg: "learn(ml): linear regression from scratch", tone: "learn" },
  { hash: "7c1ad90", msg: "db: prisma schema — 9 models, full relations" },
  { hash: "02b9f88", msg: "feat(fit): session logging + streaks", tone: "feat" },
  { hash: "f5c2e01", msg: "init: next.js + typescript" },
];

export function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-line2 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="The Journey"
          title={
            <>
              Building in public, <span className="text-gradient">one commit at a time.</span>
            </>
          }
          sub="No inflated titles, no fake years of experience. Just a clear trajectory — and every step backed by something that actually shipped or got learned."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* roadmap */}
          <div>
            {STEPS.map((step, i) => {
              const meta = STATUS_META[step.status];
              return (
                <Reveal key={step.title} delay={i * 80}>
                  <div className="group relative flex gap-5 pb-9 last:pb-0">
                    {i < STEPS.length - 1 && (
                      <span
                        className="absolute left-[19px] top-11 h-[calc(100%-44px)] w-px bg-gradient-to-b from-line2 to-line"
                        aria-hidden
                      />
                    )}
                    <span
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-panel transition-colors duration-300 ${
                        step.status === "in-progress"
                          ? "border-accent/40 text-accent"
                          : step.status === "completed" || step.status === "shipped"
                            ? "border-live/30 text-live"
                            : "border-line2 text-faint"
                      }`}
                    >
                      <meta.icon size={16} />
                      {step.status === "in-progress" && (
                        <span className="dot-amber absolute inset-0 rounded-xl" aria-hidden />
                      )}
                    </span>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                          {step.title}
                        </h3>
                        <span
                          className={`rounded border px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider ${meta.cls}`}
                        >
                          {meta.label}
                        </span>
                      </div>
                      <p className="mt-1.5 max-w-lg text-[13.5px] leading-relaxed text-muted">
                        {step.text}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {step.stack.map((s) => (
                          <span key={s} className="chip px-2 py-0.5 text-[11px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* git log terminal */}
          <Reveal delay={150} className="lg:sticky lg:top-28 lg:self-start">
            <div className="card overflow-hidden bg-[#0a0c11] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
                <span className="ml-3 font-mono text-[10.5px] text-faint">
                  marwan@build — zsh
                </span>
              </div>
              <div className="p-4 font-mono text-[11.5px] leading-[1.9] sm:p-5">
                <div className="text-muted">
                  <span className="text-live">➜</span> <span className="text-sky-300">~/dev</span>{" "}
                  git log --oneline --graph
                </div>
                {GIT_LOG.map((c) => (
                  <div key={c.hash} className="flex gap-2 overflow-hidden">
                    <span className="text-accent">*</span>
                    <span className="text-accent2">{c.hash}</span>
                    {c.ref && <span className="shrink-0 text-vio">({c.ref})</span>}
                    <span
                      className={`truncate ${
                        c.tone === "head"
                          ? "text-foreground"
                          : c.tone === "feat"
                            ? "text-muted"
                            : c.tone === "learn"
                              ? "text-live/80"
                              : "text-faint"
                      }`}
                    >
                      {c.msg}
                    </span>
                  </div>
                ))}
                <div className="mt-2 flex items-center gap-2 border-t border-line pt-3 text-faint">
                  <span>
                    <span className="text-live">➜</span> <span className="text-sky-300">~/dev</span>
                  </span>
                  <span className="animate-blink inline-block h-[13px] w-[7px] translate-y-[2px] bg-foreground/80" />
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="card p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  currently learning
                </div>
                <div className="mt-2 text-sm font-medium text-foreground">
                  ML math, NumPy &amp; first models
                </div>
                <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/8">
                  <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-accent to-accent2" />
                </div>
              </div>
              <div className="card p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  next ship
                </div>
                <div className="mt-2 text-sm font-medium text-foreground">
                  AI engine for BarhtaFit
                </div>
                <div className="mt-2 font-mono text-[10px] text-vio">status: researching…</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
