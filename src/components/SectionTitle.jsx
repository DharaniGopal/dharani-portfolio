import { motion } from "framer-motion";

function SectionTitle({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          bg-gradient-to-r
          from-purple-400
          to-pink-500
          bg-clip-text
          text-transparent
        "
      >
        {title}
      </h2>
    </motion.div>
  );
}

export default SectionTitle;