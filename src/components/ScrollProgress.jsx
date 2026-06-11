import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
      }}
      className="
        fixed
        top-0
        left-0
        right-0

        h-1

        origin-left

        bg-gradient-to-r
        from-purple-500
        via-pink-500
        to-blue-500

        shadow-[0_0_15px_rgba(168,85,247,0.7)]

        z-[9999]
      "
    />
  );
}

export default ScrollProgress;
