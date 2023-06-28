import {FastifyPluginCallback} from 'fastify';

import {CreateFileRequest} from '../types';
import {workspaceController} from '../controllers';
import {
    DeleteFileRequest,
    DownLoadFileRequest,
    GetAllFilesRequest,
    GetFileByIdRequest,
    UpdateFileRequest,
} from '../types/Requests/File';
import {filesUpload} from '../utils/fileTools';

export const workspaceRoutes: FastifyPluginCallback = (instance, opts, done) => {
    instance.addHook('onRequest', instance.auth([instance.verifyJwt]));

    instance.post<CreateFileRequest>(
        '/files',
        {
            preValidation: [filesUpload.single('file')],
            schema: {
                body: {
                    type: 'object',
                    required: ['directoryId'],
                    properties: {
                        directoryId: {
                            type: 'integer',
                        },
                    },
                },
            },
        },
        workspaceController.createFile,
    );

    instance.delete<DeleteFileRequest>(
        '/:fileId',
        {},
        workspaceController.deleteFile,
    );

    instance.patch<UpdateFileRequest>(
        '/:fileId',
        {},
        workspaceController.updateFile,
    );

    instance.get<GetFileByIdRequest>(
        '/:fileId',
        {},
        workspaceController.getFileById,
    );

    instance.get<GetAllFilesRequest>(
        '/',
        {
            schema: {
                querystring: {
                    type: 'object',
                    properties: {
                        limit: {
                            type: 'integer',
                        },
                        offset: {
                            type: 'integer',
                        },
                    },
                },
            },
        },
        workspaceController.getAllFiles,
    );
    instance.get<DownLoadFileRequest>(
        '/:fileId/download',
        {},
        workspaceController.downloadFile,
    );
    done();
};
