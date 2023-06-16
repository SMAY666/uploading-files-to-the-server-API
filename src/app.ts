import Fastify from 'fastify'
import {ServerConfig} from './types';
import {sequelize} from './DataBase';

const server = Fastify();

export async function start(config: ServerConfig): Promise<void> {
    server.listen({port: config.port}, (err, address) => {
        if (err) {
            console.log(`[server]: Server start error: ${err}`);
            process.exit(1);
        }
        console.log(`[server]: Server started on ${address}`);
    })
}