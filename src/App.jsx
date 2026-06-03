import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimatedBackground from "./components/AnimatedBackground";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="bg-black text-white">
      <AnimatedBackground />
      <Navbar />

      <Hero />
      <About />
      <Skills/>
    </main>
  );
}

export default App;