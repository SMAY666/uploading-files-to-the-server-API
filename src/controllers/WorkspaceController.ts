import {RouteHandler} from 'fastify';

import {CreateFileRequest} from '../types';
import {workspaceService} from '../services';
import {
    DeleteFileRequest,
    DownLoadFileRequest,
    GetAllFilesRequest,
    GetFileByIdRequest,
    UpdateFileRequest,
} from '../types/Requests/File';
import {FileInstance} from '../types/models/File';

import * as uuid from 'uuid';


class WorkspaceController {
    public createFile: RouteHandler<CreateFileRequest> = async (req, reply) => {
        if (!req.file) {
            return reply
                .code(400)
                .send({
                    message: 'File must be uploaded',
                });
        }

        const file = await workspaceService.createFile({
            originalName: req.file.originalname,
            name: req.file.filename ?? uuid.v4(),
            userId: req.userId,
            directoryId: req.body.directoryId,
        });

        return reply
            .code(201)
            .send(file);
    };

    // ----[FILE]------

    public deleteFile: RouteHandler<DeleteFileRequest> = async (req, reply) => {
        const file = await workspaceService.deleteFile(req.params.fileId);
        return reply
            .code(200)
            .send(file);
    };

    public updateFile: RouteHandler<UpdateFileRequest> = async (req, reply) => {
        const updatedFile = await workspaceService.updateFile(req.params.fileId, req.body);
        return reply
            .code(200)
            .send(updatedFile);
    };

    public getFileById: RouteHandler<GetFileByIdRequest> = async (req, reply): Promise<FileInstance | undefined> => {
        const file = await workspaceService.getFileById(req.params.fileId);
        return reply
            .code(200)
            .send(file);
    };

    public getAllFiles: RouteHandler<GetAllFilesRequest> = async (req, reply) => {
        const files = await workspaceService.getAllFiles(req.query.limit, req.query.offset);
        return reply
            .code(200)
            .send(files);
    };

    public downloadFile: RouteHandler<DownLoadFileRequest> = async (req, reply) => {
        const stream = await workspaceService.downloadFile(req.params.fileId);
        return reply
            .code(200)
            .send(stream);
    };
}

export const workspaceController = new WorkspaceController();
