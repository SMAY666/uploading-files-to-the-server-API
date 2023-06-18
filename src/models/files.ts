import {DataTypes} from 'sequelize';
import {sequelize} from '../DataBase';
import {FileInstance} from '../types/models/File';

export const FileModel = sequelize.define<FileInstance>('files', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    path: {
        type: DataTypes.STRING,
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
