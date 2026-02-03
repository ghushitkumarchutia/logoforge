/**
 * @file User.js
 * @description Mongoose schema and model for User collection
 *
 * @role
 * - Defines user data structure for authentication
 * - Validates user input (username, email, password)
 * - Hashes password before saving to database
 * - Provides method to compare passwords for login
 *
 * @schema
 * - username: String (required, unique, 3-20 chars, alphanumeric + underscore)
 * - email: String (required, unique, lowercase, valid email format)
 * - password: String (required, min 8 chars, hashed before save)
 * - createdAt: Date (auto-generated)
 * - updatedAt: Date (auto-updated)
 *
 * @exports
 * - User: Mongoose Model
 *
 * @imports
 * - mongoose (from 'mongoose') - MongoDB ODM
 * - { hashPassword, comparePassword } (from '../utils/hashPassword.js')
 *
 * @methods
 * - matchPassword(enteredPassword): Instance method to compare passwords
 *
 * @hooks
 * - pre('save'): Hash password if modified before saving
 *
 * @indexes
 * - email: unique index for fast lookup
 * - username: unique index for preventing duplicates
 *
 * @usedBy
 * - controllers/authController.js
 * - middleware/authMiddleware.js
 */
