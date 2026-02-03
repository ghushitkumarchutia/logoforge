/**
 * @file ScrollReveal.jsx
 * @description Fade-in animation on scroll wrapper
 *
 * @role
 * - Reveals children with animation when scrolled into view
 * - Uses Intersection Observer for performance
 * - Multiple animation variants
 *
 * @exports
 * - ScrollReveal: React Component
 *
 * @props
 * - children: ReactNode - Content to reveal
 * - direction: 'up' | 'down' | 'left' | 'right' (default: 'up')
 * - distance: Number - Animation distance in pixels (default: 30)
 * - duration: Number - Animation duration in seconds (default: 0.6)
 * - delay: Number - Delay before animation (default: 0)
 * - once: Boolean - Only animate once (default: true)
 * - className: String - Additional classes
 *
 * @imports
 * - { motion, useInView } (from 'framer-motion')
 * - { useRef } (from 'react')
 *
 * @usedBy
 * - components/landing/Features.jsx
 * - components/landing/HowItWorks.jsx
 * - components/landing/Testimonials.jsx
 */
