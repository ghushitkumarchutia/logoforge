/**
 * @file useAutoSave.js
 * @description Custom hook for automatic project saving
 *
 * @role
 * - Automatically saves project at regular intervals
 * - Detects canvas changes before saving
 * - Shows save status and last saved time
 *
 * @exports
 * - useAutoSave: (projectId, canvas, enabled) => AutoSaveHookReturn
 *   - isSaving: Boolean - Save in progress
 *   - lastSaved: Date - Last successful save time
 *   - hasUnsavedChanges: Boolean - Changes since last save
 *   - saveNow: () => Promise - Manual save trigger
 *   - setHasChanges: (boolean) => void - Mark changes
 *
 * @configuration
 * - Interval: AUTOSAVE_INTERVAL (2 minutes from constants.js)
 * - Only saves when hasUnsavedChanges is true
 * - Only saves when projectId exists (saved project)
 *
 * @imports
 * - { useState, useEffect, useCallback, useRef } (from 'react')
 * - { updateProject } (from '../services/projectService.js')
 * - { AUTOSAVE_INTERVAL } (from '../utils/constants.js')
 * - { generateThumbnail } (from '../utils/canvasHelpers.js')
 * - toast (from 'react-hot-toast') - Notifications
 *
 * @behavior
 * - Sets up interval timer on mount
 * - Clears timer on unmount
 * - Checks hasUnsavedChanges before saving
 * - Shows toast on success/failure
 * - Updates lastSaved timestamp
 *
 * @usedBy
 * - pages/EditorPage.jsx
 * - components/editor/EditorLayout.jsx
 */
