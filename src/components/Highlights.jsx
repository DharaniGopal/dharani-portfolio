import { motion } from "framer-motion";
import PremiumCard from "./PremiumCard";

function Highlights() {
  const stats = [
    {
      value: "3+",
      label: "Years Frontend Experience",
      icon: "📅",
      gradient: "from-blue-600 to-blue-500",
    },
    {
      value: "6+",
      label: "Business Domains Delivered",
      icon: "🏢",
      gradient: "from-green-600 to-green-500",
    },
    {
      value: "12+",
      label: "Production Applications Built",
      icon: "🚀",
      gradient: "from-purple-600 to-purple-500",
    },
    {
      value: "100%",
      label: "API-Driven UI Systems",
      icon: "⚡",
      gradient: "from-pink-600 to-pink-500",
    },
  ];

  return (
    <section id="highlights" className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10"
      >
        Beyond Development
      </motion.h2>

      {/* Stats Cards */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            className={`
              bg-gradient-to-r ${item.gradient}
              rounded-2xl
              p-6
              text-center
              shadow-lg
            `}
          >
            <div className="text-3xl mb-2">{item.icon}</div>

            <h3 className="text-3xl font-bold text-white">{item.value}</h3>

            <p className="mt-2 text-white/80 text-sm">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Cards */}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Beyond Code */}

        <PremiumCard className="p-6">
          <h3 className="text-2xl font-bold text-orange-400 mb-6">
            Beyond Code
          </h3>

          <div className="space-y-4 text-base text-gray-300">
            <div>📚 Reading Novels - stress reliever</div>

            <div>🐕 Feeding street dogs - giving back</div>

            <div>🧠 Exploring new technologies & AI tools</div>

            <div>📈 Continuous learning and self-improvement</div>
          </div>
        </PremiumCard>

        {/* Continuous Learning */}

        <PremiumCard className="p-6">
          <h3 className="text-2xl font-bold text-indigo-400 mb-6">
            Continuous Learning
          </h3>

          <div className="space-y-4 text-base text-gray-300">
            <div>📚 You Don't Know JS</div>

            <div>📖 Refactoring by Martin Fowler</div>

            <div>⚛️ Advanced React Patterns</div>

            <div>🤖 Cursor AI, ChatGPT & Modern AI Workflows</div>
          </div>
        </PremiumCard>
      </div>
    </section>
  );
}

export default Highlights;
