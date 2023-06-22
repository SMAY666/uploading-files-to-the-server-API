import {OptionalNull} from '../../utils/types';
import {Model} from 'sequelize';

export type UserAttributes = {
    id: number
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
}

export type UserCreationAttributes = OptionalNull<UserAttributes, 'id' | 'createdAt' | 'updatedAt'>
export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {}
