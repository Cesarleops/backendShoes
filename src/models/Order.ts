import {DataTypes }from 'sequelize'
import {db} from '../db'

const Order = db.define('Order', {
    totalPrice:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    addresses: {
        type: DataTypes.ARRAY,
        allowNull: true
    },
    products:{
        type: DataTypes.ARRAY,
        allowNull: false
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false
    }
})