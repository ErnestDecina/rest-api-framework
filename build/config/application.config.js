"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.node_env = exports.is_development = exports.server = exports.application_name = void 0;
// Dependencies
const dotenv = require("dotenv");
dotenv.config();
exports.application_name = String(process.env.APPLICATION_NAME);
exports.server = String(process.env.SERVER);
exports.is_development = ['development', 'dev', 'local']
    .includes(process.env.SERVER);
exports.node_env = String(process.env.NODE_ENV);
