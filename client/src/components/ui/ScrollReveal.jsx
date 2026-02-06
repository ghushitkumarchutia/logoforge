import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const directionVariants = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
};

export const ScrollReveal = ({
  children,
  direction = "up",
  distance = 30,
  duration = 0.6,
  delay = 0,
  once = true,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const initial = {
    opacity: 0,
    ...(direction === "up" && { y: distance }),
    ...(direction === "down" && { y: -distance }),
    ...(direction === "left" && { x: distance }),
    ...(direction === "right" && { x: -distance }),
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
