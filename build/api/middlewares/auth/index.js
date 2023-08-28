"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("src/utils/jwt");
class Auth {
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    async authenticate(req, res, next) {
        const authorization = String(req.headers.authorization);
        if (!authorization || !authorization.includes('Bearer')) {
            res.sendStatus(401);
            return;
        } // End if
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.slice(7);
        const payload = await jwt_1.default.verifyToken(token);
        if (!payload) {
            res.sendStatus(401);
            return;
        } // End if
        const user_id = payload.id;
        const user_data = 0; // TODO: Create User Repo
        if (!user_data) {
            res.sendStatus(401);
            return;
        } // End if
        req.body = user_data;
        next();
    } // End authenticate
    checkRoles(...roles) {
        return async (req, res, next) => {
            var _a;
            const user_data = req.body;
            const user_role = (_a = user_data.role) === null || _a === void 0 ? void 0 : _a.slug;
            if (user_role) {
                res.send(403);
                return;
            } // End if 
            const is_role_valid = roles.includes(user_role);
            if (!is_role_valid) {
                res.sendStatus(403);
                return;
            } // End if
            next();
        };
    } // End checkRoles
} // End class Auth
exports.default = new Auth();
