import {DirectoryCreationAttributes, DirectoryInstance} from '../types/models/Directory';
import {DirectoryModal} from '../models';

class DirectoriesRepository {
    public async create(data: DirectoryCreationAttributes): Promise<DirectoryInstance> {
        return await DirectoryModal.create(data);
    }

    public async getById(directoryId: number): Promise<DirectoryInstance | null> {
        return await DirectoryModal.findByPk(directoryId);
    }

    public async getByName(name: string, userId: number): Promise<DirectoryInstance | null> {
        return await DirectoryModal.findOne({
            where: {
                name: name,
                userId: userId,
            },
        });
    }
}

export const directoryRepository = new DirectoriesRepository();
