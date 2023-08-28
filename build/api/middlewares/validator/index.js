"use strict";
/**
 *
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = exports.Requirements = void 0;
const express_validator_1 = require("express-validator");
const requirements_1 = require("./requirements");
const logger_1 = require("../../../utils/logger");
exports.Requirements = requirements_1.default;
const Validate = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)));
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty()) {
            return next();
        } // End if 
        logger_1.default.error('Validation Error: Invalid Form');
        res.status(400).json({
            message: 'Invalid form',
            errors: errors.array()
        });
    };
}; // End Validate
exports.Validate = Validate;
