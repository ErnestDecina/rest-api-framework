"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpressServer = void 0;
// Dependencies
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const morgan_1 = require("./api/middlewares/morgan");
const swaggerUI = require("swagger-ui-express");
const application_config_1 = require("./config/application.config");
const express_config_1 = require("./config/express.config");
const swagger_1 = require("./utils/swagger");
const logger_1 = require("./utils/logger");
function createExpressServer() {
    const express_app = express();
    const cors_option = {
        origin: '*',
        credentials: true
    };
    express_app.use(express.urlencoded({ extended: false }));
    express_app.use(express.json());
    express_app.use(cors(cors_option));
    express_app.use(compression());
    express_app.use(morgan_1.default);
    // Routes
    // Development
    if (application_config_1.is_development) {
        logger_1.default.debug('Development Enviroment');
        express_app.use(`/docs/${express_config_1.api_version}`, swaggerUI.serve, swaggerUI.setup(swagger_1.swagger_specs));
    }
    return express_app;
}
exports.createExpressServer = createExpressServer;
