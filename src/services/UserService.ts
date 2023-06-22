import {UserAttributes, UserCreationAttributes} from '../types/models/User';
import {userRepository} from '../repositories';
import {Password} from '../utils/Password';
import {CustomError} from '../utils/error';


export class UserService {
    public async createUser(data: UserCreationAttributes, confirmPassword: string): Promise<UserAttributes> {

        if (data.passwordHash === confirmPassword) {
            data.passwordHash = Password.calculateHash(data.passwordHash);
        } else {
            throw CustomError('Password not confirmed', 400);
        }

        const user = await userRepository.createUse(data);
        return user.get();
    }
}
