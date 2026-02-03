/**
 * @file CanvasContext.jsx
 * @description React Context for Fabric.js canvas state management
 *
 * @role
 * - Provides canvas instance and operations to editor components
 * - Shares canvas state across editor sub-components
 * - Manages selected object, objects list, and canvas operations
 *
 * @exports
 * - CanvasContext: React Context object
 * - CanvasProvider: Provider component wrapping editor
 *   - Provides: { canvas, setCanvas, selectedObject, operations }
 *
 * @contextValue
 * - canvas: Fabric.Canvas instance or null
 * - setCanvas: (canvas) => void
 * - selectedObject: Currently selected fabric object
 * - objects: Array of all canvas objects
 * - isModified: Boolean (unsaved changes)
 *
 * - operations: Object containing all canvas functions
 *   - addShape, addText, addIcon
 *   - removeSelected, duplicateSelected
 *   - setFillColor, setStrokeColor, setOpacity
 *   - bringForward, sendBackward, bringToFront, sendToBack
 *   - getCanvasJSON, loadFromJSON, clearCanvas
 *
 * @imports
 * - { createContext, useState, useCallback } (from 'react')
 * - useCanvas (from '../hooks/useCanvas.js')
 * - useCanvasHistory (from '../hooks/useCanvasHistory.js')
 * - useClipboard (from '../hooks/useClipboard.js')
 *
 * @usedBy
 * - pages/EditorPage.jsx (wraps EditorLayout)
 * - components/editor/CanvasArea.jsx
 * - components/editor/Toolbar.jsx
 * - components/editor/layers/LayerPanel.jsx
 * - components/editor/properties/PropertiesPanel.jsx
 */
