/**
 * @file Icon.js
 * @description Mongoose schema and model for Icon collection
 *
 * @role
 * - Stores SVG icons for the icon library feature
 * - Icons can be added to canvas as Fabric.js path objects
 * - Organized by categories with searchable keywords
 *
 * @schema
 * - name: String (required, unique) - Icon display name (e.g., 'briefcase')
 * - category: String (required, enum: ['Business', 'Social', 'General', 'Technology'])
 * - svgPath: String (required) - SVG path data (d attribute)
 * - viewBox: String (required) - SVG viewBox attribute (e.g., '0 0 24 24')
 * - keywords: [String] - Search keywords for filtering
 * - createdAt: Date (auto-generated)
 *
 * @exports
 * - Icon: Mongoose Model
 *
 * @imports
 * - mongoose (from 'mongoose') - MongoDB ODM
 *
 * @indexes
 * - category: index for filtering by category
 * - keywords: text index for search functionality
 * - name: unique index
 *
 * @usedBy
 * - controllers/iconController.js
 * - seeds/iconSeeds.js
 */
