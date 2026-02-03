/**
 * @file iconController.js
 * @description Controller functions for icon library endpoints
 *
 * @role
 * - Handles retrieval of SVG icons for the icon library
 * - Icons are public and available to all users
 * - Supports filtering by category and search by keywords
 *
 * @exports
 * - getIcons: GET /api/v1/icons
 *   - Fetches all icons or filtered by category
 *   - Query params:
 *     - ?category=Business|Social|General|Technology
 *     - ?search=keyword (searches name and keywords)
 *   - Returns: { icons: [{ id, name, category, svgPath, viewBox }] }
 *
 * - getIconsByCategory: GET /api/v1/icons/category/:category
 *   - Fetches icons for specific category
 *   - Returns: { icons: [...] }
 *   - Error: 400 if invalid category
 *
 * @imports
 * - Icon (from '../models/Icon.js') - Icon model
 * - { successResponse, errorResponse } (from '../utils/responseHelpers.js')
 *
 * @usedBy
 * - routes/v1/iconRoutes.js
 */
