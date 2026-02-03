/**
 * @file authService.js
 * @description Authentication API service functions
 *
 * @role
 * - Handles all authentication-related API calls
 * - Communicates with /api/v1/auth endpoints
 * - Returns data or throws errors for handling
 *
 * @exports
 * - registerUser: (userData) => Promise
 *   - POST /auth/register
 *   - userData: { username, email, password }
 *   - Returns: { user, token, message }
 *
 * - loginUser: (credentials) => Promise
 *   - POST /auth/login
 *   - credentials: { email, password }
 *   - Returns: { user, token, message }
 *
 * - logoutUser: () => Promise
 *   - POST /auth/logout
 *   - Returns: { message }
 *
 * - getCurrentUser: () => Promise
 *   - GET /auth/me
 *   - Returns: { user: { id, username, email, createdAt } }
 *
 * @imports
 * - api (from './api.js') - Configured Axios instance
 *
 * @errorHandling
 * - Throws error with response message for caller to handle
 * - Error object includes status code and message
 *
 * @usedBy
 * - contexts/AuthContext.jsx
 * - hooks/useAuth.js
 * - components/auth/LoginForm.jsx
 * - components/auth/RegisterForm.jsx
 */
