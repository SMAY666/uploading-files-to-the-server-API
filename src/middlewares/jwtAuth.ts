import {server} from '../app';
// TYPES
import {FastifyReply, FastifyRequest, HookHandlerDoneFunction} from 'fastify';
export function verifyJwt(req: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) {
    try {
        const accessToken = req.headers['authorization']?.split(' ')[1];
        if (!accessToken) {
            throw new Error();
        }

        const decodedToken = server.jwt.verify(accessToken);
        if (!decodedToken) {
            throw new Error();
        }

        // req.isAuth = true
        // req.userId = decodedToken.id
        // req.roleId = decodedToken.roleId
        // req.companyId = decodedToken.companyId
        // req.premium = decodedToken.premium
        // req.premium = decodedToken.premium
        // req.isCompanyOwner = decodedToken.isCompanyOwner

        done();
    } catch (err) {
        void reply.status(401).send({message: 'Not authorized'});
    }
}
