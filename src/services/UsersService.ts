import {UserAttributes} from '../types/models/User';
import {usersRepository} from '../repositories';
import {Password} from '../utils/Password';
import {CustomError} from '../utils/error';

import {SignUpData} from '../types/services/userService';


class UsersService {
    public async getById(userId: number): Promise<UserAttributes | null> {
        const user = await usersRepository.getById(userId);

        if (!user) {
            throw CustomError('User not found', 404);
        }
        return user.get();
    }
}

export const usersService = new UsersService();
