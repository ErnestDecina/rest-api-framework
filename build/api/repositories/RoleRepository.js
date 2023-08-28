"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Role_1 = require("../models/Role");
; // End interface IRoleRepository
class RoleRepository {
    createRole(payload) {
        return Role_1.default.create(payload);
    } // End createRole()
    getRoles() {
        return Role_1.default.findAll();
    } // End getRoles
} // End RoleRepository
exports.default = new RoleRepository();
