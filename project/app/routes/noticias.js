// const db = require('../../config/db');

module.exports = function (app) {
    app.get('/noticias', function (req, res) {


        const connection = app.config.db();
        const noticiasModel = new app.app.models.NoticiasDAO(connection);

         noticiasModel.getNoticias(function (error, result) {

            res.render('noticias/noticias', {noticias: result});
            //res.send(result);
        });
    });

};


// module.exports = function(application){
//
//     application.get('/noticias', function(req,res){
//
//         var connection = application.config.dbConnection();
//         var noticiasModel = new application.app.models.NoticiasDAO(connection);
//
//         noticiasModel.getNoticias(function(error, result){
//             res.render('noticias/noticias', { noticias : result });
//         });
//
//     });
// }