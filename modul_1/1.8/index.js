var http = require('http');

var server = http.createServer();

server.on('request', function(request, response){
	response.setHeader ("Content-Type", "text/html; charset=utf-8");
	
	if (request.method === 'GET' && request.url === '/hello') {
		response.write('<h1>Hejka!</h1');
		response.end();
	} else {
		response.statusCode = 404;
		response.write('<h1>Zła ścieżka</h1>');
		response.end();	
	}

});

server.listen(9000); //nasłuchiwanie na zdarzenia w trybie ciągłym; port, na ktorym ma nasluchiwac