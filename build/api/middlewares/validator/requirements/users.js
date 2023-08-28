"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const users_requirement = {
    createUsers: [
        (0, express_validator_1.body)('email').isEmail(),
        (0, express_validator_1.body)('password').isString().isLength({ min: 5 }),
        (0, express_validator_1.body)('username').isString().isLength({ min: 2 }),
        (0, express_validator_1.body)('role_id').isInt().optional({ nullable: true })
    ],
    getUserDetail: [(0, express_validator_1.param)('id').isInt()],
    updateUser: [
        (0, express_validator_1.param)('id').isInt(),
        (0, express_validator_1.body)('username').isString().isLength({ min: 2 }),
        (0, express_validator_1.body)('role_id').isInt().optional({ nullable: true })
    ],
    deleteUser: [(0, express_validator_1.param)('id').isInt()]
};
exports.default = users_requirement;
