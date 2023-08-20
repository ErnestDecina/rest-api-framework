/**
 * 
 * 
 * 
 */

import * as dotenv from 'dotenv';
dotenv.config();

export const jwt_default_experation: string = String(process.env.JWT_DEFAULT_EXPERATION);
