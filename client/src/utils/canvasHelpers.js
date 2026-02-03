/**
 * @file canvasHelpers.js
 * @description Fabric.js canvas utility functions
 *
 * @role
 * - Provides helper functions for canvas operations
 * - Creates shape objects with default properties
 * - Handles object transformations and calculations
 *
 * @exports
 * - createRectangle: (options) => fabric.Rect
 *   - Creates rectangle with default fill, stroke, dimensions
 *
 * - createCircle: (options) => fabric.Circle
 *   - Creates circle with default radius, fill, stroke
 *
 * - createTriangle: (options) => fabric.Triangle
 *   - Creates triangle with default dimensions
 *
 * - createLine: (points, options) => fabric.Line
 *   - Creates line between two points
 *
 * - createText: (text, options) => fabric.IText
 *   - Creates editable text with default font settings
 *
 * - centerObjectOnCanvas: (canvas, object) => void
 *   - Centers object on canvas
 *
 * - getObjectBounds: (object) => { left, top, width, height }
 *   - Gets bounding box of object
 *
 * - cloneObject: (object) => Promise<fabric.Object>
 *   - Clones fabric object asynchronously
 *
 * - generateThumbnail: (canvas, width) => string
 *   - Generates base64 thumbnail from canvas
 *
 * @imports
 * - fabric (from 'fabric') - Fabric.js library
 *
 * @usedBy
 * - hooks/useCanvas.js
 * - components/editor/CanvasArea.jsx
 * - components/editor/tools/ShapeTools.jsx
 */
