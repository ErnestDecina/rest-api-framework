"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_secret = exports.api_version = exports.express_port = void 0;
// Dependencies
const dotenv = require("dotenv");
dotenv.config();
exports.express_port = Number(process.env.EXPRESS_PORT);
exports.api_version = String(process.env.API_VERSION) || 'v1';
exports.application_secret = String(process.env.APPLICATION_SECRET);
