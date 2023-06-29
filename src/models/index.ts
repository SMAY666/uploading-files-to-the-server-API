import {DirectoryModal} from './directories';
import {FileModel} from './files';
import {UserModel} from './users';


DirectoryModal.hasMany(FileModel, {foreignKey: {name: 'directoryId', allowNull: true}, as: 'files'});
FileModel.belongsTo(DirectoryModal, {foreignKey: 'directoryId', as: 'directory'});

DirectoryModal.hasMany(DirectoryModal, {foreignKey: {name: 'directoryId', allowNull: true}, as: 'childDirectories'});
DirectoryModal.belongsTo(DirectoryModal, {foreignKey: 'directoryId', as: 'directory'});

UserModel.hasMany(FileModel, {foreignKey: 'userId', as: 'files'});

UserModel.hasMany(DirectoryModal, {foreignKey: 'userId', as: 'userDirectories'});


export {DirectoryModal, FileModel, UserModel};

