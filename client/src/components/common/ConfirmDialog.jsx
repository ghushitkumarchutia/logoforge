/**
 * @file ConfirmDialog.jsx
 * @description Confirmation dialog for destructive actions
 *
 * @role
 * - Shows confirmation modal before dangerous actions
 * - Requires user to confirm or cancel
 * - Used for delete, discard changes, etc.
 *
 * @exports
 * - ConfirmDialog: React Component
 *
 * @props
 * - isOpen: Boolean - Controls visibility
 * - onConfirm: Function - Called on confirm
 * - onCancel: Function - Called on cancel
 * - title: String - Dialog title
 * - message: String - Confirmation message
 * - confirmText: String (default: 'Confirm')
 * - cancelText: String (default: 'Cancel')
 * - variant: 'danger' | 'warning' (default: 'danger')
 * - isLoading: Boolean - Confirm button loading state
 *
 * @imports
 * - Modal (from './Modal.jsx')
 * - Button (from './Button.jsx')
 *
 * @usedBy
 * - components/dashboard/ProjectCard.jsx (delete project)
 * - components/editor/modals/UnsavedChangesModal.jsx
 */
