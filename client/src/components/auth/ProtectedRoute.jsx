/**
 * @file ProtectedRoute.jsx
 * @description Route guard for authenticated routes
 *
 * @role
 * - Wraps routes that require authentication
 * - Redirects to login if not authenticated
 * - Shows loading state during auth check
 *
 * @exports
 * - ProtectedRoute: React Component
 *
 * @props
 * - children: ReactNode - Protected content
 *
 * @behavior
 * - Checks isAuthenticated from AuthContext
 * - If loading, shows loader
 * - If not authenticated, redirects to /login
 * - If authenticated, renders children
 *
 * @imports
 * - { Navigate, useLocation } (from 'react-router-dom')
 * - { useAuth } (from '../../hooks/useAuth.js')
 * - Loader (from '../common/Loader.jsx')
 *
 * @usedBy
 * - App.jsx (wraps DashboardPage, EditorPage, ProfilePage routes)
 */
