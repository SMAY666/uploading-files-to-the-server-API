import {RouteHandler} from 'fastify';
import {CreateDirectoryRequest, DeleteDirectory, EditDirectory, GetDirectoryById} from '../types/Requests/Directory';
import {directoryService} from '../services';


class DirectoryController {
    public create: RouteHandler<CreateDirectoryRequest> = async (req, reply) => {
        const directory = await directoryService.create({
            name: req.body.name,
            directoryId: req.body.directoryId,
            userId: req.userId,
        });
        return reply
            .code(201)
            .send(directory);
    };

    public getById: RouteHandler<GetDirectoryById> = async (req, reply) => {
        const directory = await directoryService.getById(req.params.directoryId);
        return reply
            .code(200)
            .send(directory);
    };

    public edit: RouteHandler<EditDirectory> = async (req, reply) => {
        const directory = await directoryService.edit(req.params.directoryId, req.body);
        return reply
            .code(200)
            .send(directory);
    };

    public delete: RouteHandler<DeleteDirectory> = async (req, reply) => {
        const directory = await directoryService.delete(req.params.directoryId);
        return reply
            .code(200)
            .send(directory);
    }
}

export const directoryController = new DirectoryController();
