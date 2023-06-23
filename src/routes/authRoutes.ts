import {FastifyPluginCallback} from 'fastify';

import {SignInRequest, SignUpRequest} from '../types/Requests/Auth';
import {authController} from '../controllers';


export const authRoutes: FastifyPluginCallback = (instance, opts, done) => {
    instance.post<SignUpRequest>(
        '/sign-up',
        {},
        authController.signUp,
    );
    instance.post<SignInRequest>(
        '/sign-in',
        {},
        authController.signIn,
    );
    done();
};
