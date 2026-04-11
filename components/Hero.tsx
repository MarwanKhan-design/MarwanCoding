import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          I build fast, scalable web apps.
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl">
          I'm a full-stack developer specializing in React, Node.js, and Next.js.
          I help businesses build modern, high-performance applications.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-700 px-6 py-3 rounded-lg text-gray-300 hover:text-white"
          >
            Contact Me
          </a>
        </div>
      </section>
  )
}

export default Hero