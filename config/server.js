var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views','./views');

/*inclusao do diretorio routes dentro do objeto do express  */
consign()
    .include('./app/routes')
    .then('config/dbConnection.js')
    .into(app);
    
module.exports = app;

