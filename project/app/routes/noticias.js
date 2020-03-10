// const db = require('../../config/db');

module.exports = function (app) {
    app.get('/noticias', function (req, res) {


        const connection = app.config.db();
        const noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function (error, result) {

            res.render('noticias/noticias', {noticias: result});
            //res.send(result);
        });
    });

};