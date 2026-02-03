/**
 * @file LayerItem.jsx
 * @description Single layer row component
 *
 * @role
 * - Displays layer preview/icon and name
 * - Visibility toggle button
 * - Lock toggle button
 * - Click to select object on canvas
 *
 * @exports
 * - LayerItem: React Component
 *
 * @props
 * - layer: Object { id, name, type, visible, locked }
 * - isSelected: Boolean
 * - onSelect: Function
 * - onToggleVisibility: Function
 * - onToggleLock: Function
 *
 * @imports
 * - { Eye, EyeOff, Lock, Unlock, Square, Circle, Type, Image } (from 'lucide-react')
 * - clsx (from 'clsx')
 *
 * @usedBy
 * - components/editor/layers/LayerList.jsx
 */
