const Cashier = require('../models/Cashier');

module.exports = class CashierController{

    static async add(req, res){

        const name = req.body.name;

        await Cashier.create({name});

        res.status(200).json({message: 'Caixa criado'});
    }

};