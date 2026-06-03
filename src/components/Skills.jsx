import { motion } from "framer-motion";
import skills from "../pages/skills";
import SectionTitle from "./SectionTitle";

function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <SectionTitle title="Skills" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.05,
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-5
              text-center
              cursor-pointer
              transition-all
              duration-300
              hover:border-purple-500/40
              hover:bg-purple-500/10
            "
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;