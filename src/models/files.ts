import {DataTypes} from 'sequelize';
import {sequelize} from '../DataBase';
import {FileInstance} from '../types/models/File';

export const FileModel = sequelize.define<FileInstance>('files', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    originalName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    directoryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: true,
});
