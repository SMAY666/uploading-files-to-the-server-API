import Fastify from 'fastify';
import {ServerConfig} from './types';
import {sequelize, env} from './DataBase';
import {apiRoutes} from './routes';
import multer from 'fastify-multer';


const server = Fastify();
void server.register(multer.contentParser);
void server.register(apiRoutes, {prefix: 'api/v1'});
void server.register(import('@fastify/jwt'), {
    secret: env.JWT_SECRET,
});
export async function start(config: ServerConfig): Promise<string> {
    await sequelize.sync({force: false, alter: true});
    return new Promise((resolve, reject) => {
        server.listen({port: config.port}, (err, address) => {
            if (err) {
                reject(err);
            }
            resolve(address);
        });
    });
}
