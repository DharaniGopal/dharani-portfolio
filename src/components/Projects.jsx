import { motion } from "framer-motion";
import projects from "../pages/projects";
import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
      <SectionTitle title="Projects" />

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{
              y: -8,
            }}
            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
            "
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

            <p className="text-gray-400 mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    bg-purple-500/10
                    border
                    border-purple-500/20
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
