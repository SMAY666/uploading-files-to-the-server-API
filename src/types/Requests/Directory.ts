import {DirectoryAttributes, DirectoryCreationAttributes} from '../models/Directory';

export type CreateDirectoryRequest = {
    Body: DirectoryCreationAttributes
    Replay: DirectoryCreationAttributes
}

export type GetDirectoryById = {
    Params: {
        directoryId: number
    }
    Replay: DirectoryAttributes
}

export type GetDirectoryByName = {
    Querystring: {
        name: string
    }
    Replay: DirectoryAttributes
}
