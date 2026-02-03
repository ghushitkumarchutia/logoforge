/**
 * @file templateRoutes.js
 * @description Express router for template endpoints
 *
 * @role
 * - Defines routes for template retrieval
 * - Templates are public but require authentication to access
 * - Supports category filtering
 *
 * @routes
 * - GET / - Get all templates
 *   - Query: ?category=Logo|Banner|Card|Poster (optional)
 *   - Controller: getTemplates
 *
 * - GET /:id - Get single template with full canvasData
 *   - Controller: getTemplateById
 *
 * @exports
 * - router: Express Router instance
 *
 * @imports
 * - express (from 'express') - Router
 * - { getTemplates, getTemplateById } (from '../controllers/templateController.js')
 *
 * @usedBy
 * - routes/v1/index.js (mounted at /templates)
 */
