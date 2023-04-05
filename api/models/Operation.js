const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const Transaction = require('./Transaction');

const Operation = db.define('Operation', {
    name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false
    }
})

module.exports = Operation;