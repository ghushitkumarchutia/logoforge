/**
 * @file authRoutes.js
 * @description Express router for authentication endpoints
 *
 * @role
 * - Defines routes for user authentication
 * - Applies validation middleware to routes
 * - Connects controllers to route handlers
 *
 * @routes
 * - POST /register - Register new user
 *   - Middleware: registerValidation, validate
 *   - Controller: registerUser
 *
 * - POST /login - Login user
 *   - Middleware: loginValidation, validate
 *   - Controller: loginUser
 *
 * - POST /logout - Logout user (clear cookie)
 *   - Controller: logoutUser
 *
 * - GET /me - Get current authenticated user
 *   - Middleware: protect (auth required)
 *   - Controller: getMe
 *
 * @exports
 * - router: Express Router instance
 *
 * @imports
 * - express (from 'express') - Router
 * - { registerUser, loginUser, logoutUser, getMe } (from '../controllers/authController.js')
 * - { registerValidation, loginValidation } (from '../../validators/authValidators.js')
 * - { validate } (from '../../middleware/validateMiddleware.js')
 * - { protect } (from '../../middleware/authMiddleware.js')
 *
 * @usedBy
 * - routes/v1/index.js (mounted at /auth)
 */
