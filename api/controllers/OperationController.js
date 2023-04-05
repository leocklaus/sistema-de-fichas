const Operation = require('../models/Operation');

module.exports = class OperationController{

    static async add(req, res){
        const name = req.body.name;

        await Operation.create({name});
        res.status(200).json({message: 'Operação criada com sucesso.'})
    }

}