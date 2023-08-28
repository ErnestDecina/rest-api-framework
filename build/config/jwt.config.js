"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwt_default_experation = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.jwt_default_experation = String(process.env.JWT_DEFAULT_EXPERATION);
