/**
 * @file GradientText.jsx
 * @description Animated gradient text component
 *
 * @role
 * - Displays text with animated gradient effect
 * - Eye-catching for headlines and CTAs
 * - Customizable gradient colors
 *
 * @exports
 * - GradientText: React Component
 *
 * @props
 * - children: ReactNode - Text content
 * - from: String - Tailwind gradient from color (default: 'from-primary-500')
 * - via: String - Tailwind gradient via color (optional)
 * - to: String - Tailwind gradient to color (default: 'to-accent-500')
 * - animate: Boolean - Enable gradient animation (default: true)
 * - className: String - Additional classes
 *
 * @styling
 * - Uses background-clip: text
 * - Animated background position shift
 * - Uses Tailwind's animation classes
 *
 * @imports
 * - clsx (from 'clsx')
 *
 * @usedBy
 * - components/landing/Hero.jsx
 * - pages/LandingPage.jsx
 */
