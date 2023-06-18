import {FileCreationAttributes, FileUpdateAttributes} from '../models/File';

export type CreateFileRequest = {
    Body: FileCreationAttributes
    Replay: FileCreationAttributes
}

export type UpdateFileRequest = {
    params: {
        FileId: number
    }
    Body: FileUpdateAttributes
}
