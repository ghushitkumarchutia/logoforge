/**
 * @file LayerList.jsx
 * @description Draggable list of layer items
 *
 * @role
 * - Renders list of LayerItem components
 * - Handles drag and drop reordering
 * - Updates layer order in canvas
 *
 * @exports
 * - LayerList: React Component
 *
 * @props
 * - layers: Array of layer objects
 * - selectedId: String - Currently selected layer ID
 * - onReorder: Function - Called with new order after drag
 *
 * @imports
 * - { useState } (from 'react')
 * - LayerItem (from './LayerItem.jsx')
 *
 * @usedBy
 * - components/editor/layers/LayerPanel.jsx
 */
