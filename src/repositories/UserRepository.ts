import {UserCreationAttributes, UserInstance} from '../types/models/User';
import {UserModel} from '../models';

export class UserRepository {
    public async create(data: UserCreationAttributes): Promise<UserInstance> {
        return await UserModel.create(data);
    }

    public async getUserById(userId: number): Promise<UserInstance | null> {
        return await UserModel.findByPk(userId);
    }

    public async getByEmail(email: string): Promise<UserInstance | null> {
        return await UserModel.findOne({
            where: {
                email: email,
            },
        });
    }
}
