/**
 * @file useCanvasHistory.js
 * @description Custom hook for undo/redo functionality
 *
 * @role
 * - Maintains history stack of canvas states
 * - Provides undo and redo operations
 * - Limits history to prevent memory issues
 *
 * @exports
 * - useCanvasHistory: (canvas) => HistoryHookReturn
 *   - canUndo: Boolean - Has undo history
 *   - canRedo: Boolean - Has redo history
 *   - undo: () => void - Restore previous state
 *   - redo: () => void - Restore next state
 *   - saveState: () => void - Push current state to history
 *   - clearHistory: () => void - Reset history stack
 *
 * @state
 * - history: Array of canvas JSON states
 * - historyIndex: Current position in history array
 *
 * @configuration
 * - HISTORY_LIMIT: 20 (from constants.js)
 * - Oldest states removed when limit exceeded
 *
 * @imports
 * - { useState, useCallback } (from 'react')
 * - { HISTORY_LIMIT } (from '../utils/constants.js')
 *
 * @implementation
 * - saveState: Serializes canvas to JSON, pushes to stack
 * - undo: Decrements index, loads previous state
 * - redo: Increments index, loads next state
 * - Clears redo history when new state saved after undo
 *
 * @usedBy
 * - components/editor/CanvasArea.jsx
 * - components/editor/tools/HistoryTools.jsx
 * - hooks/useKeyboardShortcuts.js (Ctrl+Z, Ctrl+Y)
 */
