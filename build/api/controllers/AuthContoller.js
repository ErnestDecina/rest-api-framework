"use strict";
/**
 *
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AuthService_1 = require("../services/AuthService");
const logger_1 = require("../../utils/logger");
class AuthContoller {
    async login(req, res, next) {
        logger_1.default.debug(`Route /api/v1/login reached`);
        try {
            const payload = req.body;
            const token = await AuthService_1.default.login(payload);
            res.status(200).send({
                message: 'Logged in successfully',
                data: token
            });
        }
        catch (error) {
            res.status(401).send({
                message: 'User does not exist',
            });
            next(error);
        } // End try catch
    } // End login
    async signUp(req, res, next) {
        try {
            const payload = req.body;
            await AuthService_1.default.signUp(payload);
            res.status(200).send({
                message: 'Signed up successfully'
            });
        }
        catch (error) {
            console.log(error);
            res.status(401).send({ message: 'Email is in use' });
            next(error);
        } // End try catch
    } // End signUp()
} // End class AuthController
exports.default = new AuthContoller();
