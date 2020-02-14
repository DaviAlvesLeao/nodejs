

const db = function () {

    const Pool = require('pg').Pool;
    console.log("Conexao foi estabelecida com o banco de dados");

    return new Pool({
        host: 'localhost',
        user: 'postgres',
        password: 'root',
        database: 'portal_noticias',
        port: 5432
    });
};

module.exports = function () {
    console.log('O autoload carregou');
    return db;
};

