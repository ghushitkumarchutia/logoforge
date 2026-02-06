import { motion } from "framer-motion";
import clsx from "clsx";

const speedMap = {
  slow: 20,
  normal: 10,
  fast: 5,
};

export const AnimatedBackground = ({
  variant = "gradient",
  colors = ["#22c55e", "#8b5cf6"],
  speed = "normal",
  opacity = 0.5,
  className,
}) => {
  const duration = speedMap[speed];

  if (variant === "gradient") {
    return (
      <motion.div
        className={clsx("absolute inset-0 -z-10 overflow-hidden", className)}
        style={{ opacity }}
      >
        <motion.div
          className='absolute inset-0'
          style={{
            background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    );
  }

  if (variant === "mesh") {
    return (
      <div
        className={clsx("absolute inset-0 -z-10 overflow-hidden", className)}
        style={{ opacity }}
      >
        <div
          className='absolute inset-0'
          style={{
            background: `
              radial-gradient(at 40% 20%, ${colors[0]} 0px, transparent 50%),
              radial-gradient(at 80% 0%, ${colors[1]} 0px, transparent 50%),
              radial-gradient(at 0% 50%, ${colors[0]} 0px, transparent 50%),
              radial-gradient(at 80% 50%, ${colors[1]} 0px, transparent 50%),
              radial-gradient(at 0% 100%, ${colors[0]} 0px, transparent 50%),
              radial-gradient(at 80% 100%, ${colors[1]} 0px, transparent 50%)
            `,
          }}
        />
      </div>
    );
  }

  if (variant === "particles") {
    return (
      <div
        className={clsx("absolute inset-0 -z-10 overflow-hidden", className)}
        style={{ opacity }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute rounded-full'
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: colors[i % colors.length],
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: duration / 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  }

  return null;
};
