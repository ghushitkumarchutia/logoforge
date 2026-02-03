/**
 * @file CanvasControls.jsx
 * @description Zoom, pan, and grid controls overlay
 *
 * @role
 * - Provides zoom in/out controls
 * - Toggle grid visibility
 * - Shows current zoom level
 * - Reset zoom button
 *
 * @exports
 * - CanvasControls: React Component
 *
 * @props
 * - zoom: Number - Current zoom level (1 = 100%)
 * - onZoomIn: Function - Zoom in handler
 * - onZoomOut: Function - Zoom out handler
 * - onResetZoom: Function - Reset to 100%
 * - showGrid: Boolean - Grid visibility state
 * - onToggleGrid: Function - Toggle grid handler
 *
 * @imports
 * - Button (from '../common/Button.jsx')
 * - Tooltip (from '../common/Tooltip.jsx')
 * - { ZoomIn, ZoomOut, Grid, RotateCcw } (from 'lucide-react')
 *
 * @usedBy
 * - components/editor/CanvasArea.jsx
 */
