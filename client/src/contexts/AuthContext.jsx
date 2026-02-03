/**
 * @file AuthContext.jsx
 * @description React Context for authentication state management
 *
 * @role
 * - Provides global authentication state to entire app
 * - Manages user session, login, logout, registration
 * - Checks authentication status on app load
 *
 * @exports
 * - AuthContext: React Context object
 * - AuthProvider: Provider component wrapping children
 *   - Provides: { user, isAuthenticated, isLoading, login, register, logout, checkAuth }
 *
 * @contextValue
 * - user: User object { id, username, email, createdAt } or null
 * - isAuthenticated: Boolean
 * - isLoading: Boolean (initial auth check in progress)
 * - login: (email, password) => Promise
 * - register: (username, email, password) => Promise
 * - logout: () => Promise
 * - checkAuth: () => Promise (verify session with GET /auth/me)
 *
 * @imports
 * - { createContext, useState, useEffect, useCallback } (from 'react')
 * - { registerUser, loginUser, logoutUser, getCurrentUser } (from '../services/authService.js')
 * - { useNavigate } (from 'react-router-dom')
 *
 * @behavior
 * - On mount: Calls checkAuth() to verify existing session
 * - Login: Calls API, sets user state, navigates to dashboard
 * - Logout: Calls API, clears user state, navigates to login
 *
 * @usedBy
 * - App.jsx (wraps entire app)
 * - hooks/useAuth.js
 * - components/auth/ProtectedRoute.jsx
 */
