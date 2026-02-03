/**
 * @file Dropdown.jsx
 * @description Reusable dropdown menu component
 *
 * @role
 * - Provides trigger button with dropdown menu
 * - Handles click outside to close
 * - Supports keyboard navigation
 *
 * @exports
 * - Dropdown: React Component
 *
 * @props
 * - trigger: ReactNode - Element that triggers dropdown
 * - items: Array of { label, value, icon?, onClick, disabled? }
 * - align: 'left' | 'right' (default: 'left')
 * - className: String - Additional classes
 *
 * @features
 * - Click to open/close
 * - Click outside to close
 * - Keyboard: Escape to close, Enter to select
 * - Animated open/close
 *
 * @imports
 * - { useState, useRef, useEffect } (from 'react')
 * - { motion, AnimatePresence } (from 'framer-motion')
 * - clsx (from 'clsx')
 *
 * @usedBy
 * - components/editor/tools/ExportTools.jsx
 * - components/layout/Navbar.jsx (user menu)
 */
