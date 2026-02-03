/**
 * @file responseHelpers.js
 * @description Standardized API response formatting utilities
 *
 * @role
 * - Provides consistent response structure across all API endpoints
 * - Creates success responses with data and message
 * - Creates error responses with status code and message
 *
 * @exports
 * - successResponse: Function to send success response
 *   - Parameters: (res, statusCode, message, data)
 *   - Returns: JSON response { success: true, message, data }
 *
 * - errorResponse: Function to send error response
 *   - Parameters: (res, statusCode, message, errors)
 *   - Returns: JSON response { success: false, message, errors }
 *
 * - paginatedResponse: Function to send paginated data response
 *   - Parameters: (res, data, page, limit, total)
 *   - Returns: JSON with data, pagination info
 *
 * @imports
 * - None (pure utility functions)
 *
 * @usedBy
 * - controllers/authController.js
 * - controllers/projectController.js
 * - controllers/templateController.js
 * - controllers/iconController.js
 * - middleware/errorMiddleware.js
 */
