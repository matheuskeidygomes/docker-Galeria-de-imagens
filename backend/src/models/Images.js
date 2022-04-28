import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const Image = database.define('Image', {

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
    },
    image: {
        type: Sequelize.STRING,
    },
    imageTitle:{
        type: Sequelize.STRING,
    },
    path: {
        type: Sequelize.STRING,
    }
},
{
        tableName: 'images',
        timestamps: false
});




