/**
 * 
 * 
 * 
 * 
 */

import { body } from 'express-validator';

const main_requirement = {
    login: [
        body('email').isEmail(),
        body('password').isString().isLength({ min: 5 })
    ],
    signup: [
        body('email').isEmail(),
        body('password').isString().isLength({ min: 5 }),
        body('username').isString().isLength({ min: 2 }),
    ]
};

export default main_requirement;