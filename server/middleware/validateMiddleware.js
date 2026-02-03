/**
 * @file validateMiddleware.js
 * @description Middleware to check express-validator results
 *
 * @role
 * - Checks validation results from express-validator
 * - Returns 400 with validation errors if any fail
 * - Allows request to proceed if all validations pass
 *
 * @exports
 * - validate: Middleware function to check validation results
 *   - Extracts validation errors using validationResult
 *   - If errors exist, returns 400 with formatted error array
 *   - If no errors, calls next()
 *
 * @imports
 * - { validationResult } (from 'express-validator') - Extract validation errors
 * - { errorResponse } (from '../utils/responseHelpers.js') - Error response helper
 *
 * @errorResponse
 * - 400: { success: false, message: 'Validation failed', errors: [...] }
 * - errors array contains: { field, message } objects
 *
 * @usedBy
 * - routes/v1/authRoutes.js (after validation arrays)
 * - routes/v1/projectRoutes.js (after validation arrays)
 */
