import { motion } from "framer-motion";

function PremiumCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl

        border
        border-black/10
        dark:border-white/10

        bg-white
        dark:bg-white/5

        backdrop-blur-xl

        shadow-lg
        dark:shadow-none

        transition-all
        duration-300

        before:absolute
        before:inset-0
        before:bg-gradient-to-r
        before:from-purple-500/0
        before:via-purple-500/10
        before:to-purple-500/0
        before:opacity-0
        before:transition-opacity
        before:duration-300

        hover:before:opacity-100

        hover:border-purple-500/40

        hover:shadow-[0_10px_40px_rgba(168,85,247,0.20)]
        dark:hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]

        ${className}
      `}
    >
      {/* Top Glow Line */}

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[2px]

          bg-gradient-to-r
          from-transparent
          via-purple-500
          to-transparent

          opacity-0
          hover:opacity-100
          transition-opacity
          duration-300
        "
      />

      {/* Content */}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default PremiumCard;
