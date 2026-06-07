import SectionTitle from "./SectionTitle";
import PremiumCard from "./PremiumCard";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Dr.Mahalingam College of Engineering and Technology",
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
  ];

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle title="Education & Certifications" />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Education */}

        <PremiumCard className="p-8">
          <h3 className="text-2xl font-bold mb-8 text-purple-400">Education</h3>

          {education.map((item) => (
            <div key={item.degree}>
              <h4 className="text-xl font-semibold">{item.degree}</h4>

              <p className="text-gray-400 mt-2">{item.institution}</p>

              <p className="text-gray-500 mt-2">{item.duration}</p>

              <p className="text-green-400 mt-3">{item.score}</p>
            </div>
          ))}
        </PremiumCard>

        {/* Certifications */}

        <PremiumCard className="p-8">
          <h3 className="text-2xl font-bold mb-8 text-purple-400">
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
