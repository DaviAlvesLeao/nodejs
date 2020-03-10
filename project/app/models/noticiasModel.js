
module.exports = function () {

    this.getNoticias = function(connection, callback){
        connection.query("SELECT * FROM noticias;", callback);
    };

    this.getNoticia = function (connection, callback) {
        connection.query("SELECT * FROM  noticias WHERE id_noticia = 1",
            callback);
    };

    this.saveNoticia = function (noticia, connection, callback) {

        connection.query("INSERT INTO noticias (titulo, conteudo) VALUES ($1, $2);",
            [noticia.Titulo, noticia.Noticia], callback)
    };

    return this;

};

