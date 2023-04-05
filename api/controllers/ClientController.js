const Client = require('../models/Client');
const Transaction = require('../models/Transaction');
const Cashier = require('../models/Cashier');
const Operation = require('../models/Operation');
const { createAllUsersObject } = require('../helpers/createAllUsersObject');

module.exports = class ClientController{

    static async add(req, res){
        const {name} = req.body;

        if(!name){
            res.status(400).json({message: 'É obrigatório enviar um nome para o cliente.'})
            return
        }

        const amount = 0;

        try {
            await Client.create({name, amount})
        } catch (error) {
            res.status(400).json({message: error})
            return
        }

        res.status(200).json({message: `Cliente ${name} adicionado ao sistema.`})
    }

    static async getAllClients(req, res){
        

        try {
            const clients = await Client.findAll({attributes:['id', 'name', 'amount', 'updatedAt'], raw: true});

            const data = await createAllUsersObject(clients);

            res.status(200).json({clients: data})

            return

        } catch (error) {
            res.status(400).json({message: 'erroooo'})
            return
        }

    }

    static async getClientById(req, res){

        const id = req.params.id;

        let client;

        try {
            client = await Client.findOne({where:{id: id}, attributes:['id', 'name', 'amount'], include: [{
                model: Transaction,
                required: false,
                attributes: ['id', 'description', 'value', 'createdAt', 'CashierId', 'prevAmount', 'partialBallance'],
                include: [{model: Operation, attributes: ['name']}, {model: Cashier, attributes: ['name']}],
            }]})

            if(!client){
                res.status(400).json({message: 'Cliente não encontrado.'})
                return
            }

        } catch (error) {
            res.status(400).json({message: error})
            return
        }
        
        res.status(200).json({client: client});

    }

    static async deleteClient(req, res){
        const id = req.params.id;

        try {
            await Client.destroy({where: {id: id}})
            res.status(200).json({message: 'Usuário excluido do sistema.'})
        } catch (error) {
            res.status(400).json({message: error})
            return
        }
    }

    static async updateUser(req, res){
        const id = req.params.id;
        const {name} = req.body;

        try {
            await Client.update({name: name}, {where: {id: id}});
            res.status(200).json({message: 'Usuário atualizado.'});
        } catch (error) {
            res.status(400).json({message: error})
            return
        }
        
    }

};