import {RouteHandler} from 'fastify';
import {CreateDirectoryRequest} from '../types/Requests/Directory';
import {directoryService} from '../services';


class DirectoryController {
    public create: RouteHandler<CreateDirectoryRequest> = async (req, reply) => {

        const sameDirectory = await directoryService.getByName(req.body.name, req.userId);

        if (!sameDirectory) {
            const directory = await directoryService.create({
                name: req.body.name,
                userId: req.userId,
            });
            return reply
                .code(201)
                .send(directory);
        }
    };
}

export const directoryController = new DirectoryController();
