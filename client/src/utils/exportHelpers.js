/**
 * @file exportHelpers.js
 * @description Export functionality utilities for canvas
 *
 * @role
 * - Handles export to PNG, SVG, and JSON formats
 * - Configures export resolution and options
 * - Triggers file download using FileSaver.js
 *
 * @exports
 * - exportToPNG: (canvas, options) => void
 *   - options: { resolution: 1|2|3, backgroundColor, filename }
 *   - Exports canvas to PNG using toDataURL
 *   - Downloads file using FileSaver.js
 *
 * - exportToSVG: (canvas, filename) => void
 *   - Exports canvas to SVG using toSVG
 *   - Creates Blob and downloads
 *
 * - exportToJSON: (canvas, filename) => void
 *   - Exports canvas state to JSON
 *   - Includes all object properties
 *   - Downloads as .json file
 *
 * - importFromJSON: (canvas, jsonData) => Promise<void>
 *   - Loads canvas from JSON data
 *   - Returns promise when complete
 *
 * - generateFilename: (projectName, format) => string
 *   - Creates filename with project name and timestamp
 *
 * @imports
 * - { saveAs } (from 'file-saver') - File download library
 * - { EXPORT_RESOLUTIONS } (from './constants.js')
 *
 * @usedBy
 * - components/editor/modals/ExportModal.jsx
 * - components/editor/tools/ExportTools.jsx
 */
