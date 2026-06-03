import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-32"
    >
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
        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
      >
        <p className="leading-8 text-gray-400">
          Frontend Developer with 3.10+ years of experience building
          enterprise-level applications using React.js, Material UI,
          Redux Toolkit, Formik, REST APIs and scalable component
          architectures.

          Experienced in developing ERP systems, student management
          platforms, attendance systems, certificate management
          solutions and dynamic dashboard applications.
        </p>
      </motion.div>
    </section>
  );
}

export default About;