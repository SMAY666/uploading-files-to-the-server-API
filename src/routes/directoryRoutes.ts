import {FastifyPluginCallback} from 'fastify';

import {directoryController} from '../controllers';
import {CreateDirectoryRequest} from '../types/Requests/Directory';

export const directoryRoutes: FastifyPluginCallback = (instance, opts, done) => {
    instance.addHook('onRequest', instance.auth([instance.verifyJwt]));
    instance.post<CreateDirectoryRequest>(
        '/directories',
        {},
        directoryController.create,
    );
    done();
};
