import Fastify from 'fastify';
import multer from 'fastify-multer';

import {ServerConfig} from './types';
import {sequelize, env} from './DataBase';
import {apiRoutes} from './routes';
import {verifyJwt} from './middlewares/jwtAuth';


export const server = Fastify({
    ajv: {
        customOptions: {
            removeAdditional: 'all',
            coerceTypes: 'array',
            allErrors: false,
        },
        plugins: [
            [require('ajv-formats'), {}],
        ],
    },
});

void server.register(multer.contentParser);
void server.register(import('@fastify/auth'));
void server.register(apiRoutes, {prefix: 'api/v1'});
void server.register(import('@fastify/jwt'), {
    secret: env.JWT_SECRET,
});

server.decorate('verifyJwt', verifyJwt);

export async function start(config: ServerConfig): Promise<string> {
    await sequelize.sync({force: true, alter: true});
    return new Promise((resolve, reject) => {
        server.listen({port: config.port}, (err, address) => {
            if (err) {
                reject(err);
            }
            resolve(address);
        });
    });
}
