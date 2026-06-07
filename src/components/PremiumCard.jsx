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
        border-white/10
        dark:border-white/10
        bg-white/5
        dark:bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300

        before:absolute
        before:inset-0
        before:bg-gradient-to-r
        before:from-purple-500/0
        before:via-purple-500/10
        before:to-purple-500/0
        before:opacity-0
        hover:before:opacity-100

        hover:border-purple-500/40
        hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]

        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default PremiumCard;
