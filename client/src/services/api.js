/**
 * @file api.js
 * @description Axios instance configuration for API calls
 *
 * @role
 * - Creates configured Axios instance with base URL
 * - Sets up request/response interceptors
 * - Handles authentication token automatically
 * - Manages error responses globally
 *
 * @exports
 * - api: Configured Axios instance
 *   - Base URL from VITE_API_BASE_URL
 *   - Credentials included for cookies
 *   - JSON content type header
 *
 * @configuration
 * - baseURL: VITE_API_BASE_URL (e.g., http://localhost:5000/api/v1)
 * - withCredentials: true (sends cookies with requests)
 * - timeout: 10000 (10 second timeout)
 * - headers: { 'Content-Type': 'application/json' }
 *
 * @interceptors
 * - Request: Logs request in development
 * - Response: Extracts data, handles 401 (redirect to login)
 *
 * @errorHandling
 * - 401: Clears auth state, redirects to login
 * - 403: Shows unauthorized message
 * - 500: Shows server error message
 * - Network error: Shows connection error
 *
 * @imports
 * - axios (from 'axios') - HTTP client
 * - { API_BASE_URL } (from '../utils/constants.js')
 *
 * @usedBy
 * - services/authService.js
 * - services/projectService.js
 * - services/templateService.js
 * - services/iconService.js
 */
