/**
 * 
 * 
 * 
 */

import User, { UserInput, UserInputUpdate, UserOutput } from "../models/User";
import Role from "../models/Role";

interface IUserRepository {
    createUser(payload: UserInput): Promise<UserOutput>;
    getUsers(): Promise<UserOutput[]>;
    getUserDetail(user_id: number): Promise<UserOutput | null>;
    getUserByEmail(user_email: string): Promise<UserOutput | null>;
    updateUser(user_id: number, payload: UserInputUpdate): Promise<boolean>;
    deleteUser(user_id: number): Promise<boolean>;
}; // End interface IUserRepository

class UserRepository implements IUserRepository {
    createUser(payload: UserInput): Promise<UserOutput> {
        return User.create(payload);
    } // End createUser()

    getUsers(): Promise<UserOutput[]> {
        return User.findAll({
            attributes: ['id', 'role_id', 'username', 'email']
        });
    } // End getUsers()

    getUserDetail(user_id: number): Promise<UserOutput | null> {
        return User.findByPk(user_id, {
            attributes: ['id', 'username', 'email'],
            include: [
                {
                    model:Role,
                    as: 'roles',
                    required: false
                }
            ]
        });
    } // End getUserDetail()

    getUserByEmail(user_email: string): Promise<UserOutput | null> {
        return User.findOne({
            where: {
                email: user_email
            }
        });
    } // End getUserByEmail()

    async updateUser(
        user_id: number, payload: 
        UserInputUpdate
    ): Promise<boolean> {
        const [update_user_count]= await User.update(payload, {
            where: {
                id: user_id
            }
        });

        return !!update_user_count;
    } // End updateUser()

    async deleteUser(user_id: number): Promise<boolean> {
        const deleted_user_count = await User.destroy({
            where: {
                id: user_id
            }
        });

        return !!deleted_user_count;
    } // End deleteUser()


} // End class UserRepository

export default new UserRepository();