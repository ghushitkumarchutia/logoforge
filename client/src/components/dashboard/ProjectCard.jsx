/**
 * @file ProjectCard.jsx
 * @description Single project card for dashboard grid
 *
 * @role
 * - Displays project thumbnail and info
 * - Shows project name and last modified date
 * - Provides edit and delete actions
 *
 * @exports
 * - ProjectCard: React Component
 *
 * @props
 * - project: Object { id, projectName, thumbnail, updatedAt }
 * - onDelete: Function - Delete handler
 *
 * @structure
 * - Thumbnail image
 * - Project name
 * - Last modified time
 * - Action buttons (Edit, Delete)
 *
 * @imports
 * - { Link } (from 'react-router-dom')
 * - { useState } (from 'react')
 * - Card (from '../common/Card.jsx')
 * - ConfirmDialog (from '../common/ConfirmDialog.jsx')
 * - { formatRelativeTime } (from '../../utils/formatters.js')
 * - { Edit, Trash2 } (from 'lucide-react')
 *
 * @usedBy
 * - components/dashboard/ProjectGrid.jsx
 */
