const sequelize = require('sequelize');
const connection = require('../database/database');

const category = connection.define('categories',{
    title:{
        type: sequelize.STRING,
        allownull: false
    },slug:{
        type: sequelize.STRING,
        allownull: false
    }
})

module.exports = category;