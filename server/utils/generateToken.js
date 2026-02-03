/**
 * @file generateToken.js
 * @description JWT token generation utility
 *
 * @role
 * - Creates signed JWT tokens for authenticated users
 * - Sets token in httpOnly cookie for security
 * - Configures token expiration time
 *
 * @exports
 * - generateToken: Function that creates JWT and sets cookie
 *   - Parameters: (res, userId)
 *   - res: Express response object
 *   - userId: MongoDB ObjectId of the user
 *   - Returns: Generated JWT token string
 *
 * @imports
 * - jwt (from 'jsonwebtoken') - JWT signing library
 *
 * @envVariables
 * - JWT_SECRET: Secret key for signing tokens
 * - JWT_EXPIRE: Token expiration time (e.g., '7d')
 * - NODE_ENV: Environment for cookie secure flag
 *
 * @cookieConfig
 * - name: 'token'
 * - httpOnly: true (prevents XSS access)
 * - secure: true in production
 * - sameSite: 'strict'
 * - maxAge: 7 days in milliseconds
 *
 * @usedBy
 * - controllers/authController.js (login, register functions)
 */
