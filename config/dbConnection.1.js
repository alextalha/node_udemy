var mysql = require('mysql');    

var connMySQL = function(){
    
    console.log('Conexao com o banco de dados foi estabelecida');
    
        return  mysql.createConnection({
            host: 'localhost',
            user: '*************',
            password: '**********',
            database: 'udemy'
        });
    
}
    module.exports = function(){
    console.log('o autoload carregou  modulo de conexão com o banco de dados ');
    
    return connMySQL;
    
}