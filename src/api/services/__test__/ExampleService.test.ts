/**
 * 
 * 
 * 
 * 
 */

import ExampleService from '../ExampleService';
import mockResource from './mockResource';

/**
 * 
 * 
 */
describe('ExampleService', () => {
    describe('ExampleService.__examplefunction1', () => {
        beforeEach(() => jest.clearAllMocks());

        it('should return Error: Error Message', () => {
            const mockInput =
                mockResource.ExampleService.exampleFunction1.POSITIVE_CASE_INPUT;
            const errorMessage = 
                mockResource.ExampleService.exampleFunction1.ERROR_MESSAGE;

            const result = ExampleService.exampleFunction1(mockInput);

            expect(result).rejects.toThrowError(errorMessage);
        }); // End it

        it('should return Success function call', async () => {
            const mockOutput =
                mockResource.ExampleService.exampleFunction2.POSITIVE_CASE_OUTPUT;

            const result = await ExampleService.exampleFunction2();

            expect(result).toEqual(mockOutput);
        }); // End it 

    }); // End describe
}); // End describe