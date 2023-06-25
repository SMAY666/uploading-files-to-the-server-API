import {FastifyPluginCallback} from 'fastify';

import {SignInRequest, SignUpRequest} from '../types/Requests/Auth';
import {authController} from '../controllers';


export const authRoutes: FastifyPluginCallback = (instance, opts, done) => {
    instance.post<SignUpRequest>(
        '/sign-up',
        {
            schema: {
                body: {
                    type: 'object',
                    properties: {
                        email: {
                            type: 'string',
                            minLength: 1,
                            format: 'email',
                        },
                        password: {
                            type: 'string',
                            minLength: 6,
                        },
                        confirmPassword: {
                            type: 'string',
                            minLength: 1,
                        },
                    },
                },
            },
        },
        authController.signUp,
    );

    instance.post<SignInRequest>(
        '/sign-in',
        {
            schema: {
                body: {
                    type: 'object',
                    properties: {
                        email: {
                            type: 'string',
                            minLength: 1,
                        },
                        password: {
                            type: 'string',
                            minLength: 6,
                        },
                    },
                },
            },
        },
        authController.signIn,
    );
    done();
};
