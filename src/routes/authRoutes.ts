import {FastifyPluginCallback} from 'fastify';
import {AuthUserRequest} from '../types/Requests/User';
import {userController} from '../controllers';

export const authRoutes: FastifyPluginCallback = (instance, opts, done) => {
    instance.post<AuthUserRequest>(
        '/sign-in',
        {},
        userController.authUser,
    );
    done();
};
