"use strict";
/**
 *
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const express_config_1 = require("../../config/express.config");
const jwt_config_1 = require("../../config/jwt.config");
const logger_1 = require("../logger");
class JWT {
    signToken(user_id, jwt_experation = jwt_config_1.jwt_default_experation) {
        return new Promise((resolve, reject) => {
            jwt.sign({
                id: user_id,
                iat: Date.now()
            }, express_config_1.application_secret, { expiresIn: jwt_experation }, (err, token) => {
                if (err) {
                    logger_1.default.error(`JWT Error: User: ${user_id} token could not be signed`);
                    reject(err);
                }
                resolve(token);
            });
        });
    } // End signToken
    verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, express_config_1.application_secret, (err, decoded) => {
                if (err) {
                    logger_1.default.error(`JWT Error: Token: ${token} could not be verified`);
                    reject(err);
                }
                resolve(decoded);
            });
        });
    } // end verifyToken
} // class JWT
exports.default = new JWT();
