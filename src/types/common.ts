import {File} from 'fastify-multer/lib/interfaces';
import {HookHandlerDoneFunction} from 'fastify';
import {Token} from './token';


declare global {
    // TODO: Разобраться с ошибкой
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv {
            CLIENT_URL: string
            PORT: number
            DB_USERNAME: string
            DB_PASSWORD: string
            DB_HOST: string
            DB_PORT: number
            DB_NAME: string
            JWT_SECRET: string
            JWT_EXPIRES_IN: number
            TOKEN_LIFE_TIME: string
            PASSWORD_SALT: string
        }
    }
}

declare module 'fastify' {
    export interface FastifyInstance {
        verifyJwt: (req: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => void
    }

    export interface FastifyRequest extends Token {
        file?: File
        files?: File[]
    }
}
