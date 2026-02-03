/**
 * @file useDebounce.js
 * @description Custom hook for debouncing values
 *
 * @role
 * - Delays value updates to reduce frequent operations
 * - Useful for search inputs and auto-save triggers
 *
 * @exports
 * - useDebounce: (value, delay) => debouncedValue
 *   - value: any - Value to debounce
 *   - delay: number - Delay in milliseconds (default: 300)
 *   - Returns: Debounced value (updates after delay)
 *
 * @imports
 * - { useState, useEffect } (from 'react')
 *
 * @behavior
 * - Sets timeout when value changes
 * - Clears previous timeout if value changes again
 * - Updates debounced value after delay period
 *
 * @usedBy
 * - components/dashboard/ProjectSearch.jsx
 * - components/editor/modals/IconLibraryModal.jsx (search)
 * - hooks/useAutoSave.js (change detection)
 */
