import img from "../images/my-img.jpg";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white py-20 text-center px-4">
      <img
        src={img}
        alt="Marwan Khan"
        className="w-32 h-32 mx-auto rounded-full border-4 border-white mb-4"
      />
      <h1 className="text-4xl font-extrabold">Marwan Khan</h1>
      <p className="mt-2 text-lg font-light">
        Self-Taught Web Developer | MERN
      </p>
      <div className="mt-4 space-x-4">
        <a
          href="https://www.linkedin.com/in/marwan-khan-3bab46230/"
          target="_blank"
          className="underline text-white/80"
        >
          LinkedIn
        </a>
        <a
          href="https://www.fiverr.com/marwanmarwan550"
          target="_blank"
          className="underline text-white/80"
        >
          Fiverr
        </a>
      </div>
    </div>
  );
}
