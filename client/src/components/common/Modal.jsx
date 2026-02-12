import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import clsx from "clsx";

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  showCloseButton = true,
  closeOnBackdrop = true,
  footer,
}) => {
  const handleEscape = useCallback(
    (event) => {
      if (event.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  const handleBackdropClick = (event) => {
    if (closeOnBackdrop && event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className='fixed inset-0 bg-black/50 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className={clsx(
              "relative w-full bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-xl dark:shadow-none border border-neutral-200 dark:border-neutral-800",
              sizeClasses[size],
            )}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {(title || showCloseButton) && (
              <div className='flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800'>
                {title && (
                  <h3 className='text-lg font-semibold text-neutral-900 dark:text-white'>
                    {title}
                  </h3>
                )}
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className='p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors'
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            )}
            <div className='p-4'>{children}</div>
            {footer && (
              <div className='flex justify-end gap-3 p-4 border-t border-neutral-200 dark:border-neutral-800'>
                {footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};
