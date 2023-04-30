"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Order = db_1.db.define('Order', {
    totalPrice: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    addresses: {
        type: sequelize_1.DataTypes.ARRAY,
        allowNull: true
    },
    products: {
        type: sequelize_1.DataTypes.ARRAY,
        allowNull: false
    },
    paymentMethod: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
//# sourceMappingURL=Order.js.map