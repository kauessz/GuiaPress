const sequelize = require('sequelize');
const connection = require('../database/database');
const category = require('../categories/Category');

const article = connection.define('articles',{
    title:{
        type: sequelize.STRING,
        allownull: false
    },slug:{
        type: sequelize.STRING,
        allownull: false
    },body:{
        type: sequelize.TEXT,
        allownull: false
    }
})

category.hasMany(article);//Uma categoria tem muitos artigos
article.belongsTo(category);//um atigo pertence a uma categoria

module.exports = article;