import {
  Briefcase,
  CalendarDays,
  Globe,
  LayoutDashboard,
  Receipt,
  TrendingUp,
  Users,
} from "lucide-react";

const NAV = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Users, label: "Clients", active: false },
  { icon: Briefcase, label: "Projects", active: false },
  { icon: Receipt, label: "Invoices", active: false },
  { icon: CalendarDays, label: "Meetings", active: false },
];

const INVOICES = [
  { client: "Atlas Studio", project: "Brand site", amount: "$1,200", status: "Paid", tone: "live" },
  { client: "Nadia R.", project: "E-commerce", amount: "$2,400", status: "Pending", tone: "accent" },
  { client: "Orbit Labs", project: "Dashboard", amount: "$890", status: "Paid", tone: "live" },
  { client: "Fern & Co", project: "Retainer", amount: "$650", status: "Overdue", tone: "rose" },
];

const tone: Record<string, string> = {
  live: "border-live/25 bg-live/10 text-live",
  accent: "border-accent/25 bg-accent/10 text-accent",
  rose: "border-rose/25 bg-rose/10 text-rose",
};

export function CRMMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-[#0a0b11] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]" aria-hidden>
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-black/30 px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <div className="ml-2 flex flex-1 items-center justify-center gap-1.5 rounded-md border border-line bg-black/50 px-3 py-1 font-mono text-[9.5px] text-faint sm:mx-8">
          <Globe size={9} className="text-brand" />
          <span className="text-muted">app.freelancer-crm</span>
          <span>/overview</span>
        </div>
      </div>

      <div className="flex">
        {/* sidebar */}
        <div className="hidden w-36 shrink-0 flex-col border-r border-line bg-black/25 p-3 sm:flex md:w-40">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand font-display text-[11px] font-bold text-[#10122b]">
              F
            </span>
            <span className="font-display text-[12px] font-semibold text-foreground">FreelanceCRM</span>
          </div>
          <div className="mt-4 space-y-0.5">
            {NAV.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10.5px] ${
                  item.active
                    ? "border border-brand/20 bg-brand/10 font-medium text-brand"
                    : "text-faint"
                }`}
              >
                <item.icon size={12} />
                {item.label}
              </div>
            ))}
          </div>
          <div className="mt-auto rounded-lg border border-line bg-black/30 p-2.5">
            <div className="font-mono text-[8px] uppercase tracking-wider text-faint">open tasks</div>
            <div className="mt-0.5 font-display text-[13px] font-semibold text-foreground">7 due today</div>
            <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/8">
              <div className="h-full w-[58%] rounded-full bg-brand" />
            </div>
          </div>
        </div>

        {/* main */}
        <div className="min-w-0 flex-1 p-3.5 sm:p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-faint">
                March 2026 · overview
              </div>
              <div className="mt-0.5 font-display text-[15px] font-semibold text-foreground">
                Business at a glance
              </div>
            </div>
            <div className="rounded-md bg-brand px-2 py-1 font-mono text-[8.5px] font-medium text-[#10122b]">
              + New invoice
            </div>
          </div>

          {/* KPIs */}
          <div className="mt-3 grid grid-cols-2 gap-2 min-[480px]:grid-cols-4">
            {[
              { k: "Revenue", v: "$6,240", d: "+12.4%", cls: "text-live" },
              { k: "Clients", v: "14", d: "+2", cls: "text-brand" },
              { k: "Outstanding", v: "$1,850", d: "3 inv", cls: "text-accent" },
              { k: "Hours", v: "96h", d: "mo", cls: "text-muted" },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-line bg-black/30 px-2.5 py-2">
                <div className="truncate font-mono text-[8px] uppercase tracking-wider text-faint">
                  {s.k}
                </div>
                <div className="mt-0.5 flex items-baseline gap-1">
                  <span className="font-display text-[13px] font-semibold text-foreground">{s.v}</span>
                  <span className={`font-mono text-[8px] ${s.cls}`}>{s.d}</span>
                </div>
              </div>
            ))}
          </div>

          {/* revenue chart */}
          <div className="mt-2 rounded-lg border border-line bg-black/30 p-3">
            <div className="flex items-baseline justify-between">
              <span className="text-[10px] font-medium text-muted">Revenue — 6 months</span>
              <span className="flex items-center gap-1 font-mono text-[8px] text-live">
                <TrendingUp size={9} /> trending up
              </span>
            </div>
            <svg viewBox="0 0 300 84" className="mt-2 h-16 w-full" fill="none">
              <defs>
                <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="84" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8b93f8" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#8b93f8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 66 C 28 58, 42 62, 66 50 C 92 37, 110 46, 138 36 C 168 25, 188 30, 216 20 C 246 11, 270 15, 300 7 L 300 84 L 0 84 Z"
                fill="url(#revFill)"
              />
              <path
                d="M0 66 C 28 58, 42 62, 66 50 C 92 37, 110 46, 138 36 C 168 25, 188 30, 216 20 C 246 11, 270 15, 300 7"
                stroke="#8b93f8"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="300" cy="7" r="3" fill="#8b93f8" />
              <circle cx="300" cy="7" r="6" fill="#8b93f8" opacity="0.25" />
            </svg>
            <div className="flex justify-between font-mono text-[7.5px] text-faint">
              {["OCT", "NOV", "DEC", "JAN", "FEB", "MAR"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>

          {/* invoices */}
          <div className="mt-2 overflow-hidden rounded-lg border border-line">
            <div className="grid grid-cols-[1.2fr_1fr_auto_auto] items-center gap-2 border-b border-line bg-black/40 px-3 py-1.5 font-mono text-[7.5px] uppercase tracking-wider text-faint">
              <span>Client</span>
              <span className="hidden min-[480px]:block">Project</span>
              <span>Amount</span>
              <span className="text-right">Status</span>
            </div>
            {INVOICES.map((inv) => (
              <div
                key={inv.client}
                className="grid grid-cols-[1.2fr_1fr_auto_auto] items-center gap-2 border-b border-line bg-black/[0.15] px-3 py-2 last:border-0"
              >
                <span className="truncate text-[10px] font-medium text-foreground">{inv.client}</span>
                <span className="hidden truncate text-[10px] text-faint min-[480px]:block">
                  {inv.project}
                </span>
                <span className="font-mono text-[9.5px] text-muted">{inv.amount}</span>
                <span
                  className={`justify-self-end rounded border px-1.5 py-0.5 font-mono text-[8px] ${tone[inv.tone]}`}
                >
                  {inv.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
