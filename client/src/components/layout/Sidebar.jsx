import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

export const Sidebar = ({
  children,
  side = "left",
  width = "280px",
  collapsible = true,
  collapsed: controlledCollapsed,
  onToggle,
  title,
  className,
}) => {
  const [internalCollapsed, setInternalCollapsed] = useState(false);

  const isCollapsed =
    controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;

  const handleToggle = () => {
    if (onToggle) {
      onToggle(!isCollapsed);
    } else {
      setInternalCollapsed(!internalCollapsed);
    }
  };

  const CollapseIcon =
    side === "left"
      ? isCollapsed
        ? ChevronRight
        : ChevronLeft
      : isCollapsed
        ? ChevronLeft
        : ChevronRight;

  return (
    <motion.aside
      className={clsx(
        "h-full bg-white dark:bg-[#1a1a1a] border-neutral-200 dark:border-neutral-800 flex flex-col",
        side === "left" ? "border-r" : "border-l",
        className,
      )}
      animate={{ width: isCollapsed ? "48px" : width }}
      transition={{ duration: 0.2 }}
    >
      {title && (
        <div className='flex items-center justify-between p-3 border-b border-neutral-200 dark:border-neutral-800 min-h-[48px]'>
          {!isCollapsed && (
            <span className='font-medium text-neutral-900 dark:text-white text-sm truncate'>
              {title}
            </span>
          )}
          {collapsible && (
            <button
              onClick={handleToggle}
              className={clsx(
                "p-1.5 rounded-lg text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors",
                isCollapsed && "mx-auto",
              )}
            >
              <CollapseIcon size={16} />
            </button>
          )}
        </div>
      )}

      <div className={clsx("flex-1 overflow-y-auto", isCollapsed && "hidden")}>
        {children}
      </div>
    </motion.aside>
  );
};
