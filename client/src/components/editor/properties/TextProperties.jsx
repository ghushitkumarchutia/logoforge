/**
 * @file TextProperties.jsx
 * @description Text-specific properties controls
 *
 * @role
 * - Controls for text objects (IText)
 * - Font family, font size, font weight
 * - Text alignment, color
 * - Bold, italic, underline toggles
 *
 * @exports
 * - TextProperties: React Component
 *
 * @props
 * - object: Fabric IText object reference
 * - onUpdate: Function - Update handler
 *
 * @imports
 * - { useState, useEffect } (from 'react')
 * - ColorPicker (from './ColorPicker.jsx')
 * - Dropdown (from '../../common/Dropdown.jsx')
 * - Input (from '../../common/Input.jsx')
 * - { fontOptions } (from '../../../data/fontOptions.js')
 * - { FONT_SIZES } (from '../../../utils/constants.js')
 * - { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } (from 'lucide-react')
 *
 * @usedBy
 * - components/editor/properties/PropertiesPanel.jsx
 */
