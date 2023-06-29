import {ReadStream} from 'typeorm/browser/platform/BrowserPlatformTools';
import fs from 'fs';
import path from 'path';

import {FileAttributes, FileCreationAttributes, FileUpdateAttributes} from '../types/models/File';
import {directoryRepository, workspaceRepository} from '../repositories';
import {CustomError} from '../utils/error';
import {FILES_DIR} from '../utils/fileTools';


class WorkspaceService {
    public async createFile(data: FileCreationAttributes): Promise<FileAttributes> {
        if (data.directoryId) {
            const directory = await directoryRepository.getById(data.directoryId);

            if (!directory) {
                throw CustomError('Directory not found', 404);
            }
        }
        const file = await workspaceRepository.createFile(data);
        return file.get();
    }

    public async updateFile(fileId: number, data: FileUpdateAttributes): Promise<FileAttributes> {
        if (data.directoryId && !await directoryRepository.getById(data.directoryId)) {
            throw CustomError('Directory not found', 404);
        }

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

    public async getAllFiles(limit: number, offset: number): Promise<FileAttributes[]> {
        const files = await workspaceRepository.getAllFiles(limit, offset);
        return files.map((file) => file.get());
    }

    public async downloadFile(fileId: number): Promise<ReadStream> {
        const file = await workspaceRepository.getFileById(fileId);
        if (!file) {
            throw CustomError('file not found', 404);
        }
        return fs.createReadStream(path.join(FILES_DIR, file.name));
    }
}

export const workspaceService = new WorkspaceService();
