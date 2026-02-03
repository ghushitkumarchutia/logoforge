/**
 * @file TemplateModal.jsx
 * @description Template picker modal dialog
 *
 * @role
 * - Modal to browse and select templates
 * - Category filter tabs
 * - Click template to load into canvas
 * - Warns if canvas has unsaved changes
 *
 * @exports
 * - TemplateModal: React Component
 *
 * @props
 * - isOpen: Boolean
 * - onClose: Function
 * - onSelectTemplate: Function - Called with template data
 *
 * @imports
 * - { useState, useEffect } (from 'react')
 * - Modal (from '../../common/Modal.jsx')
 * - Loader (from '../../common/Loader.jsx')
 * - TemplateGrid (from '../../templates/TemplateGrid.jsx')
 * - TemplateCategory (from '../../templates/TemplateCategory.jsx')
 * - { getAllTemplates, getTemplateById } (from '../../../services/templateService.js')
 *
 * @usedBy
 * - pages/EditorPage.jsx
 */
