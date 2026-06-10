import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10"
      >
        About Me
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl borderborder-black/10 dark:border-white/10 bg-white/5 backdrop-blur-xl p-8"
      >
        <p className="leading-8 text-gray-400">
          I'm a passionate Frontend Developer with{" "}
          <strong>3+ years of experience </strong>
          building{" "}
          <strong>
            scalable, responsive, and user-centric web applications
          </strong>{" "}
          using React.js, JavaScript, TypeScript, Redux, Material UI, Formik,
          and REST APIs.
          <br />
          Experienced in:
          <br />
          <div className="px-6">
            <li>
              <strong>Reusable Component Architecture</strong> and maintainable
              codebases
            </li>
            <li>
              <strong>Dynamic forms</strong> and complex business workflows
            </li>
            <li>
              <strong>API integration and state management,</strong> and
              data-driven applications
            </li>
            <li>
              <strong>Performance Optimization</strong> using lazy loading, code
              splitting, memoization, debouncing, and caching
            </li>
            <li>
              <strong>Responsive UI Development</strong> and cross-browser
              compatibility
            </li>
            <li>
              <strong>Enterprise Application Development</strong> across ERP,
              CRM, Admin Portals, Auction & RFQ Systems, Matrimony Platforms,
              and Corporate Websites
            </li>
            <li>
              <strong>Frontend Architecture,</strong> scalability, and code
              quality best practices
            </li>
          </div>
          Throughout my career, I've contributed to diverse products including
          <strong>
            {" "}
            School ERP Systems, Hospital CRM Solutions, Matrimony Platforms,
            Admin Management Portals, Auction & RFQ Systems, AI-Powered
            Products, and Business Websites.
          </strong>
          <br />I believe <strong>strong fundamentals</strong> are the
          foundation of great software. While frameworks evolve, a deep
          understanding of JavaScript, React, and modern web development
          principles enables me to quickly adapt and deliver high-quality
          solutions across different domains.
          <br />I have a deep love for JavaScript and believe in user-centric
          development. Cursor is my favorite <strong>AI tool</strong>, helping
          me boost efficiency and innovation in my daily workflow.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
