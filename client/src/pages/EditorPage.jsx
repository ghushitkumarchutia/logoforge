/**
 * @file EditorPage.jsx
 * @description Canvas editor page
 *
 * @role
 * - Main design editor interface
 * - Loads existing project or creates new
 * - Wraps EditorLayout with CanvasProvider
 * - Handles auto-save and unsaved changes warning
 *
 * @exports
 * - EditorPage: React Component
 *
 * @state
 * - projectId: String | null (from URL params)
 * - projectName: String
 * - isLoading: Boolean
 * - hasUnsavedChanges: Boolean
 *
 * @imports
 * - { useState, useEffect } (from 'react')
 * - { useParams, useNavigate, useBlocker } (from 'react-router-dom')
 * - { CanvasProvider } (from '../contexts/CanvasContext.jsx')
 * - { getProjectById } (from '../services/projectService.js')
 * - { useAutoSave } (from '../hooks/useAutoSave.js')
 * - EditorLayout (from '../components/editor/EditorLayout.jsx')
 * - SaveProjectModal (from '../components/editor/modals/SaveProjectModal.jsx')
 * - UnsavedChangesModal (from '../components/editor/modals/UnsavedChangesModal.jsx')
 * - Loader (from '../components/common/Loader.jsx')
 *
 * @usedBy
 * - App.jsx (routes: '/editor', '/editor/:projectId', wrapped in ProtectedRoute)
 */
