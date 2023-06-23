import {File} from 'fastify-multer/lib/interfaces';
import {HookHandlerDoneFunction} from 'fastify';


declare global {
    // TODO: Разобраться с ошибкой
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number
            DB_USERNAME: string
            DB_PASSWORD: string
            DB_HOST: string
            DB_PORT: number
            DB_NAME: string
            JWT_SECRET: string
            JWT_EXPIRES_IN: number
            PASSWORD_SALT: string
        }
    }
}

declare module 'fastify' {
    export interface FastifyInstance {
        verifyJwt: (req: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => void
    }
    export interface FastifyRequest {
        file?: File
        files?: File[]
    }
}
