import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimatedBackground from "./components/AnimatedBackground";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="bg-black text-white">
      <AnimatedBackground />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}

export default App;
