import { motion } from "framer-motion";
import personalInfo from "../pages/personalInfo";
import resumePDF from "../assets/resume.pdf";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
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
          className="text-5xl md:text-7xl font-bold"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-4xl mt-4 text-gray-400"
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
