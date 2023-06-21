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
    instance.post<CreateFileRequest>(
        '/files',
        {
            preHandler: [filesUpload.single('file')],
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
        {},
        workspaceController.getAllFiles,
    );
    instance.get<DownLoadFileRequest>(
        '/:fileId/download',
        {},
        workspaceController.downloadFile,
    );
    done();
};
