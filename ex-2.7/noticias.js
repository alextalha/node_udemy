
/*INICIO DO ENTENDIMENTO DE ROTAS*/

var http = require('http');
var server = http.createServer(function(req,res){
var categoria = req.url;

    res.end('<html><body><h2> Url :' + categoria +'</h2></body></html>');
});


server.listen(8082,function(){
    console.log('Rodando...');
    
});




