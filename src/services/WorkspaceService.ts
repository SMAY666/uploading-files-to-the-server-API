import {FileAttributes, FileCreationAttributes, FileUpdateAttributes} from '../types/models/File';
import {workspaceRepository} from '../repositories';
import {CustomError} from '../utils/error';

export class WorkspaceService {
    public async createFile(data: FileCreationAttributes): Promise<FileAttributes> {
        const file = await workspaceRepository.createFile(data);
        return file.get();
    }

    public async updateFile(fileId: number, data: FileUpdateAttributes): Promise<FileAttributes> {
        const file = await workspaceRepository.updateFile(fileId, data);
        if (!file) {
            throw CustomError('file not found', 404);
        }
        return file.get();
    }

    public async deleteFile(fileId: number): Promise<FileAttributes> {
        const file = await workspaceRepository.deleteFile(fileId);
        if (!file) {
            throw CustomError('file not found', 404);
        }
        return file.get();
    }

    public async getFileById(fileId: number): Promise<FileAttributes> {
        const file = await workspaceRepository.getFileById(fileId);
        if (!file) {
            throw CustomError('file not found', 404);
        }
        return file.get();
    }

    public async getAllFiles(): Promise<FileAttributes[]> {
        const files = await workspaceRepository.getAllFiles();
        return files.map((file) => file.get());
    }
}
