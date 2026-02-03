/**
 * @file LayerPanel.jsx
 * @description Layer panel sidebar component
 *
 * @role
 * - Shows list of all canvas objects as layers
 * - Allows reordering via drag and drop
 * - Toggle visibility and lock status
 *
 * @exports
 * - LayerPanel: React Component
 *
 * @imports
 * - { useContext } (from 'react')
 * - { CanvasContext } (from '../../../contexts/CanvasContext.jsx')
 * - Sidebar (from '../../layout/Sidebar.jsx')
 * - LayerList (from './LayerList.jsx')
 * - { Layers } (from 'lucide-react')
 * - '../../../styles/layers.css' - Vanilla CSS for drag-drop
 *
 * @usedBy
 * - components/editor/EditorLayout.jsx
 */
