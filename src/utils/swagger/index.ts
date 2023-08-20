/**
 * 
 * 
 * 
 */

// Dependencies
import * as swaggerJSdoc from 'swagger-jsdoc';
import { api_version } from '../../config/express.config';
import { server, application_name } from '../../config/application.config';

const swagger_options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: application_name,
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
                url: `/api/${api_version}`,
                description: `Server ${server}`
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
    apis: [`./docs/${api_version}/*.yaml`]
}

export const swagger_specs = swaggerJSdoc(swagger_options);