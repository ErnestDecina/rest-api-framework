/**
 * 
 * 
 * 
 * 
 */

import { NextFunction, Request, Response } from "express";

class ExampleController {
    async getExample(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {


            res.status(200).send({
                    example: 'hello world'
            });
        } catch (error) {

        } // End try catch
    } // End getExample
} // End class ExampleController

export default new ExampleController();