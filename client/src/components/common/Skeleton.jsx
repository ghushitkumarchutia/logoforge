/**
 * @file Skeleton.jsx
 * @description Loading skeleton placeholder component
 *
 * @role
 * - Shows placeholder shapes while content loads
 * - Provides better UX than blank screen
 * - Animated pulse effect
 *
 * @exports
 * - Skeleton: React Component
 *
 * @props
 * - variant: 'text' | 'rectangle' | 'circle' | 'card' (default: 'rectangle')
 * - width: String - CSS width value
 * - height: String - CSS height value
 * - lines: Number - For text variant, number of lines
 * - className: String - Additional classes
 *
 * @styling
 * - Uses Tailwind animate-pulse
 * - Gray background with slight opacity
 *
 * @imports
 * - clsx (from 'clsx')
 *
 * @usedBy
 * - pages/DashboardPage.jsx (loading project cards)
 * - components/dashboard/ProjectGrid.jsx
 */
