import {workspaceRoutes} from './workspaceRoutes';
import {FastifyPluginCallback} from 'fastify';
import {userRoutes} from './UserRoutes';

export const apiRoutes: FastifyPluginCallback = (instance, opts, done) => {
    void instance.register(workspaceRoutes, {prefix: '/workspace'});
    void instance.register(userRoutes, {prefix: '/users'});
    done();
};
