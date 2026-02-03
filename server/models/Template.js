/**
 * @file Template.js
 * @description Mongoose schema and model for Template collection
 *
 * @role
 * - Stores pre-made design templates for quick-start
 * - Templates are loaded by users to begin new projects
 * - Organized by categories (Logo, Banner, Card, Poster)
 *
 * @schema
 * - name: String (required, unique) - Template display name
 * - category: String (required, enum: ['Logo', 'Banner', 'Card', 'Poster'])
 * - canvasData: Object (required) - Pre-configured Fabric.js canvas state
 *   - version: String
 *   - objects: Array
 *   - background: String
 * - thumbnail: String (required) - Preview image URL or Base64
 * - isPublic: Boolean (default: true) - Visibility to all users
 * - createdBy: ObjectId (ref: 'User') - Admin who created template
 * - createdAt: Date (auto-generated)
 *
 * @exports
 * - Template: Mongoose Model
 *
 * @imports
 * - mongoose (from 'mongoose') - MongoDB ODM
 *
 * @indexes
 * - category: index for filtering by category
 * - isPublic: index for fetching public templates
 *
 * @usedBy
 * - controllers/templateController.js
 * - seeds/templateSeeds.js
 */
