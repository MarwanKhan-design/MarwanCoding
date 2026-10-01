import { Brain, Database, GitBranch, MonitorSmartphone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface SkillGroup {
  index: string;
  icon: typeof Brain;
  title: string;
  note: string;
  accent: string;
  skills: string[];
  core: string[];
}

const GROUPS: SkillGroup[] = [
  {
    index: "01",
    icon: MonitorSmartphone,
    title: "Frontend",
    note: "Interfaces people enjoy using",
    accent: "text-accent",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "shadcn/ui"],
    core: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    index: "02",
    icon: Database,
    title: "Backend & Database",
    note: "Systems that hold up in production",
    accent: "text-live",
    skills: ["Node.js", "MongoDB", "PostgreSQL", "Prisma", "REST APIs", "Authentication"],
    core: ["PostgreSQL", "Prisma", "Node.js"],
  },
  {
    index: "03",
    icon: GitBranch,
    title: "Deployment & Tools",
    note: "Ship early, ship often",
    accent: "text-brand",
    skills: ["Git", "GitHub", "Vercel", "Railway", "Netlify"],
    core: ["Git", "Vercel"],
  },
  {
    index: "04",
    icon: Brain,
    title: "AI / ML",
    note: "The current obsession — growing fast",
    accent: "text-vio",
    skills: ["Python", "NumPy", "Pandas", "Machine Learning", "NLP", "Computer Vision"],
    core: ["Python", "Machine Learning"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* faint backdrop accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-line2 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Skills & Tools"
          title={
            <>
              A stack built for <span className="text-gradient">shipping products.</span>
            </>
          }
          sub="Every tool here was learned in the field — inside real codebases, real deployments and real deadlines. Dots mark what runs my production projects daily."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 100}>
              <div className="card lift group flex h-full flex-col p-6">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/[0.03] transition-colors duration-300 group-hover:border-line2">
                    <group.icon size={18} className={group.accent} />
                  </div>
                  <span className="font-mono text-[11px] text-faint">/{group.index}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
                  {group.title}
                </h3>
                <p className="mt-1 text-[12px] text-faint">{group.note}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => {
                    const isCore = group.core.includes(skill);
                    return (
                      <span
                        key={skill}
                        className={`chip ${isCore ? "border-line2 bg-white/[0.05] text-foreground" : ""}`}
                      >
                        {isCore && <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />}
                        {skill}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-auto pt-5">
                  <div className="flex items-center justify-between border-t border-line pt-4 font-mono text-[10px] text-faint">
                    <span>{group.skills.length} tools</span>
                    <span className={group.accent}>● active</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
