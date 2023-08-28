"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const logger_1 = require("../utils/logger");
const Role_1 = require("../api/models/Role");
const User_1 = require("../api/models/User");
const syncTables = () => Promise.all([User_1.default.sync(), Role_1.default.sync()]);
syncTables().then((result) => logger_1.default.info(`Database Info: Tables Synced - ${result}`))
    .catch((error) => logger_1.default.error(`Database Error: ${error}`))
    .finally(() => process.exit());
