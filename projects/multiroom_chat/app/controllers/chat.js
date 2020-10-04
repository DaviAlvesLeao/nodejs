module.exports.InitChat = function(application, req, res){
    
    var InForm = req.body;
    console.log(InForm);


    req.assert('apelido', 'Nome ou Apelido são obrigatorios').notEmpty();


    var erros = req.validationErrors();

    if(erros){
        res.send('Existem erros no formulario');
        return;
    }

    res.render('chat');
}