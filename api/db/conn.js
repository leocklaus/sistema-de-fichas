const {Sequelize} = require('sequelize');
const env = require('../env');

const sequelize = new Sequelize('fichas', 'root', '99825162', {
    host: 'localhost',
    dialect: 'mysql',
});

try{
    sequelize.authenticate()
    console.log('Conectado ao DB')
} catch(err) {
    console.log(err)
}

module.exports = sequelize;