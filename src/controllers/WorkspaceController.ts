import {RouteHandler} from 'fastify';
import {CreateFileRequest} from '../types';
import {workspaceService} from '../services';
import {DeleteFileRequest, GetAllFilesRequest, GetFileByIdRequest, UpdateFileRequest} from '../types/Requests/File';
import {FileInstance} from '../types/models/File';


export class WorkspaceController {
    // ----[FILE]------

    public createFile: RouteHandler<CreateFileRequest> = async (req, reply) => {
        const file = await workspaceService.createFile(req.body);

        return reply
            .code(201)
            .send(file);
    };

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
        const files = await workspaceService.getAllFiles();
        return reply
            .code(200)
            .send(files);
    };
}
