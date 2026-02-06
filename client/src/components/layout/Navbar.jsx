import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ThemeToggle } from "../common/ThemeToggle";
import { Button } from "../common/Button";
import { Dropdown } from "../common/Dropdown";
import { MobileMenu } from "./MobileMenu";
import { Menu, User, LogOut, LayoutDashboard } from "lucide-react";
import { APP_NAME } from "../../utils/constants";
import clsx from "clsx";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Templates", href: "/#templates" },
];

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const userMenuItems = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard size={16} />,
      onClick: () => (window.location.href = "/dashboard"),
    },
    {
      label: "Profile",
      icon: <User size={16} />,
      onClick: () => (window.location.href = "/profile"),
    },
    {
      label: "Logout",
      icon: <LogOut size={16} />,
      onClick: logout,
    },
  ];

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
            : "bg-transparent",
        )}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link to='/' className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-gradient-to-br from-green-500 to-purple-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>L</span>
              </div>
              <span className='text-xl font-bold text-gray-900 dark:text-white'>
                {APP_NAME}
              </span>
            </Link>

            <div className='hidden md:flex items-center gap-8'>
              {!isAuthenticated &&
                navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={clsx(
                      "text-sm font-medium transition-colors",
                      location.pathname === link.href ||
                        location.hash === link.href.slice(1)
                        ? "text-green-500"
                        : "text-gray-600 dark:text-gray-300 hover:text-green-500",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
            </div>

            <div className='hidden md:flex items-center gap-4'>
              <ThemeToggle />

              {isAuthenticated ? (
                <Dropdown
                  trigger={
                    <button className='flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800'>
                      <div className='w-8 h-8 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center'>
                        <span className='text-white font-medium text-sm'>
                          {user?.username?.charAt(0)?.toUpperCase() || "U"}
                        </span>
                      </div>
                    </button>
                  }
                  items={userMenuItems}
                  align='right'
                />
              ) : (
                <div className='flex items-center gap-3'>
                  <Link to='/login'>
                    <Button variant='ghost'>Log In</Button>
                  </Link>
                  <Link to='/register'>
                    <Button>Get Started</Button>
                  </Link>
                </div>
              )}
            </div>

            <button
              className='md:hidden p-2 text-gray-600 dark:text-gray-300'
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
