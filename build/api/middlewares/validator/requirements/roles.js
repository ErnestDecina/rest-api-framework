"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const roles_requirement = {
    createRole: [
        (0, express_validator_1.body)('role_name').isString(),
        (0, express_validator_1.body)('description').isString().optional({ nullable: true })
    ]
};
exports.default = roles_requirement;
