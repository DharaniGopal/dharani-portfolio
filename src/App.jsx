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
import Highlights from "./components/Highlights";
import Education from "./components/Education";
// import BackgroundGlow from "./components/BackgroundGlow";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <main
      className="
        min-h-screen
        bg-slate-50
        text-slate-900

        dark:bg-[#050505]
        dark:text-white

        transition-all
        duration-300
      "
    >
      <ThemeToggle />
      <ScrollProgress />
      <AnimatedBackground />
      <SocialDock />
      {/* <BackgroundGlow /> */}

      <Navbar />

      <Hero />
      <About />
      <Highlights />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
