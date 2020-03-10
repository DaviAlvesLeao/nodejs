module.exports = function(app){

    app.get('/noticia', function(req,res){

       const connection = app.config.db();
        const noticiasModel = new app.app.models.noticiasDAO(connection);

        noticiasModel.getNoticia(function(error, result){
            res.render('noticias/noticia', { noticia : result });
        });

    });
}