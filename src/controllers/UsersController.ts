import {RouteHandler} from 'fastify';

import {GetUserByIdRequest} from '../types/Requests/User';
import {usersService} from '../services';

class UsersController {
    public getById: RouteHandler<GetUserByIdRequest> = async (req, reply) => {
        const user = await usersService.getById(req.params.userId);
        return reply
            .code(200)
            .send(user);
    };
}

export const usersController = new UsersController();
