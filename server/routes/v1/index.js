/**
 * @file index.js
 * @description Route aggregator for API v1 endpoints
 *
 * @role
 * - Combines all v1 route modules into single router
 * - Mounts each route module at its respective path
 * - Provides single export point for server.js
 *
 * @routeMounting
 * - /auth    -> authRoutes.js
 * - /projects -> projectRoutes.js
 * - /templates -> templateRoutes.js
 * - /icons   -> iconRoutes.js
 *
 * @exports
 * - router: Express Router instance with all v1 routes
 *
 * @imports
 * - express (from 'express') - Router
 * - authRoutes (from './authRoutes.js')
 * - projectRoutes (from './projectRoutes.js')
 * - templateRoutes (from './templateRoutes.js')
 * - iconRoutes (from './iconRoutes.js')
 *
 * @usedBy
 * - server.js (mounted at /api/v1)
 */
