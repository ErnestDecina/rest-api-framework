/**
 * 
 * 
 * 
 * 
 */

import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationChain } from 'express-validator';
import requirements from './requirements';
import Logger from '../../../utils/logger';

export const Requirements = requirements;

export const Validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        const errors = validationResult(req);

        if (errors.isEmpty()) {
            return next();
        } // End if 

        Logger.error('Validation Error: Invalid Form');
        res.status(400).json(
            {
                message: 'Invalid form',
                errors: errors.array()
            }
        )
    };
}; // End Validate
