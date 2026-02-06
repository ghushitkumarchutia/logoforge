import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export const CountUp = ({
  end,
  start = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;
    const startTime = performance.now();
    const range = end - start;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = start + range * easeProgress;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, start, end, duration]);

  const displayValue =
    decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};
