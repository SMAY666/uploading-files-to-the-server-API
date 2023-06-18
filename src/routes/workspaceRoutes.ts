import {FastifyPluginCallback} from 'fastify';
import {CreateFileRequest} from '../types';
import {workspaceController} from '../controllers';

export const workspaceRoutes: FastifyPluginCallback = (instance, opts, done) => {
    instance.post<CreateFileRequest>(
        '/files',
        {},
        workspaceController.createFile,
    );
    done();
};
