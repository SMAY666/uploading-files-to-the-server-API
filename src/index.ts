import {start} from './app';
import {cleanEnv, port, str} from 'envalid';

import {ServerConfig} from './types';
import {File} from './models';


const env = cleanEnv(process.env, {
    PORT: port({default: 5000}),
});

const config: ServerConfig = {
    port: env.PORT,
}


start(config)
    .then()
    .catch(console.log);

const file = File.findAll();
