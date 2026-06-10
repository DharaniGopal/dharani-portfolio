import { motion } from "framer-motion";

function BackgroundGlow() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="
          fixed
          top-20
          left-20
          w-96
          h-96
          rounded-full

          bg-purple-500/5
          dark:bg-purple-600/20

          blur-[80px]
          dark:blur-[120px]

          -z-10
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="
          fixed
          bottom-20
          right-20
          w-[500px]
          h-[500px]
          rounded-full

          bg-blue-500/5
          dark:bg-blue-500/10

          blur-[100px]
          dark:blur-[150px]

          -z-10
          pointer-events-none
        "
      />
    </>
  );
}

export default BackgroundGlow;
