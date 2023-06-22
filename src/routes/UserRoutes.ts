import {FastifyPluginCallback} from 'fastify';
import {CreateUserRequest} from '../types/Requests/User';
import {userController} from '../controllers';

export const userRoutes: FastifyPluginCallback = (instance, opts, done) => {
    instance.post<CreateUserRequest>(
        '/user',
        {},
        userController.createUser,
    );
    done();
};
