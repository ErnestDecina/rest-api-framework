/**
 * 
 * 
 * 
 */

import { Router } from "express";
import { Validate, Requirements } from "../../middlewares/validator";
import AuthContoller from "../../controllers/AuthContoller";

const main_router: Router = Router();

main_router
    .route('/login')
    .post(Validate(Requirements.login), AuthContoller.login);

main_router
    .route('/signup')
    .post(Validate(Requirements.signup), AuthContoller.signUp);

export default main_router;