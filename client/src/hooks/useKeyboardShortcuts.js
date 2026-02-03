/**
 * @file useKeyboardShortcuts.js
 * @description Custom hook for keyboard shortcut handling
 *
 * @role
 * - Registers global keyboard event listeners
 * - Maps keyboard shortcuts to actions
 * - Prevents default browser behavior for shortcuts
 *
 * @exports
 * - useKeyboardShortcuts: (handlers) => void
 *   - handlers: Object mapping shortcuts to functions
 *
 * @shortcuts
 * - Ctrl/Cmd + Z: Undo
 * - Ctrl/Cmd + Y: Redo
 * - Ctrl/Cmd + Shift + Z: Redo (alternative)
 * - Ctrl/Cmd + C: Copy
 * - Ctrl/Cmd + V: Paste
 * - Ctrl/Cmd + X: Cut
 * - Ctrl/Cmd + D: Duplicate
 * - Ctrl/Cmd + S: Save (prevent default, trigger save)
 * - Delete/Backspace: Delete selected object
 * - Escape: Deselect all
 *
 * @imports
 * - { useEffect, useCallback } (from 'react')
 *
 * @behavior
 * - Adds keydown listener on mount
 * - Removes listener on unmount
 * - Checks for Ctrl/Cmd modifier
 * - Prevents default for handled shortcuts
 * - Only active when not typing in input/textarea
 *
 * @usedBy
 * - components/editor/CanvasArea.jsx
 * - pages/EditorPage.jsx
 */
