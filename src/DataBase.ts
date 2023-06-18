import {Sequelize} from 'sequelize';
import {cleanEnv, port, str} from 'envalid';


const env = cleanEnv(process.env, {
    PORT: port({default: 5000}),
    DB_USERNAME: str({default: 'root'}),
    DB_PASSWORD: str({default: 'root'}),
    DB_HOST: str({default: 'localhost'}),
    DB_PORT: port({default: 3306}),
    DB_NAME: str({default: 'filestorage'}),
});

export const sequelize = new Sequelize(
    env.DB_NAME,
    env.DB_USERNAME,
    env.DB_PASSWORD,
    {
        logging: console.log,
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
        },
        host: env.DB_HOST,
        dialect: 'mysql',
        port: env.DB_PORT,
    },
);
