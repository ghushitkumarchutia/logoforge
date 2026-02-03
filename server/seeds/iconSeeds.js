/**
 * @file iconSeeds.js
 * @description Seed data for SVG icon library
 *
 * @role
 * - Provides initial icon data for database seeding
 * - Contains SVG path data for commonly used icons
 * - Run once during initial setup or when resetting icons
 *
 * @exports
 * - seedIcons: Async function to insert icons into database
 *   - Clears existing icons
 *   - Inserts new icon documents
 *   - Logs success/failure
 *
 * - iconData: Array of icon objects
 *   - Each object: { name, category, svgPath, viewBox, keywords }
 *
 * @imports
 * - mongoose (from 'mongoose') - Database connection
 * - Icon (from '../models/Icon.js') - Icon model
 * - dotenv (from 'dotenv') - Environment variables
 *
 * @iconCategories
 * - Business: briefcase, chart, handshake, building, money
 * - Social: facebook, twitter, instagram, linkedin, youtube
 * - General: star, heart, arrow, checkmark, search, home
 * - Technology: laptop, phone, cloud, wifi, code, database
 *
 * @usage
 * - Run: node seeds/iconSeeds.js
 * - Requires: MONGODB_URI in .env
 *
 * @usedBy
 * - Manual execution for database seeding
 */
