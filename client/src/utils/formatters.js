/**
 * @file formatters.js
 * @description Data formatting utility functions
 *
 * @role
 * - Formats dates for display
 * - Formats numbers and text strings
 * - Provides consistent formatting across the app
 *
 * @exports
 * - formatDate: (date) => string
 *   - Formats date to 'MMM DD, YYYY' (e.g., 'Jan 15, 2024')
 *
 * - formatDateTime: (date) => string
 *   - Formats date to 'MMM DD, YYYY, HH:MM AM/PM'
 *
 * - formatRelativeTime: (date) => string
 *   - Returns relative time (e.g., '2 hours ago', 'Yesterday', '3 days ago')
 *
 * - truncateText: (text, maxLength) => string
 *   - Truncates text with ellipsis if exceeds maxLength
 *
 * - capitalizeFirst: (string) => string
 *   - Capitalizes first letter of string
 *
 * - toKebabCase: (string) => string
 *   - Converts string to kebab-case (for file names)
 *
 * - formatFileSize: (bytes) => string
 *   - Formats bytes to KB, MB, etc.
 *
 * @imports
 * - None (pure utility functions)
 *
 * @usedBy
 * - components/dashboard/ProjectCard.jsx
 * - pages/DashboardPage.jsx
 * - hooks/useAutoSave.js
 */
