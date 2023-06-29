import {
    DirectoryAttributes,
    DirectoryCreationAttributes,
    DirectoryEditAttributes,
} from '../models/Directory';


export type CreateDirectoryRequest = {
    Body: Omit<DirectoryCreationAttributes, 'userId'>
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

export type EditDirectory = {
    Params: {
        directoryId: number
    }
    Body: DirectoryEditAttributes
    Reply: DirectoryAttributes
}
