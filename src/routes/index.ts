import {FastifyPluginCallback} from 'fastify';

import {workspaceRoutes} from './workspaceRoutes';
import {userRoutes} from './userRoutes';
import {authRoutes} from './authRoutes';
import {directoryRoutes} from './directoryRoutes';


export const apiRoutes: FastifyPluginCallback = (instance, opts, done) => {
    void instance.register(workspaceRoutes, {prefix: '/workspace'});
    void instance.register(userRoutes, {prefix: '/users'});
    void instance.register(authRoutes, {prefix: '/auth'});
    void instance.register(directoryRoutes, {prefix: '/directories'});
    done();
};
