/**
 * @file GlassCard.jsx
 * @description Glassmorphism card effect component
 *
 * @role
 * - Creates frosted glass card effect
 * - Modern UI aesthetic for landing page
 * - Backdrop blur with semi-transparent background
 *
 * @exports
 * - GlassCard: React Component
 *
 * @props
 * - children: ReactNode - Card content
 * - className: String - Additional classes
 * - blur: 'sm' | 'md' | 'lg' (default: 'md')
 * - opacity: Number 0-100 (default: 20)
 * - border: Boolean - Show subtle border (default: true)
 *
 * @styling
 * - backdrop-filter: blur()
 * - Semi-transparent background
 * - Subtle border
 * - Dark mode compatible
 *
 * @imports
 * - clsx (from 'clsx')
 *
 * @usedBy
 * - components/landing/FeatureCard.jsx
 * - components/landing/PricingCard.jsx
 */
