/**
 * 
 * 
 * 
 * 
 */

import { NextFunction, Request, Response } from "express";
import AuthService from "../services/AuthService";
import { LoginType, SignUpType } from "../type/auth";
import Logger from "../../utils/logger";

class AuthContoller {
    async login(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        Logger.debug(`Route /api/v1/login reached`);

        try {
            const payload: LoginType = req.body;
            const token = await AuthService.login(payload);
    
            res.status(200).send({
                message: 'Logged in successfully',
                data: token
            });
        } catch (error) {
            res.status(401).send({
                message: 'User does not exist',
            });

            next(error);
        } // End try catch

    } // End login

    async signUp(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const payload: SignUpType = req.body;
            await AuthService.signUp(payload);

            res.status(200).send({
                message: 'Signed up successfully'
            });
        } catch (error) {
            console.log(error)
            res.status(401).send({message: 'Email is in use'});
            next(error);
        } // End try catch
    } // End signUp()
} // End class AuthController

export default new AuthContoller();