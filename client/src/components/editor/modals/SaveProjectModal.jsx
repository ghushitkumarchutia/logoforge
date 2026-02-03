/**
 * @file SaveProjectModal.jsx
 * @description Save/rename project modal dialog
 *
 * @role
 * - Modal to save new project or rename existing
 * - Project name input with validation
 * - Saves canvas data and thumbnail to server
 *
 * @exports
 * - SaveProjectModal: React Component
 *
 * @props
 * - isOpen: Boolean
 * - onClose: Function
 * - projectId: String | null - Existing project ID
 * - currentName: String - Current project name
 * - onSave: Function - Called on successful save
 *
 * @imports
 * - { useState, useContext } (from 'react')
 * - { CanvasContext } (from '../../../contexts/CanvasContext.jsx')
 * - Modal (from '../../common/Modal.jsx')
 * - Button (from '../../common/Button.jsx')
 * - Input (from '../../common/Input.jsx')
 * - { createProject, updateProject } (from '../../../services/projectService.js')
 * - { generateThumbnail } (from '../../../utils/canvasHelpers.js')
 * - { validateProjectName } (from '../../../utils/validators.js')
 * - toast (from 'react-hot-toast')
 *
 * @usedBy
 * - pages/EditorPage.jsx
 * - components/editor/Toolbar.jsx
 */
