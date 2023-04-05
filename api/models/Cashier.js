const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const Transaction = require('./Transaction');

const Cashier = db.define('Cashier', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    }
});

module.exports = Cashier;