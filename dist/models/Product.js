"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Product = db_1.db.define('Product', {
    productName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    sizes: {
        type: sequelize_1.DataTypes.ARRAY,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    paid: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
});
//# sourceMappingURL=Product.js.map