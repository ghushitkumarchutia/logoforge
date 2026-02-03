/**
 * @file authMiddleware.js
 * @description JWT authentication middleware for protected routes
 *
 * @role
 * - Extracts JWT token from httpOnly cookie
 * - Verifies token signature and expiration
 * - Attaches user object to request for downstream use
 * - Rejects unauthorized requests with 401 status
 *
 * @exports
 * - protect: Middleware function to protect routes
 *   - Checks for 'token' cookie
 *   - Verifies JWT using JWT_SECRET
 *   - Fetches user from database using decoded userId
 *   - Attaches user to req.user (excludes password)
 *   - Calls next() if authenticated, else returns 401
 *
 * @imports
 * - jwt (from 'jsonwebtoken') - JWT verification
 * - User (from '../models/User.js') - User model for lookup
 * - { errorResponse } (from '../utils/responseHelpers.js') - Error response
 *
 * @envVariables
 * - JWT_SECRET: Secret key for verifying tokens
 *
 * @errorResponses
 * - 401: 'Not authorized, no token'
 * - 401: 'Not authorized, token failed'
 * - 401: 'Not authorized, user not found'
 *
 * @usedBy
 * - routes/v1/authRoutes.js (GET /me)
 * - routes/v1/projectRoutes.js (all routes)
 */
