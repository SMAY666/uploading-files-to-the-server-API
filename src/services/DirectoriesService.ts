import {DirectoryAttributes, DirectoryCreationAttributes} from '../types/models/Directory';
import {directoryRepository} from '../repositories';
import {CustomError} from '../utils/error';

class DirectoriesService {
    public async create(data: DirectoryCreationAttributes): Promise<DirectoryAttributes> {

        const sameDirectory = await directoryRepository.getByName(data.name, data.userId);

        if (sameDirectory) {
            throw CustomError('Directory already exist', 409);
        }

        const directory = await directoryRepository.create(data);
        return directory.get();
    }
}

export const directoryService = new DirectoriesService();
