/**
 * @file ExportModal.jsx
 * @description Export options modal dialog
 *
 * @role
 * - Modal to configure and trigger export
 * - Format selection (PNG, SVG, JSON)
 * - Resolution selection for PNG
 * - Filename input
 * - Export button triggers download
 *
 * @exports
 * - ExportModal: React Component
 *
 * @props
 * - isOpen: Boolean
 * - onClose: Function
 * - defaultFormat: String ('png' | 'svg' | 'json')
 *
 * @imports
 * - { useState, useContext } (from 'react')
 * - { CanvasContext } (from '../../../contexts/CanvasContext.jsx')
 * - Modal (from '../../common/Modal.jsx')
 * - Button (from '../../common/Button.jsx')
 * - Input (from '../../common/Input.jsx')
 * - { exportToPNG, exportToSVG, exportToJSON } (from '../../../utils/exportHelpers.js')
 * - { EXPORT_RESOLUTIONS, EXPORT_FORMATS } (from '../../../utils/constants.js')
 * - toast (from 'react-hot-toast')
 *
 * @usedBy
 * - components/editor/tools/ExportTools.jsx
 */
