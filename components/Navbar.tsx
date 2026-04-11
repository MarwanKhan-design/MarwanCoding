export default function Navbar() {
    return (
      <nav className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-lg font-semibold">Marwan</h1>
  
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>
    );
  }