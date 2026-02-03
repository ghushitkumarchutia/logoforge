/**
 * @file projectValidators.js
 * @description Express-validator rules for project endpoints
 *
 * @role
 * - Validates project creation input
 * - Validates project update input
 * - Ensures canvasData structure is valid
 *
 * @exports
 * - createProjectValidation: Array of validation rules for POST /projects
 *   - projectName: required, 1-50 chars, trimmed
 *   - canvasData: required, must be object with 'objects' array
 *   - thumbnail: optional, string
 *   - tags: optional, array of strings
 *
 * - updateProjectValidation: Array of validation rules for PUT /projects/:id
 *   - projectName: optional, 1-50 chars if provided
 *   - canvasData: optional, must be valid object if provided
 *   - thumbnail: optional, string
 *   - tags: optional, array of strings
 *
 * - projectIdValidation: Validates MongoDB ObjectId in params
 *   - id: required, valid MongoDB ObjectId format
 *
 * @imports
 * - { body, param } (from 'express-validator') - Validation chain builders
 *
 * @usedBy
 * - routes/v1/projectRoutes.js (applied as middleware)
 */
