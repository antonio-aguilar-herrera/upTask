const Sequelize = require('sequelize');
const db = new Sequelize('uptask', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
    // operatorsAliases: false,
    define: {
        timestamps: false,
    }
});

module.exports = db;