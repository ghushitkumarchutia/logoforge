/**
 * @file AuthRedirect.jsx
 * @description Redirects authenticated users away from auth pages
 *
 * @role
 * - Prevents logged-in users from seeing login/register pages
 * - Redirects to dashboard if already authenticated
 *
 * @exports
 * - AuthRedirect: React Component
 *
 * @props
 * - children: ReactNode - Auth page content
 *
 * @behavior
 * - If authenticated, redirects to /dashboard
 * - If not authenticated, renders children
 *
 * @imports
 * - { Navigate } (from 'react-router-dom')
 * - { useAuth } (from '../../hooks/useAuth.js')
 *
 * @usedBy
 * - App.jsx (wraps LoginPage, RegisterPage routes)
 */
