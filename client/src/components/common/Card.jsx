/**
 * @file Card.jsx
 * @description Reusable card container component
 *
 * @role
 * - Provides styled card wrapper for content
 * - Consistent border, shadow, padding
 * - Optional hover effects
 *
 * @exports
 * - Card: React Component
 *
 * @props
 * - children: ReactNode - Card content
 * - className: String - Additional classes
 * - hoverable: Boolean - Adds hover shadow effect
 * - padding: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
 * - onClick: Function - Optional click handler
 *
 * @imports
 * - clsx (from 'clsx')
 *
 * @usedBy
 * - components/dashboard/ProjectCard.jsx
 * - components/landing/FeatureCard.jsx
 * - components/auth/AuthCard.jsx
 */
