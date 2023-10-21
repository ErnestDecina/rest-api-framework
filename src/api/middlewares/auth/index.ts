/**
 * 
 * 
 * 
 */

import { NextFunction, Request, Response } from 'express';
import UserRepository from '../../repositories/UserRepository';
import JWT from '../../../utils/jwt';

class Auth {
    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    async authenticate (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const authorization = String(req.headers.authorization);

        if (!authorization || !authorization.includes('Bearer')) {
            res.sendStatus(401);
            return;
        } // End if

        const token = authorization?.slice(7);
        const payload = await JWT.verifyToken(token);

        if (!payload) {
            res.sendStatus(401);
            return;
        } // End if

        const user_id: number = payload.id;
        const user_data = await UserRepository.getUserDetail(user_id);

        if (!user_data) {
            res.sendStatus(401);
            return;
        } // End if

        req.body = user_data;
    
        next();
    } // End authenticate

    checkRoles(...roles: string[]) {
        return async (req: Request, res: Response, next: NextFunction) => {
            const user_data = req.body;

            const user_role = user_data.role?.slug;

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
        }
    } // End checkRoles
} // End class Auth

export default new Auth();