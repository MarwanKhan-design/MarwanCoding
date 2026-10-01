"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Brain,
  Download,
  FileDown,
  Rocket,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

/* ---------------- syntax tokens ---------------- */
const K = ({ children }: { children: ReactNode }) => (
  <span className="text-vio">{children}</span>
);
const S = ({ children }: { children: ReactNode }) => (
  <span className="text-live/90">{children}</span>
);
const C = ({ children }: { children: ReactNode }) => (
  <span className="italic text-faint">{children}</span>
);
const F = ({ children }: { children: ReactNode }) => (
  <span className="text-accent2">{children}</span>
);
const T = ({ children }: { children: ReactNode }) => (
  <span className="text-sky-300">{children}</span>
);
const P = ({ children }: { children: ReactNode }) => (
  <span className="text-faint">{children}</span>
);

const CODE: ReactNode[] = [
  <C key="0">{"// barhtafit — app/api/workouts/route.ts"}</C>,
  <span key="1">
    <K>import</K> <P>{"{"}</P> auth <P>{"}"}</P> <K>from</K>{" "}
    <S>{'"@/lib/auth"'}</S>
    <P>;</P>
  </span>,
  <span key="2">
    <K>import</K> <P>{"{"}</P> db <P>{"}"}</P> <K>from</K> <S>{'"@/lib/db"'}</S>
    <P>;</P>
  </span>,
  <span key="3">&nbsp;</span>,
  <span key="4">
    <K>export async function</K> <F>POST</F>
    <P>(</P>req<P>:</P> <T>Request</T>
    <P>) {"{"}</P>
  </span>,
  <span key="5">
    {"  "}
    <K>const</K> session <P>=</P> <K>await</K> <F>auth</F>
    <P>();</P>
  </span>,
  <span key="6">
    {"  "}
    <K>if</K> <P>(!</P>session<P>?.</P>user<P>) {"{"}</P>
  </span>,
  <span key="7">
    {"    "}
    <K>return</K> Response.<F>json</F>
    <P>({"{"}</P> error<P>:</P> <S>{'"Unauthorized"'}</S> <P>{"}, {"}</P> status
    <P>:</P> <T>401</T> <P>{"}"});</P>
  </span>,
  <span key="8">
    {"  "}
    <P>{"}"}</P>
  </span>,
  <span key="9">
    {"  "}
    <K>const</K> <P>{"{"}</P> exercises, duration <P>{"}"}</P> <P>=</P>{" "}
    <K>await</K> req.<F>json</F>
    <P>();</P>
  </span>,
  <span key="10">&nbsp;</span>,
  <span key="11">
    {"  "}
    <K>const</K> workout <P>=</P> <K>await</K> db.workout.<F>create</F>
    <P>({"{"}</P>
  </span>,
  <span key="12">
    {"    "}data<P>: {"{"}</P>
  </span>,
  <span key="13">
    {"      "}userId<P>:</P> session.user.id<P>,</P>
  </span>,
  <span key="14">
    {"      "}exercises<P>,</P>
  </span>,
  <span key="15">
    {"      "}duration<P>,</P>
  </span>,
  <span key="16">
    {"      "}loggedAt<P>:</P> <K>new</K> <T>Date</T>
    <P>(),</P>
  </span>,
  <span key="17">
    {"    "}
    <P>{"}"},</P>
  </span>,
  <span key="18">
    {"  "}
    <P>{"}"});</P>
  </span>,
  <span key="19">&nbsp;</span>,
  <span key="20">
    {"  "}
    <K>return</K> Response.<F>json</F>
    <P>({"{"}</P> workout <P>{"}"});</P>
    <span className="animate-blink ml-1 inline-block h-[13px] w-[7px] translate-y-[2px] bg-accent" />
  </span>,
];

