/**
 * 
 * 
 * 
 * 
 */

import * as bcrypt from 'bcrypt';
import UserRepository from '../repositories/UserRepository';
import { LoginType, SignUpType } from '../type/auth';
import User, { UserInput, UserOutput } from '../models/User';
import jwt from '../../utils/jwt';
import Logger from '../../utils/logger';
import { QueryTypes } from 'sequelize';
import { DatabasePostgres } from '../../database/config';




interface IAuthService {
    login(payload: LoginType): Promise<string>;
    signUp(payload: SignUpType): Promise<UserOutput>;
}; // End interface IAuthService

type SelectMaxType = {
    max: number
}

class AuthService implements IAuthService {
    async login(payload: LoginType): Promise<string> {
        const user = await UserRepository.getUserByEmail(payload.email);

        if (!user) {
            Logger.error(`AuthService Error: User not found - ${payload.email}`);
            throw new Error('User not found');
        } // End if 

        if (!bcrypt.compareSync(payload.password, user.password)) {
            Logger.error(`AuthService Error: Email and Password does not match - ${payload.email}`);
            throw new Error('Email and Password does not match');
        } // End if 
 
        const token = await jwt.signToken(user.id);

        if (!token) {
            Logger.error(`AuthService Error: JWT Unable to sign token`);
            throw new Error('Invalid token');
        } // End if

        return token;
    } // End login()

    async signUp(payload: SignUpType): Promise<UserOutput> {    
        const user = await UserRepository.getUserByEmail(payload.email);
    
        if (user) {
            Logger.error(`AuthService Error: Sign Up email is already in use - ${payload.email}`);
            throw new Error('Email must be unique');
        } // End if 

        const hashed_password = bcrypt.hashSync(payload.password, 5);

        return UserRepository.createUser({
            email: payload.email,
            username: payload.username,
            password: hashed_password
        });
    } // End signUp()
} // End class AuthService

export default new AuthService();

