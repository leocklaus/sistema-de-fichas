const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const Cashier = require('./Cashier');
const Client = require('./Client');
const Operation = require('./Operation');

const Transaction = db.define('Transaction', {
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        required: false,
    },
    value: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    prevAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    partialBallance: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
});

Client.hasMany(Transaction);
Transaction.belongsTo(Client);
Operation.hasMany(Transaction);
Transaction.belongsTo(Operation);
Cashier.hasMany(Transaction);
Transaction.belongsTo(Cashier);

module.exports = Transaction;