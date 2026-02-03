/**
 * @file constants.js
 * @description Application-wide constants and configuration values
 *
 * @role
 * - Centralizes all constant values used across the application
 * - Prevents magic numbers and strings in code
 * - Easy to modify values in one place
 *
 * @exports
 * - API_BASE_URL: Base URL for API calls (from VITE_API_BASE_URL)
 * - APP_NAME: Application name (from VITE_APP_NAME or 'LogoForge')
 *
 * - CANVAS_DEFAULTS: Default canvas configuration
 *   - width: 800
 *   - height: 600
 *   - backgroundColor: '#ffffff'
 *
 * - AUTOSAVE_INTERVAL: 120000 (2 minutes in ms)
 * - HISTORY_LIMIT: 20 (max undo/redo steps)
 *
 * - EXPORT_RESOLUTIONS: { '1x': 1, '2x': 2, '3x': 3 }
 * - EXPORT_FORMATS: ['png', 'svg', 'json']
 *
 * - SHAPE_TYPES: ['rectangle', 'circle', 'triangle', 'line']
 * - FONT_SIZES: [12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 64, 72]
 *
 * - TEMPLATE_CATEGORIES: ['Logo', 'Banner', 'Card', 'Poster']
 * - ICON_CATEGORIES: ['Business', 'Social', 'General', 'Technology']
 *
 * - ROUTES: Object with all frontend route paths
 *   - HOME: '/'
 *   - LOGIN: '/login'
 *   - REGISTER: '/register'
 *   - DASHBOARD: '/dashboard'
 *   - EDITOR: '/editor'
 *   - PROFILE: '/profile'
 *
 * @imports
 * - None (pure constants)
 *
 * @usedBy
 * - Multiple components and hooks throughout the application
 */
