import {RouteHandler} from 'fastify';
import {CreateUserRequest} from '../types/Requests/User';
import {Password} from '../utils/Password';
import {userService} from '../services';

export class UserController {
    public createUser: RouteHandler<CreateUserRequest> = async (req, reply) => {
        const user = await userService.createUser(req.body.userData, req.body.confirmPassword);
        return reply
            .code(201)
            .send(user);
    };
}
