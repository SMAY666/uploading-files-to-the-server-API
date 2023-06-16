import {Sequelize} from 'sequelize';
import {cleanEnv, port, str} from 'envalid';

const env = cleanEnv(process.env, {
    PORT: port({default: 5000}),
    DB_USERNAME: str({default: 'postgres'}),
    DB_PASSWORD: str({default: '1111'}),
    DB_HOST: str({default: 'localhost'}),
    DB_PORT: port({default: 5432}),
    DB_NAME: str({default: 'fileStorage'}),
});

export const sequelize = new Sequelize(
    env.DB_NAME,
    env.DB_USERNAME,
    env.DB_PASSWORD,
    {
        define: {
            charset: 'utf-8',
            collate: 'utf-8_general_ci',
        },
        host: 'localhost',
        dialect: 'postgres',
        port: env.DB_PORT,
        sync: {
            schema: 'Public',
        },
        pool: {
            max: 5,
            min: 0,
            idle: 20000,
            acquire: 40000,
            evict: 20000,
        }
    }
);