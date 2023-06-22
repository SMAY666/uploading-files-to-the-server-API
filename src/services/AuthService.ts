import {server} from '../app';
import {userRepository} from '../repositories';
import {CustomError} from '../utils/error';
import {Password} from '../utils/Password';
import {env} from '../DataBase';


export class AuthService {
    public async authUser(email: string, password: string) {
        const candidate = await userRepository.getByEmail(email);

        if (!candidate || candidate.passwordHash !== Password.calculateHash(password)) {
            throw CustomError('Wrong email or password', 401);
        }

        return server.jwt.sign({
            userId: candidate.id,
            expireIn: Date.now() + env.JWT_EXPIRES_IN,
        });
    }
}
