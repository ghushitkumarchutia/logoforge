/**
 * @file HistoryTools.jsx
 * @description Undo/Redo tool buttons
 *
 * @role
 * - Undo and redo buttons for canvas history
 * - Disabled when no history available
 * - Shows keyboard shortcut hints
 *
 * @exports
 * - HistoryTools: React Component
 *
 * @imports
 * - { useContext } (from 'react')
 * - { CanvasContext } (from '../../../contexts/CanvasContext.jsx')
 * - Button (from '../../common/Button.jsx')
 * - Tooltip (from '../../common/Tooltip.jsx')
 * - { Undo2, Redo2 } (from 'lucide-react')
 *
 * @usedBy
 * - components/editor/Toolbar.jsx
 */
