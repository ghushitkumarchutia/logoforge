import { useTheme } from "../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

export const ThemeToggle = ({ className }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={clsx(
        "p-2 rounded-lg transition-colors cursor-pointer",
        "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800",
        className,
      )}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  );
};
