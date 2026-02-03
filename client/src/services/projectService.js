/**
 * @file projectService.js
 * @description Project CRUD API service functions
 *
 * @role
 * - Handles all project-related API calls
 * - Communicates with /api/v1/projects endpoints
 * - Manages project save, load, update, delete operations
 *
 * @exports
 * - getAllProjects: (page, limit) => Promise
 *   - GET /projects?page=X&limit=Y
 *   - Returns: { projects: [...], pagination: {...} }
 *
 * - getProjectById: (id) => Promise
 *   - GET /projects/:id
 *   - Returns: { project: { id, projectName, canvasData, ... } }
 *
 * - createProject: (projectData) => Promise
 *   - POST /projects
 *   - projectData: { projectName, canvasData, thumbnail, tags }
 *   - Returns: { project, message }
 *
 * - updateProject: (id, updateData) => Promise
 *   - PUT /projects/:id
 *   - updateData: { projectName?, canvasData?, thumbnail?, tags? }
 *   - Returns: { project, message }
 *
 * - deleteProject: (id) => Promise
 *   - DELETE /projects/:id
 *   - Returns: { message }
 *
 * @imports
 * - api (from './api.js') - Configured Axios instance
 *
 * @usedBy
 * - pages/DashboardPage.jsx
 * - pages/EditorPage.jsx
 * - hooks/useAutoSave.js
 * - components/dashboard/ProjectCard.jsx
 */
