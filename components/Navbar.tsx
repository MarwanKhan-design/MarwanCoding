export default function Navbar() {
  return (
    <header className="relative z-20 border-b border-white/10 backdrop-blur-sm">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold shadow-lg shadow-blue-500/10">
          MK
        </div>
        <div>
          <h1 className="text-sm font-semibold tracking-wide text-white">
            Marwan Khan
          </h1>
          <p className="text-xs text-zinc-500">Full-Stack Developer</p>
        </div>
      </div>

      <nav className="hidden items-center gap-10 text-sm text-zinc-400 md:flex">
        <a
          href="#projects"
          className="transition hover:text-white"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="transition hover:text-white"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="transition hover:text-white"
        >
          Contact
        </a>
      </nav>
    </div>
  </header>
  );
}