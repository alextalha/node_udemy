var app = require('./config/server');

//var formularioNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
//var rotaHome = require('./app/routes/index')(app);
//var noticias = require('./app/routes/noticias')(app);

app.listen(8081,function(){
    console.log('Servidor rodando com express');
});