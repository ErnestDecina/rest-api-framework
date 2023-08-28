"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ExampleController_1 = require("../../controllers/ExampleController");
const example_router = (0, express_1.Router)();
example_router
    .route('/')
    .get(ExampleController_1.default.getExample);
exports.default = example_router;
