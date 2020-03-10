const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extened: true}));

// Versão mais recente não funciona
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('config/db.js')
    .then('app/models')
    .into(app);

module.exports = app;

// var express = require('express');
// var consign = require('consign');
// var bodyParser = require('body-parser');
// var expressValidator = require('express-validator');
//
// var app = express();
//
// app.set('view engine', 'ejs');
// app.set('views', './app/views');
//
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(expressValidator());
//
// consign()
//     .include('app/routes')
//     .then('config/dbConnection.js')
//     .then('app/models')
//     .into(app);
//
// module.exports = app;