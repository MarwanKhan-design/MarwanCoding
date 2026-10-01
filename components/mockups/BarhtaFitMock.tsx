import {
  CalendarDays,
  Dumbbell,
  Flame,
  Globe,
  LayoutDashboard,
  TrendingUp,
  Utensils,
  Zap,
} from "lucide-react";

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Dumbbell, label: "Workouts", active: false },
  { icon: CalendarDays, label: "Programs", active: false },
  { icon: TrendingUp, label: "Progress", active: false },
  { icon: Utensils, label: "Nutrition", active: false },
];

export function BarhtaFitMock() {
  const bars = [30, 46, 26, 54, 40, 66, 50];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const R = 21;
  const C = 2 * Math.PI * R;
  const goal = 0.78;

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-[#0a0d10] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]" aria-hidden>
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-black/30 px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <div className="ml-2 flex flex-1 items-center justify-center gap-1.5 rounded-md border border-line bg-black/50 px-3 py-1 font-mono text-[9.5px] text-faint sm:mx-8">
          <Globe size={9} className="text-live" />
          <span className="text-muted">barhtafit.com</span>
          <span>/dashboard</span>
        </div>
      </div>

      <div className="flex">
        {/* sidebar */}
        <div className="hidden w-36 shrink-0 flex-col border-r border-line bg-black/25 p-3 sm:flex md:w-40">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-live font-display text-[11px] font-bold text-[#06251a]">
              B
            </span>
            <span className="font-display text-[12px] font-semibold text-foreground">BarhtaFit</span>
            <span className="rounded border border-live/30 bg-live/10 px-1 font-mono text-[8px] text-live">
              v2.0
            </span>
          </div>
          <div className="mt-4 space-y-0.5">
            {NAV.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10.5px] ${
                  item.active
                    ? "border border-live/20 bg-live/10 font-medium text-live"
                    : "text-faint"
                }`}
              >
                <item.icon size={12} />
                {item.label}
              </div>
            ))}
          </div>
          <div className="mt-auto flex items-center gap-2 rounded-lg border border-line bg-black/30 p-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-live/80 to-live/40 font-mono text-[8.5px] font-semibold text-[#06251a]">
              MK
            </span>
            <div className="min-w-0">
              <div className="truncate text-[10px] font-medium text-foreground">Marwan K.</div>
              <div className="font-mono text-[8px] text-live">PRO PLAN</div>
            </div>
          </div>
        </div>

        {/* main */}
        <div className="min-w-0 flex-1 p-3.5 sm:p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-faint">
                Week 12 · Hypertrophy block
              </div>
              <div className="mt-0.5 font-display text-[15px] font-semibold text-foreground">
                Good morning, Marwan
              </div>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-accent/25 bg-accent/10 px-2 py-1 font-mono text-[8.5px] text-accent">
              <Flame size={10} />
              12-day streak
            </div>
          </div>

          {/* KPIs */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { k: "Volume", v: "48.2t", d: "+8%", up: true },
              { k: "Sessions", v: "5 / 6", d: "this wk", up: true },
              { k: "PRs", v: "3", d: "+2 new", up: true },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-line bg-black/30 px-2.5 py-2">
                <div className="font-mono text-[8px] uppercase tracking-wider text-faint">{s.k}</div>
                <div className="mt-0.5 flex items-baseline gap-1">
                  <span className="font-display text-[14px] font-semibold text-foreground">{s.v}</span>
                  <span className="font-mono text-[8px] text-live">{s.d}</span>
                </div>
              </div>
            ))}
          </div>

          {/* chart + goal */}
          <div className="mt-2 grid grid-cols-[1fr_auto] gap-2">
            <div className="rounded-lg border border-line bg-black/30 p-3">
              <div className="flex items-baseline justify-between">
                <span className="text-[10px] font-medium text-muted">Weekly volume</span>
                <span className="font-mono text-[8px] text-faint">kg lifted</span>
              </div>
              <div className="mt-2 flex h-14 items-end gap-1.5">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-sm ${i === 5 ? "bg-live" : i === 6 ? "bg-live/25" : "bg-white/10"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-1 flex justify-between font-mono text-[7.5px] text-faint">
                {days.map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>
            </div>
            <div className="flex w-[86px] flex-col items-center justify-center rounded-lg border border-line bg-black/30 p-2">
              <svg viewBox="0 0 56 56" className="h-12 w-12">
                <circle cx="28" cy="28" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
                <circle
                  cx="28"
                  cy="28"
                  r={R}
                  fill="none"
                  stroke="#3ecf8e"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray={C}
                  strokeDashoffset={C * (1 - goal)}
                  transform="rotate(-90 28 28)"
                />
                <text x="28" y="31" textAnchor="middle" fill="#eceef1" fontSize="11" fontWeight="600">
                  78%
                </text>
              </svg>
              <span className="mt-1 font-mono text-[7.5px] uppercase tracking-wider text-faint">
                monthly goal
              </span>
            </div>
          </div>

          {/* sessions */}
          <div className="mt-2 space-y-1.5">
            <div className="flex items-center gap-2.5 rounded-lg border border-live/20 bg-live/[0.06] px-3 py-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-live/15 text-live">
                <Dumbbell size={13} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[10.5px] font-medium text-foreground">
                  Push Day — Chest &amp; Triceps
                </div>
                <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/8">
                  <div className="h-full w-2/3 rounded-full bg-live" />
                </div>
              </div>
              <span className="font-mono text-[8.5px] text-live">4/6</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-lg border border-line bg-black/30 px-3 py-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 text-faint">
                <Zap size={13} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[10.5px] font-medium text-muted">
                  Pull Day — Back &amp; Biceps
                </div>
                <div className="font-mono text-[8px] text-faint">tomorrow · 6 exercises · 55 min</div>
              </div>
              <span className="rounded border border-line bg-white/5 px-1.5 py-0.5 font-mono text-[8px] text-faint">
                up next
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
