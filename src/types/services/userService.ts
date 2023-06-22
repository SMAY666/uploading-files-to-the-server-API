import {UserCreationAttributes} from '../models/User';

export type SignUpData = Omit<UserCreationAttributes, 'passwordHash'> & {
    password: string
    confirmPassword: string
}
