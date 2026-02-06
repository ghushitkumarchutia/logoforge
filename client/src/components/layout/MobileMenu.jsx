import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../common/Button";
import { ThemeToggle } from "../common/ThemeToggle";
import { X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Templates", href: "/#templates" },
];

const authLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Templates", href: "/templates" },
];

export const MobileMenu = ({ isOpen, onClose }) => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const links = isAuthenticated ? authLinks : navLinks;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className='fixed inset-0 bg-black/50 z-40 md:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className='fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 z-50 md:hidden shadow-xl'
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className='flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700'>
              <span className='font-semibold text-gray-900 dark:text-white'>
                Menu
              </span>
              <button
                onClick={onClose}
                className='p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              >
                <X size={20} />
              </button>
            </div>

            <nav className='p-4 space-y-2'>
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? "bg-green-100 dark:bg-green-900/30 text-green-600"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className='absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700 space-y-3'>
              <div className='flex items-center justify-between mb-4'>
                <span className='text-sm text-gray-500 dark:text-gray-400'>
                  Theme
                </span>
                <ThemeToggle />
              </div>

              {isAuthenticated ? (
                <Button
                  variant='danger'
                  fullWidth
                  onClick={() => {
                    logout();
                    onClose();
                  }}
                >
                  Logout
                </Button>
              ) : (
                <div className='space-y-2'>
                  <Link to='/login' onClick={onClose}>
                    <Button variant='secondary' fullWidth>
                      Log In
                    </Button>
                  </Link>
                  <Link to='/register' onClick={onClose}>
                    <Button fullWidth>Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
