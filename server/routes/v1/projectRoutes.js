/**
 * @file projectRoutes.js
 * @description Express router for project CRUD endpoints
 *
 * @role
 * - Defines routes for project management
 * - All routes require authentication (protect middleware)
 * - Applies validation middleware to create/update routes
 *
 * @routes
 * - GET / - Get all projects for authenticated user
 *   - Middleware: protect
 *   - Controller: getProjects
 *   - Query: ?page=1&limit=10 (optional pagination)
 *
 * - GET /:id - Get single project by ID
 *   - Middleware: protect, projectIdValidation, validate
 *   - Controller: getProjectById
 *
 * - POST / - Create new project
 *   - Middleware: protect, createProjectValidation, validate
 *   - Controller: createProject
 *
 * - PUT /:id - Update existing project
 *   - Middleware: protect, projectIdValidation, updateProjectValidation, validate
 *   - Controller: updateProject
 *
 * - DELETE /:id - Delete project
 *   - Middleware: protect, projectIdValidation, validate
 *   - Controller: deleteProject
 *
 * @exports
 * - router: Express Router instance
 *
 * @imports
 * - express (from 'express') - Router
 * - { getProjects, getProjectById, createProject, updateProject, deleteProject } (from '../controllers/projectController.js')
 * - { createProjectValidation, updateProjectValidation, projectIdValidation } (from '../../validators/projectValidators.js')
 * - { validate } (from '../../middleware/validateMiddleware.js')
 * - { protect } (from '../../middleware/authMiddleware.js')
 *
 * @usedBy
 * - routes/v1/index.js (mounted at /projects)
 */
