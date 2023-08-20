/**
 * 
 * 
 * 
 */

// Dependencies
import * as express from 'express';
import { Application } from 'express';
import * as cors from 'cors';
import * as compression from 'compression';
import MorganMiddleware from './api/middlewares/morgan';
import * as swaggerUI from 'swagger-ui-express'
import { is_development } from './config/application.config';
import { api_version } from './config/express.config';
import { swagger_specs } from './utils/swagger';
import Logger from './utils/logger';
import express_router from './api/routes/v1';

export function createExpressServer(): Application {
    const express_app = express();

    const cors_option = {
        origin: '*',
        credentials: true
    };

    express_app.use(express.urlencoded({extended: false}));
    express_app.use(express.json());
    express_app.use(cors(cors_option));
    express_app.use(compression());
    express_app.use(MorganMiddleware);

    // Routes
    express_app.use(`/api/${api_version}`, express_router);

    // Development Enviroment
    if(is_development) {
        Logger.debug('Development Enviroment Active');
        Logger.debug('SwaggerUI listening on http://localhost:8000/docs/v1');

        express_app.use(
            `/docs/${api_version}`,
            swaggerUI.serve,
            swaggerUI.setup(swagger_specs)
        );
    }

    return express_app;
}