module.exports = function (app) {
    app.get('/form_add_noticia', function (req, res) {
        res.render('admin/form_add_noticia');
    });

     app.post('/noticias/salvar', function (req, res) {
         let noticias = req.body;

        //conn
        const connection = app.config.db();
        //model
        const noticiasModel = app.app.models.noticiasModel;

        //salvarNoticia
        noticiasModel.saveNoticia(noticias, connection, function (error, result) {

            res.redirect('/noticias');
            // res.render('noticias/noticias', {noticias: result});
            // res.send(result);
        });
    });


};