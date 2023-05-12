const { Sequelize } = require('sequelize');
require('dotenv').config()

const db = new Sequelize(process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
});

const copy_db = new Sequelize('copy-test-DA',
    'root',
    'secret', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
});

module.exports = {
    db,
    copy_db
};

