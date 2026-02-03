/**
 * @file Project.js
 * @description Mongoose schema and model for Project collection
 *
 * @role
 * - Stores user's design projects with canvas data
 * - Links projects to users via userId reference
 * - Stores canvas state as JSON for save/load functionality
 * - Generates thumbnails for dashboard display
 *
 * @schema
 * - userId: ObjectId (required, ref: 'User') - Owner of the project
 * - projectName: String (required, 1-50 chars, default: 'Untitled Project')
 * - canvasData: Object (required) - Fabric.js canvas JSON state
 *   - version: String - Fabric.js version
 *   - objects: Array - Canvas objects (shapes, text, icons)
 *   - background: String - Canvas background color
 * - thumbnail: String - Base64 encoded preview image or URL
 * - tags: [String] - Optional tags for categorization
 * - createdAt: Date (auto-generated)
 * - updatedAt: Date (auto-updated on save)
 *
 * @exports
 * - Project: Mongoose Model
 *
 * @imports
 * - mongoose (from 'mongoose') - MongoDB ODM
 *
 * @indexes
 * - userId: index for fetching user's projects
 * - { userId, updatedAt }: compound index for sorting by recent
 *
 * @usedBy
 * - controllers/projectController.js
 */
