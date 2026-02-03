/**
 * @file ThemeContext.jsx
 * @description React Context for theme (dark/light mode) management
 *
 * @role
 * - Provides global theme state to entire app
 * - Persists theme preference in localStorage
 * - Applies theme class to document root
 *
 * @exports
 * - ThemeContext: React Context object
 * - ThemeProvider: Provider component wrapping children
 *   - Provides: { theme, isDark, toggleTheme, setTheme }
 *
 * @contextValue
 * - theme: 'light' | 'dark'
 * - isDark: Boolean (convenience check)
 * - toggleTheme: () => void - Switch between light/dark
 * - setTheme: (theme) => void - Set specific theme
 *
 * @imports
 * - { createContext, useState, useEffect } (from 'react')
 * - { getItem, setItem, STORAGE_KEYS } (from '../utils/storageHelpers.js')
 *
 * @behavior
 * - On mount: Reads theme from localStorage or system preference
 * - Adds/removes 'dark' class on document.documentElement
 * - Persists changes to localStorage
 *
 * @tailwindIntegration
 * - Uses Tailwind's 'dark' class strategy
 * - Enables dark: variants throughout app
 *
 * @usedBy
 * - App.jsx (wraps entire app inside AuthProvider)
 * - hooks/useTheme.js
 * - components/common/ThemeToggle.jsx
 */
