/**
 * @file projectController.js
 * @description Controller functions for project CRUD operations
 *
 * @role
 * - Handles project creation, retrieval, update, and deletion
 * - All operations scoped to authenticated user's projects
 * - Manages canvas data serialization and thumbnail generation
 *
 * @exports
 * - getProjects: GET /api/v1/projects
 *   - Fetches all projects for authenticated user
 *   - Sorted by updatedAt descending (recent first)
 *   - Returns: { projects: [{ id, projectName, thumbnail, createdAt, updatedAt }] }
 *   - Supports pagination via ?page=1&limit=10
 *
 * - getProjectById: GET /api/v1/projects/:id
 *   - Fetches single project by ID
 *   - Verifies ownership (userId matches req.user)
 *   - Returns full project with canvasData
 *   - Error: 404 if not found, 403 if not owner
 *
 * - createProject: POST /api/v1/projects
 *   - Creates new project for authenticated user
 *   - Sets userId from req.user._id
 *   - Accepts: { projectName, canvasData, thumbnail, tags }
 *   - Returns: created project object
 *
 * - updateProject: PUT /api/v1/projects/:id
 *   - Updates existing project
 *   - Verifies ownership before update
 *   - Updates: projectName, canvasData, thumbnail, tags
 *   - Auto-updates updatedAt timestamp
 *   - Error: 404 if not found, 403 if not owner
 *
 * - deleteProject: DELETE /api/v1/projects/:id
 *   - Deletes project by ID
 *   - Verifies ownership before deletion
 *   - Returns: success message
 *   - Error: 404 if not found, 403 if not owner
 *
 * @imports
 * - Project (from '../models/Project.js') - Project model
 * - { successResponse, errorResponse, paginatedResponse } (from '../utils/responseHelpers.js')
 *
 * @usedBy
 * - routes/v1/projectRoutes.js
 */
