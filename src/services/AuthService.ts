import {server} from '../app';
import {usersRepository} from '../repositories';
import {CustomError} from '../utils/error';
import {Password} from '../utils/Password';
import {env} from '../DataBase';
import {SignUpData} from '../types/services/userService';
import {UserAttributes} from '../types/models/User';


class AuthService {
    public async signUp(data: SignUpData): Promise<Omit<UserAttributes, 'passwordHash'>> {

        if (data.password !== data.confirmPassword) {
            throw CustomError('Password not confirmed', 400);
        }

        const user = await usersRepository.create({
            passwordHash: Password.calculateHash(data.password),
            ...data,
        });
        return Object.assign({}, user.get(), {passwordHash: undefined});
    }

    public async signIn(email: string, password: string) {
        const candidate = await usersRepository.getByEmail(email);

        if (!candidate || candidate.passwordHash !== Password.calculateHash(password)) {
            throw CustomError('Wrong email or password', 401);
        }

        return server.jwt.sign({
            userId: candidate.id,
            expiresIn: Date.now() + env.JWT_EXPIRES_IN,
        }, {
            expiresIn: env.TOKEN_LIFE_TIME,
        });
    }
}

export const authService = new AuthService();
