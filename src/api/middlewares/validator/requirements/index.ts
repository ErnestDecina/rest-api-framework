/**
 * 
 * 
 * 
 */

import main_requirement from "./main";
import users_requirement from "./users";
import roles_requirement from "./roles";

export default {
    ...main_requirement,
    ...users_requirement,
    ...roles_requirement
};