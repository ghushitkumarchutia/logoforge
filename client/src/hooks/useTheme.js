/**
 * @file useTheme.js
 * @description Custom hook for theme (dark/light mode) operations
 *
 * @role
 * - Provides easy access to theme context
 * - Returns current theme and toggle function
 *
 * @exports
 * - useTheme: () => ThemeHookReturn
 *   - theme: 'light' | 'dark'
 *   - isDark: Boolean
 *   - toggleTheme: () => void
 *   - setTheme: (theme) => void
 *
 * @imports
 * - { useContext } (from 'react')
 * - { ThemeContext } (from '../contexts/ThemeContext.jsx')
 *
 * @usedBy
 * - components/common/ThemeToggle.jsx
 * - components/layout/Navbar.jsx
 * - Multiple components for conditional dark mode styling
 */
