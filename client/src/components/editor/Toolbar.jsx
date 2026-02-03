/**
 * @file Toolbar.jsx
 * @description Top toolbar with editor tools
 *
 * @role
 * - Contains all editor tool buttons
 * - Organized into tool groups
 * - Provides access to shapes, text, history, export
 *
 * @exports
 * - Toolbar: React Component
 *
 * @structure
 * - Left: ShapeTools, TextTool
 * - Center: AlignmentTools
 * - Right: HistoryTools, ExportTools, SaveButton
 *
 * @imports
 * - ShapeTools (from './tools/ShapeTools.jsx')
 * - TextTool (from './tools/TextTool.jsx')
 * - AlignmentTools (from './tools/AlignmentTools.jsx')
 * - HistoryTools (from './tools/HistoryTools.jsx')
 * - ExportTools (from './tools/ExportTools.jsx')
 * - ToolbarGroup (from './ToolbarGroup.jsx')
 * - Button (from '../common/Button.jsx')
 * - { Save } (from 'lucide-react')
 *
 * @usedBy
 * - components/editor/EditorLayout.jsx
 */
