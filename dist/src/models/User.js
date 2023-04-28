"use strict";
const { DataTypes } = require('sequelize');
const { conn } = require('../db');
const User = conn.db.define('User', {
    userName: {},
    email: {},
    address: {}
});
//# sourceMappingURL=User.js.map