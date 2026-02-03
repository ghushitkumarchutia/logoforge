/**
 * @file CanvasArea.jsx
 * @description Fabric.js canvas wrapper component
 *
 * @role
 * - Initializes and renders Fabric.js canvas
 * - Handles canvas events and object selection
 * - Manages canvas resize and zoom
 *
 * @exports
 * - CanvasArea: React Component
 *
 * @structure
 * - Canvas container with overflow scroll
 * - Canvas element (Fabric.js target)
 * - CanvasControls overlay
 *
 * @imports
 * - { useRef, useEffect, useContext } (from 'react')
 * - { fabric } (from 'fabric')
 * - { CanvasContext } (from '../../contexts/CanvasContext.jsx')
 * - { useKeyboardShortcuts } (from '../../hooks/useKeyboardShortcuts.js')
 * - CanvasControls (from './CanvasControls.jsx')
 * - { CANVAS_DEFAULTS } (from '../../utils/constants.js')
 * - '../../styles/canvas.css' - Canvas-specific vanilla CSS
 *
 * @canvasEvents
 * - object:added, object:removed, object:modified
 * - selection:created, selection:cleared, selection:updated
 * - mouse:down, mouse:up, mouse:move
 *
 * @usedBy
 * - components/editor/EditorLayout.jsx
 */
