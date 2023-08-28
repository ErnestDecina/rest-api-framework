"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../../database/config");
const Role_1 = require("./Role");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    role_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'users',
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    sequelize: config_1.DatabasePostgres
});
User.belongsTo(Role_1.default, {
    as: 'users_pkey',
    foreignKey: 'role_id'
});
exports.default = User;
