import { motion } from "framer-motion";
import experience from "../pages/experience";
import SectionTitle from "./SectionTitle";
import PremiumCard from "./PremiumCard";

function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle title="Experience" />

      <div className="relative mt-16">
        {/* Timeline Line */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-purple-500/30"></div>

        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            className="relative pl-16 mb-16"
          >
            {/* Timeline Dot */}
            <div
              className="
                absolute
                left-0
                top-4
                w-8
                h-8
                rounded-full
                bg-purple-500
                border-4
                border-[#0f172a]
              "
            />

            <PremiumCard className="p-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-white">{item.role}</h3>

                  <p className="text-purple-400 text-lg">{item.company}</p>
                </div>

                <span
                  className="
                    text-sm
                    px-4
                    py-2
                    rounded-full
                    border
                    border-purple-500/30
                    bg-purple-500/10
                    text-purple-300
                    w-fit
                  "
                >
                  {item.period}
                </span>
              </div>

              {/* Achievements */}
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-4">
                  Key Achievements
                </h4>

                <ul className="space-y-3">
                  {item.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="text-gray-400 flex items-start gap-3"
                    >
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mt-8">
                <h4 className="text-white font-semibold mb-4">Technologies</h4>

                <div className="flex flex-wrap gap-3">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        bg-purple-500/10
                        border
                        border-purple-500/20
                        text-purple-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </PremiumCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
