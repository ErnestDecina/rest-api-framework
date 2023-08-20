/**
 * 
 * 
 * 
 */

// Dependencies
import * as dotenv from 'dotenv';
dotenv.config();

export const application_name: string = String(process.env.APPLICATION_NAME);
export const server: string = String(process.env.SERVER);

export const is_development: boolean = ['development', 'dev', 'local']
                                        .includes(<string>process.env.SERVER);
                                        
export const node_env: string = String(process.env.NODE_ENV);