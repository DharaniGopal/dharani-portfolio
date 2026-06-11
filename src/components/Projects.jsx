import projects from "../pages/projects";
import SectionTitle from "./SectionTitle";
import PremiumCard from "./PremiumCard";

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
      <SectionTitle title="Featured Projects" />

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <PremiumCard key={project.title} className="p-8">
            {/* Company */}

            <p className="text-purple-500 font-medium text-sm">
              {project.company}
            </p>

            {/* Project Title */}

            <h3
              className="
                text-2xl
                font-bold
                mt-2
                text-gray-900
                dark:text-white
              "
            >
              {project.title}
            </h3>

            {/* Description */}

            <p
              className="
                mt-4
                leading-7
                text-gray-600
                dark:text-gray-400
              "
            >
              {project.description}
            </p>

            {/* Technologies */}

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium

                    bg-purple-100
                    dark:bg-purple-500/10

                    border
                    border-purple-200
                    dark:border-purple-500/20

                    text-purple-700
                    dark:text-purple-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Impact */}

            <ul
              className="
                mt-6
                space-y-3
                text-gray-700
                dark:text-gray-400
              "
            >
              {project.impact.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </PremiumCard>
        ))}
      </div>
    </section>
  );
}

export default Projects;
