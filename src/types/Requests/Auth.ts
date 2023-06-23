import {SignUpData} from '../services/userService';
import {UserCreationAttributes} from '../models/User';

export type SignInRequest = {
    Body: {
        email: string
        password: string
    }
    Reply: string
}

export type SignUpRequest = {
    Body: SignUpData
    Reply: Omit<UserCreationAttributes, 'passwordHash'>
}
