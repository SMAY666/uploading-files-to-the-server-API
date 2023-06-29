import {sequelize} from '../DataBase';
import {UserInstance} from '../types/models/User';
import {DataTypes} from 'sequelize';

export const UserModel = sequelize.define<UserInstance>('users', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'user_model_email',
    },
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: true,
});
