/**
 * @file cors.js
 * @description CORS (Cross-Origin Resource Sharing) configuration
 *
 * @role
 * - Defines allowed origins for cross-origin requests
 * - Configures CORS options for development and production
 * - Enables credentials (cookies) for JWT authentication
 *
 * @exports
 * - corsOptions: Object containing CORS configuration
 *
 * @imports
 * - None (uses environment variables via process.env)
 *
 * @envVariables
 * - FRONTEND_URL: Allowed frontend origin (e.g., http://localhost:5173)
 * - NODE_ENV: Environment mode (development/production)
 *
 * @configuration
 * - origin: FRONTEND_URL or localhost in development
 * - credentials: true (allows cookies)
 * - methods: GET, POST, PUT, DELETE, OPTIONS
 * - allowedHeaders: Content-Type, Authorization
 *
 * @usedBy
 * - server.js (passed to cors middleware)
 */
