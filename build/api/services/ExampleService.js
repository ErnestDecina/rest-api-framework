"use strict";
/**
 *
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
; // End interface IExampleService
class ExampleService {
    async exampleFunction1(payload) {
        throw new Error("Error Message");
    } // End exampleFunction1()
    async exampleFunction2() {
        const example = {
            example_output_field_1: 0,
            exmpale_output_field_2: ""
        };
        return example;
    } // End exmapleFunction2()
} // End class ExampleService
exports.default = new ExampleService();
