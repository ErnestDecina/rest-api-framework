"use strict";
/**
 *
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const main_requirement = {
    login: [
        (0, express_validator_1.body)('email').isEmail(),
        (0, express_validator_1.body)('password').isString().isLength({ min: 5 })
    ],
    signup: [
        (0, express_validator_1.body)('email').isEmail(),
        (0, express_validator_1.body)('password').isString().isLength({ min: 5 }),
        (0, express_validator_1.body)('username').isString().isLength({ min: 2 }),
    ]
};
exports.default = main_requirement;
