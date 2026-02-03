/**
 * @file hashPassword.js
 * @description Password hashing and comparison utility using bcrypt
 *
 * @role
 * - Hashes plain text passwords before storing in database
 * - Compares plain text password with hashed password for login
 * - Uses bcrypt with configurable salt rounds
 *
 * @exports
 * - hashPassword: Async function to hash a plain text password
 *   - Parameters: (password)
 *   - Returns: Hashed password string
 *
 * - comparePassword: Async function to compare passwords
 *   - Parameters: (plainPassword, hashedPassword)
 *   - Returns: Boolean (true if match, false otherwise)
 *
 * @imports
 * - bcrypt (from 'bcryptjs') - Password hashing library
 *
 * @constants
 * - SALT_ROUNDS: 10 (industry standard for bcrypt)
 *
 * @usedBy
 * - models/User.js (pre-save hook for password hashing)
 * - controllers/authController.js (login password comparison)
 */
