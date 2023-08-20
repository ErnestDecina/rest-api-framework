"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const application_config_1 = require("./config/application.config");
const express_config_1 = require("./config/express.config");
const logger_1 = require("./utils/logger");
function startExpressServer() {
    const express_server = (0, server_1.createExpressServer)();
    return express_server.listen(express_config_1.express_port, () => {
        logger_1.default.debug(`Application "${application_config_1.application_name}" with API version ${express_config_1.api_version}`);
        logger_1.default.debug(`App is listening on  http://localhost:${express_config_1.express_port}/`);
    });
}
startExpressServer();
