import {Sequelize} from 'sequelize';
import {cleanEnv, num, port, str} from 'envalid';


export const env = cleanEnv(process.env, {
    CLIENT_URL: str({default: 'http://localhost:3000'}),
    PORT: port({default: 5000}),
    DB_USERNAME: str({default: 'root'}),
    DB_PASSWORD: str({default: 'root'}),
    DB_HOST: str({default: 'localhost'}),
    DB_PORT: port({default: 3306}),
    DB_NAME: str({default: 'filestorage'}),
    JWT_SECRET: str({default: 'dev'}),
    JWT_EXPIRES_IN: num({default: 3600000}),
    PASSWORD_SALT: str({default: '1234556'}),
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
