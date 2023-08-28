"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_1 = require("./main");
const example_1 = require("./example");
const express_router = (0, express_1.Router)();
express_router.use('/', main_1.default);
express_router.use('/example', example_1.default);
exports.default = express_router;
