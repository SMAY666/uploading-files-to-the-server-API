import {OptionalNull} from '../../utils/types';
import {Model} from 'sequelize';

export type DirectoryAttributes = {
    id: number,
    name: string,
    userId: number,
    updatedAt: Date
    createdAt: Date
}

export type DirectoryCreationAttributes = OptionalNull<
    DirectoryAttributes,
    'id' | 'createdAt' | 'updatedAt'>;

export interface DirectoryInstance extends Model<
    DirectoryAttributes,
    DirectoryCreationAttributes
>, DirectoryAttributes {}
