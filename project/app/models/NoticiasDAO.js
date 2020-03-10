function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias', callback);
};

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = 2', callback);
};

NoticiasDAO.prototype.saveNoticia = function(noticia, callback){

    console.log(noticia);
    this._connection.query('INSERT INTO noticias (Titulo, conteudo, resumo, autor, data_noticia) ' +
        'VALUES ($1, $2, $3, $4, $5)', [noticia.Titulo, noticia.Noticia, noticia.Resumo, noticia.Autor,
        noticia.Data], callback);
};

module.exports = function(){
    return NoticiasDAO;
};