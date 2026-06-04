import { motion } from "framer-motion";
import experience from "../pages/experience";
import SectionTitle from "./SectionTitle";

function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-32">
      <SectionTitle title="Experience" />

      <div className="relative border-l border-purple-500/30 ml-4">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="mb-12 ml-8"
          >
            <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-purple-500" />

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold">{item.role}</h3>

              <p className="text-purple-400 mt-1">{item.company}</p>

              <p className="text-sm text-gray-500 mb-4">{item.duration}</p>

              <ul className="space-y-2 text-gray-400">
                {item.description.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
