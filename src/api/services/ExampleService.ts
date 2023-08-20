/**
 * 
 * 
 * 
 * 
 */

import { ExampleInput, ExampleOutput } from "../models/Example";

interface IExampleService {
    exampleFunction1(payload: ExampleInput): Promise<void>;
    exampleFunction2(): Promise<ExampleOutput>;
}; // End interface IExampleService

class ExampleService implements IExampleService {
    async exampleFunction1(payload: ExampleInput): Promise<void> {
        throw new Error("Error Message");
    } // End exampleFunction1()

    async exampleFunction2(): Promise<ExampleOutput> {
        const example: ExampleOutput = {
            example_output_field_1: 0,
            exmpale_output_field_2: ""
        }

        return example;
    } // End exmapleFunction2()
} // End class ExampleService

export default new ExampleService();