import {RouteHandler} from 'fastify';
import {CreateUserRequest, GetUserByIdRequest} from '../types/Requests/User';
import {Password} from '../utils/Password';
import {userService} from '../services';

export class UserController {
    public createUser: RouteHandler<CreateUserRequest> = async (req, reply) => {
        const user = await userService.createUser(req.body.userData, req.body.confirmPassword);
        return reply
            .code(201)
            .send(user);
    };

    public getUserById: RouteHandler<GetUserByIdRequest> = async (req, reply) => {
        const user = await userService.getUserById(req.params.userId);
        return reply
            .code(200)
            .send(user);
    };
}
