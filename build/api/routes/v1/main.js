"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_1 = require("../../middlewares/validator");
const AuthContoller_1 = require("../../controllers/AuthContoller");
const main_router = (0, express_1.Router)();
main_router
    .route('/login')
    .post((0, validator_1.Validate)(validator_1.Requirements.login), AuthContoller_1.default.login);
main_router
    .route('/signup')
    .post((0, validator_1.Validate)(validator_1.Requirements.signup), AuthContoller_1.default.signUp);
exports.default = main_router;
