/**
 * @file iconRoutes.js
 * @description Express router for icon library endpoints
 *
 * @role
 * - Defines routes for icon retrieval
 * - Icons are public and accessible to all users
 * - Supports category filtering and keyword search
 *
 * @routes
 * - GET / - Get all icons
 *   - Query: ?category=Business|Social|General|Technology (optional)
 *   - Query: ?search=keyword (optional, searches name and keywords)
 *   - Controller: getIcons
 *
 * - GET /category/:category - Get icons by specific category
 *   - Params: category (Business, Social, General, Technology)
 *   - Controller: getIconsByCategory
 *
 * @exports
 * - router: Express Router instance
 *
 * @imports
 * - express (from 'express') - Router
 * - { getIcons, getIconsByCategory } (from '../controllers/iconController.js')
 *
 * @usedBy
 * - routes/v1/index.js (mounted at /icons)
 */
