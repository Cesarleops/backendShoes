import {DataTypes} from 'sequelize'
import { db } from '../db'


const User = db.define('User', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default User