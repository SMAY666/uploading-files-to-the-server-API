import {FileCreationAttributes, FileInstance, FileUpdateAttributes} from '../types/models/File';
import {FileModel} from '../models';

export class WorkspaceRepository {
    // -----[FILES]----

    public async createFile(data: FileCreationAttributes): Promise<FileInstance> {
        return await FileModel.create(data);
    }

    public async deleteFile(fileId: number): Promise<FileInstance | null> {

        const file = await this.getFileById(fileId);

        if (file) {
            await file.destroy();
        }
        return file;
    }

    public async updateFile(fileId: number, data: FileUpdateAttributes): Promise<FileInstance | null> {
        const file = await this.getFileById(fileId);

        if (file) {
            await file.update(data);
        }
        return file;
    }

    public async getFileById(fileId: number): Promise<FileInstance | null> {
        return await FileModel.findByPk(fileId);
    }

    public async getAllFiles(): Promise<FileInstance[]> {
        return await FileModel.findAll();
    }
}
