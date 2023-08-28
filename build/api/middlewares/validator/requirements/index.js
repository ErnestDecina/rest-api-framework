"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const users_1 = require("./users");
const roles_1 = require("./roles");
exports.default = Object.assign(Object.assign(Object.assign({}, main_1.default), users_1.default), roles_1.default);
