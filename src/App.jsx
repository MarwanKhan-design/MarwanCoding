import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
