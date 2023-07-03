import {DirectoryModal} from './directories';
import {FileModel} from './files';
import {UserModel} from './users';


DirectoryModal.hasMany(FileModel, {
    foreignKey: {
        name: 'directoryId',
        allowNull: true
    },
    as: 'files',
    onDelete: 'cascade'
});
FileModel.belongsTo(DirectoryModal, {
    foreignKey: 'directoryId',
    as: 'directory'
});

DirectoryModal.hasMany(DirectoryModal, {
    foreignKey: {
        name: 'directoryId',
        allowNull: true
    },
    as: 'childDirectories',
    onDelete: 'cascade'
});
DirectoryModal.belongsTo(DirectoryModal, {
    foreignKey: {
        name: 'directoryId',
        allowNull: true
    },
    as: 'directory'
});

UserModel.hasMany(FileModel, {
    foreignKey: 'userId',
    as: 'files',
    onDelete: 'cascade'
});

UserModel.hasMany(DirectoryModal, {
    foreignKey: 'userId',
    as: 'userDirectories',
    onDelete: 'cascade'
});


export {DirectoryModal, FileModel, UserModel};