/* ---------------- code window ---------------- */
function CodeWindow() {
  return (
    <div className="card overflow-hidden bg-[#0a0c11] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
      {/* chrome */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
        <div className="ml-3 flex items-center gap-1 font-mono text-[10.5px]">
          <span className="flex items-center gap-1.5 rounded-md rounded-b-none border border-b-0 border-line bg-white/[0.04] px-2.5 py-1 text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-live" />
            route.ts
          </span>
          <span className="rounded-md px-2.5 py-1 text-faint transition-colors hover:text-muted">
            schema.prisma
          </span>
          <span className="hidden items-center gap-1.5 rounded-md px-2.5 py-1 text-faint transition-colors hover:text-muted sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-vio" />
            train.py
          </span>
        </div>
      </div>
      {/* code */}
      <div className="scrollbar-none flex overflow-x-auto p-4 sm:p-5">
        <div
          aria-hidden
          className="mr-4 select-none text-right font-mono text-[11px] leading-[1.8] text-white/15"
        >
          {CODE.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <pre className="font-mono text-[11px] leading-[1.8] text-muted sm:text-[11.5px]">
          {CODE.map((line, i) => (
            <div key={i} className="whitespace-pre">
              {line}
            </div>
          ))}
        </pre>
      </div>
      {/* status bar */}
      <div className="flex items-center justify-between border-t border-line px-4 py-2 font-mono text-[10px] text-faint">
        <span className="flex items-center gap-2">
          <span className="text-live">●</span> TypeScript · Next.js 16
        </span>
        <span className="hidden sm:block">main*</span>
        <span>Ln 21, Col 32</span>
      </div>
    </div>
  );
}

/* ---------------- satellite cards ---------------- */
export function DeployCard() {
  return (
    <div className="card bg-panel/95 p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2">
        <Rocket size={13} className="text-live" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          production
        </span>
        <span className="dot-live ml-auto h-1.5 w-1.5 rounded-full bg-live" />
      </div>
      <a
        href="https://barhtafit.com"
        target="_blank"
        rel="noreferrer"
        className="group mt-3 flex items-center gap-1.5 text-sm font-semibold text-foreground"
      >
        barhtafit.com
        <ArrowUpRight
          size={13}
          className="text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>
      <div className="mt-2.5 space-y-1 font-mono text-[10.5px] text-faint">
        <div className="flex justify-between">
          <span>build</span>
          <span className="text-muted">48s</span>
        </div>
        <div className="flex justify-between">
          <span>edge · status</span>
          <span className="text-live">200 OK</span>
        </div>
        <div className="flex justify-between">
          <span>deployed</span>
          <span className="text-muted">3d ago</span>
        </div>
      </div>
    </div>
  );
}

export function CommitCard() {
  const bars = [38, 62, 30, 74, 52, 90, 66];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="card bg-panel/95 p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          commits / week
        </span>
        <span className="font-mono text-[10px] text-live">+18%</span>
      </div>
      <div className="mt-1 font-display text-2xl font-semibold text-foreground">
        23
      </div>
      <div className="mt-3 flex h-12 items-end gap-1.5">
        {bars.map((h, i) => (
          <div key={i} className="flex-1">
            <div
              className={`bar-rise w-full rounded-sm ${i === 5 ? "bg-accent" : "bg-white/12"}`}
              style={{
                height: `${(h / 100) * 48}px`,
                animationDelay: `${0.4 + i * 0.09}s`,
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex justify-between font-mono text-[8.5px] text-faint">
        {days.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
    </div>
  );
}

export function TrainCard() {
  return (
    <div className="card bg-panel/95 p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2">
        <Brain size={13} className="text-vio" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          ml · training run
        </span>
        <span className="ml-auto rounded border border-vio/30 bg-vio/10 px-1.5 py-0.5 font-mono text-[9px] text-vio">
          v0.3
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-[10.5px]">
        <div className="rounded-md border border-line bg-black/30 px-2.5 py-2">
          <div className="text-faint">loss</div>
          <div className="mt-0.5 flex items-center gap-1 text-sm text-foreground">
            0.124 <TrendingDown size={11} className="text-live" />
          </div>
        </div>
        <div className="rounded-md border border-line bg-black/30 px-2.5 py-2">
          <div className="text-faint">accuracy</div>
          <div className="mt-0.5 flex items-center gap-1 text-sm text-foreground">
            91.2% <TrendingUp size={11} className="text-live" />
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 200 48"
        className="mt-3 h-10 w-full"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 8 C 22 12, 34 20, 52 24 C 74 29, 92 36, 116 38 C 144 41, 172 43, 200 45"
          stroke="url(#lossGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="chart-draw"
        />
        <defs>
          <linearGradient
            id="lossGrad"
            x1="0"
            y1="0"
            x2="200"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#a78bfa" />
            <stop offset="1" stopColor="#3ecf8e" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mt-2">
        <div className="flex justify-between font-mono text-[9.5px] text-faint">
          <span>epoch 24 / 50</span>
          <span>48%</span>
        </div>
        <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/8">
          <div className="h-full w-[48%] rounded-full bg-gradient-to-r from-vio to-live" />
        </div>
      </div>
    </div>
  );
}

/* ---------------- hero ---------------- */
export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const layers = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };
    const loop = () => {
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      layers.current.forEach((layer) => {
        if (!layer) return;
        const d = parseFloat(layer.dataset.depth || "0");
        layer.style.transform = `translate3d(${(cx * d).toFixed(2)}px, ${(cy * d).toFixed(2)}px, 0)`;
      });
      raf = requestAnimationFrame(loop);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const setLayer = (i: number) => (node: HTMLDivElement | null) => {
    layers.current[i] = node;
  };

  return (
    <section id="home" className="relative overflow-hidden">
      {/* backdrop */}
      <div
        className="bg-grid mask-fade-b pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-40 top-24 h-[480px] w-[480px] rounded-full bg-accent/[0.07] blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-live/[0.05] blur-[130px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 lg:pb-8 lg:pt-[68px]">
        <div className="grid items-center gap-16 lg:min-h-[calc(100vh-68px)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-6">
          {/* ------- left: copy ------- */}
          <div className="max-w-xl">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line2 bg-panel/80 px-3.5 py-1.5">
                <span className="dot-live h-2 w-2 rounded-full bg-live" />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">
                  Available for new projects
                </span>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-7 font-display text-[clamp(3.2rem,7.5vw,5.6rem)] font-bold leading-[0.98] tracking-[-0.03em] text-foreground">
                Marwan
                <br />
                Khan<span className="text-accent">.</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-5 font-display text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                Full-Stack Developer <span className="text-faint">&amp;</span>{" "}
                <span className="text-gradient">AI/ML Builder</span>
              </p>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                I build practical web applications and explore AI to turn ideas
                into useful products — scoped cleanly, architected properly, and
                shipped to production.
              </p>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a href="#projects" className="btn-primary">
                  View Projects
                  <ArrowDown size={15} />
                </a>
                <a href="#contact" className="btn-ghost">
                  Contact Me
                </a>
              </div>
            </Reveal>

            <Reveal delay={420}>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                <a
                  href="https://github.com/MarwanKhan-design"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1.5 text-[13px] font-medium text-faint transition-colors hover:text-foreground"
                >
                  <GithubIcon size={14} />
                  GitHub
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/marwan-coding"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1.5 text-[13px] font-medium text-faint transition-colors hover:text-foreground"
                >
                  <LinkedinIcon size={14} />
                  LinkedIn
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="/Marwan-Khan-Full-Stack-Developer-Resume.pdf"
                  download
                  className="group flex items-center gap-1.5 text-[13px] font-medium text-faint transition-colors hover:text-foreground"
                >
                  <FileDown size={14} />
                  Résumé
                  <Download
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
                {[
                  ["01", "product in production"],
                  ["20+", "tools & technologies"],
                  ["24 / 7", "learning mode"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                      {v}
                    </div>
                    <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-faint">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ------- right: composition (desktop) ------- */}
          <div className="relative hidden h-[600px] lg:block" ref={wrapRef}>
            <div
              ref={setLayer(0)}
              data-depth="8"
              className="absolute inset-0"
              aria-hidden
            >
              <div className="absolute right-6 top-16 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />
              <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-vio/10 blur-[100px]" />
            </div>

            <div
              ref={setLayer(1)}
              data-depth="6"
              className="absolute left-0 top-14 z-10 w-[78%]"
            >
              <CodeWindow />
            </div>

            <div
              ref={setLayer(2)}
              data-depth="17"
              className="absolute right-0 top-0 z-20 w-[248px]"
            >
              <div className="animate-floaty">
                <DeployCard />
              </div>
            </div>

            <div
              ref={setLayer(3)}
              data-depth="12"
              className="absolute bottom-20 right-4 z-20 w-[248px]"
            >
              <div
                className="animate-floaty"
                style={{ animationDelay: "-2.2s" }}
              >
                <CommitCard />
              </div>
            </div>

            <div
              ref={setLayer(4)}
              data-depth="22"
              className="absolute bottom-0 left-2 z-30 w-[268px]"
            >
              <div
                className="animate-floaty"
                style={{ animationDelay: "-4.5s" }}
              >
                <TrainCard />
              </div>
            </div>
          </div>

          {/* ------- right: stacked (mobile) ------- */}
          <div className="flex flex-col gap-4 lg:hidden">
            <Reveal delay={150}>
              <CodeWindow />
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Reveal delay={220}>
                <DeployCard />
              </Reveal>
              <Reveal delay={280}>
                <TrainCard />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
