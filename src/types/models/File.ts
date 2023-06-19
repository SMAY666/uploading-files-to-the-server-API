import {OptionalNull} from '../../utils/types';
import {Model} from 'sequelize';

export type FileAttributes = {
    id: number
    originalName: string,
    name: string,
    updatedAt: Date
    createdAt: Date
}

export type FileCreationAttributes = OptionalNull<FileAttributes, 'id' | 'createdAt' | 'updatedAt'>
export type FileUpdateAttributes = Partial<FileCreationAttributes>
export type FileGetAttributes = Pick<FileAttributes, 'id'>

export interface FileInstance extends Model<FileAttributes, FileCreationAttributes>, FileAttributes {}
