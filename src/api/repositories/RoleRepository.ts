/**
 * 
 * 
 * 
 */

import Role, { RoleInput, RoleOutput } from "../models/Role";

interface IRoleRepository {
    createRole(payload: RoleInput): Promise<RoleOutput>;
    getRoles(): Promise<RoleOutput[]>;
}; // End interface IRoleRepository

class RoleRepository implements IRoleRepository {
    createRole(payload: RoleInput): Promise<RoleOutput> {
        return Role.create(payload);
    } // End createRole()

    getRoles(): Promise<RoleOutput[]> {
        return Role.findAll();
    } // End getRoles
} // End RoleRepository

export default new RoleRepository();