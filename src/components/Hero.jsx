import { motion } from "framer-motion";
import personalInfo from "../pages/personalInfo";
import resumePDF from "../assets/resume.pdf";
import PremiumCard from "./PremiumCard";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        py-32
      "
    >
      <div className="text-center max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-purple-500 mb-4 font-medium"
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
              from-purple-500
              via-pink-500
              to-blue-500
              bg-clip-text
              text-transparent
            "
          >
            {personalInfo.name}
          </span>
        </motion.h1>

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

            text-green-500
            text-sm
            mt-6
          "
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Available for Frontend Opportunities
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            text-2xl
            md:text-4xl
            mt-6

            text-slate-700
            dark:text-gray-400
          "
        >
          {personalInfo.role}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-6
            max-w-3xl
            mx-auto

            text-slate-600
            dark:text-gray-500
          "
        >
          {personalInfo.description}
        </motion.p>

        {/* CTA Buttons */}

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="
              px-6
              py-3
              rounded-full

              bg-purple-600
              text-white

              hover:bg-purple-700
              transition
            "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
              px-6
              py-3
              rounded-full

              border
              border-gray-300

              dark:border-white/20

              hover:border-purple-500
              transition
            "
          >
            Contact Me
          </a>

          <a
            href={resumePDF}
            download="Dharani_Gopal_Frontend_Resume.pdf"
            className="
              px-6
              py-3
              rounded-full

              border
              border-purple-500

              hover:bg-purple-500
              hover:text-white

              transition
            "
          >
            Download Resume
          </a>
        </div>

        {/* Highlights */}

        <div className="grid md:grid-cols-3 gap-8 mt-20 text-left">
          <PremiumCard className="p-6">
            <div className="text-4xl mb-4">🚀</div>

            <h3 className="text-xl font-semibold mb-2">Founding Engineer</h3>

            <p className="text-slate-600 dark:text-gray-400">
              Built Bizgam AI products from the ground up, designing scalable
              frontend architecture and reusable systems.
            </p>
          </PremiumCard>

          <PremiumCard className="p-6">
            <div className="text-4xl mb-4">📈</div>

            <h3 className="text-xl font-semibold mb-2">
              Multi-Domain Expertise
            </h3>

            <p className="text-slate-600 dark:text-gray-400">
              Built ERP Systems, CRM Platforms, Matrimony Applications, Auction
              & RFQ Systems, Admin Portals and Corporate Websites.
            </p>
          </PremiumCard>

          <PremiumCard className="p-6">
            <div className="text-4xl mb-4">⚡</div>

            <h3 className="text-xl font-semibold mb-2">Performance Focused</h3>

            <p className="text-slate-600 dark:text-gray-400">
              Optimized React applications using lazy loading, code splitting,
              caching, memoization and reusable architecture.
            </p>
          </PremiumCard>
        </div>

        {/* Stats */}

        <div className="mt-20 grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-purple-500">3.10+</h3>

            <p className="text-slate-600 dark:text-gray-500">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-purple-500">15+</h3>

            <p className="text-slate-600 dark:text-gray-500">ERP Modules</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-purple-500">20+</h3>

            <p className="text-slate-600 dark:text-gray-500">
              Reusable Components
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
