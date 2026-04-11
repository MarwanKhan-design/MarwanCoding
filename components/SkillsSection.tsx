import React from 'react'

const SkillsSection = () => {
  return (
<section className="py-20">
  <h2 className="text-3xl font-bold mb-10">Skills</h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div>
      <h3 className="text-xl font-semibold mb-4">Frontend</h3>
      <ul className="text-gray-400 space-y-2">
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4">Backend</h3>
      <ul className="text-gray-400 space-y-2">
        <li>Node.js</li>
        <li>Express</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4">Database</h3>
      <ul className="text-gray-400 space-y-2">
        <li>MongoDB</li>
      </ul>
    </div>

  </div>
</section>
  )
}

export default SkillsSection