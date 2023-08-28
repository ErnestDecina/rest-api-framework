"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabasePostgres = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = require("../config/database.config");
const logger_1 = require("../utils/logger");
function customLog(message) {
    logger_1.default.debug(message);
} // End customLog()
exports.DatabasePostgres = new sequelize_1.Sequelize({
    host: database_config_1.default.host,
    database: database_config_1.default.database,
    username: database_config_1.default.username,
    password: database_config_1.default.password,
    port: database_config_1.default.port,
    timezone: database_config_1.default.timezone,
    dialect: database_config_1.default.dialect,
    logging: database_config_1.default.isLogging ? customLog : false
});
