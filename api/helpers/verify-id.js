const Client = require('../models/Client');
const Transaction = require('../models/Transaction');

const verifyClientId = async (req, res, next)=>{
    const id = req.params.id;

    let client;

    try {
        client = await Client.findOne({where: {id}});
    } catch (error) {
        res.status(400).json({message: error});
        return;
    }

    if(!client){
        res.status(400).json({message: 'ID inválido'});
        return;
    } else{
        next()
    }

};

const verifyTransactionId = async (req, res, next)=>{
    const id = req.params.id;

    let transaction;

    try {
        transaction = await Transaction.findOne({where: {id}});
    } catch (error) {
        res.status(400).json({message: error});
        return;
    }

    if(!transaction){
        res.status(400).json({message: 'ID inválido'});
        return;
    } else{
        next()
    }

};

module.exports = {verifyClientId, verifyTransactionId};