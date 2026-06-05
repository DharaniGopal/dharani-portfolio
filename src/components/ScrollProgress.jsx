import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
        fixed
        top-0
        left-0
        right-0
        h-[3px]
        z-[100]
        origin-left
        bg-gradient-to-r
        from-purple-500
        to-cyan-500
      "
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}

export default ScrollProgress;