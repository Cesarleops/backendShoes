
require('dotenv').config();
const { Sequelize } = require('sequelize');

const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,
    DB_PORT
  } = process.env;
  
export const db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false, 
    native: false,
  })


