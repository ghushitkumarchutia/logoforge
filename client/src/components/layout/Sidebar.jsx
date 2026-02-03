/**
 * @file Sidebar.jsx
 * @description Generic sidebar wrapper component
 *
 * @role
 * - Provides consistent sidebar layout
 * - Used for layer panel and properties panel
 * - Collapsible on desktop
 *
 * @exports
 * - Sidebar: React Component
 *
 * @props
 * - children: ReactNode - Sidebar content
 * - side: 'left' | 'right' (default: 'left')
 * - width: String - CSS width (default: '280px')
 * - collapsible: Boolean (default: true)
 * - collapsed: Boolean - Controlled collapsed state
 * - onToggle: Function - Toggle callback
 * - title: String - Sidebar header title
 * - className: String - Additional classes
 *
 * @imports
 * - { useState } (from 'react')
 * - { motion } (from 'framer-motion')
 * - { ChevronLeft, ChevronRight } (from 'lucide-react')
 * - clsx (from 'clsx')
 *
 * @usedBy
 * - components/editor/layers/LayerPanel.jsx
 * - components/editor/properties/PropertiesPanel.jsx
 */
