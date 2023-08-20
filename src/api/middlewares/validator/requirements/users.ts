/**
 * 
 * 
 * 
 */


import { body, param } from 'express-validator';

const users_requirement = {
    createUsers: [
        body('email').isEmail(),
        body('password').isString().isLength({ min: 5 }),
        body('username').isString().isLength({ min: 2 }),
        body('role_id').isInt().optional({ nullable: true })
    ],
    getUserDetail: [param('id').isInt()],
    updateUser: [
        param('id').isInt(),
        body('username').isString().isLength({ min: 2 }),
        body('role_id').isInt().optional({ nullable: true })
    ],
    deleteUser: [param('id').isInt()]
};

export default users_requirement;