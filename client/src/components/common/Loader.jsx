/**
 * @file Loader.jsx
 * @description Loading spinner component
 *
 * @role
 * - Displays animated loading spinner
 * - Used during async operations
 * - Multiple sizes available
 *
 * @exports
 * - Loader: React Component
 *
 * @props
 * - size: 'sm' | 'md' | 'lg' (default: 'md')
 * - color: String - Tailwind color class (default: 'primary-500')
 * - className: String - Additional classes
 *
 * @styling
 * - Animated spinning circle
 * - Uses Tailwind animate-spin
 *
 * @imports
 * - clsx (from 'clsx')
 *
 * @usedBy
 * - components/common/Button.jsx (loading state)
 * - pages/DashboardPage.jsx (loading projects)
 * - contexts/AuthContext.jsx (initial auth check)
 */
