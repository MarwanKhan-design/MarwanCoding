import React from 'react'

const ContactSection = () => {
  return (
<section id="contact" className="py-20">
  <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>

  <p className="text-gray-400 max-w-xl mb-8">
  I am currently available for freelance work and open to new opportunities.
  If you have a project in mind, reach out — I usually respond within a few hours.
  </p>

  <div className="flex flex-col sm:flex-row gap-4">

    <a
      href="mailto:techmarwan70@gmail.com"
      className="bg-white text-black px-6 py-3 rounded-lg font-medium text-center"
    >
      Email Me
    </a>

    <a
       href="https://wa.me/92369302382"
      target="_blank"
      className="border border-gray-700 px-6 py-3 rounded-lg text-gray-300 hover:text-white text-center"
    >
      WhatsApp
    </a>

    <a
    href="https://www.linkedin.com/in/marwan-coding/"
      target="_blank"
      className="border border-gray-700 px-6 py-3 rounded-lg text-gray-300 hover:text-white text-center"
    >
      LinkedIn
    </a>

  </div>
</section>
  )
}

export default ContactSection