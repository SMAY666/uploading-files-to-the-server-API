import {UserCreationAttributes} from '../models/User';
import {SignUpData} from '../services/userService';


export type AuthUserRequest = {
    Body: {
        email: string
        password: string
    }
    Reply: string
}

export type CreateUserRequest = {
    Body: SignUpData
    Reply: UserCreationAttributes
}

export type GetUserByIdRequest = {
    Params: {
       userId: number
    }
}
