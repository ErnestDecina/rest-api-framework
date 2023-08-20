/**
 * 
 * 
 * 
 */

import { createExpressServer } from "./server";
import { application_name, is_development } from "./config/application.config";
import { express_port, api_version } from "./config/express.config";
import { Server } from "net";
import Logger from "./utils/logger";

function startExpressServer(): Server {
    const express_server = createExpressServer();

    return express_server.listen(express_port, () => {
        
        // Testing Logger
        Logger.error('Error');
        Logger.warn('Warn');
        Logger.info('Info');
        Logger.http('Http');
        Logger.debug('Debug');

        Logger.info(`Application "${application_name}" with API version ${api_version}`);
        Logger.info(`App is listening on  http://localhost:${express_port}/`);
    });
}

startExpressServer();