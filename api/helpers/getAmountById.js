const Client = require('../models/Client');

const getAmountByID = async(id) => {

        const client = await Client.findOne({where: {id: id}, raw: true})

        prevAmount = client.amount;

        return prevAmount;

}

module.exports = getAmountByID;