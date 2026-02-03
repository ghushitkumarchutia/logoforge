/**
 * @file iconService.js
 * @description Icon library API service functions
 *
 * @role
 * - Handles icon retrieval API calls
 * - Communicates with /api/v1/icons endpoints
 * - Provides fallback to default icons if API fails
 *
 * @exports
 * - getAllIcons: (category?, search?) => Promise
 *   - GET /icons or /icons?category=X&search=Y
 *   - Returns: { icons: [{ id, name, category, svgPath, viewBox }] }
 *
 * - getIconsByCategory: (category) => Promise
 *   - GET /icons/category/:category
 *   - category: 'Business' | 'Social' | 'General' | 'Technology'
 *   - Returns: { icons: [...] }
 *
 * - searchIcons: (query) => Promise
 *   - GET /icons?search=query
 *   - Searches by name and keywords
 *   - Returns: { icons: [...] }
 *
 * @imports
 * - api (from './api.js') - Configured Axios instance
 * - { defaultIcons } (from '../data/defaultIcons.js') - Fallback icons
 *
 * @fallbackBehavior
 * - If API fails, returns defaultIcons from data file
 * - Logs warning in console for debugging
 *
 * @usedBy
 * - components/editor/modals/IconLibraryModal.jsx
 */
