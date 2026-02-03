/**
 * @file errorMiddleware.js
 * @description Global error handling middleware for Express
 *
 * @role
 * - Catches all unhandled errors in the application
 * - Formats error responses consistently
 * - Logs errors in development mode
 * - Hides stack traces in production
 *
 * @exports
 * - notFound: Middleware for handling 404 routes
 *   - Creates error for undefined routes
 *   - Sets status to 404
 *   - Passes to error handler
 *
 * - errorHandler: Global error handler middleware
 *   - Parameters: (err, req, res, next)
 *   - Sets status code from error or defaults to 500
 *   - Returns JSON with error message
 *   - Includes stack trace only in development
 *
 * @imports
 * - { errorResponse } (from '../utils/responseHelpers.js') - Error response helper
 *
 * @envVariables
 * - NODE_ENV: Determines if stack trace is shown
 *
 * @usedBy
 * - server.js (applied after all routes as final middleware)
 */
