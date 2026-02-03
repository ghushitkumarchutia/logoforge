/**
 * @file templateSeeds.js
 * @description Seed data for pre-made design templates
 *
 * @role
 * - Provides initial template data for database seeding
 * - Contains pre-configured canvasData for quick-start templates
 * - Run once during initial setup or when resetting templates
 *
 * @exports
 * - seedTemplates: Async function to insert templates into database
 *   - Clears existing templates
 *   - Inserts new template documents
 *   - Logs success/failure
 *
 * - templateData: Array of template objects
 *   - Each object: { name, category, canvasData, thumbnail, isPublic }
 *
 * @imports
 * - mongoose (from 'mongoose') - Database connection
 * - Template (from '../models/Template.js') - Template model
 * - dotenv (from 'dotenv') - Environment variables
 *
 * @templateCategories
 * - Logo: Business logo templates
 * - Banner: Social media banner templates
 * - Card: Business card templates
 * - Poster: Event poster templates
 *
 * @usage
 * - Run: node seeds/templateSeeds.js
 * - Requires: MONGODB_URI in .env
 *
 * @usedBy
 * - Manual execution for database seeding
 */
