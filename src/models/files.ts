import {DataTypes} from 'sequelize'
import {sequelize} from '../DataBase';


export const File = sequelize.define('Files', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
});
File.sync()
    .then()
    .catch(console.log)