/**
 * @file App.jsx
 * @description Main application component with routing
 *
 * @role
 * - Entry point React component
 * - Configures React Router routes
 * - Wraps app with providers (Auth, Theme, Toast)
 *
 * @exports
 * - App: React Component (default)
 *
 * @structure
 * - BrowserRouter
 *   - AuthProvider
 *     - ThemeProvider
 *       - ToastProvider
 *         - Routes
 *           - '/' → LandingPage
 *           - '/login' → AuthRedirect → LoginPage
 *           - '/register' → AuthRedirect → RegisterPage
 *           - '/dashboard' → ProtectedRoute → DashboardPage
 *           - '/editor' → ProtectedRoute → EditorPage
 *           - '/editor/:projectId' → ProtectedRoute → EditorPage
 *           - '/profile' → ProtectedRoute → ProfilePage
 *           - '*' → NotFoundPage
 *
 * @imports
 * - { BrowserRouter, Routes, Route } (from 'react-router-dom')
 * - { AuthProvider } (from './contexts/AuthContext.jsx')
 * - { ThemeProvider } (from './contexts/ThemeContext.jsx')
 * - { ToastProvider } (from './contexts/ToastContext.jsx')
 * - ProtectedRoute (from './components/auth/ProtectedRoute.jsx')
 * - AuthRedirect (from './components/auth/AuthRedirect.jsx')
 * - LandingPage (from './pages/LandingPage.jsx')
 * - LoginPage (from './pages/LoginPage.jsx')
 * - RegisterPage (from './pages/RegisterPage.jsx')
 * - DashboardPage (from './pages/DashboardPage.jsx')
 * - EditorPage (from './pages/EditorPage.jsx')
 * - ProfilePage (from './pages/ProfilePage.jsx')
 * - NotFoundPage (from './pages/NotFoundPage.jsx')
 *
 * @usedBy
 * - main.jsx (renders App into DOM)
 */
