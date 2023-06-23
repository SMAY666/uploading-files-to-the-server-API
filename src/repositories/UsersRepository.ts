import {UserCreationAttributes, UserInstance} from '../types/models/User';
import {UserModel} from '../models';

class UsersRepository {
    public async create(data: UserCreationAttributes): Promise<UserInstance> {
        return await UserModel.create(data);
    }

    public async getById(userId: number): Promise<UserInstance | null> {
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

export const usersRepository = new UsersRepository();
