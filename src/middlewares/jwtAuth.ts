import {server} from '../app';
// TYPES
import {FastifyReply, FastifyRequest, HookHandlerDoneFunction} from 'fastify';
import {Token} from '../types/token';


export function verifyJwt(req: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) {
    try {
        const accessToken = req.headers['authorization']?.split(' ')[1];
        if (!accessToken) {
            throw new Error();
        }

        const decodedToken = server.jwt.verify<Token>(accessToken);
        if (!decodedToken) {
            throw new Error();
        }

        req.expiresIn = decodedToken.expiresIn;
        req.userId = decodedToken.userId;

        done();
    } catch (err) {
        void reply.status(401).send({message: 'Not authorized'});
    }
}
