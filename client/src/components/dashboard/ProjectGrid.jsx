/**
 * @file ProjectGrid.jsx
 * @description Grid of project cards for dashboard
 *
 * @role
 * - Displays projects in responsive grid layout
 * - Shows skeleton loaders while loading
 * - Handles empty state when no projects
 *
 * @exports
 * - ProjectGrid: React Component
 *
 * @props
 * - projects: Array of project objects
 * - isLoading: Boolean - Loading state
 * - onDelete: Function - Delete handler passed to cards
 *
 * @imports
 * - ProjectCard (from './ProjectCard.jsx')
 * - Skeleton (from '../common/Skeleton.jsx')
 * - EmptyState (from './EmptyState.jsx')
 *
 * @usedBy
 * - pages/DashboardPage.jsx
 */
