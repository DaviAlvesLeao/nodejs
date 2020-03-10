const express = require('express');
const app = express();
const consign = require('consign');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extened: true}));

consign()
    .include('app/routes')
    .then('config/db.js')
    .then('app/models')
    .into(app);

module.exports = app;

