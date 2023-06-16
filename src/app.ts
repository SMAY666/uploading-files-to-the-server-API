import Fastify from 'fastify';
import {ServerConfig} from './types';
import {sequelize} from './DataBase';

const server = Fastify();

export async function start(config: ServerConfig): Promise<string> {
    await sequelize.sync({alter: true, force: false});
    return new Promise((resolve, reject) => {
        server.listen({port: config.port}, (err, address) => {
            if (err) {
                reject(err);
            }
            resolve(address);
        });
    });
}
