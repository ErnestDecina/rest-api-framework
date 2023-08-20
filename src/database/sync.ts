/**
 * 
 * 
 * 
 */

import * as dotenv from 'dotenv';
dotenv.config();
import Logger from '../utils/logger';

import Role from '../api/models/Role';
import User from '../api/models/User';

const syncTables = () => Promise.all([User.sync(), Role.sync()]);

syncTables().then((result) => Logger.info(`Database Info: Tables Synced - ${result}`))
            .catch((error) => Logger.error(`Database Error: ${error}`))
            .finally(() => process.exit());