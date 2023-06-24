import {DirectoryAttributes, DirectoryCreationAttributes} from '../types/models/Directory';
import {directoryRepository} from '../repositories';
import {CustomError} from '../utils/error';

class DirectoriesService {
    public async create(data: DirectoryCreationAttributes): Promise<DirectoryAttributes> {
        const directory = await directoryRepository.create(data);
        return directory.get();
    }

    public async getByName(name: string, userId: number): Promise<DirectoryAttributes | null> {
        const directory = await directoryRepository.getByName(name, userId);

        if (directory) {
            throw CustomError('Directory already exist', 409);
        }
        return null;
    }
}

export const directoryService = new DirectoriesService();
