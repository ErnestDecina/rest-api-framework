/**
 * 
 * 
 * 
 */

// Dependencies
import * as dotenv from 'dotenv';
dotenv.config();

export const express_port: number = Number(process.env.EXPRESS_PORT);
export const api_version: string = String(process.env.API_VERSION) || 'v1';
export const application_secret: string = String(process.env.APPLICATION_SECRET);
