/**
 * 
 * 
 * 
 * 
 */

import AuthService from '../AuthService';
import UserRepository from '../../repositories/UserRepository';
import * as bcrypt  from 'bcrypt';
import jwt from '../../../utils/jwt';
import mockResource from './mockResource';
import { DatabasePostgres } from '../../../database/config';

jest.mock('../../repositories/UserRepository');
jest.mock('../../../utils/jwt');
jest.mock('bcrypt');

const MockedUserRepository = jest.mocked(UserRepository);
const MockedBcrypt = jest.mocked(bcrypt);
const MockedJWT = jest.mocked(jwt);

/**
 * 
 * 
 */
describe('AuthService', () => {
    afterAll(() => DatabasePostgres.close());
    
    describe('AuthService.__login', () => {
        beforeEach(() => jest.clearAllMocks());

        it('should return Success login', async () => {
            const mockInput =
                mockResource.AuthService.login.POSITIVE_CASE_INPUT;
            const mockUserEmailOutput: any =
                mockResource.AuthService.login.CASE_EXIST_USER_EMAIL;
            const mockCompareOutput =
                mockResource.AuthService.login.CASE_VALID_COMPARE;
            const mockTokenOutput =
                mockResource.AuthService.login.CASE_VALID_TOKEN;

            MockedUserRepository.getUserByEmail.mockResolvedValue(mockUserEmailOutput);
            MockedBcrypt.compareSync.mockReturnValue(mockCompareOutput);
            MockedJWT.signToken.mockResolvedValue(mockTokenOutput);

            const result = await AuthService.login(mockInput);

            expect(result).toEqual(mockTokenOutput);
            expect(MockedUserRepository.getUserByEmail).toHaveBeenCalledTimes(1);
            expect(MockedUserRepository.getUserByEmail).toBeCalledWith(mockInput.email);

            expect(MockedBcrypt.compareSync).toHaveBeenCalledTimes(1);
            expect(MockedBcrypt.compareSync).toBeCalledWith(mockInput.password, mockUserEmailOutput.password);

            expect(MockedJWT.signToken).toBeCalledTimes(1);
            expect(MockedJWT.signToken).toBeCalledWith(mockUserEmailOutput.id);
        }); // End it

        it('should return Error: User not found', () => {
            const mockInput =
                mockResource.AuthService.login.POSITIVE_CASE_INPUT;
            const mockUserEmailOutput: any =
                mockResource.AuthService.login.CASE_NULL_USER_EMAIL;
            const errorMessage =
                mockResource.AuthService.login.ERR_USER_NOT_FOUND;

            MockedUserRepository.getUserByEmail.mockResolvedValue(mockUserEmailOutput);

            const result = AuthService.login(mockInput);

            expect(result).rejects.toThrowError(errorMessage);
            expect(MockedUserRepository.getUserByEmail).toHaveBeenCalledTimes(1);
            expect(MockedUserRepository.getUserByEmail).toBeCalledWith(mockInput.email);
        }); // End it

        it('should return Error: Email and Password does not match', () => {
            const mockInput =
                mockResource.AuthService.login.POSITIVE_CASE_INPUT;
            const mockUserEmailOutput: any = 
                mockResource.AuthService.login.CASE_EXIST_USER_EMAIL;
            const mockCompareOutput =
                mockResource.AuthService.login.CASE_INVALID_COMPARE;
            const errorMessage =
                mockResource.AuthService.login.ERR_INVALID_PASSWORD;

            MockedUserRepository.getUserByEmail.mockResolvedValue(mockUserEmailOutput);
            MockedBcrypt.compareSync.mockReturnValue(mockCompareOutput);

            const result = AuthService.login(mockInput);

            expect(result).rejects.toThrowError(errorMessage);
            expect(MockedUserRepository.getUserByEmail).toHaveBeenCalledTimes(1);
            expect(MockedUserRepository.getUserByEmail).toBeCalledWith(mockInput.email);
        }); // End it 

        it('should return Error: Invalid token', () => {
            const mockInput = 
                mockResource.AuthService.login.POSITIVE_CASE_INPUT;
            const mockUserEmailOutput: any = 
                mockResource.AuthService.login.CASE_EXIST_USER_EMAIL;
            const mockCompareOutput =
                mockResource.AuthService.login.CASE_VALID_COMPARE;
            const mockTokenOutput = 
                mockResource.AuthService.login.CASE_UNDEFINED_TOKEN;
            const errorMessage = 
                mockResource.AuthService.login.ERR_INVALID_TOKEN;
            
            MockedUserRepository.getUserByEmail.mockResolvedValue(mockUserEmailOutput);
            MockedBcrypt.compareSync.mockReturnValue(mockCompareOutput);
            MockedJWT.signToken.mockResolvedValue(mockTokenOutput);

            const result = AuthService.login(mockInput);

            expect(result).rejects.toThrowError(errorMessage);
            expect(MockedUserRepository.getUserByEmail).toHaveBeenCalledTimes(1);
            expect(MockedUserRepository.getUserByEmail).toBeCalledWith(mockInput.email);
        }); // End it 
    }); // End describe

    /**
     * 
     * 
     * 
     */
    describe('AuthService.__signup', () => {
        beforeEach(() => jest.clearAllMocks());

        it('should return Success signup', async () => {
            const mockInput = 
                mockResource.AuthService.signUp.POSITIVE_CASE_INPUT;
            const mockUserEmailOutput: any = 
                mockResource.AuthService.signUp.CASE_NULL_USER_EMAIL;
            const mockHashSyncOutput = 
                mockResource.AuthService.signUp.BCRYPT_HASH_OUTPUT;
            const mockOutput: any =
                mockResource.AuthService.signUp.POSITIVE_CASE_INPUT;
            const errorMessage = 
                mockResource.AuthService.signUp.ERROR_MESSAGE;

            MockedUserRepository.getUserByEmail.mockResolvedValue(mockUserEmailOutput);
            MockedBcrypt.hashSync.mockReturnValue(mockHashSyncOutput);
            MockedUserRepository.createUser.mockResolvedValue(mockOutput);

            const result = await AuthService.signUp(mockInput);
            
            
            expect(result).toEqual(mockOutput);
            expect(MockedUserRepository.getUserByEmail).toBeCalledTimes(1);
            expect(MockedUserRepository.getUserByEmail).toBeCalledWith(mockInput.email);
            
            expect(MockedBcrypt.hashSync).toHaveBeenCalledTimes(1);
            expect(MockedBcrypt.hashSync).toBeCalledWith(mockInput.password, 5);

            expect(MockedUserRepository.createUser).toBeCalledTimes(1);
        }); // End it

        /**
         * 
         * 
         */
        it('should return Error: Email Exists', () => {
            const mockInput = 
                mockResource.AuthService.signUp.POSITIVE_CASE_INPUT;
            const mockUserEmailOutput: any = 
                mockResource.AuthService.signUp.CASE_EXIST_USER_EMAIL;
            const errorMessage =
                mockResource.AuthService.signUp.ERROR_MESSAGE;
            
            MockedUserRepository.getUserByEmail.mockResolvedValue(mockUserEmailOutput);

            const result = AuthService.signUp(mockInput);

            expect(result).rejects.toThrowError(errorMessage);
            expect(MockedUserRepository.getUserByEmail).toBeCalledTimes(1);
            expect(MockedUserRepository.getUserByEmail).toBeCalledWith(mockInput.email)
        }); // End it
    }); // End describe
}); // End describe