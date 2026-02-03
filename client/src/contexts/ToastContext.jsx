/**
 * @file ToastContext.jsx
 * @description React Context wrapper for react-hot-toast notifications
 *
 * @role
 * - Provides toast notification configuration
 * - Wraps Toaster component with custom styling
 * - Exposes toast methods for consistent notifications
 *
 * @exports
 * - ToastProvider: Provider component wrapping children
 *   - Renders Toaster with configuration
 *   - No context value needed (use toast directly)
 *
 * @toasterConfig
 * - position: 'top-right'
 * - duration: 3000 (3 seconds)
 * - reverseOrder: false
 * - Custom success/error styling matching theme
 *
 * @imports
 * - Toaster (from 'react-hot-toast')
 * - { useTheme } (from '../hooks/useTheme.js') - For theme-aware styling
 *
 * @usage
 * - Import toast from 'react-hot-toast' directly in components
 * - toast.success('Message'), toast.error('Message')
 * - toast.loading('Loading...'), toast.promise(promise, {...})
 *
 * @usedBy
 * - App.jsx (wraps inside ThemeProvider)
 * - Components use 'react-hot-toast' directly for notifications
 */
