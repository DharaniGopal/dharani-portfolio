import { motion } from "framer-motion";
import personalInfo from "../pages/personalInfo";
import resumePDF from "../assets/resume.pdf";
import PremiumCard from "./PremiumCard";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-32"
    >
      <div className="text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-purple-400 mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
    text-6xl
    md:text-8xl
    font-extrabold
    leading-tight
  "
        >
          <span
            className="
      bg-gradient-to-r
      from-purple-400
      via-pink-400
      to-blue-400
      bg-clip-text
      text-transparent
    "
          >
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold"
        >
          {personalInfo.name}
        </motion.h1> */}

        <div
          className="
    inline-flex
    items-center
    gap-2
    px-4
    py-2
    rounded-full
    border
    border-green-500/30
    bg-green-500/10
    text-green-400
    text-sm
    mb-6
  "
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Available for Frontend Opportunities
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-4xl mt-4 text-gray-600 dark:text-gray-400"
        >
          {personalInfo.role}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-500 max-w-2xl mx-auto"
        >
          {personalInfo.description}
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
          <PremiumCard className="p-6">
            <div className="text-4xl mb-4">🚀</div>

            <h3 className="text-xl font-semibold mb-2">Founding Engineer</h3>

            <p className="text-gray-600 dark:text-gray-400">
              Built Bizgam AI products from the ground up, designing scalable
              frontend architecture and reusable systems.
            </p>
          </PremiumCard>

          <PremiumCard className="p-6">
            <div className="text-4xl mb-4">📈</div>

            <h3 className="text-xl font-semibold mb-2">ERP Specialist</h3>

            <p
              className="text-gray-60 dark:text-gray-400"
            >
              Developed multiple School ERP modules including Attendance,
              Certificates, Finance, Staff and Student Management systems.
            </p>
          </PremiumCard>

          <PremiumCard className="p-6">
            <div className="text-4xl mb-4">⚡</div>

            <h3 className="text-xl font-semibold mb-2">Performance Focused</h3>

            <p className="text-gray-600 dark:text-gray-400">
              Optimized React applications using lazy loading, caching, code
              splitting and reusable component architecture.
            </p>
          </PremiumCard>
        </div>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="
      px-6 py-3
      rounded-full
      bg-purple-600
      hover:bg-purple-700
      transition
    "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
      px-6 py-3
      rounded-full
      border
      border-white/20
      hover:border-purple-500
      transition
    "
          >
            Contact Me
          </a>
          <a
            href={resumePDF}
            download="Dharani_Gopal_FronEnd_Resume.pdf"
            className="
    px-6
    py-3
    rounded-full
    border
    border-purple-500
    hover:bg-purple-500
    transition
  "
          >
            Download Resume
          </a>
          <div className="mt-16 grid grid-cols-3 gap-10">
            <div>
              <h3 className="text-4xl font-bold text-purple-400">3.10+</h3>

              <p className="text-gray-500">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-purple-400">15+</h3>

              <p className="text-gray-500">ERP Modules</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-purple-400">20+</h3>

              <p className="text-gray-500">Reusable Components</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
