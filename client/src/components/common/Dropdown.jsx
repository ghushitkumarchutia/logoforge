import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export const Dropdown = ({ trigger, items, align = "left", className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className={clsx("relative inline-block", className)} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={clsx(
              "absolute z-50 mt-2 min-w-[180px] py-1 bg-white dark:bg-[#1a1a1a] rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg dark:shadow-none",
              align === "left" ? "left-0" : "right-0",
            )}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!item.disabled) {
                    item.onClick?.();
                    setIsOpen(false);
                  }
                }}
                disabled={item.disabled}
                className={clsx(
                  "w-full flex items-center gap-2 px-4 py-2 text-left text-sm transition-colors",
                  item.disabled
                    ? "text-neutral-400 cursor-not-allowed"
                    : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800",
                )}
              >
                {item.icon && <span className='w-4 h-4'>{item.icon}</span>}
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
