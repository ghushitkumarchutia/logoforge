/**
 * @file Button.jsx
 * @description Reusable button component with variants
 *
 * @role
 * - Provides consistent button styling across the app
 * - Supports multiple variants, sizes, and states
 * - Handles loading and disabled states
 *
 * @exports
 * - Button: React Component
 *
 * @props
 * - children: ReactNode - Button content
 * - variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' (default: 'primary')
 * - size: 'sm' | 'md' | 'lg' (default: 'md')
 * - isLoading: Boolean - Shows spinner
 * - disabled: Boolean - Disables button
 * - fullWidth: Boolean - Full width button
 * - leftIcon: ReactNode - Icon before text
 * - rightIcon: ReactNode - Icon after text
 * - type: 'button' | 'submit' | 'reset' (default: 'button')
 * - onClick: Function - Click handler
 * - className: String - Additional classes
 * - ...rest: Other button props
 *
 * @styling
 * - Uses Tailwind CSS classes
 * - clsx for conditional class composition
 * - Variants have distinct colors and hover states
 *
 * @imports
 * - clsx (from 'clsx') - Class composition
 * - Loader (from './Loader.jsx') - Loading spinner
 *
 * @usedBy
 * - Used extensively throughout the application
 * - components/landing/Hero.jsx
 * - components/auth/LoginForm.jsx
 * - components/dashboard/CreateProjectBtn.jsx
 */
