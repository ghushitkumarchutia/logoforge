/**
 * @file Tooltip.jsx
 * @description Hover tooltip component
 *
 * @role
 * - Shows tooltip on hover over trigger element
 * - Provides additional context for icons/buttons
 * - Multiple position options
 *
 * @exports
 * - Tooltip: React Component
 *
 * @props
 * - children: ReactNode - Trigger element
 * - content: String | ReactNode - Tooltip content
 * - position: 'top' | 'bottom' | 'left' | 'right' (default: 'top')
 * - delay: Number - Delay before showing (default: 200ms)
 * - className: String - Additional classes
 *
 * @styling
 * - Dark background with white text
 * - Subtle fade-in animation
 * - Arrow pointing to trigger
 *
 * @imports
 * - { useState, useRef } (from 'react')
 * - { motion, AnimatePresence } (from 'framer-motion')
 *
 * @usedBy
 * - components/editor/Toolbar.jsx (tool buttons)
 * - components/editor/tools/ShapeTools.jsx
 * - components/editor/tools/HistoryTools.jsx
 */
