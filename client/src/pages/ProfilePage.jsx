/**
 * @file ProfilePage.jsx
 * @description User profile page
 *
 * @role
 * - Displays user profile information
 * - Username, email, account created date
 * - Future: password change, account settings
 *
 * @exports
 * - ProfilePage: React Component
 *
 * @imports
 * - { useAuth } (from '../hooks/useAuth.js')
 * - Navbar (from '../components/layout/Navbar.jsx')
 * - PageContainer (from '../components/layout/PageContainer.jsx')
 * - Card (from '../components/common/Card.jsx')
 * - { formatDate } (from '../utils/formatters.js')
 * - { User, Mail, Calendar } (from 'lucide-react')
 *
 * @usedBy
 * - App.jsx (route: '/profile', wrapped in ProtectedRoute)
 */
