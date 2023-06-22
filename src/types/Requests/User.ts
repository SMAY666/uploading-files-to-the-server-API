import {UserCreationAttributes} from '../models/User';


export type CreateUserRequest = {
    Body: {
        userData: UserCreationAttributes,
        confirmPassword: string
    }
    Reply: UserCreationAttributes
}

export type GetUserByIdRequest = {
    Params: {
       userId: number
    }
}
