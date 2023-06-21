import {workspaceRoutes} from './workspaceRoutes';
import {FastifyPluginCallback} from 'fastify';

export const apiRoutes: FastifyPluginCallback = (instance, opts, done) => {
    void instance.register(workspaceRoutes, {prefix: '/workspace'});
    done();
};
