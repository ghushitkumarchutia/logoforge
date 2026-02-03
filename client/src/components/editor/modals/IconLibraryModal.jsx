/**
 * @file IconLibraryModal.jsx
 * @description Icon browser modal dialog
 *
 * @role
 * - Modal to browse and search icon library
 * - Category filter tabs
 * - Search input with debounce
 * - Click icon to add to canvas
 *
 * @exports
 * - IconLibraryModal: React Component
 *
 * @props
 * - isOpen: Boolean
 * - onClose: Function
 * - onSelectIcon: Function - Called with selected icon data
 *
 * @imports
 * - { useState, useEffect } (from 'react')
 * - { useDebounce } (from '../../../hooks/useDebounce.js')
 * - Modal (from '../../common/Modal.jsx')
 * - Input (from '../../common/Input.jsx')
 * - Loader (from '../../common/Loader.jsx')
 * - { getAllIcons, getIconsByCategory } (from '../../../services/iconService.js')
 * - { ICON_CATEGORIES } (from '../../../utils/constants.js')
 * - { Search } (from 'lucide-react')
 *
 * @usedBy
 * - components/editor/Toolbar.jsx
 */
