/**
 * @file ColorPicker.jsx
 * @description Color picker wrapper using react-colorful
 *
 * @role
 * - Provides color selection UI for fill/stroke
 * - Shows color preview and hex input
 * - Stores recent colors in localStorage
 *
 * @exports
 * - ColorPicker: React Component
 *
 * @props
 * - color: String - Current color value
 * - onChange: Function - Color change handler
 * - label: String - Label text
 *
 * @imports
 * - { useState } (from 'react')
 * - { HexColorPicker, HexColorInput } (from 'react-colorful')
 * - { getItem, setItem, STORAGE_KEYS } (from '../../../utils/storageHelpers.js')
 * - '../../../styles/colorpicker.css' - Vanilla CSS overrides
 *
 * @usedBy
 * - components/editor/properties/ShapeProperties.jsx
 * - components/editor/properties/TextProperties.jsx
 */
