import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      {/* Hero */}
      <div className="relative z-10 mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-20 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        {/* Left Content */}
        <div className="max-w-2xl">
          {/* Identity */}
          <p className="mb-4 text-sm font-medium tracking-wide text-blue-400">
            Marwan Khan — Full-Stack & AI Developer
          </p>

          {/* Availability */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-blue-400"
            />
            Available for freelance & remote work
          </div>

          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
          >
            I build
            <span className="block bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
              scalable web apps
            </span>
            that drive real results.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            I build modern, fast, and scalable web applications using React,
            Next.js, TypeScript, Node.js, MongoDB, PostgreSQL, and AI
            technologies — with a focus on clean architecture, secure systems,
            and great user experiences.
          </p>

          {/* CTA Links */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-zinc-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/20 hover:bg-white/10"
            >
              Start a Project
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <h2 className="text-2xl font-semibold text-white">3+</h2>
              <p className="mt-1 text-sm text-zinc-500">Full-Stack Projects</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">MERN</h2>
              <p className="mt-1 text-sm text-zinc-500">Core Stack</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">Remote</h2>
              <p className="mt-1 text-sm text-zinc-500">
                Worldwide Availability
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              aria-hidden="true"
              className="h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]"
            />
          </div>

          {/* Profile Card */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-blue-500/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:rotate-1">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-40"
            />

            <Image
              src={"/images/me.png"}
              alt="Marwan Khan, full-stack and AI developer"
              width={400}
              height={520}
              priority
              className="relative z-10 h-[520px] w-[400px] rounded-[1.5rem] object-cover"
            />

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 z-20 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl">
              <p className="text-sm font-medium text-white">Building modern</p>
              <p className="text-sm text-zinc-400">Full-stack applications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent"
      />
    </section>
  );
}
