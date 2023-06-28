import {DirectoryCreationAttributes, DirectoryInstance} from '../types/models/Directory';
import {DirectoryModal} from '../models';

class DirectoriesRepository {
    public async create(data: DirectoryCreationAttributes): Promise<DirectoryInstance> {
        return await DirectoryModal.create(data);
    }

    public async getById(directoryId: number): Promise<DirectoryInstance | null> {
        return await DirectoryModal.findByPk(directoryId, {include: ['selfDirectories', 'files']});
    }

    public async getByName(
        name: string,
        directoryId: number | undefined | null,
        userId: number,
    ): Promise<DirectoryInstance | null> {
        return await DirectoryModal.findOne({
            where: {
                name: name,
                directoryId: directoryId ?? null,
                userId: userId,
            },
        });
    }
}

export const directoryRepository = new DirectoriesRepository();
