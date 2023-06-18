import {FileCreationAttributes, FileInstance} from '../types/models/File';
import {FileModel} from '../models';

export class WorkspaceRepository {
    // -----[FILES]----

    public async createFile(data: FileCreationAttributes): Promise<FileInstance> {
        return await FileModel.create(data);
    }
}
