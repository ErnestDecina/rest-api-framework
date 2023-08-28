"use strict";
/**
 *
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ExampleController {
    async getExample(req, res, next) {
        try {
            res.status(200).send({
                example: 'hello world'
            });
        }
        catch (error) {
        } // End try catch
    } // End getExample
} // End class ExampleController
exports.default = new ExampleController();
