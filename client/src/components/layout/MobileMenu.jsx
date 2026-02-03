/**
 * @file MobileMenu.jsx
 * @description Mobile navigation hamburger menu
 *
 * @role
 * - Slide-out menu for mobile devices
 * - Contains navigation links and actions
 * - Closes on link click or outside click
 *
 * @exports
 * - MobileMenu: React Component
 *
 * @props
 * - isOpen: Boolean - Controls visibility
 * - onClose: Function - Called to close menu
 *
 * @imports
 * - { Link, useLocation } (from 'react-router-dom')
 * - { useAuth } (from '../../hooks/useAuth.js')
 * - { motion, AnimatePresence } (from 'framer-motion')
 * - Button (from '../common/Button.jsx')
 * - ThemeToggle (from '../common/ThemeToggle.jsx')
 * - { X } (from 'lucide-react')
 *
 * @usedBy
 * - components/layout/Navbar.jsx
 */
