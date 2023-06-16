import {start} from './app';
import {cleanEnv, port} from 'envalid';

import {ServerConfig} from './types';
import * as process from 'process';


const env = cleanEnv(process.env, {
    PORT: port({default: 5000}),
});

const config: ServerConfig = {
    port: env.PORT,
};


start(config)
    .then((address) => console.log(`[server]: Server started on ${address}`))
    .catch((error) => {
        console.log(error);
        process.exit(-1);
    });
