/**
 * 
 * 
 * 
 */

import * as dotenv from 'dotenv';
dotenv.config();

export const docker_api_host: string = String(process.env.DOCKER_API_HOST);
export const docker_api_port: number = Number(process.env.DOCKER_API_PORT);
export const docker_api_protocol: string = String(process.env.DOCKER_API_PROTOCOL);
export const docker_api_socket_path: string = String(process.env.DOCKER_API_SOCKET_PATH);
