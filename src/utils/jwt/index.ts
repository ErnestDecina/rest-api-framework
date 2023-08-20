/**
 * 
 * 
 * 
 * 
 */

import * as jwt from 'jsonwebtoken';
import { application_secret } from '../../config/express.config';
import { jwt_default_experation } from '../../config/jwt.config';
import Logger from '../logger';

class JWT {
    signToken(user_id: number, jwt_experation: string = jwt_default_experation): Promise<string | undefined> {
        return new Promise((resolve, reject) => {
            jwt.sign(
                { 
                    id: user_id, 
                    iat: Date.now() 
                },
                application_secret,
                { expiresIn: jwt_experation },
                (err, token) => {
                    if(err) {
                        Logger.error(`JWT Error: User: ${user_id} token could not be signed`);
                        reject(err);
                    }

                    resolve(token);
                }
            )
        });
    } // End signToken

    verifyToken(token: string): Promise<jwt.JwtPayload | undefined> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, application_secret, (err, decoded) => {
                if(err) {
                    Logger.error(`JWT Error: Token: ${token} could not be verified`);
                    reject(err);
                }

                resolve(<any>decoded);
            });
        });
    } // end verifyToken
} // class JWT

export default new JWT() as JWT;

