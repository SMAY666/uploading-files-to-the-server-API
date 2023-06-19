import {FileAttributes, FileCreationAttributes, FileUpdateAttributes} from '../models/File';

export type CreateFileRequest = {
    Body: FileCreationAttributes
    Replay: FileCreationAttributes
}

export type UpdateFileRequest = {
    Params: {
        fileId: number
    }
    Body: FileUpdateAttributes
    Replay: FileAttributes
}

export type DeleteFileRequest = {
    Params: {
        fileId: number
    }
    Replay: FileAttributes
}

export type GetFileByIdRequest = {
    Params: {
        fileId: number
    }
    Reply: FileAttributes
}

export type GetAllFilesRequest = {
    Reply: FileAttributes[]
}
