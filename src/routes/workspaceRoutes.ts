import {FastifyPluginCallback} from 'fastify';
import {CreateFileRequest} from '../types';
import {workspaceController} from '../controllers';
import {DeleteFileRequest, GetAllFilesRequest, GetFileByIdRequest, UpdateFileRequest} from '../types/Requests/File';

export const workspaceRoutes: FastifyPluginCallback = (instance, opts, done) => {
    instance.post<CreateFileRequest>(
        '/files',
        {},
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
        {},
        workspaceController.getAllFiles,
    );
    done();
};
