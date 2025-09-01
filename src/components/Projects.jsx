// Projects.jsx
const projects = [
  {
    name: "Notes App",
    link: "https://note-app-etoy.vercel.app/",
    description: "A full stack notes app using React, Node.js, and MongoDB. with google auth and email auth.",
  },
  {
    name: "Eco Shop",
    link: "https://eco-full-production.up.railway.app/",
    description: "E-commerce MERN app with user auth, cart, and checkout.",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div key={project.name} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-700">{project.name}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="inline-block mt-4 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700"
            >
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
