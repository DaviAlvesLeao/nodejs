/** Importando os modulos para o servidor */

var express = require('express');
var expressValidator = require('express-validator');
var consign = require('consign');
var bodyParser = require('body-parser');
var ejs = require('ejs');


/** Iniciando o app */

var app = express();

/**Configurações do app */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/** Configurar middleware express.static */
app.use(express.static('./app/public'));

/** Configurar middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/*configurar o middleware express-validator */
app.use(expressValidator());

/** Efetua o autoload das rotas, models, controllers para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);


/** */
module.exports = app;