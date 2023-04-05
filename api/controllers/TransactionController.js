const Transaction = require('../models/Transaction');
const Client = require('../models/Client');

module.exports = class TransactionController{

    static async add(req, res){
        const { description, 
                value,
                ClientId,
                OperationId,
                CashierId,
                prevAmount,
            } = req.body;

        if(!value){
            res.status(400).json({message: 'É obrigatório enviar um valor para a operação.'})
            return
        }

        if(!ClientId){
            res.status(400).json({message: 'É obrigatório enviar um ClientID.'})
            return
        }

        if(!OperationId){
            res.status(400).json({message: 'É obrigatório enviar um OperationID.'})
            return
        }

        if(!CashierId){
            res.status(400).json({message: 'É obrigatório enviar um CashierId.'})
            return
        }

        if(!prevAmount){
            res.status(400).json({message: 'É obrigatório enviar um valor prévio.'})
            return
        }

        const partialBallance = OperationId !== 1? Number(prevAmount) - Number(value): Number(prevAmount) + Number(value);

        const obj = {description, value, ClientId, OperationId, CashierId, prevAmount, partialBallance};

        try {
            await Transaction.create(obj);
            await Client.update({amount: partialBallance}, {where: {id: ClientId}});
        } catch (error) {
            res.status(400).json({message: error})
            return
        }

        res.status(200).json({message: `Operação adicionada ao sistema.`})
    }

    static async deleteOperation(req, res){
        const id = req.params.id;

        try {
            await Transaction.destroy({where: {id: id}})
            res.status(200).json({message: 'Transação excluida do sistema.'})
        } catch (error) {
            res.status(400).json({message: error})
            return
        }
    }

    static async updateOperation(req, res){
        const id = req.params.id;
        const { description, 
            value,
            ClientId,
            OperationId,
            CashierId,
        } = req.body;

        if(!value){
            res.status(400).json({message: 'É obrigatório enviar um valor para a operação.'})
            return
        }

        if(!ClientId){
            res.status(400).json({message: 'É obrigatório enviar um ClientID.'})
            return
        }

        if(!OperationId){
            res.status(400).json({message: 'É obrigatório enviar um OperationID.'})
            return
        }

        if(!CashierId){
            res.status(400).json({message: 'É obrigatório enviar um CashierId.'})
            return
        }

        const obj = {description, value, ClientId, OperationId, CashierId};

        try {
            await Transaction.update(obj, {where: {id: id}});
            res.status(200).json({message: 'Transação atualizada.'});
        } catch (error) {
            res.status(400).json({message: error})
            return
        }
        
    }


};