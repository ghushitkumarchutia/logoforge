/**
 * @file Modal.jsx
 * @description Reusable modal/dialog component
 *
 * @role
 * - Provides overlay modal with slide-in animation
 * - Handles close on backdrop click and Escape key
 * - Traps focus inside modal for accessibility
 *
 * @exports
 * - Modal: React Component
 *
 * @props
 * - isOpen: Boolean - Controls modal visibility
 * - onClose: Function - Called when modal should close
 * - title: String - Modal header title
 * - children: ReactNode - Modal body content
 * - size: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
 * - showCloseButton: Boolean (default: true)
 * - closeOnBackdrop: Boolean (default: true)
 * - footer: ReactNode - Optional footer content
 *
 * @features
 * - Fade/slide animation on open/close
 * - Focus trap for keyboard navigation
 * - Click outside to close (optional)
 * - Escape key to close
 * - Prevents body scroll when open
 *
 * @imports
 * - { useEffect, useCallback } (from 'react')
 * - { createPortal } (from 'react-dom')
 * - { X } (from 'lucide-react') - Close icon
 * - { motion, AnimatePresence } (from 'framer-motion') - Animations
 *
 * @usedBy
 * - components/editor/modals/ExportModal.jsx
 * - components/editor/modals/SaveProjectModal.jsx
 * - components/editor/modals/IconLibraryModal.jsx
 * - components/common/ConfirmDialog.jsx
 */
