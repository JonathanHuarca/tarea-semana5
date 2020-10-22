var fs=require('fs');
var querystring = require('querystring');

var mime = {

	'js' : 'text/javascript',
	'html' : 'text/html',
	'css' : 'text/css',
	'ico'  : 'image/x-icon',
	'jpg' : 'image/jpg',
	'gif' : 'image/gif',
	'png' : 'image/png'
  };


function encaminar (req,res,camino) {
	console.log(camino);
	switch (camino) {
		case 'templates/recuperardatos': {
			recuperar(req,res);
			break;
		}	
	    default : {  
			fs.exists(camino,function(existe){
				if (existe) {
					fs.readFile(camino,function(error,contenido){
						if (error) {
							res.writeHead(500, {'Content-Type': 'text/plain'});
							res.write('Error interno');
							res.end();					
						} else {
							var vec = camino.split('.');
							var extension=vec[vec.length-1];
							var mimearchivo=mime[extension];
							res.writeHead(200, {'Content-Type': mimearchivo});
							res.write(contenido);
							res.end();
						}
					});
				} else {
					res.writeHead(404, {'Content-Type': 'text/html'});
					res.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');		
					res.end();
				}
			});	
		}
	}	
}


function recuperar(req,res) {
    var info = '';
    req.on('data', function(datosparciales){
         info += datosparciales;
    });
    req.on('end', function(){
        var formulario = querystring.parse(info);
		res.writeHead(200, {'Content-Type': 'text/html'});
		var pagina='<!doctype html><html><head></head><body>'+
		           'Nombre de usuario:'+formulario['nombre']+'<br>'+
				   'Clave:'+formulario['clave']+'<br>'+
				   '<a href="contactos">Retornar</a>'+
		           '</body></html>';
		res.end(pagina);
    });	
}

console.log('Servidor web iniciado');


module.exports = {
    encaminar,
    recuperar
  };