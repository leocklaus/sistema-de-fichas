const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const Client = db.define('Client', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        required: true,
    }
});

module.exports = Client;