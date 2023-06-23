import {FastifyPluginCallback} from 'fastify';

import {GetUserByIdRequest} from '../types/Requests/User';
import {usersController} from '../controllers';

export const userRoutes: FastifyPluginCallback = (instance, opts, done) => {
    instance.addHook('onRequest', instance.auth([instance.verifyJwt]));
    instance.get<GetUserByIdRequest>(
        '/:userId',
        {},
        usersController.getById,
    );
    done();
};
