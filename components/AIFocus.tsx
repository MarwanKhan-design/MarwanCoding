import { BrainCircuit, MessagesSquare, ScanEye, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const TILES = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    text: "Foundations first — supervised learning, evaluation, and real datasets over hype.",
    tag: "core focus",
  },
  {
    icon: MessagesSquare,
    title: "Natural Language Processing",
    text: "Language as an interface — text intelligence inside everyday software.",
    tag: "exploring",
  },
  {
    icon: ScanEye,
    title: "Computer Vision",
    text: "From pixels to predictions — the layer behind smarter fitness experiences.",
    tag: "exploring",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Products",
    text: "The endgame: shipping models as features people actually use.",
    tag: "destination",
  },
];

export function AIFocus() {
  return (
    <section id="ai" className="relative overflow-hidden py-24 sm:py-32">
      {/* atmosphere */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-vio/[0.06] blur-[140px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-line2 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* copy */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-vio/70" aria-hidden />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
                  <span className="text-vio">05</span> — What&apos;s Next
                </span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.9rem]">
                From building software
                <br />
                to building{" "}
                <span className="bg-gradient-to-r from-vio via-brand to-live bg-clip-text text-transparent">
                  intelligence.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-lg leading-relaxed text-muted">
                Full-stack development taught me how to turn ideas into products. AI is the next
                multiplier — so I&apos;m going deep on machine learning, NLP and computer vision,
                with the same philosophy as always:{" "}
                <span className="text-foreground">learn it by building something with it.</span>
              </p>
            </Reveal>
            <Reveal delay={230}>
              <p className="mt-4 max-w-lg leading-relaxed text-muted">
                The first target is already chosen — bringing intelligent, adaptive experiences
                into BarhtaFit. Software that learns from its users.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {TILES.map((tile, i) => (
                <Reveal key={tile.title} delay={i * 90}>
                  <div className="card lift group h-full p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white/[0.03] text-vio transition-colors duration-300 group-hover:border-vio/40">
                        <tile.icon size={16} />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
                        {tile.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[15px] font-semibold text-foreground">{tile.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-faint">{tile.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* visual — training lab card */}
          <Reveal delay={200}>
            <div className="relative">
              <div className="card relative overflow-hidden bg-[#0a0a10] p-6 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] sm:p-8">
                <div className="bg-dots pointer-events-none absolute inset-0 opacity-30" aria-hidden />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="dot-amber h-2 w-2 rounded-full bg-accent" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                        lab — experiment v0.3
                      </span>
                    </div>
                    <span className="rounded border border-vio/30 bg-vio/10 px-2 py-0.5 font-mono text-[10px] text-vio">
                      converging
                    </span>
                  </div>

                  <div className="mt-6 font-mono text-[12px] leading-relaxed">
                    <div className="text-faint">$ python train.py --model fitness-vision</div>
                    <div className="mt-2 space-y-1 text-muted">
                      <div>
                        <span className="text-vio">epoch 21/50</span> — loss: 0.187 — acc: 0.884
                      </div>
                      <div>
                        <span className="text-vio">epoch 22/50</span> — loss: 0.163 — acc: 0.897
                      </div>
                      <div>
                        <span className="text-vio">epoch 23/50</span> — loss: 0.141 — acc: 0.905
                      </div>
                      <div className="text-foreground">
                        <span className="text-vio">epoch 24/50</span> — loss:{" "}
                        <span className="text-live">0.124</span> — acc:{" "}
                        <span className="text-live">0.912</span>
                        <span className="animate-blink ml-1 inline-block h-[12px] w-[7px] translate-y-[2px] bg-vio" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 rounded-xl border border-line bg-black/30 p-4">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                        validation loss
                      </span>
                      <span className="font-mono text-[10px] text-live">-33.7% this run</span>
                    </div>
                    <svg viewBox="0 0 300 90" className="mt-3 h-20 w-full" fill="none" aria-hidden>
                      <defs>
                        <linearGradient id="labFill" x1="0" y1="0" x2="0" y2="90" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#a78bfa" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="labStroke" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#a78bfa" />
                          <stop offset="1" stopColor="#3ecf8e" />
                        </linearGradient>
                      </defs>
                      {[18, 36, 54, 72].map((y) => (
                        <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      ))}
                      <path
                        d="M0 10 C 30 16, 45 28, 70 38 C 100 50, 125 58, 155 64 C 190 71, 240 78, 300 80 L 300 90 L 0 90 Z"
                        fill="url(#labFill)"
                      />
                      <path
                        d="M0 10 C 30 16, 45 28, 70 38 C 100 50, 125 58, 155 64 C 190 71, 240 78, 300 80"
                        stroke="url(#labStroke)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="chart-draw"
                      />
                      <circle cx="300" cy="80" r="3.5" fill="#3ecf8e" />
                      <circle cx="300" cy="80" r="8" fill="#3ecf8e" opacity="0.2" />
                    </svg>
                  </div>

                  <blockquote className="mt-6 border-l-2 border-vio/50 pl-4 text-sm italic leading-relaxed text-muted">
                    “I don&apos;t want to just use AI APIs. I want to build products that learn.”
                  </blockquote>
                </div>
              </div>

              {/* floating chip */}
              <div
                className="animate-floaty absolute -right-3 -top-4 hidden rounded-lg border border-line bg-panel px-3.5 py-2.5 shadow-xl sm:block"
                aria-hidden
              >
                <div className="font-mono text-[9px] uppercase tracking-wider text-faint">next up</div>
                <div className="mt-0.5 font-display text-sm font-semibold text-vio">
                  adaptive training engine
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
