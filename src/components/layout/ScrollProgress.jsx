import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[9999] origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}