import {OptionalNull} from '../../utils/types';
import {Model} from 'sequelize';

export type DirectoryAttributes = {
    id: number,
    name: string,
    directoryId: number | null
    userId: number,
    updatedAt: Date
    createdAt: Date
}

export type DirectoryCreationAttributes = OptionalNull<
    DirectoryAttributes,
    'id' | 'createdAt' | 'updatedAt'>;

export type DirectoryEditAttributes = Partial<Pick<DirectoryAttributes, 'name' | 'directoryId'>>

export interface DirectoryInstance extends Model<
    DirectoryAttributes,
    DirectoryCreationAttributes
>, DirectoryAttributes {}
