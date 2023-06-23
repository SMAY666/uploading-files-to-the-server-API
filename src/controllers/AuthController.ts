import {RouteHandler} from 'fastify';

import {SignUpRequest, SignInRequest} from '../types/Requests/Auth';
import {authService} from '../services';


class AuthController {
    public signUp: RouteHandler<SignUpRequest> = async (req, reply) => {
        const user = await authService.signUp(req.body);
        return reply
            .code(201)
            .send(user);
    };

    public signIn: RouteHandler<SignInRequest> = async (req, reply) => {
        const token = await authService.signIn(req.body.email, req.body.password);
        return reply
            .code(200)
            .send(token);
    };
}

export const authController = new AuthController();
