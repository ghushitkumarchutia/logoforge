/**
 * @file GradientButton.jsx
 * @description Button with gradient background and hover effects
 *
 * @role
 * - Eye-catching CTA button with gradient
 * - Animated hover effects
 * - Used for primary actions on landing page
 *
 * @exports
 * - GradientButton: React Component
 *
 * @props
 * - children: ReactNode - Button content
 * - from: String - Gradient start color (default: 'from-primary-500')
 * - to: String - Gradient end color (default: 'to-accent-500')
 * - size: 'sm' | 'md' | 'lg' (default: 'md')
 * - onClick: Function - Click handler
 * - href: String - If provided, renders as link
 * - className: String - Additional classes
 *
 * @features
 * - Gradient background
 * - Glow effect on hover
 * - Scale animation on hover
 *
 * @imports
 * - { motion } (from 'framer-motion')
 * - { Link } (from 'react-router-dom')
 * - clsx (from 'clsx')
 *
 * @usedBy
 * - components/landing/Hero.jsx
 * - components/landing/CTA.jsx
 * - components/landing/PricingCard.jsx
 */
