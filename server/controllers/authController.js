/**
 * @file authController.js
 * @description Controller functions for authentication endpoints
 *
 * @role
 * - Handles user registration, login, logout, and profile retrieval
 * - Manages JWT token generation and cookie setting
 * - Validates credentials and returns appropriate responses
 *
 * @exports
 * - registerUser: POST /api/v1/auth/register
 *   - Creates new user in database
 *   - Hashes password before saving
 *   - Generates JWT and sets cookie
 *   - Returns user data (without password)
 *   - Error: 409 if email/username already exists
 *
 * - loginUser: POST /api/v1/auth/login
 *   - Finds user by email
 *   - Compares password with hash
 *   - Generates JWT and sets cookie
 *   - Returns user data and token
 *   - Error: 401 if invalid credentials
 *
 * - logoutUser: POST /api/v1/auth/logout
 *   - Clears httpOnly cookie
 *   - Returns success message
 *
 * - getMe: GET /api/v1/auth/me
 *   - Returns current authenticated user
 *   - User attached by authMiddleware
 *   - Returns: { id, username, email, createdAt }
 *
 * @imports
 * - User (from '../models/User.js') - User model
 * - generateToken (from '../utils/generateToken.js') - JWT generator
 * - { hashPassword, comparePassword } (from '../utils/hashPassword.js')
 * - { successResponse, errorResponse } (from '../utils/responseHelpers.js')
 *
 * @usedBy
 * - routes/v1/authRoutes.js
 */
