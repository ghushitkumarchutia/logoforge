import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

export const ParallaxSection = ({
  children,
  bgImage,
  bgColor,
  speed = 0.5,
  className,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <section
      ref={ref}
      className={clsx("relative overflow-hidden", className)}
      style={{ backgroundColor: bgColor }}
    >
      {bgImage && (
        <motion.div
          className='absolute inset-0 -z-10'
          style={{
            y,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      <div className='relative z-10'>{children}</div>
    </section>
  );
};
