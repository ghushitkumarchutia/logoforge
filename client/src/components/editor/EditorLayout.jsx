/**
 * @file EditorLayout.jsx
 * @description Main editor layout wrapper
 *
 * @role
 * - Organizes editor UI (toolbar, canvas, sidebars)
 * - Provides layout structure for editor page
 * - Handles responsive layout adjustments
 *
 * @exports
 * - EditorLayout: React Component
 *
 * @structure
 * - Toolbar (top)
 * - LayerPanel (left sidebar)
 * - CanvasArea (center)
 * - PropertiesPanel (right sidebar)
 *
 * @imports
 * - { useState } (from 'react')
 * - Toolbar (from './Toolbar.jsx')
 * - CanvasArea (from './CanvasArea.jsx')
 * - LayerPanel (from './layers/LayerPanel.jsx')
 * - PropertiesPanel (from './properties/PropertiesPanel.jsx')
 *
 * @usedBy
 * - pages/EditorPage.jsx
 */
