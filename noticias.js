
var http = require('http');

var server = http.createServer(function(req,res){
    res.end('<html><body><h2> Portal de Noticias</h2></body></html>');
});

server.listen(8082,function(){
    console.log('Rodando...');

});




