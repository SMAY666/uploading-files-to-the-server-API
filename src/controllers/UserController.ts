import {RouteHandler} from 'fastify';
import {AuthUserRequest, CreateUserRequest, GetUserByIdRequest} from '../types/Requests/User';
import {authService, userService} from '../services';

export class UserController {
    public createUser: RouteHandler<CreateUserRequest> = async (req, reply) => {
        const user = await userService.createUser(req.body);
        return reply
            .code(201)
            .send(user);
    };

    public authUser: RouteHandler<AuthUserRequest> = async (req, reply) => {
        const token = await authService.authUser(req.body.email, req.body.password);
        return reply
            .code(200)
            .send(token);
    };

    public getUserById: RouteHandler<GetUserByIdRequest> = async (req, reply) => {
        const user = await userService.getUserById(req.params.userId);
        return reply
            .code(200)
            .send(user);
    };
}
