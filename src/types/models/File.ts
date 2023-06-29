import {OptionalNull} from '../../utils/types';
import {Model} from 'sequelize';

export type FileAttributes = {
    id: number
    originalName: string
    name: string
    directoryId: number | null
    userId: number
    updatedAt: Date
    createdAt: Date
}

export type FileCreationAttributes = OptionalNull<FileAttributes, 'id' | 'createdAt' | 'updatedAt'>
export type FileUpdateAttributes = Partial<Pick<FileAttributes, 'originalName' | 'directoryId'>>

export interface FileInstance extends Model<FileAttributes, FileCreationAttributes>, FileAttributes {}
