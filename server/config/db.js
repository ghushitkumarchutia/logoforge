/**
 * @file db.js
 * @description MongoDB database connection configuration
 *
 * @role
 * - Establishes connection to MongoDB using Mongoose
 * - Handles connection errors and success logging
 * - Exports connection function for use in server.js
 *
 * @exports
 * - connectDB: Async function that connects to MongoDB
 *
 * @imports
 * - mongoose (from 'mongoose') - MongoDB ODM
 * - dotenv (from 'dotenv') - Environment variable loader (already loaded in server.js)
 *
 * @envVariables
 * - MONGODB_URI: MongoDB connection string
 *
 * @usedBy
 * - server.js (called during server startup)
 */
