
module.exports = function(app){

    app.get('/noticia',function(req,res){
        
                    /*valor listado tipo namespace */
    var connection = app.config.dbConnection()
    
    connection.query('SELECT * FROM noticias where id_noticia = 2',function(error,result){
            res.render('noticias/noticia',{ noticia : result } );
        });
    });   
    
}

