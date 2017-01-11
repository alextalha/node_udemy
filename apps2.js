var http = require('http');
var express = require('express');
var app = express();
var msg  = require('./teste_modulo')();

app.get('/teste', function(req, res) {
  res.send('hello world');
});


app.listen(8081,function(){
    console.log(msg);
    console.log('Servidor rodando na porta 8081');
});



