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

      {/* Title */}
      <h2
        className="
          text-4xl
          md:text-5xl
          font-extrabold
          leading-tight

          bg-gradient-to-r
          from-purple-600
          via-pink-500
          to-blue-500

          dark:from-purple-400
          dark:via-pink-400
          dark:to-blue-400

          bg-clip-text
          text-transparent
        "
      >
        {title}
      </h2>

      {/* Underline */}
      <div
        className="
          mt-5
          mx-auto
          h-1
          w-24
          rounded-full

          bg-gradient-to-r
          from-purple-500
          via-pink-500
          to-blue-500
        "
      />
    </motion.div>
  );
}

export default SectionTitle;
