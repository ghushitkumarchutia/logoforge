/**
 * @file ShapeProperties.jsx
 * @description Shape-specific properties controls
 *
 * @role
 * - Controls for shape objects (rect, circle, triangle)
 * - Fill color, stroke color, stroke width
 * - Corner radius for rectangles
 *
 * @exports
 * - ShapeProperties: React Component
 *
 * @props
 * - object: Fabric object reference
 * - onUpdate: Function - Update handler
 *
 * @imports
 * - { useState, useEffect } (from 'react')
 * - ColorPicker (from './ColorPicker.jsx')
 * - Input (from '../../common/Input.jsx')
 *
 * @usedBy
 * - components/editor/properties/PropertiesPanel.jsx
 */
