/**
 * @file templateController.js
 * @description Controller functions for template endpoints
 *
 * @role
 * - Handles retrieval of pre-made design templates
 * - Templates are public and available to all authenticated users
 * - Supports filtering by category
 *
 * @exports
 * - getTemplates: GET /api/v1/templates
 *   - Fetches all public templates
 *   - Optional query: ?category=Logo|Banner|Card|Poster
 *   - Returns: { templates: [{ id, name, category, thumbnail }] }
 *   - Does NOT include full canvasData in list view
 *
 * - getTemplateById: GET /api/v1/templates/:id
 *   - Fetches single template with full canvasData
 *   - Used when user clicks to load template
 *   - Returns: { template: { id, name, category, canvasData, thumbnail } }
 *   - Error: 404 if not found
 *
 * @imports
 * - Template (from '../models/Template.js') - Template model
 * - { successResponse, errorResponse } (from '../utils/responseHelpers.js')
 *
 * @usedBy
 * - routes/v1/templateRoutes.js
 */
