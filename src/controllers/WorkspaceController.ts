import {RouteHandler} from 'fastify';
import {CreateFileRequest} from '../types';
import {workspaceService} from '../services';

export class WorkspaceController {
    // ----[FILE]------

    public createFile: RouteHandler<CreateFileRequest> = async (req, reply) => {
        const file = await workspaceService.createFile(req.body);

        return reply
            .code(201)
            .send(file);
    };
}
