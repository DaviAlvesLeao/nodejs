const db = require('../../config/db');

module.exports = function (app) {
    app.get('/noticias', function (req, res) {

        const connection = db();

        connection.query("SELECT * FROM npticias", function (error, result) {

            res.render('noticias/noticias', {noticias: result});
        });

        //
    });
};