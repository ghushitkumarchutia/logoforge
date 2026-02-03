/**
 * @file ParallaxSection.jsx
 * @description Parallax scroll effect wrapper
 *
 * @role
 * - Creates parallax scrolling effect
 * - Background moves at different speed than content
 * - Adds depth to page sections
 *
 * @exports
 * - ParallaxSection: React Component
 *
 * @props
 * - children: ReactNode - Section content
 * - bgImage: String - Background image URL (optional)
 * - bgColor: String - Background color (optional)
 * - speed: Number - Parallax speed factor (default: 0.5)
 * - className: String - Additional classes
 *
 * @imports
 * - { motion, useScroll, useTransform } (from 'framer-motion')
 * - { useRef } (from 'react')
 *
 * @usedBy
 * - components/landing/Testimonials.jsx (background)
 * - pages/LandingPage.jsx
 */
