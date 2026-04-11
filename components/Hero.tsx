import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
       <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
  I build fast, scalable
  <span className="text-gray-400"> web apps.</span>
</h1>

<p className="mt-6 text-gray-400 max-w-xl text-lg leading-relaxed">
  Full-stack developer specializing in React, Node.js, and Django.
  I build modern, high-performance applications that deliver real results.
</p>

        <div className="mt-8 flex gap-4">
        <a
  href="#projects"
  className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
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