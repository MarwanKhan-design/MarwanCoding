import { Boxes, BrainCircuit, Compass, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const FOCUS = [
  {
    icon: Boxes,
    title: "Full-Stack Development",
    text: "End-to-end web apps — from database schema to deployed, polished frontends.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    text: "Studying ML fundamentals with Python, moving from theory to trained models.",
  },
  {
    icon: Rocket,
    title: "Real-World Products",
    text: "Not tutorials — actual products with users, deployments and iterations.",
  },
  {
    icon: Compass,
    title: "Learning by Building",
    text: "Every skill on this site was earned by shipping something with it.",
  },
];

const TIMELINE = [
  {
    phase: "Phase 01",
    title: "Web Foundations",
    text: "HTML, CSS, JavaScript — understanding how the web actually works.",
    done: true,
  },
  {
    phase: "Phase 02",
    title: "Full-Stack Applications",
    text: "React, Next.js, Node and databases — wiring complete systems together.",
    done: true,
  },
  {
    phase: "Phase 03",
    title: "Product Builder",
    text: "BarhtaFit live in production; a CRM architected like a real SaaS.",
    done: true,
  },
  {
    phase: "Phase 04",
    title: "AI / ML Engineer",
    text: "Currently here — ML fundamentals, Python, first trained models.",
    done: false,
    current: true,
  },
  {
    phase: "Phase 05",
    title: "AI-Native Products",
    text: "Next — intelligence built into the products I already ship.",
    done: false,
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              I build things that ship —{" "}
              <span className="text-gradient">and keep shipping.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* left — copy + focus */}
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-muted">
                I&apos;m Marwan — a developer who cares less about tutorial trophies and more about{" "}
                <span className="text-foreground">working software</span>. My focus is simple:
                build real products, learn through the process, and push one level further with
                every release.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 leading-relaxed text-muted">
                I started with the fundamentals of the web, went deep on React, Next.js and
                TypeScript, and now design production-grade applications end-to-end. Lately, I&apos;m
                expanding into AI and machine learning — with one goal: products that don&apos;t just
                work, but <span className="text-foreground">get smarter</span>.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {FOCUS.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="card lift group h-full p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white/[0.03] text-accent transition-colors duration-300 group-hover:border-accent/40">
                      <item.icon size={17} />
                    </div>
                    <h3 className="mt-4 text-[15px] font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-faint">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* right — progression timeline */}
          <Reveal delay={150}>
            <div className="card relative h-full overflow-hidden p-6 sm:p-7">
              <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                    The progression
                  </span>
                  <span className="rounded border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent">
                    in motion
                  </span>
                </div>

                <div className="mt-7">
                  {TIMELINE.map((step, i) => (
                    <div key={step.phase} className="relative flex gap-4 pb-7 last:pb-0">
                      {/* rail */}
                      {i < TIMELINE.length - 1 && (
                        <span
                          className={`absolute left-[7px] top-6 h-[calc(100%-14px)] w-px ${
                            step.done ? "bg-live/35" : "bg-line2"
                          }`}
                          aria-hidden
                        />
                      )}
                      <span
                        className={`relative z-10 mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border-2 ${
                          step.current
                            ? "dot-amber border-accent bg-accent/20"
                            : step.done
                              ? "border-live bg-live/20"
                              : "border-line2 bg-panel"
                        }`}
                        aria-hidden
                      />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                            {step.phase}
                          </span>
                          {step.current && (
                            <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-px font-mono text-[9px] uppercase tracking-wider text-accent">
                              you are here
                            </span>
                          )}
                        </div>
                        <h4
                          className={`mt-1 text-[15px] font-semibold ${
                            step.done || step.current ? "text-foreground" : "text-muted"
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p className="mt-1 text-[12.5px] leading-relaxed text-faint">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
