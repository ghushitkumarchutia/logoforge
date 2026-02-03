/**
 * @file DashboardPage.jsx
 * @description User dashboard page
 *
 * @role
 * - Displays user's saved projects
 * - Search/filter projects
 * - Create new project button
 * - Delete projects
 *
 * @exports
 * - DashboardPage: React Component
 *
 * @state
 * - projects: Array of user projects
 * - isLoading: Boolean
 * - searchQuery: String
 *
 * @imports
 * - { useState, useEffect } (from 'react')
 * - { useAuth } (from '../hooks/useAuth.js')
 * - { getAllProjects, deleteProject } (from '../services/projectService.js')
 * - Navbar (from '../components/layout/Navbar.jsx')
 * - PageContainer (from '../components/layout/PageContainer.jsx')
 * - ProjectGrid (from '../components/dashboard/ProjectGrid.jsx')
 * - ProjectSearch (from '../components/dashboard/ProjectSearch.jsx')
 * - CreateProjectBtn (from '../components/dashboard/CreateProjectBtn.jsx')
 * - toast (from 'react-hot-toast')
 *
 * @usedBy
 * - App.jsx (route: '/dashboard', wrapped in ProtectedRoute)
 */
