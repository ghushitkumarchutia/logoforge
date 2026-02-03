/**
 * @file storageHelpers.js
 * @description localStorage and sessionStorage utility functions
 *
 * @role
 * - Provides safe read/write to localStorage
 * - Handles JSON serialization/deserialization
 * - Includes error handling for storage quota exceeded
 *
 * @exports
 * - getItem: (key) => any
 *   - Retrieves and parses JSON from localStorage
 *   - Returns null if not found or parse error
 *
 * - setItem: (key, value) => boolean
 *   - Stringifies and stores value in localStorage
 *   - Returns true on success, false on error
 *
 * - removeItem: (key) => void
 *   - Removes item from localStorage
 *
 * - clearStorage: () => void
 *   - Clears all items from localStorage
 *
 * - STORAGE_KEYS: Object with storage key constants
 *   - THEME: 'logoforge_theme'
 *   - RECENT_COLORS: 'logoforge_recent_colors'
 *   - CLIPBOARD: 'logoforge_clipboard'
 *   - USER_PREFERENCES: 'logoforge_preferences'
 *
 * @imports
 * - None (browser APIs only)
 *
 * @usedBy
 * - contexts/ThemeContext.jsx
 * - hooks/useClipboard.js
 * - components/editor/properties/ColorPicker.jsx
 */
