import { ArrowUpRight, Globe, Plus } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { BarhtaFitMock } from "@/components/mockups/BarhtaFitMock";
import { CRMMock } from "@/components/mockups/CRMMock";

function PSR({ items }: { items: [string, string][] }) {
  return (
    <div className="space-y-3.5">
      {items.map(([label, text]) => (
        <div key={label} className="flex gap-4">
          <span className="mt-1 w-[74px] shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
            {label}
          </span>
          <span className="border-l border-line pl-4 text-[13.5px] leading-relaxed text-muted">
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Featured Projects"
          title={
            <>
              Products, <span className="text-gradient">not just projects.</span>
            </>
          }
          sub="Each one starts with a real problem, gets architected like a product, and ends up deployed — not sitting in a private repo."
        />

        {/* ============ 01 · BarhtaFit ============ */}
        <Reveal className="mt-16">
          <article className="group relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-panel to-surface transition-colors duration-500 hover:border-line2">
            <div
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-live/[0.07] blur-[110px]"
              aria-hidden
            />
            <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-12">
              {/* copy */}
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-live">
                    01 — Flagship product
                  </span>
                  <a
                    href="https://barhtafit.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-full border border-live/30 bg-live/10 px-2.5 py-1 font-mono text-[10px] text-live transition-colors hover:bg-live/15"
                  >
                    <span className="dot-live h-1.5 w-1.5 rounded-full bg-live" />
                    barhtafit.com — live
                  </a>
                </div>

                <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  BarhtaFit
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  A fitness platform that grew from a side experiment called{" "}
                  <span className="font-mono text-[13px] text-faint">“Workout Web”</span> into a
                  full product — workout planning, session logging and progress tracking, built
                  with a product mindset from day one.
                </p>

                <div className="mt-7">
                  <PSR
                    items={[
                      ["Problem", "Most workout trackers feel like spreadsheets — effort goes in, motivation never comes out."],
                      ["Solution", "Programs, logging and streaks designed around one loop: train, see progress, come back tomorrow."],
                      ["Result", "Live in production at barhtafit.com — iterated from prototype into a real, evolving product."],
                    ]}
                  />
                </div>

                <div className="mt-7 flex flex-wrap gap-1.5">
                  {["Workout builder", "Session logging", "Progress analytics", "Streaks & goals", "Auth & profiles"].map(
                    (f) => (
                      <span key={f} className="chip">{f}</span>
                    )
                  )}
                </div>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"].map((t) => (
                    <span
                      key={t}
                      className="chip border-live/25 bg-live/[0.06] text-live/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3 pt-1">
                  <a
                    href="https://barhtafit.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-live px-5 py-2.5 text-sm font-semibold text-[#06251a] hover:shadow-[0_8px_30px_-8px_rgba(62,207,142,0.5)] active:scale-[0.98]"
                  >
                    <Globe size={15} />
                    Live Demo
                  </a>
                  <a href="https://github.com/marwankhan" target="_blank" rel="noreferrer" className="btn-ghost">
                    <GithubIcon size={15} />
                    View Code
                  </a>
                </div>
              </div>

              {/* visual */}
              <div className="relative flex items-center">
                <div className="w-full transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.015]">
                  <BarhtaFitMock />
                </div>
                <div
                  className="absolute -left-3 top-6 hidden rounded-lg border border-line bg-panel px-3 py-2 shadow-xl sm:block lg:-left-6"
                  aria-hidden
                >
                  <div className="font-mono text-[9px] uppercase tracking-wider text-faint">shipped</div>
                  <div className="font-display text-sm font-semibold text-live">v2.0 — programs</div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Freelancer CRM is intentionally hidden until the product is ready to show. */}
        {false && (
        <Reveal className="mt-8">
          <article className="group relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-panel to-surface transition-colors duration-500 hover:border-line2">
            <div
              className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-brand/[0.08] blur-[110px]"
              aria-hidden
            />
            <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-12">
              {/* visual */}
              <div className="relative order-last flex items-center lg:order-first">
                <div className="w-full transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.015]">
                  <CRMMock />
                </div>
                <div
                  className="absolute -right-3 top-6 hidden rounded-lg border border-line bg-panel px-3 py-2 shadow-xl sm:block lg:-right-6"
                  aria-hidden
                >
                  <div className="font-mono text-[9px] uppercase tracking-wider text-faint">tracked</div>
                  <div className="font-display text-sm font-semibold text-brand">98 invoices</div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
                    02 — Production-grade SaaS
                  </span>
                  <span className="rounded-full border border-line2 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-muted">
                    private beta
                  </span>
                </div>

                <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Freelancer CRM
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  A CRM built specifically for freelancers — the whole business in one workspace,
                  from first client call to final payment. Architected like a commercial SaaS, not
                  a tutorial clone.
                </p>

                <div className="mt-7">
                  <PSR
                    items={[
                      ["Problem", "Freelancers juggle clients, tasks, meetings and invoices across five disconnected tools — and things slip."],
                      ["Solution", "One system for the entire pipeline: clients, projects, tasks, meetings, notes, invoices and payments."],
                      ["Result", "A dashboard that answers 'how is my business doing?' in one glance — revenue, workload, outstanding."],
                    ]}
                  />
                </div>

                <div className="mt-7 flex flex-wrap gap-1.5">
                  {["Clients", "Projects", "Tasks", "Meetings", "Notes", "Invoices", "Payments", "Dashboard", "Analytics"].map(
                    (f) => (
                      <span key={f} className="chip">{f}</span>
                    )
                  )}
                </div>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"].map((t) => (
                    <span key={t} className="chip border-brand/25 bg-brand/[0.06] text-brand/90">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3 pt-1">
                  <a
                    href="#contact"
                    className="btn bg-brand px-5 py-2.5 text-sm font-semibold text-[#10122b] hover:shadow-[0_8px_30px_-8px_rgba(139,147,248,0.5)] active:scale-[0.98]"
                  >
                    View Project
                    <ArrowUpRight size={15} />
                  </a>
                  <a href="https://github.com/marwankhan" target="_blank" rel="noreferrer" className="btn-ghost">
                    <GithubIcon size={15} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
        )}

        {/* ============ 03 · Next slot ============ */}
        <Reveal className="mt-8">
          <a
            href="#ai"
            className="group flex flex-col items-center gap-4 rounded-3xl border border-dashed border-line2 bg-transparent px-8 py-12 text-center transition-all duration-500 hover:border-accent/40 hover:bg-accent/[0.03] sm:flex-row sm:text-left"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-dashed border-line2 text-faint transition-all duration-500 group-hover:rotate-90 group-hover:border-accent/50 group-hover:text-accent">
              <Plus size={22} />
            </span>
            <span className="flex-1">
              <span className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  03 — Reserved slot
                </span>
                <span className="rounded border border-vio/30 bg-vio/10 px-2 py-0.5 font-mono text-[10px] text-vio">
                  in R&amp;D
                </span>
              </span>
              <span className="mt-2 block font-display text-xl font-semibold tracking-tight text-muted transition-colors duration-300 group-hover:text-foreground">
                An AI-native product is in development.
              </span>
              <span className="mt-1 block text-sm text-faint">
                Machine intelligence meets what I already build — starting with an intelligent
                engine for BarhtaFit. This portfolio grows with every ship.
              </span>
            </span>
            <ArrowUpRight
              size={20}
              className="shrink-0 text-faint transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
