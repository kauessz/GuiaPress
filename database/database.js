const sequelize = require('sequelize');

const connection = new sequelize('guiapress','root','190907',{
    host: 'localhost',
    dialect: 'mysql'
});

//Exporto a variavel connection para usa-la em outros arquivos
module.exports = connection;