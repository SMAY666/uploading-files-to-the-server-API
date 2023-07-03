import {DirectoryCreationAttributes, DirectoryEditAttributes, DirectoryInstance} from '../types/models/Directory';
import {DirectoryModal} from '../models';

class DirectoriesRepository {
    public async create(data: DirectoryCreationAttributes): Promise<DirectoryInstance> {
        return await DirectoryModal.create(data);
    }

    public async getById(directoryId: number): Promise<DirectoryInstance | null> {
        return await DirectoryModal.findByPk(directoryId, {include: ['childDirectories', 'files']});
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

    public async edit(id: number, data: DirectoryEditAttributes): Promise<DirectoryInstance | null> {
        const directory = await directoryRepository.getById(id);

        if (directory) {
            await directory.update(data);
        }
        return directory;
    }

    public async delete(id: number): Promise<DirectoryInstance | null> {
        const directory = await DirectoryModal.findByPk(id);
        if (directory) {
            await directory.destroy();
        }
        return directory;
    }

    public async findChildren(parentId: number): Promise<DirectoryInstance[]> {
        return await DirectoryModal.findAll({
            where: {
                directoryId: parentId,
            },
            attributes: ['id'],
        });
    }
}

export const directoryRepository = new DirectoriesRepository();
