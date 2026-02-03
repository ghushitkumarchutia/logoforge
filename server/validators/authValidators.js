/**
 * @file authValidators.js
 * @description Express-validator rules for authentication endpoints
 *
 * @role
 * - Validates registration input (username, email, password)
 * - Validates login input (email, password)
 * - Returns validation rules array for middleware chain
 *
 * @exports
 * - registerValidation: Array of validation rules for /register
 *   - username: required, 3-20 chars, alphanumeric + underscore
 *   - email: required, valid email format, normalized
 *   - password: required, min 8 chars, 1 uppercase, 1 lowercase, 1 number
 *
 * - loginValidation: Array of validation rules for /login
 *   - email: required, valid email format
 *   - password: required, not empty
 *
 * @imports
 * - { body } (from 'express-validator') - Validation chain builder
 *
 * @validationMessages
 * - Custom error messages for each field validation failure
 *
 * @usedBy
 * - routes/v1/authRoutes.js (applied as middleware)
 */
