import { motion } from "framer-motion";
import skills from "../pages/skills";
import SectionTitle from "./SectionTitle";

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle title="Skills & Technologies" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -5,
            }}
            className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                hover:border-purple-500/40
                transition-all
                duration-300
              "
          >
            <h3
              className="
                  text-xl
                  font-semibold
                  text-purple-400
                  mb-5
                  capitalize
                "
            >
              {category.replace(/([A-Z])/g, " $1")}
            </h3>

            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="
                      px-3
                      py-2
                      rounded-full
                      text-sm
                      bg-purple-500/10
                      border
                      border-purple-500/20
                      text-gray-300
                      hover:bg-purple-500/20
                      transition-all
                    "
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
