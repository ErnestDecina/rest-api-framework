"use strict";
/**
 *
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../../database/config");
class Role extends sequelize_1.Model {
}
Role.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
        unique: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'roles',
    freezeTableName: true,
    timestamps: false,
    paranoid: true,
    sequelize: config_1.DatabasePostgres
});
exports.default = Role;
