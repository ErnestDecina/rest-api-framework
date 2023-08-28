"use strict";
/**
 *
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const UserRepository_1 = require("../repositories/UserRepository");
const jwt_1 = require("../../utils/jwt");
const logger_1 = require("../../utils/logger");
const sequelize_1 = require("sequelize");
const config_1 = require("../../database/config");
; // End interface IAuthService
class AuthService {
    async login(payload) {
        const user = await UserRepository_1.default.getUserByEmail(payload.email);
        if (!user) {
            logger_1.default.error(`AuthService Error: User not found - ${payload.email}`);
            throw new Error('User not found');
        } // End if 
        if (!bcrypt.compareSync(payload.password, user.password)) {
            logger_1.default.error(`AuthService Error: Email and Password does not match - ${payload.email}`);
            throw new Error('Email and Password does not match');
        } // End if 
        const token = await jwt_1.default.signToken(user.id);
        if (!token) {
            logger_1.default.error(`AuthService Error: JWT Unable to sign token`);
            throw new Error('Invalid token');
        } // End if
        return token;
    } // End login()
    async signUp(payload) {
        const user = await UserRepository_1.default.getUserByEmail(payload.email);
        if (user) {
            logger_1.default.error(`AuthService Error: Sign Up email is already in use - ${payload.email}`);
            throw new Error('Email must be unique');
        } // End if 
        const hashed_password = bcrypt.hashSync(payload.password, 5);
        const id_number = await config_1.DatabasePostgres.query("SELECT max(id) FROM users", { type: sequelize_1.QueryTypes.SELECT });
        return UserRepository_1.default.createUser({
            id: id_number[0].max + 1,
            email: payload.email,
            username: payload.username,
            password: hashed_password
        });
    } // End signUp()
} // End class AuthService
exports.default = new AuthService();
