/**
 * @file validators.js
 * @description Client-side form validation helper functions
 *
 * @role
 * - Validates form inputs before submission
 * - Returns error messages for invalid inputs
 * - Provides real-time validation feedback
 *
 * @exports
 * - validateEmail: (email) => { isValid: boolean, message: string }
 *   - Checks for valid email format using regex
 *   - Returns error message if invalid
 *
 * - validatePassword: (password) => { isValid: boolean, message: string }
 *   - Minimum 8 characters
 *   - At least 1 uppercase letter
 *   - At least 1 lowercase letter
 *   - At least 1 number
 *
 * - validateUsername: (username) => { isValid: boolean, message: string }
 *   - 3-20 characters
 *   - Alphanumeric and underscore only
 *
 * - validatePasswordMatch: (password, confirmPassword) => { isValid: boolean, message: string }
 *   - Checks if passwords match
 *
 * - validateProjectName: (name) => { isValid: boolean, message: string }
 *   - 1-50 characters, not empty
 *
 * - validateRequired: (value, fieldName) => { isValid: boolean, message: string }
 *   - Generic required field check
 *
 * @imports
 * - None (pure utility functions)
 *
 * @usedBy
 * - components/auth/LoginForm.jsx
 * - components/auth/RegisterForm.jsx
 * - components/editor/modals/SaveProjectModal.jsx
 */
