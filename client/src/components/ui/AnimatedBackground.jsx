/**
 * @file AnimatedBackground.jsx
 * @description Animated gradient/particle background component
 *
 * @role
 * - Creates stunning animated background for landing page
 * - Supports gradient, mesh, or particle effects
 * - Performance optimized with GPU acceleration
 *
 * @exports
 * - AnimatedBackground: React Component
 *
 * @props
 * - variant: 'gradient' | 'mesh' | 'particles' (default: 'gradient')
 * - colors: Array of color values (default: ['#22c55e', '#8b5cf6'])
 * - speed: 'slow' | 'normal' | 'fast' (default: 'normal')
 * - opacity: Number (default: 0.5)
 * - className: String - Additional classes
 *
 * @styling
 * - Positioned absolute, full coverage
 * - Uses CSS animations or framer-motion
 * - Z-index behind content
 *
 * @imports
 * - { motion } (from 'framer-motion')
 * - clsx (from 'clsx')
 *
 * @usedBy
 * - components/landing/Hero.jsx
 * - pages/LandingPage.jsx
 */
