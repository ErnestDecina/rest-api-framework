/**
 * 
 * 
 * 
 * 
 */

import { Model, DataTypes, Optional } from 'sequelize';
import { DatabasePostgres } from '../../database/config';

interface RoleAttributes {
    id: number;
    name: string;
    description?: string;
    created_date?: Date;
    updated_date?: Date;
    deleted_date?: Date;
}

export type RoleInput = Optional<RoleAttributes, 'id'>;
export type RoleOutput = Required<RoleAttributes>;

class Role extends Model<RoleAttributes, RoleInput> implements RoleAttributes {
    public id!: number;
    public name!: string;
    public description!: string;

    public readonly created_date!: Date;
    public readonly updated_date!: Date;
    public readonly deleted_date!: Date;
}

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true,
            unique: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'roles',
        freezeTableName: true,
        timestamps: false,
        paranoid: true,
        sequelize: DatabasePostgres
    }
);



export default Role;