/**
 * @file PropertiesPanel.jsx
 * @description Properties panel sidebar for selected object
 *
 * @role
 * - Shows properties of selected canvas object
 * - Displays appropriate panel based on object type
 * - Shows "Select an object" when nothing selected
 *
 * @exports
 * - PropertiesPanel: React Component
 *
 * @structure
 * - If text selected: TextProperties
 * - If shape selected: ShapeProperties
 * - Common: ColorPicker, OpacitySlider, DimensionInputs
 *
 * @imports
 * - { useContext } (from 'react')
 * - { CanvasContext } (from '../../../contexts/CanvasContext.jsx')
 * - Sidebar (from '../../layout/Sidebar.jsx')
 * - ShapeProperties (from './ShapeProperties.jsx')
 * - TextProperties (from './TextProperties.jsx')
 * - ColorPicker (from './ColorPicker.jsx')
 * - OpacitySlider (from './OpacitySlider.jsx')
 * - DimensionInputs (from './DimensionInputs.jsx')
 * - '../../../styles/properties.css' - Vanilla CSS for sliders
 *
 * @usedBy
 * - components/editor/EditorLayout.jsx
 */
