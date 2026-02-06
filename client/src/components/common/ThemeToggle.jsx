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
        "p-2 rounded-lg transition-colors",
        "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
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
