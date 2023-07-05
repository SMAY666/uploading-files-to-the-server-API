import {FastifyPluginCallback} from 'fastify';

import {directoryController} from '../controllers';
import {
    CreateDirectoryRequest,
    EditDirectory,
    GetDirectoryById,
    DeleteDirectory,
    GetAllDirectories,
} from '../types/Requests/Directory';

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
                            type: ['integer', 'null'],
                        },
                    },
                },
            },
        },
        directoryController.create,
    );
    instance.get<GetDirectoryById>(
        '/:directoryId',
        {},
        directoryController.getById,
    );

    instance.get<GetAllDirectories>(
        '/',
        {},
        directoryController.getAll,
    );

    instance.patch<EditDirectory>(
        '/:directoryId',
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
                            type: ['integer', 'null'],
                        },
                    },
                },
            },
        },
        directoryController.edit,
    );

    instance.delete<DeleteDirectory>(
        '/:directoryId',
        {},
        directoryController.delete,
    );
    done();
};
