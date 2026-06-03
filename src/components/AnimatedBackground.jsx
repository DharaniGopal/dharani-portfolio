import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-20 left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[150px]"
      />
    </div>
  );
}

export default AnimatedBackground;