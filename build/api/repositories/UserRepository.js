"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const Role_1 = require("../models/Role");
; // End interface IUserRepository
class UserRepository {
    createUser(payload) {
        return User_1.default.create(payload);
    } // End createUser()
    getUsers() {
        return User_1.default.findAll({
            attributes: ['id', 'role_id', 'username', 'email']
        });
    } // End getUsers()
    getUserDetail(user_id) {
        return User_1.default.findByPk(user_id, {
            attributes: ['id', 'username', 'email'],
            include: [
                {
                    model: Role_1.default,
                    as: 'user_role',
                    required: false
                }
            ]
        });
    } // End getUserDetail()
    getUserByEmail(user_email) {
        return User_1.default.findOne({
            where: {
                email: user_email
            }
        });
    } // End getUserByEmail()
    async updateUser(user_id, payload) {
        const [update_user_count] = await User_1.default.update(payload, {
            where: {
                id: user_id
            }
        });
        return !!update_user_count;
    } // End updateUser()
    async deleteUser(user_id) {
        const deleted_user_count = await User_1.default.destroy({
            where: {
                id: user_id
            }
        });
        return !!deleted_user_count;
    } // End deleteUser()
} // End class UserRepository
exports.default = new UserRepository();
