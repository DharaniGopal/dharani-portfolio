import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import SocialDock from "./components/SocialDock";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <main className="bg-[#050505] text-white">
      <ScrollProgress />
      <AnimatedBackground />
      <SocialDock />

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
