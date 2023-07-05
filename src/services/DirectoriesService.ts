import {DirectoryAttributes, DirectoryCreationAttributes, DirectoryEditAttributes} from '../types/models/Directory';
import {directoryRepository} from '../repositories';
import {CustomError} from '../utils/error';

class DirectoriesService {
    public async create(data: DirectoryCreationAttributes): Promise<DirectoryAttributes> {

        const sameDirectory = await directoryRepository.getByName(data.name, data.directoryId, data.userId);

        if (sameDirectory) {
            throw CustomError('Directory already exist', 409);
        }

        const directory = await directoryRepository.create(data);
        return directory.get();
    }

    public async getById(id: number): Promise<DirectoryAttributes> {
        const directory = await directoryRepository.getById(id);
        if (!directory) {
            throw CustomError('Directory not found', 404);
        }
        return directory.get();
    }
    
    public async getAll(userId: number, limit: number, offset: number): Promise<DirectoryAttributes[]> {
        const directories = await directoryRepository.getAll(userId, limit, offset);
        return directories.map((directory) => directory.get());
    }

    public async edit(id: number, data: DirectoryEditAttributes): Promise<DirectoryAttributes | undefined> {
        if (data.directoryId && await this.isMoveToChild(id, data.directoryId)) {
            throw CustomError('Cannot be moved to a child directory', 409);
        }

        const directory = await directoryRepository.edit(id, data);

        if (!directory) {
            throw CustomError('Directory not found', 404);
        }

        return directory.get();
    }

    public async delete(id: number): Promise<DirectoryAttributes> {
        const deletedDirectory = await directoryRepository.delete(id);
        if (!deletedDirectory) {
            throw CustomError('Directory not found', 404);
        }

        return deletedDirectory.get();
    }

    private async isMoveToChild(parentId: number, directoryId: number): Promise<boolean> {
        const children = await directoryRepository.findChildren(parentId);
        for (const child of children) {
            if (directoryId === child.id) {
                return true;
            }
        }
        return false;
    }
}

export const directoryService = new DirectoriesService();
