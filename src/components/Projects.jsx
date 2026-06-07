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
            <p className="text-purple-400 text-sm">{project.company}</p>

            <h3 className="text-2xl font-bold mt-2">{project.title}</h3>

            <p className="text-gray-400 mt-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-purple-500/10
                    border
                    border-purple-500/20
                    text-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-2 text-gray-400">
              {project.impact.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </PremiumCard>
        ))}
      </div>
    </section>
  );
}

export default Projects;
