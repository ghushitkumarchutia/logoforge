/**
 * @file templateService.js
 * @description Template API service functions
 *
 * @role
 * - Handles template retrieval API calls
 * - Communicates with /api/v1/templates endpoints
 * - Fetches template list and individual templates
 *
 * @exports
 * - getAllTemplates: (category?) => Promise
 *   - GET /templates or /templates?category=X
 *   - Returns: { templates: [{ id, name, category, thumbnail }] }
 *
 * - getTemplateById: (id) => Promise
 *   - GET /templates/:id
 *   - Returns: { template: { id, name, category, canvasData, thumbnail } }
 *
 * - getTemplatesByCategory: (category) => Promise
 *   - GET /templates?category=X
 *   - category: 'Logo' | 'Banner' | 'Card' | 'Poster'
 *   - Returns: { templates: [...] }
 *
 * @imports
 * - api (from './api.js') - Configured Axios instance
 *
 * @usedBy
 * - components/editor/modals/TemplateModal.jsx
 * - components/templates/TemplateGrid.jsx
 */
