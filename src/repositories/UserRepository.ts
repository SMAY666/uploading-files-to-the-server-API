import {UserCreationAttributes, UserInstance} from '../types/models/User';
import {UserModel} from '../models';

export class UserRepository {
    public async createUse(data: UserCreationAttributes): Promise<UserInstance> {
        return await UserModel.create(data);
    }

    public async getUserById(userId: number): Promise<UserInstance | null> {
        return await UserModel.findByPk(userId);
    }
}
