import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import clsx from "clsx";

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const GradientButton = ({
  children,
  from = "from-green-500",
  to = "to-purple-500",
  size = "md",
  onClick,
  href,
  className,
}) => {
  const baseClasses = clsx(
    "relative inline-flex items-center justify-center font-semibold text-white rounded-lg overflow-hidden",
    "bg-gradient-to-r",
    from,
    to,
    sizeClasses[size],
    "transition-all duration-300",
    "hover:shadow-lg hover:shadow-green-500/25",
    "hover:scale-105",
    className,
  );

  const content = (
    <>
      <span className='relative z-10'>{children}</span>
      <motion.div
        className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0'
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </>
  );

  if (href) {
    return (
      <Link to={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};
