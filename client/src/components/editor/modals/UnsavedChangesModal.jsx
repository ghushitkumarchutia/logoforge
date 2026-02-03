/**
 * @file UnsavedChangesModal.jsx
 * @description Warning modal for unsaved changes
 *
 * @role
 * - Warns user when navigating away with unsaved changes
 * - Options: Save, Discard, Cancel
 *
 * @exports
 * - UnsavedChangesModal: React Component
 *
 * @props
 * - isOpen: Boolean
 * - onSave: Function - Save and proceed
 * - onDiscard: Function - Discard and proceed
 * - onCancel: Function - Cancel navigation
 *
 * @imports
 * - Modal (from '../../common/Modal.jsx')
 * - Button (from '../../common/Button.jsx')
 * - { AlertTriangle } (from 'lucide-react')
 *
 * @usedBy
 * - pages/EditorPage.jsx
 */
