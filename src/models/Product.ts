import {DataTypes }from 'sequelize'
import {db} from '../db'
const Product = db.define('Product', {
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },  
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sizes: {
        type: DataTypes.ARRAY,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})