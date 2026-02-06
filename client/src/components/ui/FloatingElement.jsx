import { motion } from "framer-motion";

export const FloatingElement = ({
  children,
  duration = 6,
  distance = 10,
  delay = 0,
  className,
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance / 2, distance / 2, -distance / 2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};
