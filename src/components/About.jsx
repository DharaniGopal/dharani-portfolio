import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-10">
      <SectionTitle title="About Me" />

      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        className="
          rounded-3xl
          border
          border-black/10
          dark:border-white/10

          bg-white
          dark:bg-white/5

          backdrop-blur-xl
          p-8

          shadow-md
          dark:shadow-none
        "
      >
        <div
          className="
            leading-8

            text-gray-700
            dark:text-gray-400
          "
        >
          <p>
            I'm a passionate Frontend Developer with{" "}
            <strong className="text-slate-900 dark:text-white">
              3+ years of experience
            </strong>{" "}
            building{" "}
            <strong className="text-slate-900 dark:text-white">
              scalable, responsive, and user-centric web applications
            </strong>{" "}
            using React.js, JavaScript, TypeScript, Redux, Material UI, Formik,
            and REST APIs.
          </p>

          <div className="mt-6">
            <p className="mb-4 font-semibold text-slate-900 dark:text-white">
              Experienced In:
            </p>

            <ul className="space-y-3 pl-6 list-disc">
              <li>
                <strong className="text-slate-900 dark:text-white">
                  Reusable Component Architecture
                </strong>{" "}
                and maintainable codebases
              </li>

              <li>
                <strong className="text-slate-900 dark:text-white">
                  Dynamic Forms
                </strong>{" "}
                and complex business workflows
              </li>

              <li>
                <strong className="text-slate-900 dark:text-white">
                  API Integration & State Management
                </strong>{" "}
                for data-driven applications
              </li>

              <li>
                <strong className="text-slate-900 dark:text-white">
                  Performance Optimization
                </strong>{" "}
                using lazy loading, code splitting, memoization, debouncing, and
                caching
              </li>

              <li>
                <strong className="text-slate-900 dark:text-white">
                  Responsive UI Development
                </strong>{" "}
                and cross-browser compatibility
              </li>

              <li>
                <strong className="text-slate-900 dark:text-white">
                  Enterprise Application Development
                </strong>{" "}
                across ERP, CRM, Admin Portals, Auction & RFQ Systems, Matrimony
                Platforms, and Corporate Websites
              </li>

              <li>
                <strong className="text-slate-900 dark:text-white">
                  Frontend Architecture
                </strong>
                , scalability, and code quality best practices
              </li>
            </ul>
          </div>

          <p className="mt-6">
            Throughout my career, I've contributed to diverse products including{" "}
            <strong className="text-slate-900 dark:text-white">
              School ERP Systems, Hospital CRM Solutions, Matrimony Platforms,
              Admin Management Portals, Auction & RFQ Systems, AI-Powered
              Products, and Corporate Websites.
            </strong>
          </p>

          <p className="mt-6">
            I believe{" "}
            <strong className="text-slate-900 dark:text-white">
              strong fundamentals
            </strong>{" "}
            are the foundation of great software. While frameworks evolve, a
            deep understanding of JavaScript, React, and modern web development
            principles enables me to quickly adapt and deliver high-quality
            solutions across different domains.
          </p>

          <p className="mt-6">
            I have a deep love for JavaScript and believe in user-centric
            development. Cursor is my favorite{" "}
            <strong className="text-slate-900 dark:text-white">AI tool</strong>,
            helping me boost efficiency and innovation in my daily workflow.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
