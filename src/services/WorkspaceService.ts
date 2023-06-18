import {FileAttributes, FileCreationAttributes} from '../types/models/File';
import {workspaceRepository} from '../repositories';

export class WorkspaceService {
    public async createFile(data: FileCreationAttributes): Promise<FileAttributes> {
        const file = await workspaceRepository.createFile(data);
        return file.get();
    }
}
