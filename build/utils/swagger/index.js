"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.swagger_specs = void 0;
// Dependencies
const swaggerJSdoc = require("swagger-jsdoc");
const express_config_1 = require("../../config/express.config");
const application_config_1 = require("../../config/application.config");
const swagger_options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: application_config_1.application_name,
            version: '1.0.0',
            description: 'API Documentation with swagger',
            termsOfService: 'http://example.com/terms/',
            contact: {
                name: 'API Support',
                url: 'http://www.example.com/support',
                email: 'support@example.com'
            },
            license: {
                name: 'GNU GENERAL PUBLIC LICENSE',
                url: ''
            }
        },
        servers: [
            {
                url: `/api/${express_config_1.api_version}`,
                description: `Server ${application_config_1.server}`
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            },
            responses: {
                '200': {
                    description: 'OK',
                    content: {
                        'application/json': {}
                    }
                },
                '400': {
                    description: 'Bad Request'
                },
                '401': {
                    description: 'Unauthorized'
                },
                '403': {
                    descriptipn: 'Forbidden'
                },
                '422': {
                    description: 'Unprocessable entity'
                }
            }
        }
    },
    apis: [`./docs/${express_config_1.api_version}/*.yaml`]
};
exports.swagger_specs = swaggerJSdoc(swagger_options);
