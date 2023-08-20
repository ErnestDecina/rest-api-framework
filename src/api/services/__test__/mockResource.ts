/**
 * 
 * 
 * 
 * 
 */

const mockResource = {
    AuthService: {
        login: {
            POSITIVE_CASE_INPUT: {
                email: 'test@example.com',
                password: 'hello world'
            },
            NEGATIVE_CASE_INPUT: {
                email: 'test@example.com',
                password: 'hello world!!!!!'
            },
            CASE_NULL_USER_EMAIL: null,
            CASE_EXIST_USER_EMAIL: {
                id: 1,
                email: 'test@example.com',
                password:
                    '$2b$05$yW/6efT8ohCYHj9YkuBIC.EMxpWHxSzXY.8GogAtMwN7BppXUX42S',
                username: 'test',
                role_id: 1,
                createdAt: '2023-08-12 17:33:03.34+00',
                updatedAt: '2023-08-12 17:33:03.34+00',
                deletedAt: null
            },
            CASE_VALID_COMPARE: true,
            CASE_INVALID_COMPARE: false,
            CASE_VALID_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyMTIzNDgyMjMyLCJleHAiOjE2OTIxMjM1Njg2MzJ9.FBYfpQUrxh8ykY9PUVpM7QyAD-U2LExN9DAbNP7XW_w',
            CASE_UNDEFINED_TOKEN: undefined,
            ERR_USER_NOT_FOUND: 'User not found',
            ERR_INVALID_PASSWORD: 'Email and Password does not match',
            ERR_INVALID_TOKEN: 'Invalid token'
        },
        signUp: {
            POSITIVE_CASE_INPUT: {
                email: 'test@example.com',
                password: 'password',
                username: 'test'
            },
            CASE_NULL_USER_EMAIL: null,
            CASE_EXIST_USER_EMAIL: {
                id: 1,
                email: 'test@example.com',
                password:
                    '$2b$05$yW/6efT8ohCYHj9YkuBIC.EMxpWHxSzXY.8GogAtMwN7BppXUX42S',
                username: 'test',
                role_id: 1,
                createdAt: '2023-08-12 17:33:03.34+00',
                updatedAt: '2023-08-12 17:33:03.34+00',
                deletedAt: null
            },
            BCRYPT_HASH_OUTPUT:
                '$2b$05$yW/6efT8ohCYHj9YkuBIC.EMxpWHxSzXY.8GogAtMwN7BppXUX42S',
            POSITIVE_CASE_OUTPUT: {
                id: 1,
                email: 'test@example.com',
                password:
                    '$2b$05$yW/6efT8ohCYHj9YkuBIC.EMxpWHxSzXY.8GogAtMwN7BppXUX42S',
                username: 'test',
                role_id: 1,
                createdAt: '2023-08-12 17:33:03.34+00',
                updatedAt: '2023-08-12 17:33:03.34+00',
                deletedAt: null
            },
            ERROR_MESSAGE: 'Email must be unique'
        }
    },
    RoleService: {
        createRole: {
            POSITIVE_CASE_INPUT: {
                name: 'admin',
                description: 'Administrator'
            },
            POSITIVE_CASE_OUTPUT: {
                id: 1,
                name: 'admin',
                description: 'Administrator'
            },
            CASE_NULL_ROLE_SLUG: null,
            CASE_EXIST_ROLE_SLUG: {
                id: 1,
                name: 'admin',
                description: 'Administrator'
            },
            ERROR_MESSAGE: 'Role is exist'
        },
        getRoles: {
            POSITIVE_CASE_OUTPUT: [
                {
                    id: 1,
                    name: 'admin',
                    description: 'Administrator'
                }
            ]
        }
    },
    UserService: {
        createUser: {
            POSITIVE_CASE_INPUT: {
                email: 'test@example.com',
                password: 'password',
                username: 'test',
                role_id: 1
            },
            CASE_NULL_USER_EMAIL: null,
            CASE_EXIST_USER_EMAIL: {
                id: 1,
                email: 'test@example.com',
                password:
                    '$2b$05$yW/6efT8ohCYHj9YkuBIC.EMxpWHxSzXY.8GogAtMwN7BppXUX42S',
                username: 'test',
                role_id: 1,
                createdAt: '2023-08-12 17:33:03.34+00',
                updatedAt: '2023-08-12 17:33:03.34+00',
                deletedAt: null
            },
            BCRYPT_HASH_OUTPUT:
                '$2b$05$yW/6efT8ohCYHj9YkuBIC.EMxpWHxSzXY.8GogAtMwN7BppXUX42S',
            POSITIVE_CASE_OUTPUT: {
                id: 1,
                email: 'test@example.com',
                password:
                    '$2b$05$yW/6efT8ohCYHj9YkuBIC.EMxpWHxSzXY.8GogAtMwN7BppXUX42S',
                username: 'test',
                role_id: 1,
                createdAt: '2023-08-12 17:33:03.34+00',
                updatedAt: '2023-08-12 17:33:03.34+00',
                deletedAt: null
            },
            ERROR_MESSAGE: 'Email must be unique'
        },
        getUsers: {
            POSITIVE_CASE_OUTPUT: [
                {
                    id: 1,
                    email: 'test@example.com',
                    username: 'test',
                    role_id: 1
                }
            ]
        },
        getUserDetail: {
            POSITIVE_CASE_INPUT: {
                userId: 1
            },
            POSITIVE_CASE_OUTPUT: {
                id: 1,
                email: 'test@example.com',
                username: 'test',
                role: {
                    id: 1,
                    name: 'admin',
                    description: 'Administrator'
                }
            },
            CASE_NULL_OUPUT: null,
            ERROR_MESSAGE: 'User not found'
        },
        updateUser: {
            POSITIVE_CASE_INPUT: {
                userId: 1,
                payload: {
                    username: 'test',
                    role_id: 2
                }
            },
            CASE_EXIST_DETAIL: {
                id: 1,
                email: 'test@example.com',
                username: 'test',
                role: {
                    id: 1,
                    name: 'admin',
                    description: 'Administrator'
                }
            },
            CASE_NULL_DETAIL: null,
            POSITIVE_CASE_OUTPUT: true,
            ERROR_MESSAGE: 'User not found'
        },
        deleteUser: {
            POSITIVE_CASE_INPUT: {
                userId: 1
            },
            CASE_EXIST_DETAIL: {
                id: 1,
                email: 'test@example.com',
                username: 'test',
                role: {
                    id: 1,
                    name: 'admin',
                    description: 'Administrator'
                }
            },
            CASE_NULL_DETAIL: null,
            POSITIVE_CASE_OUTPUT: true,
            ERROR_MESSAGE: 'User not found'
        }
    },
    ExampleService: {
        exampleFunction1: {
            POSITIVE_CASE_INPUT: {
                example_input_field_1: 1,
                example_input_field_2: 'Hello World'
            },
            ERROR_MESSAGE: 'Error Message'
        },

        exampleFunction2: {
            POSITIVE_CASE_OUTPUT: {
                example_output_field_1: 0,
                exmpale_output_field_2: ""
            }
        }
    }
};

export default mockResource;