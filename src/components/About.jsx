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
          I'm a passionate Frontend Developer with 3+ years of experience
          building scalable and responsive web applications using React.js,
          JavaScript, MUI, Redux, Formik, and REST APIs. Experienced in:
          <br />
          <div className="px-6">
            <li>Dynamic forms and reusable components</li>
            <li>API integration and state management</li>
            <li>Material UI and responsive design</li>
            <li>Performance optimization and frontend architecture</li>
          </div>
          I believe in building strong foundations. Libraries and frameworks may
          come and go, but being well-versed in JavaScript, React, and Node.js
          fundamentals allows me to adapt and excel with any technology stack.
          <br />
          Worked on ERP modules including attendance systems, announcements,
          certificate management, ledger reports, and staff management systems.
          <br />I have a deep love for JavaScript and believe in user-centric
          development. Cursor is my favorite AI tool, helping me boost
          efficiency and innovation in my daily workflow.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
