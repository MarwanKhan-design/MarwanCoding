import React from "react";
import Image from "next/image";
import myimage from '@/app/images/me.png'

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">
        
        {/* LEFT */}
        <div className="animate-fadeLeft">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            I build web apps that
            <span className="text-gray-400"> drive real results.</span>
          </h1>

          <p className="mt-5 text-gray-400 max-w-lg text-base leading-relaxed">
            Full-stack developer building fast, scalable applications 
            with clean UI, secure systems, and real-world functionality.
          </p>

          <div className="mt-7 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-white text-black px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="border border-gray-700 px-5 py-2.5 rounded-lg text-gray-300 hover:text-white transition"
            >
              Start Project
            </a>
          </div>

          <div className="mt-5 flex gap-5 text-sm text-gray-500">
            <span>✔ Full-stack apps</span>
            <span>✔ Dashboards</span>
            <span>✔ Auth systems</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end animate-fadeRight">
          <div className="relative w-64 md:w-80 lg:w-96 aspect-[4/5]">

          <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-2xl"></div>

            <Image
              src={myimage}
              alt="Marwan Khan"
              fill
              className="rounded-2xl object-cover border border-white/10 shadow-lg hover:scale-105 transition duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;