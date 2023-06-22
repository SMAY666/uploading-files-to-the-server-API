import {UserAttributes} from '../types/models/User';
import {userRepository} from '../repositories';
import {Password} from '../utils/Password';
import {CustomError} from '../utils/error';
import {FastifyInstance} from 'fastify';
import {env} from '../DataBase';
import {SignUpData} from '../types/services/userService';


export class UserService {

    public async createUser(data: SignUpData): Promise<UserAttributes> {

        if (data.password !== data.confirmPassword) {
            throw CustomError('Password not confirmed', 400);
        }

        const user = await userRepository.create({
            passwordHash: Password.calculateHash(data.password),
            ...data,
        });
        return user.get();
    }

    public async getUserById(userId: number): Promise<UserAttributes | null> {
        const user = await userRepository.getUserById(userId);

        if (!user) {
            throw CustomError('User not found', 404);
        }
        return user.get();
    }
}
