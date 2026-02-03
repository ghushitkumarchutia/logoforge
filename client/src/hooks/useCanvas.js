/**
 * @file useCanvas.js
 * @description Custom hook for Fabric.js canvas operations
 *
 * @role
 * - Manages Fabric.js canvas instance
 * - Provides methods for adding/removing objects
 * - Handles object selection and modification
 * - Serializes canvas for save/load
 *
 * @exports
 * - useCanvas: (canvasRef) => CanvasHookReturn
 *   - canvas: Fabric.Canvas instance
 *   - selectedObject: Currently selected object
 *   - objects: Array of all canvas objects
 *
 *   - initCanvas: () => void - Initialize canvas
 *   - addShape: (type, options?) => void - Add shape
 *   - addText: (text, options?) => void - Add text
 *   - addIcon: (svgPath, viewBox) => void - Add icon
 *   - removeSelected: () => void - Delete selected
 *   - duplicateSelected: () => void - Clone selected
 *
 *   - setFillColor: (color) => void
 *   - setStrokeColor: (color) => void
 *   - setOpacity: (value) => void
 *   - setFontSize: (size) => void
 *   - setFontFamily: (family) => void
 *
 *   - bringForward: () => void - Layer up
 *   - sendBackward: () => void - Layer down
 *   - bringToFront: () => void - Top layer
 *   - sendToBack: () => void - Bottom layer
 *
 *   - getCanvasJSON: () => Object - Serialize
 *   - loadFromJSON: (json) => Promise - Deserialize
 *   - clearCanvas: () => void
 *
 * @imports
 * - { useState, useEffect, useCallback } (from 'react')
 * - { fabric } (from 'fabric') - Fabric.js
 * - { createRectangle, createCircle, ... } (from '../utils/canvasHelpers.js')
 * - { CANVAS_DEFAULTS } (from '../utils/constants.js')
 *
 * @events
 * - Listens to: object:added, object:removed, object:modified, selection:created
 * - Updates state when canvas changes
 *
 * @usedBy
 * - components/editor/CanvasArea.jsx
 * - contexts/CanvasContext.jsx
 */
