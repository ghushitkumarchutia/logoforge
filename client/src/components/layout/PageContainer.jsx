/**
 * @file PageContainer.jsx
 * @description Page wrapper with consistent padding and max-width
 *
 * @role
 * - Provides consistent page layout wrapper
 * - Centers content with max-width
 * - Adds responsive padding
 *
 * @exports
 * - PageContainer: React Component
 *
 * @props
 * - children: ReactNode - Page content
 * - className: String - Additional classes
 * - maxWidth: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' (default: '2xl')
 * - padding: Boolean - Add horizontal padding (default: true)
 *
 * @imports
 * - clsx (from 'clsx')
 *
 * @usedBy
 * - pages/LandingPage.jsx (for sections)
 * - pages/DashboardPage.jsx
 * - pages/ProfilePage.jsx
 */
