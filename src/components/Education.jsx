import SectionTitle from "./SectionTitle";
import PremiumCard from "./PremiumCard";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Dr. Mahalingam College of Engineering and Technology",
      duration: "2018 - 2020",
    },

    {
      degree: "Bachelor of Science (B.Sc) Computer Science",
      institution: "Kongu Arts and Science College",
      duration: "2015 - 2018",
    },
  ];

  const certifications = [
    "React.js Development",
    "JavaScript ES6+",
    "Frontend Web Development",
    "Git & GitHub",
    "Modern React Architecture",
    "Frontend Performance Optimization",
  ];

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle title="Education & Certifications" />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Education */}

        <PremiumCard className="p-8">
          <h3 className="text-2xl font-bold mb-8 text-purple-500">
            Education
          </h3>

          <div className="space-y-8">
            {education.map((item) => (
              <div
                key={item.degree}
                className="
                  border-l-2
                  border-purple-500/30
                  pl-5
                "
              >
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {item.degree}
                </h4>

                <p className="text-gray-700 dark:text-gray-400 mt-2">
                  {item.institution}
                </p>

                <p className="text-gray-500 mt-2">
                  {item.duration}
                </p>
              </div>
            ))}
          </div>
        </PremiumCard>

        {/* Certifications */}

        <PremiumCard className="p-8">
          <h3 className="text-2xl font-bold mb-8 text-purple-500">
            Certifications & Learning
          </h3>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="
                  p-4
                  rounded-xl

                  bg-purple-500/10
                  border
                  border-purple-500/20

                  text-gray-700
                  dark:text-gray-300

                  hover:border-purple-500/40
                  transition-all
                  duration-300
                "
              >
                📜 {cert}
              </div>
            ))}
          </div>
        </PremiumCard>
      </div>
    </section>
  );
}

export default Education;