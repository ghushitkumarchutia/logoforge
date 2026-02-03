/**
 * @file useClipboard.js
 * @description Custom hook for copy/paste functionality
 *
 * @role
 * - Handles copy, cut, paste operations for canvas objects
 * - Stores clipboard data in memory (not system clipboard)
 * - Pastes with offset to show duplicate
 *
 * @exports
 * - useClipboard: (canvas) => ClipboardHookReturn
 *   - hasClipboard: Boolean - Has copied object
 *   - copy: () => void - Copy selected object
 *   - cut: () => void - Copy and delete selected
 *   - paste: () => void - Paste with offset
 *   - duplicate: () => void - Copy and paste immediately
 *
 * @state
 * - clipboardData: Serialized fabric object JSON
 *
 * @configuration
 * - Paste offset: 10px right and down from original
 *
 * @imports
 * - { useState, useCallback } (from 'react')
 * - { cloneObject } (from '../utils/canvasHelpers.js')
 *
 * @behavior
 * - copy: Serializes selected object to JSON, stores in state
 * - cut: Copies then removes from canvas
 * - paste: Deserializes, adds to canvas with offset
 * - duplicate: Copy + paste in one action
 *
 * @usedBy
 * - hooks/useKeyboardShortcuts.js (Ctrl+C, Ctrl+V, Ctrl+X)
 * - components/editor/Toolbar.jsx
 */
