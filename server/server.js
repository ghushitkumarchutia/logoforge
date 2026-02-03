/**
 * @file server.js
 * @description Express application entry point
 *
 * @role
 * - Initializes Express application
 * - Loads environment variables from .env
 * - Connects to MongoDB database
 * - Configures middleware (CORS, JSON parsing, cookies)
 * - Mounts API routes at /api/v1
 * - Applies error handling middleware
 * - Starts HTTP server on configured port
 *
 * @middleware (in order)
 * 1. dotenv.config() - Load environment variables
 * 2. cors(corsOptions) - Enable cross-origin requests
 * 3. express.json() - Parse JSON request bodies
 * 4. express.urlencoded({ extended: true }) - Parse URL-encoded bodies
 * 5. cookieParser() - Parse cookies for JWT
 * 6. rateLimit() - Rate limiting for API protection
 *
 * @routeMounting
 * - /api/v1 -> routes/v1/index.js
 *   - /api/v1/auth -> authRoutes
 *   - /api/v1/projects -> projectRoutes
 *   - /api/v1/templates -> templateRoutes
 *   - /api/v1/icons -> iconRoutes
 *
 * @errorHandling
 * - notFound middleware - 404 for undefined routes
 * - errorHandler middleware - Global error handler
 *
 * @exports
 * - None (entry point file)
 *
 * @imports
 * - express (from 'express') - Web framework
 * - dotenv (from 'dotenv') - Environment variables
 * - cors (from 'cors') - CORS middleware
 * - cookieParser (from 'cookie-parser') - Cookie parsing
 * - rateLimit (from 'express-rate-limit') - Rate limiting
 * - { connectDB } (from './config/db.js') - Database connection
 * - { corsOptions } (from './config/cors.js') - CORS config
 * - v1Routes (from './routes/v1/index.js') - API routes
 * - { notFound, errorHandler } (from './middleware/errorMiddleware.js')
 *
 * @envVariables
 * - PORT: Server port (default: 5000)
 * - NODE_ENV: Environment mode
 * - MONGODB_URI: Database connection string
 *
 * @startup
 * 1. Load .env
 * 2. Connect to MongoDB
 * 3. Configure middleware
 * 4. Mount routes
 * 5. Apply error handlers
 * 6. Start server on PORT
 */
