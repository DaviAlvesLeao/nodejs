// const db = require('../../config/db');

module.exports = function (app) {
    app.get('/noticias', function (req, res) {


        const connection = app.config.db();

        connection.query("SELECT * FROM noticias;", function (error, result) {

             res.render('noticias/noticias', {noticias: result});
             //res.send(result);
          });


    });


};