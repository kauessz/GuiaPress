//relaciono o express
const express = require('express');
const app = express();
//relaciono o body parser
const bodyParser = require('body-parser');
//carrego a conexão com o banco de dados
const connection = require('./database/database');
//carrego o controller
const categoriesController = require('./categories/CategoriesController');
//carrego o articles controller
const articlesController = require('./articles/ArticlesController');
//importo os models
const article = require('./articles/Article');
const category = require('./categories/Category');


//view engine
app.set('view engine','ejs');

//static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso');
    }).catch((error) => {
        console.log(error);
    })

app.use('/',categoriesController);

app.use('/',articlesController);

app.get('/',(req,res) => {
    res.render('index');
})

app.listen(8080,() => {
    console.log('O servidor esta rodando!');
})
