/**
 * 
 * 
 * 
 */

import { Router } from "express";

import ExampleController from "../../controllers/ExampleController";

const example_router: Router = Router();

example_router
    .route('/')
    .get(
        ExampleController.getExample
    );

export default example_router;