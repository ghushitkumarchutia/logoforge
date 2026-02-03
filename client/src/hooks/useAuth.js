/**
 * @file useAuth.js
 * @description Custom hook for authentication operations
 *
 * @role
 * - Provides easy access to auth context
 * - Wraps auth functions with loading/error states
 * - Handles toast notifications for auth events
 *
 * @exports
 * - useAuth: () => AuthHookReturn
 *   - user: Current user object or null
 *   - isAuthenticated: Boolean
 *   - isLoading: Boolean (auth operation in progress)
 *   - error: Error message or null
 *   - login: (email, password) => Promise
 *   - register: (username, email, password) => Promise
 *   - logout: () => Promise
 *   - checkAuth: () => Promise (verify current session)
 *
 * @imports
 * - { useContext } (from 'react') - Access context
 * - { AuthContext } (from '../contexts/AuthContext.jsx')
 * - { useNavigate } (from 'react-router-dom') - Navigation
 * - toast (from 'react-hot-toast') - Notifications
 *
 * @errorHandling
 * - Catches auth errors and sets error state
 * - Shows toast notification for failures
 * - Clears error on new auth attempt
 *
 * @usedBy
 * - components/auth/LoginForm.jsx
 * - components/auth/RegisterForm.jsx
 * - components/layout/Navbar.jsx
 * - pages/DashboardPage.jsx
 */
