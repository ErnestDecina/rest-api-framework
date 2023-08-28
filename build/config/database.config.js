"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const database_config = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    dialect: process.env.DB_DIALECT || 'postgres',
    timezone: process.env.DB_TIMEZONE || 'Asia/Jakarta',
    isLogging: process.env.DB_LOG === 'true'
};
exports.default = database_config;
