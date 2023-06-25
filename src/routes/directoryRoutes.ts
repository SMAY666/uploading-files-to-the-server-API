import {FastifyPluginCallback} from 'fastify';

import {directoryController} from '../controllers';
import {CreateDirectoryRequest} from '../types/Requests/Directory';

export const directoryRoutes: FastifyPluginCallback = (instance, opts, done) => {
    instance.addHook('onRequest', instance.auth([instance.verifyJwt]));
    instance.post<CreateDirectoryRequest>(
        '/directories',
        {
            schema: {
                body: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            minLength: 1,
                        },
                        directoryId: {
                            type: 'integer',
                        },
                    },
                },
            },
        },
        directoryController.create,
    );
    done();
};
