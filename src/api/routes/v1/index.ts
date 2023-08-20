/**
 * 
 * 
 * 
 */

import { Router } from "express";

import main_router from "./main";
import example_router from "./example";

const express_router: Router = Router();

express_router.use('/', main_router);
express_router.use('/example', example_router);

export default express_router;