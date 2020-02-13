const app = require("./config/server");

const route_home = require("./app/routes/home");
route_home(app);

const route_form_add = require("./app/routes/form_add_noticia");
route_form_add(app);

const route_noticias = require("./app/routes/noticias");
route_noticias(app);


app.listen(3000, function () {
    console.log("Servidor rodando com Express");
});