import { Model, DataTypes, Optional } from "sequelize";
import { DatabasePostgres } from "../../database/config";
import Role, { RoleOutput } from "./Role";

interface UserAttributes {
    id: number;
    role_id?: number;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    role?: RoleOutput | null;
} // End interface UserAttributes

export type UserInput = Optional<UserAttributes, 'id' | 'role'>
export type UserInputUpdate = Optional<
    UserAttributes,
    'id' | 'email' | 'password'
>;

export type UserOutput = Optional<UserAttributes, 'role'>;

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number;
    public role_id!: number;
    public username!: string;
    public email!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        tableName: 'users',
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
        sequelize: DatabasePostgres
    }
);

User.belongsTo(Role, {
    as: 'users_pkey',
    foreignKey: 'role_id'
});

export default User;