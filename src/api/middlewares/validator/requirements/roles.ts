/**
 * 
 * 
 * 
 */

import { body } from 'express-validator';

const roles_requirement = {
    createRole: [
        body('role_name').isString(),
        body('description').isString().optional({ nullable: true })
    ]
};

export default roles_requirement;